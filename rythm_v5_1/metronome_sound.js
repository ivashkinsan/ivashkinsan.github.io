
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
        // console.log(this.contain_btn_pulse);
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
        // console.log(this.schet_for_led);
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

const metronome_buttons = new Object({
    'container': null,
    'metronome': null,
    'tempo': null,
    'playButton': null,
    'playPauseIcon': null,
    'minusFiveButton': null,
    'minusOneButton': null,
    'tempoContainer': null,
    'tempoTextLabel': null,
    'bpmTempoMonitor': null,
    'plusOneButton': null,
    'plusFiveButton': null,
    'tempoChangeButtons': [],
    'containerForAppend': document.querySelector('.app'),
    createContainer(){
        this.container = document.createElement('div');
        this.container.classList.add('metronome_buttons_container');
        return this.container;
    },
    createPlayAndPauseButton(){
        this.playButton = document.createElement('button');
        this.playButton.classList.add('play-button');
        this.playPauseIcon = document.createElement('div');
        this.playPauseIcon.classList.add('play');
        this.playButton.append(this.playPauseIcon);
        // this.playButton.textContent = 'svg';
        this.playButton.addEventListener('click', ()=> { // событие на кнопке плей
            this.metronome.startStop(); // вызов метода у метронома
            this.metronome.clear_all_elem(); // очистка всех фона mtrx элементов
            akcents.ledOff(); // очистка фона у матрицы акцентов
            // console.log(metronome.notesInQueue);
        
            if (this.metronome.isRunning) { // изменение класса у кнопки плей и пауза
                this.playPauseIcon.className = 'pause_metr';
            } else {
                this.playPauseIcon.className = 'play';
            }
        });
        return this.playButton;
    },
    createMinusFiveButton(){
        this.minusFiveButton = document.createElement('tempo-change');
        this.minusFiveButton = document.createElement('button');
        this.minusFiveButton.classList.add('minusFiveButton');
        this.minusFiveButton.textContent = '-5';
        this.minusFiveButton.dataset.change = '-5';
        this.tempoChangeButtons.push(this.minusFiveButton);
        return this.minusFiveButton;
    },
    createMinusOneButton(){
        this.minusOneButton = document.createElement('tempo-change');
        this.minusOneButton = document.createElement('button');
        this.minusOneButton.classList.add('minusOneButton');
        this.minusOneButton.textContent = '-1';
        this.minusOneButton.dataset.change = '-1';
        this.tempoChangeButtons.push(this.minusOneButton);
        return this.minusOneButton;
    },
    createBpmTempoMonitor(){
        this.tempoContainer = document.createElement('div');
        this.tempoContainer.classList.add('tempo-container');
        this.tempoTextLabel = document.createElement('div');
        this.tempoTextLabel.classList.add('bpm');
        this.tempoTextLabel.textContent = 'ск/уд/м';
        this.bpmTempoMonitor = document.createElement('div');
        this.bpmTempoMonitor.classList.add('tempo');
        this.bpmTempoMonitor.textContent = '120';
        this.tempoContainer.append(this.bpmTempoMonitor);
        this.tempoContainer.append(this.tempoTextLabel);
        return this.tempoContainer;
    },
    createPlusOneButton(){
        this.plusOneButton = document.createElement('tempo-change');
        this.plusOneButton = document.createElement('button');
        this.plusOneButton.classList.add('plusOneButton');
        this.plusOneButton.textContent = '+1';
        this.plusOneButton.dataset.change = '+1';
        this.tempoChangeButtons.push(this.plusOneButton);
        return this.plusOneButton;
    },
    createPlusFiveButton(){
        this.plusFiveButton = document.createElement('tempo-change');
        this.plusFiveButton = document.createElement('button');
        this.plusFiveButton.classList.add('plusFiveButton');
        this.plusFiveButton.textContent = '+5';
        this.plusFiveButton.dataset.change = '+5';
        this.tempoChangeButtons.push(this.plusFiveButton);
        return this.plusFiveButton;
    },
    addEventForTempoChangeButtons(){
        for (let i = 0; i < this.tempoChangeButtons.length; i++) {
            this.tempoChangeButtons[i].addEventListener('click', (event)=> {
                this.metronome.tempo += parseInt(event.target.dataset.change);
                this.bpmTempoMonitor.textContent = this.metronome.tempo;
                // speed_tempo();
            });
        };
    },
    initialize(){
        this.createContainer();
        this.container.append(this.createPlayAndPauseButton());
        this.container.append(this.createMinusFiveButton());
        this.container.append(this.createMinusOneButton());
        this.container.append(this.createBpmTempoMonitor());
        this.container.append(this.createPlusOneButton());
        this.container.append(this.createPlusFiveButton());
        this.containerForAppend.before(this.container);
    },
    metronomeInitialize(){
        this.metronome = new Metronome(); // наследование от класса Метронома
        this.metronome.searsh_all_elem();
        this.bpmTempoMonitor.textContent = this.metronome.tempo; // запись значения темпа
    }
});
metronome_buttons.initialize();
metronome_buttons.metronomeInitialize();
metronome_buttons.addEventForTempoChangeButtons();



