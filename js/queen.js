let keys = document.querySelectorAll(".key");
let audioArr = document.querySelectorAll("audio");
// console.log(allKeys);

for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function () {
        console.log('KLICK');
        let data = keys[i].getAttribute('data-key');
        console.log(data);
        playNote(data);
          });
          
    
};

function playNote(e) {
    const audioAll = document.querySelectorAll('audio');
    audio = audioAll[e - 1];
    console.log(audio);
    // if (!key) return;
    // const keyNote = key.getAttribute("data-note");
    // key.classList.add("playing");
    // note.innerHTML = keyNote;
    audio.currentTime = 0.1;
    audio.play();
  }
  
 