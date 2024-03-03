// function playMultipleAudio(files) { // files - array с ресурсами mp3 файлов
//     var context = new AudioContext(); // создание копии аудио контекста
//     var gainNode = context.createGain(); // создание объекта gainNode
//     gainNode.connect(context.destination); // подключение gainNode к destination аудио контекста

//     files.forEach(function (file) {
//         var request = new XMLHttpRequest();
//         request.open('GET', file, true);
//         request.responseType = 'arraybuffer';

//         request.onload = function () {
//             context.decodeAudioData(request.response, function (buffer) {
//                 var source = context.createBufferSource();
//                 source.buffer = buffer;
//                 source.connect(gainNode);
//                 setTimeout(() => {
//                     console.log(request);
//                     source.start(0);
//                 }, 500);

//             }, function (err) {
//                 console.error('decodeAudioData error', err);
//             });
//         };

//         request.send();
//     });
// }

// Пример использования функции
// var audioFiles = [HIHAT_URL, SHNARE_URL, KICK_URL];
// playMultipleAudio(audioFiles);

// function playMultipleAudioWithInterval(files, interval) {
//     var context = new AudioContext();
//     var gainNode = context.createGain();
//     gainNode.connect(context.destination);

//     function playFile(index) {
//         if (index >= files.length) {
//             return;
//         }

//         var request = new XMLHttpRequest();
//         request.open('GET', files[index], true);
//         request.responseType = 'arraybuffer';

//         request.onload = function () {
//             context.decodeAudioData(request.response, function (buffer) {
//                 var source = context.createBufferSource();
//                 source.buffer = buffer;
//                 source.connect(gainNode);
//                 source.start(0);

//                 setTimeout(function () {
//                     playFile(index + 1);
//                 }, interval);
//             }, function (err) {
//                 console.error('decodeAudioData error', err);
//             });
//         };

//         request.send();
//     }

//     playFile(0);
// }


function playMultipleAudioWithInterval(elements, interval) {
    var context = new AudioContext();
    var gainNode = context.createGain();
    gainNode.connect(context.destination);

    function playFile(index) {
        if (index >= elements.length) {
            return;
        }

        var request = new XMLHttpRequest();
        request.open('GET', elements[index].dataset.src, true);
        request.responseType = 'arraybuffer';

        request.onload = function () {
            context.decodeAudioData(request.response, function (buffer) {
                var source = context.createBufferSource();
                source.buffer = buffer;
                source.connect(gainNode);
                source.start(0);

                elements[index].classList.add('play_led');
                setTimeout(function () {
                    elements[index].classList.remove('play_led')
                }, interval > 0 ? interval : 250);

                setTimeout(function () {

                    playFile(index + 1);

                }, interval);
            }, function (err) {
                console.error('decodeAudioData error', err);
            });
        };

        request.send();
    }

    playFile(0);
}


// function playPianoNotesWithInterval(notes, interval) {
//     var context = new AudioContext();
//     var gainNode = context.createGain();
//     gainNode.connect(context.destination);

//     function playNote(index) {
//         if (index >= notes.length) {
//             return;
//         }

//         var request = new XMLHttpRequest();
//         request.open('GET', 'path/to/notes/' + notes[index] + '.mp3', true);
//         request.responseType = 'arraybuffer';

//         request.onload = function () {
//             context.decodeAudioData(request.response, function (buffer) {
//                 var source = context.createBufferSource();
//                 source.buffer = buffer;
//                 source.connect(gainNode);
//                 source.start(0);

//                 setTimeout(function () {
//                     playNote(index + 1);
//                 }, interval);
//             }, function (err) {
//                 console.error('decodeAudioData error', err);
//             });
//         };

//         request.send();
//     }

//     playNote(0);
// }