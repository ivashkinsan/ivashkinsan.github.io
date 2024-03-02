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

const audioContext = new(window.AudioContext || window.webkitAudioContext)();

console.log(AudioContext.sampleRate);

const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
);

const channelData = buffer.getChannelData(0);
console.log(channelData, length);
for (let i = 0; i < buffer.length; i++) {
    channelData[i] = Math.random() * 2 - 1;
}

const whiteNoiseSource = audioContext.createBufferSource();
whiteNoiseSource.buffer = buffer;

const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05, 0);

whiteNoiseSource.connect(primaryGainControl);
primaryGainControl.connect(audioContext.destination);