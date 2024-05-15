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
