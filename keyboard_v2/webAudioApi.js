// let ctx = new(window.AudioContext || window.webkitAudioContext)();
// const frequencyRange = document.querySelector('.range_slide');
// let ctx = new window.AudioContext();
// console.log(ctx);

// let osc = ctx.createOscillator();
// console.log(osc);


// let gain = ctx.createGain();
// console.log(gain);

// osc.frequency.value = 880;
// osc.type = 'sine';
// osc.type = 'square';
// osc.type = 'triangle';
// osc.type = 'sawtooth';
// osc.connect(ctx.destination);


// let clear_2 = document.querySelector('.clear_2');
// clear_2.addEventListener('click', function () {
//     osc.start();

// });

// frequencyRange.addEventListener('input', function (event) {
//     console.log(event.target.value);
//     osc.frequency.value = event.target.value;
// })


// создание экземпляра аудио-контекста
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

console.log('audioContext ===');
console.log(audioContext);

//создание буффера от аудио-контекста
const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
);

const channelData = buffer.getChannelData(0);
console.log('channelData ===');
console.log(channelData, length);

// создание белого шума
for (let i = 0; i < buffer.length; i++) {
    // запись в массив 48000 рандомных значений
    channelData[i] = Math.random() * 2 - 1;
    // console.log(channelData[i]);
}
const whiteNoiseSource = audioContext.createBufferSource();
console.log('const whiteNoiseSource = audioContext.createBufferSource()')
console.log(whiteNoiseSource);
whiteNoiseSource.buffer = buffer;
console.log('whiteNoiseSource.buffer = buffer');
console.log(buffer);
console.log(whiteNoiseSource.buffer);

// создание гейн ноды
const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05, 0);

whiteNoiseSource.connect(primaryGainControl);
primaryGainControl.connect(audioContext.destination);