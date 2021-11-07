let keys = document.querySelectorAll(".key");
let audioArr = document.querySelectorAll("audio");
let queenStartItem = document.querySelector(".queen_start_item");
let queen_button_item = document.querySelectorAll(".queen_button_item");
const audioAll = document.querySelectorAll('audio');


    
//заполнить буфер
let mySoundBuffer = new AudioContext();
mySoundBuffer.createBuffer(2, 22050, 44100);
// mySoundBuffer = audioAll[1];
console.log(mySoundBuffer);
// for(i = 0; i < audioAll.length; i++){
//   audioAll[i].createBuffer(2*30);
// }


for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('touchstart', function () {
        console.log('KLICK');
        let sound = audioAll[i];
        sound.play();
          });
    keys[i].addEventListener('mousedown', function () {
        console.log('KLICK mousedown');
        let sound = audioAll[i];
        sound.play();
          });  
};

for (let i = 0; i < queen_button_item.length; i++){
  queen_button_item[i].addEventListener('click', function () {
      console.log('KLICK');
      let data = queen_button_item[i].value;
        for(j = 0; j < audioAll.length; j++){
          if(audioAll[j].dataset.key == data){
          console.log("РАБОТАЕТ" + audioAll[j].dataset.key + data);
          audioAll[j].play();
        }
      }
    });
 };


 window.AudioContext = window.AudioContext || window.webkitAudioContext;
 
 function play( snd ) {
   var audioCtx = new AudioContext();
  
   var request = new XMLHttpRequest();
   request.open( "GET", snd, true );
   request.responseType = "arraybuffer";
   request.onload = function () {
     var audioData = request.response;
  
     audioCtx.decodeAudioData(
       audioData,
       function ( buffer ) {
         var smp = audioCtx.createBufferSource();
         smp.buffer = buffer;
         smp.connect( audioCtx.destination );
         smp.start( 0 );
       },
       function ( e ) {
         alert( "Error with decoding audio data" + e.err );
       }
     );
   };
   request.send();
 }
  
 //URL до аудио файла (mp3, ogg, wav)
 


// function playNote(e) {
    
//         // if (!key) return;
//     var keyNote = audioAll.getAttribute(e);
//     // key.classList.add("playing");
//     // note.innerHTML = keyNote;
//     console.log(keyNote)
//     audio.currentTime = 0.1;
//     audio.play();
//   }

  
//   queenStartItem.addEventListener('click', function () {
//     play( "./PianoSound/05.mp3" );
//     melody.push(audioAll[1]);
//     melody.push(audioAll[5]);
//     melody.push(audioAll[8]);
//     melody.push(audioAll[5]);
//     melody.push(audioAll[1]);
//     setTimeout(function (){melody[0].play(); }, 1000);
//     setTimeout(function (){melody[1].play(); }, 1500);
//     setTimeout(function (){melody[2].play(); }, 2000);
//     setTimeout(function (){melody[3].play(); }, 2500);
//     setTimeout(function (){melody[4].play(); }, 3000);
// });


// export default function createBuffer(size = 2 ** 31) {
//   const listeners = []
//   const ringBuffer = createRingBuffer(size)
//   let input = 0
//   let current = 0

//   return {
//     size: () => input - current,
//     isEmpty() {
//       return input === current
//     },
//     getInput() {
//       return input
//     },
//     getCurrent() {
//       return current
//     },
//     next() {
//       if (current < input) {
//         const item = ringBuffer[current]
//         current += 1
//         return item
//       }
//     },
//     notifyListeners() {
//       for (let i = 0; i < listeners.length; i += 1) {
//         listeners[i]()
//       }
//     },
//     push(item) {
//       ringBuffer[input] = item
//       input += 1
//     },
//     subscribe(cb) {
//       listeners.push(cb)
//     }
//   }
// }