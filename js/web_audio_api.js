// var context = new (window.AudioContext || window.webkitAudioContext)();
// console.log(context);

// var oscillator = context.createOscillator();

// var gain = context.createGain();
// oscillator.connect(gain);
// gain.connect(context.destination);

// var now = context.currentTime;
// gain.gain.setValueAtTime(1, now);
// gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
// oscillator.start(now);
// oscillator.stop(now + 0.5);

// oscillator.type = 'sine';
// oscillator.frequency.value = 440;
// oscillator.connect(context.destination);
// // oscillator.start();

// console.log(context.currentTime)

// class Sound {
//     constructor(context) {
//         this.context = context;
//     }

// }
// console.log(Sound);


// let a = 'Ivan';
// let b = '777777wecjnjnwkec7';

// const person = new User(a,b);

// let firstStudent = new Student(a,b,'123456');

let a = {
    'text': 'hello',
    'color': 'red',
    'bold': true,
    'show' : function() {
    console.log(this.color);
    }
};



let b = {
    'fontsize': '24px',
    __proto__: a
}

let c = {
    'fontFamily': 'Verdana',
    __proto__: b 
};

console.log(c);
console.log(c.bold);
console.log(c.hasOwnProperty('bold'));