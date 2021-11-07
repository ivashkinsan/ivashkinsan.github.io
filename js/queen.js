let keys = document.querySelectorAll(".key");
let audioArr = document.querySelectorAll("audio");
let queenStart = document.querySelector(".queen_start");
// console.log(allKeys);



for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('touchstart', function () {
        console.log('KLICK');
        let data = keys[i].getAttribute('data-key');
        console.log(data);
        playNote(data);
          });
    keys[i].addEventListener('mousedown', function () {
        console.log('KLICK');
        let data = keys[i].getAttribute('data-key');
        console.log(data);
        playNote(data);
          });
          
    
};

const audioAll = document.querySelectorAll('audio');

function playNote(e) {
    
    audio = audioAll[e - 1];
    console.log(audio);
    // if (!key) return;
    // const keyNote = key.getAttribute("data-note");
    // key.classList.add("playing");
    // note.innerHTML = keyNote;
    audio.currentTime = 0.1;
    audio.play();
  }

queenStart.addEventListener('click', function () {
  playNote(1);
  setTimeout(playNote, 1000);
  setTimeout(playNote, 2000);
  setTimeout(playNote, 3000);
  setTimeout(playNote, 4000);
  setTimeout(playNote, 5000);
});


