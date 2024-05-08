class Metronome { // создание нового класса
    constructor(tempo = 50) {
        this.allNotes = {};
        this.schet_for_led = 0,
            this.contain_btn_pulse = null,
            this.audioContext = null; // обозначение свойства для будущего audioContext
        this.notesInQueue = []; // заметки, которые были помещены в веб-аудио и могут быть или не быть воспроизведены еще {note, time}
        this.currentBeatInBar = 0; // текущее положение в такте
        this.beatsPerBar = 4; // размер такта
        this.tempo = tempo; // темп
        this.lookahead = 25; // Как часто вызывать функцию планирования (в миллисекундах)
        this.scheduleAheadTime = 0.1; // Насколько далеко вперед запланировать аудио (сек)
        this.nextNoteTime = 0.0; // когда нужно сделать следующую ноту
        this.isRunning = false; // запущен ли метроном
        this.intervalID = null;
        this.akcents = [];
        this.akcentBoolean = false;
        // Уникальный идентификатор intervalID, возвращаемый глобальным методом setInterval(), 
        // позволяет впоследствии удалить запущенный setInterval c помощью clearInterval()
    }
    searsh_all_elem() {
        this.contain_btn_pulse = document.querySelector('.contain_btn_pulse');
        this.allNotes['value_NO'] = null;
        this.allNotes['matrix_2'] = document.querySelectorAll('.matrix_2');
        this.allNotes['matrix_4'] = document.querySelectorAll('.matrix_4');
        this.allNotes['matrix_8'] = document.querySelectorAll('.matrix_8');
        this.allNotes['matrix_16'] = document.querySelectorAll('.matrix_16');
        this.allNotes['mtrxCircles'] = document.querySelectorAll('.mtrxCircle');
    }
    clear_all_elem() {
        for (let item of this.allNotes.mtrxCircles) {
            item.classList.remove('add_metronome_click_active');
        }
    }

    // метод в конструкторе, где this - класс Metronome
    nextNote() { // функция исполнения следующей ноты
        // Передвинуть текущую ноту и время на четвертную ноту 
        var secondsPerBeat = 60.0 / this.tempo; // для расчета длительности доли используется ТЕКУЩЕЕ значение темпа.
        this.nextNoteTime += secondsPerBeat; // Добавляем длину удара к времени последнего удара
        this.currentBeatInBar++; // Увеличиваем номер доли, переносим на ноль
        if (this.currentBeatInBar == this.beatsPerBar) { // если текущее положение доли равно размеру такта
            this.currentBeatInBar = 0; // переходим на ноль в начало
        }
        switch (this.contain_btn_pulse.dataset.value) {
            case 'value_NO':
                break;
            case 'value_2':
                this.led_beat(this.allNotes['matrix_2']);
                break;
            case 'value_4':
                this.led_beat(this.allNotes['matrix_4']);
                break;
            case 'value_8':
                this.led_beat(this.allNotes['matrix_8']);
                break;
            case 'value_16':
                this.led_beat(this.allNotes['matrix_16']);
                break;
        }
    }

    led_beat(level) {
        // на инпуте приходит NodeList с однотипными элементами matrix_2 или matrix_4
        // console.log(level);
        // console.log(level[this.schet_for_led]);

        // ЗАПУСК АУДИО ПЛЕЙБЭКА
        if (this.schet_for_led == 0) {//=================================================
            setTimeout(function () {//=================================================
                //play();//=================================================
            }, 55);  //======== delay для синхронного воспроизведения с аудио
        }//=================================================


        for (let item of level) { // удаление подсветки
            item.classList.remove('add_metronome_click_active');
        }
        
       akcents.ledOn(this.schet_for_led);
        
        // последовательное добавление элементам подсветки
        level[this.schet_for_led].classList.add('add_metronome_click_active');
        console.log(this.schet_for_led);
        // console.log(this.akcents[this.schet_for_led]);


        this.schet_for_led += 1;  // переключение доли (индекса)
        if (this.schet_for_led == level.length) {  //сброс счетчика если счет достиг длинны NodeList
            this.schet_for_led = 0;
        }
    }

    // метод в конструкторе, где this - класс Metronome
    scheduleNote(beatNumber, time) { // расписание нот
        // помещаем ноту в очередь, даже если её не играем.
        if (this.akcents[this.schet_for_led] == 1) {
            this.akcentBoolean = true;
        } else {
            this.akcentBoolean = false;
        }

        this.notesInQueue.push({ // заметки в очереди
            note: beatNumber,
            time: time
        });
        // console.log(this.notesInQueue);
        // создаем осциллятор
        const osc = this.audioContext.createOscillator(); // вызов метода создания Oscillator с присвоением в osc
        const envelope = this.audioContext.createGain();  // вызов метода создания Gain с присвоением в envelope (конверт)

        // osc.frequency.value = (beatNumber % this.beatsPerBar == 0) ? 1000 : 800; // высота звука метронома
        osc.frequency.value = this.akcentBoolean ? 1000 : 800; // высота звука метронома
        envelope.gain.value = 1; // громкость
        envelope.gain.exponentialRampToValueAtTime(1, time + 0.001); // плавность в конце воспроизведения
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02); // плавность в начале воспроизведения

        osc.connect(envelope); // соединениеосциллатора с гейном
        envelope.connect(this.audioContext.destination); // подключение гейна к аудио выходу

        osc.start(time); // запуск осцилатора
        osc.stop(time + 0.03); // остановка осцилатора
    }
    // метод в конструкторе, где this - класс Metronome
    scheduler() { // планировщик
        // console.log([this.nextNoteTime, this.audioContext.currentTime, this.scheduleAheadTime] );
        // пока есть ноты, которые нужно будет сыграть перед следующим интервалом, запланируйте их и переместите указатель.
        while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime) {
            this.scheduleNote(this.currentBeatInBar, this.nextNoteTime);
            this.nextNote();
        }
    }
    // метод в конструкторе, где this - класс Metronome
    start() {
        this.schet_for_led = 0;
        if (this.isRunning) return; // если метроном запущен выйти из функции
        if (this.audioContext == null) { // если аудиоконтект пустой сздать новый
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        this.isRunning = true; // сделать запись о запуске
        this.currentBeatInBar = 0; // с указанного положения в такте
        this.nextNoteTime = this.audioContext.currentTime + 0.05; // добавление к текущему времени ???????
        this.intervalID = setInterval(() => this.scheduler(), this.lookahead);
        // строка выше запуск метода sheduler у метронома с добавлением интервала lookahead = 25
    }
    // метод в конструкторе, где this - класс Metronome
    stop() {
        
        this.isRunning = false; // остановить метроном отметкой в запуске
        clearInterval(this.intervalID); // очистить значение интервала
    }
    // метод в конструкторе, где this - класс Metronome
    startStop() { // при вызове функции остановить или запустить воспроизведение
        if (this.isRunning) {
            this.stop();
        } else {
            this.start();
        }
    }

}
// =============================================================================================

let metronome = new Metronome(); // наследование от класса Метронома
metronome.searsh_all_elem();
let tempo = document.getElementById('tempo'); // привязка элемента для отображения темпа
tempo.textContent = metronome.tempo; // запись значения темпа

let playPauseIcon = document.getElementById('play-pause-icon'); // кнопка паузы

let playButton = document.getElementById('play-button'); // кнопка плей
playButton.addEventListener('click', function () { // событие на кнопке плей
    metronome.startStop(); // вызов метода у метронома
    metronome.clear_all_elem(); // очистка всех элементов

    // console.log(metronome.notesInQueue);

    if (metronome.isRunning) { // изменение класса у кнопки плей и пауза
        playPauseIcon.className = 'pause_metr';
    } else {
        playPauseIcon.className = 'play';

    }

});

// значение темпа
let tempoChangeButtons = document.getElementsByClassName('tempo-change');
for (let i = 0; i < tempoChangeButtons.length; i++) {
    tempoChangeButtons[i].addEventListener('click', function () {
        metronome.tempo += parseInt(this.dataset.change);
        tempo.textContent = metronome.tempo;
        // speed_tempo();
    });
};

// ВЫБОР ПУЛЬСА
metronome.contain_btn_pulse.addEventListener('change', function () {
    metronome.clear_all_elem();
    switch (this.dataset.value) {
        case 'value_NO':
            metronome.tempo = 50;
            tempo.textContent = metronome.tempo;
            break;
        case 'value_2':
            metronome.tempo = 25;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            metronome.schet_for_led = 0;
            metronome.beatsPerBar = metronome.allNotes.matrix_2.length;
            break;
        case 'value_4':
            metronome.tempo = 50;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            metronome.schet_for_led = 0;
            metronome.beatsPerBar = metronome.allNotes.matrix_4.length;
            break;
        case 'value_8':
            metronome.tempo = 100;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            metronome.schet_for_led = 0;
            metronome.beatsPerBar = metronome.allNotes.matrix_8.length;
            break;
        case 'value_16':
            metronome.tempo = 200;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            metronome.schet_for_led = 0;
            metronome.beatsPerBar = metronome.allNotes.matrix_16.length;
            break;
    }
})

// ВЫБОР АКЦЕНТОВ
// document.querySelector('.contain_btn_group').addEventListener('change', function () {
//     // console.log(this.value);
//     // clear_all_elem();
//     console.log(this.dataset.value);
//     switch (this.dataset.value) {
//         case 'value_NO':
//             metronome.beatsPerBar = 0;
//             break;
//         case 'value_1':
//             metronome.beatsPerBar = 1;
//             break;
//         case 'value_2':
//             metronome.beatsPerBar = 2;
//             break;
//         case 'value_3':
//             metronome.beatsPerBar = 3;
//             break;
//         case 'value_4':
//             metronome.beatsPerBar = 4;
//             break;
//         case 'value_5':
//             metronome.beatsPerBar = 5;
//             break;
//         // case 'value_3+2':
//         //     let arr_3_2 = [1, 1, 1, 2, 3];
//         //     metronome.beatsPerBar = arr_3_2.forEach();
//         //     console.log(arr_3_2);
//         //     break;
//     }
// })


// BUTTON корзина для очистки активных элементов
let clearActiveElem = function () {// функция очистки подсветки всех активных элементов
    for (let key in bgMatrix.idStack) {
        bgMatrix.idStack[key].deleteNote(bgMatrix.idStack[key].id);
    }
}
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearActiveElem); // очистка подсветки


// подключение аудио файла для диктанта
let context = new AudioContext();
let buffer;

window.fetch('/Example_audio/Example_1.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
        buffer = audioBuffer;

    });

function play() {
    let source1 = context.createBufferSource();
    source1.buffer = buffer;
    source1.connect(context.destination);
    source1.start();

    //   source1.onended = event => {
    //     var source2 = context.createBufferSource();
    //     source2.buffer = buffer;
    //     source2.connect(context.destination);
    //     source2.start(); 
    //     source2.onended = play;
    //   };
}


// var context = new AudioContext();
// var source = context.createBufferSource();

// fetch('audio_file.mp3')
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//     .then(audioBuffer => {
//         source.buffer = audioBuffer;
//         source.connect(context.destination);
//         // Увеличиваем скорость воспроизведения в два раза
//         source.playbackRate.value = 2.0;
//         source.start();
//     });
