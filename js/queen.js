document.oncontextmenu = cmenu;

function cmenu() {
  return false;
};

let keys = document.querySelectorAll(".key");

for (let item of keys) {
  item.innerHTML = '';
}
let startButtonsToggle = document.querySelectorAll('.start_button_item');
let audioArr = document.querySelectorAll('audio');
let queenStartItem = document.querySelector('.queen_start_item');
let queen_button_item = document.querySelectorAll('.queen_button_item');
const audioAll = document.querySelectorAll('audio');
let queenArr = [];
let startButton = document.querySelector('.start_button');
let startMenu = document.querySelector('.start_menu');
let moniRight = document.querySelector('.answer_right');
let moniWrong = document.querySelector('.answer_wrong');
let noteQuest = '';
let noteAnswer = '';
let right = 0;
let wrong = 0;
let playButton = document.querySelector('.play');

startButton.addEventListener('click', function () {
  for (let item of startButtonsToggle) {
    if (item.classList[2] == 'start_button_toggle') {
      queenArr.push(item.dataset.value);
    }
  }
  startButton.style.display = 'none';
  startMenu.style.display = 'none';
  playNewWork(queenArr[getRandomInt(queenArr.length)]);

});


for (let item of startButtonsToggle) {
  item.addEventListener('click', function () {
    item.classList.toggle('start_button_toggle');
  });
}

//повтор проигранной ноты
playButton.addEventListener('click', function () {
  noteQuest.play();
});

//озвучка клавиатуры событием касания и клика
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('mousedown', function () {
    // console.log('KLICK mousedown');
    let sound = audioAll[i];
    sound.play();
    noteAnswer = audioAll[i];
    compare(noteQuest, noteAnswer)
    setTimeout(playNewWork, 2000, queenArr[getRandomInt(queenArr.length)]);
  });
};

//озвучка кнопок BUTTON событием клика
for (let i = 0; i < queen_button_item.length; i++) {
  queen_button_item[i].addEventListener('click', function () {
    let data = queen_button_item[i].value;
    for (j = 0; j < audioAll.length; j++) {
      if (audioAll[j].dataset.key == data) {
        audioAll[j].play();
        noteAnswer = audioAll[j];
        compare(noteQuest, noteAnswer);
        setTimeout(playNewWork, 2000, queenArr[getRandomInt(queenArr.length)]);
      }
    }
  });
};

//рандомное число с ограничением по максимально допустимому
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


//запуск нового задания
function playNewWork(queenOneElem) {
  for (j = 0; j < audioAll.length; j++) {
    if (audioAll[j].dataset.key == queenOneElem) {
      console.log("РАБОТАЕТ" + audioAll[j].dataset.key);
      audioAll[j].play();
      noteQuest = audioAll[j];

    }
  }
}

//Функция сравнения
function compare(a, b) {
  if (a == b) {
    right += 1;
    moniRight.innerHTML = right;
  } else {
    wrong += 1;
    moniWrong.innerHTML = wrong;
  };
}