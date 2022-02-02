let keys = document.querySelectorAll(".key");

for(let item of keys){
  item.innerHTML = '';
}

let audioArr = document.querySelectorAll("audio");
let queenStartItem = document.querySelector(".queen_start_item");
let queen_button_item = document.querySelectorAll(".queen_button_item");
const audioAll = document.querySelectorAll('audio');
let queenArr = ['1G','2D','2A','3E','3B','4F'];
let blind = document.querySelector(".blind");
let moniRight = document.querySelector('.answer_right');
let moniWrong = document.querySelector('.answer_wrong');
let noteQuest = '';
let noteAnswer = '';
let right = 0;
let wrong = 0;
let playButton = document.querySelector('.play');

blind.addEventListener('click', function () {
  blind.style.display = 'none';
  playNewWork(queenArr[getRandomInt(6)]);
});

//повтор проигранной ноты
playButton.addEventListener('click', function () {
  noteQuest.play();
});

//озвучка клавиатуры событием касания и клика
for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('touchstart', function () {
        console.log('KLICK');
        let sound = audioAll[i];
        sound.play();
        noteAnswer = audioAll[i];
          compare(noteQuest,noteAnswer)
          setTimeout(playNewWork, 2000, queenArr[getRandomInt(6)]);
          });
    keys[i].addEventListener('mousedown', function () {
        // console.log('KLICK mousedown');
        let sound = audioAll[i];
        sound.play();
        noteAnswer = audioAll[i];
          compare(noteQuest,noteAnswer)
          setTimeout(playNewWork, 2000, queenArr[getRandomInt(6)]);
          });  
};

//озвучка кнопок BUTTON событием клика
for (let i = 0; i < queen_button_item.length; i++){
  queen_button_item[i].addEventListener('click', function () {
      // console.log('KLICK');
      let data = queen_button_item[i].value;
        for(j = 0; j < audioAll.length; j++){
          if(audioAll[j].dataset.key == data){
          // console.log("РАБОТАЕТ" + audioAll[j].dataset.key + data);
          audioAll[j].play();
          noteAnswer = audioAll[j];
          compare(noteQuest,noteAnswer);
          setTimeout(playNewWork, 2000, queenArr[getRandomInt(6)]);
        }
      }
    });
 };

 //рандомное число с ограничением по максимально допустимому
 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

 function playNewWork(queenOneElem){
  for(j = 0; j < audioAll.length; j++){
    if(audioAll[j].dataset.key == queenOneElem){
    console.log("РАБОТАЕТ" + audioAll[j].dataset.key);
    audioAll[j].play();
    noteQuest = audioAll[j];
    
  }
 }
}

//Функция сравнения
function compare(a,b){
  // console.log('noteQuest ' + noteQuest);
  // console.log('noteAnswer ' + noteAnswer);
  // console.log(a == b);
  if(a == b){
    right += 1;
    moniRight.innerHTML = right;
  } else {
    wrong += 1;
    moniWrong.innerHTML = wrong;
  };
  console.log('right =' + right, 'wrong =' + wrong);
  
}

