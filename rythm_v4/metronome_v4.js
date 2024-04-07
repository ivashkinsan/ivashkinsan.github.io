// METRONOME =========================================================================================================================
let half_notes;
let quarter_notes;
let eighth_notes;
let sixteenth_notes;
let all_click_items;

let searsh_all_elem = function () {
    half_notes = document.querySelectorAll('.matrix_2');
    quarter_notes = document.querySelectorAll('.matrix_4');
    eighth_notes = document.querySelectorAll('.matrix_8');
    sixteenth_notes = document.querySelectorAll('.matrix_16');
    all_click_items = document.querySelectorAll('.mtrxCircle');
}

searsh_all_elem();


let clear_all_elem = function () {
    // console.log('off');
    for (let item of all_click_items) {
        item.classList.remove('add_metronome_click_active');
        // console.log('off');
    }
}

let schet_for_led = 0;

//добавление подсветки кликам метронома
let led_beat = function (level) {
    // console.log('click');
    // console.log(level[schet_for_led]);
    for (let item of level) {
        item.classList.remove('add_metronome_click_active');
    }
    level[schet_for_led].classList.add('add_metronome_click_active');
    // переключение доли
    schet_for_led += 1;
    //сброс счетчика
    if (schet_for_led == level.length) {
        schet_for_led = 0;
    }
}

class Metronome {
    constructor(tempo = 50) {
        this.audioContext = null;
        this.notesInQueue = []; // заметки, которые были помещены в веб-аудио и могут быть или не быть воспроизведены еще {note, time}
        this.currentBeatInBar = 0;
        this.beatsPerBar = 4;
        this.tempo = tempo;
        this.lookahead = 25; // Как часто вызывать функцию планирования (в миллисекундах)
        this.scheduleAheadTime = 0.1; // Насколько далеко вперед запланировать аудио (сек)
        this.nextNoteTime = 0.0; // когда нужно сделать следующую ноту
        this.isRunning = false;
        this.intervalID = null;
    }



    nextNote() {
        // Передвинуть текущую ноту и время на четвертную ноту 
        var secondsPerBeat = 60.0 / this.tempo; // Обратите внимание, что для расчета длительности доли используется ТЕКУЩЕЕ значение темпа.
        this.nextNoteTime += secondsPerBeat; // Добавляем длину удара к времени последнего удара

        this.currentBeatInBar++; // Увеличиваем номер доли, переносим на ноль
        if (this.currentBeatInBar == this.beatsPerBar) {
            this.currentBeatInBar = 0;
        }


        switch (document.querySelector('.select_speed').value) {
            case 'value_NO':
                break;
            case 'value_2':
                led_beat(half_notes);

                break;
            case 'value_4':
                led_beat(quarter_notes);
                // this.beatsPerBar = quarter_notes.length;
                break;
            case 'value_8':
                led_beat(eighth_notes);
                // this.beatsPerBar = eighth_notes.length;
                break;
            case 'value_16':
                led_beat(sixteenth_notes);
                // this.beatsPerBar = sixteenth_notes.length;
                break;
        }


    }

    scheduleNote(beatNumber, time) {
        // помещаем ноту в очередь, даже если мы не играем.
        this.notesInQueue.push({
            note: beatNumber,
            time: time
        });

        // создаем осциллятор
        const osc = this.audioContext.createOscillator();
        const envelope = this.audioContext.createGain();

        osc.frequency.value = (beatNumber % this.beatsPerBar == 0) ? 1000 : 800;
        envelope.gain.value = 1;
        envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

        osc.connect(envelope);
        envelope.connect(this.audioContext.destination);

        osc.start(time);
        osc.stop(time + 0.03);
    }

    scheduler() {
        // пока есть ноты, которые нужно будет сыграть перед следующим интервалом, запланируйте их и переместите указатель.
        while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime) {
            this.scheduleNote(this.currentBeatInBar, this.nextNoteTime);
            this.nextNote();
        }
    }

    start() {
        schet_for_led = 0;

        if (this.isRunning) return;

        if (this.audioContext == null) {
            this.audioContext = new(window.AudioContext || window.webkitAudioContext)();
        }

        this.isRunning = true;

        this.currentBeatInBar = 0;
        this.nextNoteTime = this.audioContext.currentTime + 0.05;

        this.intervalID = setInterval(() => this.scheduler(), this.lookahead);
    }

    stop() {
        this.isRunning = false;

        clearInterval(this.intervalID);
    }

    startStop() {
        if (this.isRunning) {
            this.stop();
        } else {
            this.start();
        }
    }

}

let metronome = new Metronome();
let tempo = document.getElementById('tempo');
tempo.textContent = metronome.tempo;

let playPauseIcon = document.getElementById('play-pause-icon');

let playButton = document.getElementById('play-button');
playButton.addEventListener('click', function () {
    metronome.startStop();
    clear_all_elem();

    console.log(metronome.notesInQueue);

    if (metronome.isRunning) {
        playPauseIcon.className = 'pause_metr';
    } else {
        playPauseIcon.className = 'play';

    }

});

let tempoChangeButtons = document.getElementsByClassName('tempo-change');
for (let i = 0; i < tempoChangeButtons.length; i++) {
    tempoChangeButtons[i].addEventListener('click', function () {
        metronome.tempo += parseInt(this.dataset.change);
        tempo.textContent = metronome.tempo;
        // speed_tempo();
    });
};

document.querySelector('.select_speed').addEventListener('change', function () {
    // console.log(this.value);
    clear_all_elem();
    switch (this.value) {
        case 'value_NO':
            break;
        case 'value_2':
            metronome.tempo = 25;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            schet_for_led = 0;
            metronome.beatsPerBar = half_notes.length;
            break;
        case 'value_4':
            metronome.tempo = 50;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            schet_for_led = 0;
            metronome.beatsPerBar = quarter_notes.length;
            break;
        case 'value_8':
            metronome.tempo = 100;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            schet_for_led = 0;
            metronome.beatsPerBar = eighth_notes.length;
            break;
        case 'value_16':
            metronome.tempo = 200;
            tempo.textContent = metronome.tempo;
            metronome.currentBeatInBar = 0;
            schet_for_led = 0;
            metronome.beatsPerBar = sixteenth_notes.length;
            break;
    }
})

document.querySelector('.select_group').addEventListener('change', function () {
    // console.log(this.value);
    // clear_all_elem();
    switch (this.value) {
        case 'value_NO':
            break;
        case 'value_1':
            metronome.beatsPerBar = 1;
            break;
        case 'value_2':
            metronome.beatsPerBar = 2;
            break;
        case 'value_3':
            metronome.beatsPerBar = 3;
            break;
        case 'value_4':
            metronome.beatsPerBar = 4;
            break;
        case 'value_5':
            metronome.beatsPerBar = 5;
            break;
            // case 'value_3+2':
            //     let arr_3_2 = [1, 1, 1, 2, 3];
            //     metronome.beatsPerBar = arr_3_2.forEach();
            //     console.log(arr_3_2);
            //     break;
    }
})

let clearActiveElem = function(){
    let allActiveElem = document.querySelectorAll('.active');
    for(let item of allActiveElem){
        item.remove();
    }
}
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click',clearActiveElem)