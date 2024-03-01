let ctx = new(window.AudioContext || window.webkitAudioContext)();
const frequencyRange = document.querySelector('.range_slide');
// let ctx = new window.AudioContext();
// console.log(ctx);

let osc = ctx.createOscillator();
console.log(osc);


// let gain = ctx.createGain();
// console.log(gain);

osc.frequency.value = 880;
// osc.type = 'sine';
// osc.type = 'square';
// osc.type = 'triangle';
// osc.type = 'sawtooth';
osc.connect(ctx.destination);


let clear_2 = document.querySelector('.clear_2');
clear_2.addEventListener('click', function () {
    osc.start();
    // setTimeout(() => {
    //     osc.stop()
    // }, 2000)
});

frequencyRange.addEventListener('input', function (event) {
    console.log(event.target.value);
    osc.frequency.value = event.target.value;
})