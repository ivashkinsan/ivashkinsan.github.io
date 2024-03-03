// создание экземпляра аудио-контекста
const audioContext = new(window.AudioContext || window.webkitAudioContext)();

console.log('audioContext ===');
console.log(audioContext);

//создание буффера от аудио-контекста
const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
);

const channelData = buffer.getChannelData(0);


// создание белого шума
for (let i = 0; i < buffer.length; i++) {
    // запись в массив 48000 рандомных значений
    channelData[i] = Math.random() * 2 - 1;
    // console.log(channelData[i]);
}



// создание гейн ноды
const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(1, 0);
primaryGainControl.connect(audioContext.destination);


// const button = document.createElement('button');
// button.innerText = 'white noise';
// button.addEventListener('click', function () {
//     const whiteNoiseSource = audioContext.createBufferSource();
//     whiteNoiseSource.buffer = buffer;
//     whiteNoiseSource.connect(primaryGainControl);
//     whiteNoiseSource.start();
// })
// document.body.appendChild(button);

// const shnareFilter = audioContext.createBiquadFilter();
// shnareFilter.type = "highpass";
// shnareFilter.frequency.value = 2000;
// shnareFilter.connect(primaryGainControl);

// const shnareButton = document.createElement('button');
// shnareButton.innerText = 'shnare';
// shnareButton.addEventListener('click', function () {
//     const whiteNoiseSource = audioContext.createBufferSource();
//     whiteNoiseSource.buffer = buffer;

//     const whiteNoiseGain = audioContext.createGain();
//     whiteNoiseGain.gain.setValueAtTime(1, audioContext.currentTime)
//     whiteNoiseGain.gain.exponentialRampToValueAtTime(
//         0.01,
//         audioContext.currentTime + 0.2)
//     whiteNoiseSource.connect(whiteNoiseGain);
//     whiteNoiseGain.connect(shnareFilter);

//     whiteNoiseSource.start();
//     whiteNoiseSource.stop(audioContext.currentTime + 0.2);

//     const shnareOscillator = audioContext.createOscillator();
//     shnareOscillator.type = "triangle";
//     shnareOscillator.frequency.setValueAtTime(250, audioContext.currentTime);

//     const oscillatorGain = audioContext.createGain();
//     oscillatorGain.gain.setValueAtTime(1, audioContext.currentTime)
//     oscillatorGain.gain.exponentialRampToValueAtTime(
//         0.01,
//         audioContext.currentTime + 0.2)
//     shnareOscillator.connect(oscillatorGain);
//     oscillatorGain.connect(primaryGainControl);
//     shnareOscillator.start();
//     shnareOscillator.stop(audioContext.currentTime + 0.2);
// })
// document.body.appendChild(shnareButton);


// const kickButton = document.createElement('button');

// kickButton.innerText = 'kick';
// kickButton.addEventListener('click', function () {
//     const kickOscillator = audioContext.createOscillator();
//     kickOscillator.frequency.setValueAtTime(150, 0);
//     kickOscillator.frequency.exponentialRampToValueAtTime(
//         0.001,
//         audioContext.currentTime + 0.5);

//     const kickGain = audioContext.createGain();
//     kickGain.gain.setValueAtTime(1, 0);
//     kickGain.gain.exponentialRampToValueAtTime(
//         0.001,
//         audioContext.currentTime + 0.5);

//     kickOscillator.connect(kickGain);
//     kickGain.connect(primaryGainControl);
//     kickOscillator.start();
//     kickOscillator.stop(audioContext.currentTime + 0.5);
// })
// document.body.appendChild(kickButton);


// const notes = [{
//         name: "C",
//         frequency: 261.625
//     },
//     {
//         name: "C#",
//         frequency: 277.18
//     },
//     {
//         name: "D",
//         frequency: 293.66
//     },
//     {
//         name: "D#",
//         frequency: 311.13
//     },
//     {
//         name: "E",
//         frequency: 329.63
//     },
//     {
//         name: "F",
//         frequency: 349.23
//     },
//     {
//         name: "F#",
//         frequency: 369.99
//     },
//     {
//         name: "G",
//         frequency: 392
//     },
//     {
//         name: "G#",
//         frequency: 415.3
//     },
//     {
//         name: "A",
//         frequency: 440
//     },
//     {
//         name: "A#",
//         frequency: 466.16
//     },
//     {
//         name: "B",
//         frequency: 493.88
//     }
// ];

// document.body.appendChild(document.createElement('br'));

// notes.forEach(({
//     name,
//     frequency
// }) => {
//     const noteButton = document.createElement('button');
//     noteButton.innerText = name;
//     noteButton.addEventListener('click', () => {
//         const noteOscillator = audioContext.createOscillator();
//         noteOscillator.type = "square";
//         noteOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

//         const vibrato = audioContext.createOscillator();
//         vibrato.frequency.setValueAtTime(20, 0);
//         const vibratoGain = audioContext.createGain()
//         vibratoGain.gain.setValueAtTime(10, 0);
//         vibrato.connect(vibratoGain);
//         vibratoGain.connect(noteOscillator.frequency);
//         vibrato.start();

//         const attakTime = 0.2;
//         const decayTime = 0.3;
//         const sustainTime = 0.7;
//         const realeaseTime = 0.2;

//         const mow = audioContext.currentTime;
//         const noteGain = audioContext.createGain();
//         noteGain.gain.setValueAtTime(0, 0);
//         noteGain.gain.linearRampToValueAtTime(1, mow + attakTime);
//         noteGain.gain.linearRampToValueAtTime(sustainTime, mow + attakTime + decayTime);
//         noteGain.gain.setValueAtTime(sustainTime, mow + 1 + realeaseTime);
//         noteGain.gain.linearRampToValueAtTime(0, mow + 1);

//         noteOscillator.connect(noteGain);
//         noteGain.connect(primaryGainControl);
//         noteOscillator.start();
//         noteOscillator.stop(audioContext.currentTime + 1);
//     })
//     document.body.appendChild(noteButton);
// })








const HIHAT_URL = '/keyboard_v2/Sound/hatClosed.mp3';
const SHNARE_URL = '/keyboard_v2/Sound/snare.mp3';
const KICK_URL = '/keyboard_v2/Sound/kick.mp3';

// const hiHatButton = document.createElement('button');
// hiHatButton.innerText = 'hi hat';
// hiHatButton.addEventListener('click', async () => {
//     const response = await fetch(HIHAT_URL);
//     const soundBuffer = await response.arrayBuffer();
//     const hihatBuffer = await audioContext.decodeAudioData(soundBuffer);

//     const hiHatSource = audioContext.createBufferSource();
//     hiHatSource.buffer = hihatBuffer;
//     hiHatSource.playbackRate.setValueAtTime(2, 0);
//     hiHatSource.connect(primaryGainControl);
//     hiHatSource.start();
// });
// document.body.appendChild(hiHatButton);


section_for_contextmenu.addEventListener('contextmenu', async (e) => {
    // console.log(e.target);
    const response = await fetch(e.target.dataset.src);
    const soundBuffer = await response.arrayBuffer();
    const oneSoundBuffer = await audioContext.decodeAudioData(soundBuffer);

    const soundSource = audioContext.createBufferSource();
    soundSource.buffer = oneSoundBuffer;
    soundSource.playbackRate.setValueAtTime(1, 0);
    soundSource.connect(primaryGainControl);
    soundSource.start();

    e.target.classList.add('play_led');
    setTimeout(function () {
        e.target.classList.remove('play_led')
    }, 200)
})

const playEventArray = function (array) {

}


// const new_experiment_button = document.createElement('button');
// new_experiment_button.innerText = 'new experiment';
// document.body.appendChild(new_experiment_button);
// new_experiment_button.addEventListener('click', async () => {

//     let all_active_keys = document.querySelectorAll('.ledON');
//     // playEventArray(all_active_keys);
//     for (let item of all_active_keys) {
//         const response = await fetch(item.dataset.src);
//         const soundBuffer = await response.arrayBuffer();
//         const oneSoundBuffer = await audioContext.decodeAudioData(soundBuffer);

//         const soundSource = audioContext.createBufferSource();
//         soundSource.buffer = oneSoundBuffer;
//         soundSource.playbackRate.setValueAtTime(1, 0);
//         soundSource.connect(primaryGainControl);
//         soundSource.start();
//     }

// })



// const ctx = new AudioContext();
// let r0, r1, r2, r3, r4, r5, sr0, sr1, sr2, sr3, sr4, sr5, b0, b1, b2;

// fetch('http://mapper720.ru/belltowers/transfiguration/blagovest_1.ogg')
//     .then(data => data.arrayBuffer())
//     .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//     .then(decodedAudio => {
//         b1 = decodedAudio;
//     });

// function playback(what_to_play) {
//     const playSound = ctx.createBufferSource();
//     playSound.buffer = what_to_play;
//     playSound.connect(ctx.destination);
//     playSound.start(ctx.currentTime);
// }

// playback(b1);

// let all_elem_for_buffer = document.querySelectorAll('.elem');


// async function add_sound_in_buffer(src, play) {
//     const response = await fetch(src);
//     const soundBuffer = await response.arrayBuffer();
//     const oneSoundBuffer = await audioContext.decodeAudioData(soundBuffer);

//     const soundSource = audioContext.createBufferSource();
//     soundSource.buffer = oneSoundBuffer;
//     soundSource.playbackRate.setValueAtTime(1, 0);
//     soundSource.connect(primaryGainControl);
//     if (play) {
//         soundSource.start();
//     }
// }

// for (let item of all_elem_for_buffer) {
//     add_sound_in_buffer(item.dataset.src);
//     item.addEventListener('click', async () => {
//         if (item.classList.contains('ledON')) {
//             add_sound_in_buffer(item.dataset.src, true);
//         }
//     })
// }