// document.oncontextmenu = cmenu;

// function cmenu() {
//   return false;
// };



let spisokNamesForInfoMoni = {
  'header_1': ['СИММЕТРИИ', ' ', 0, 'headerOfResult'],
  'symmetry2': ['на 2ч', 0, 0],
  'symmetry3': ['на 3ч', 0, 0],
  'symmetry4': ['на 4ч', 0, 0],
  'symmetry6': ['на 6ч', 0, 0],

  'header_2': ['ТЕТРАХОРДЫ', '-', 0, 'headerOfResult'],
  'maj_tetrachord': ['мажорный', 0, 0],
  'min_tetrachord': ['минорный', 0, 0],
  'frig_tetrachord': ['фригийский', 0, 0],
  'harm_tetrachord': ['гармонический', 0, 0],
  'whole_tetrachord': ['целотоновый', 0, 0, 'rowBlock'],

  'header_3': ['ИНТЕРВАЛЫ', '-', 0, 'headerOfResult'],
  'm2': ['м2', 0, 0],   //left
  'm6': ['м6', 0, 0],   //right
  'B2': ['Б2', 0, 0],   //left
  'B6': ['Б6', 0, 0],   //right
  'm3': ['м3', 0, 0],   //left
  'm7': ['м7', 0, 0],   //right
  'B3': ['Б3', 0, 0],   //left
  'B7': ['Б7', 0, 0],   //right
  'ch4': ['Ч4', 0, 0],  //left
  'ch5': ['Ч5', 0, 0],  //right
  'TTT': ['ТТТ', 0, 0, 'rowBlock'],


  'header_4': ['КОМБИНАЦИИ ЦЕЛОТОНОВ', '-', 0, 'headerOfResult'],
  'melodic_minor': ['2+5 ( мел минор )', 0, 0],
  'ionian': ['3+4 ( нат мажор )', 0, 0],
  'lydian': ['4+3 ( лидийский )', 0, 0],
  'lydian_aug': ['5+2 ( лидийский #5)', 0, 0],
  'WH': ['Тон-полутон', 0, 0, 'rowBlock'],

  'header_5': ['ДИАТОНИКА МАЖОРА', '-', 0, 'headerOfResult'],
  'TTT_&_maj': ['лидийский', 0, 0],     //left
  'min_&_min': ['дорийский', 0, 0],     //right
  'maj_&_maj': ['ионийский', 0, 0],     //left
  'min_&_frig': ['эолийский', 0, 0],    //right
  'maj_&_min': ['миксолидийский', 0, 0],//left
  'frig_&_frig': ['фригийский', 0, 0],  //right
  'frig_&_TTT': ['локрийский', 0, 0, 'rowBlock'],

  'header_6': ['ТРЕЗВУЧИЯ', '-', 0, 'headerOfResult'],
  'aug_triads': ['увеличенное', 0, 0],
  'maj_triads': ['мажорное', 0, 0],
  'min_triads': ['минорное', 0, 0],
  'dim_triads': ['уменьшённое', 0, 0],
  'maj_add6_triads': ['maj6', 0, 0],
  'min_add6_triads': ['min6', 0, 0],
  'sus2_triads': ['sus2', 0, 0],
  'sus4_triads': ['sus4', 0, 0],
  'maj_add2_triads': ['maj add2', 0, 0],
  'min_add2_triads': ['min add2', 0, 0],
  'maj_add4_triads': ['maj add4', 0, 0],
  'min_add4_triads': ['min add4', 0, 0],

  'header_7': ['ИСКУССТВЕННЫЕ ЛАДЫ', '-', 0, 'headerOfResult'],
  'iscustv_melodic_minor': ['мел минор', 0, 0],
  'iscustv_minor_harmony': ['гарм минор', 0, 0],
  'iscustv_major_harmony': ['гарм мажор', 0, 0],
  'iscustv_major_melodic': ['мел мажор', 0, 0],
  'iscustv_2_major_harmony': ['х2 гарм мажор', 0, 0, 'rowBlock'],

  'header_8': ['СЕПТ-АККОРДЫ', '-', 0, 'headerOfResult'],
  'maj_aug_chord': ['X^#5', 0, 0],
  'maj_original_chord': ['X^', 0, 0],
  'seventh_chord': ['X7', 0, 0],
  'minor_maj_chord': ['Xm^', 0, 0],
  'minor_seventh_chord': ['Xm7', 0, 0],
  'half_diminished_chord': ['Xm7b5', 0, 0],
  'diminished_chord': ['Xo', 0, 0, 'rowBlock'],

  'header_9': ['ДИАТОНИКА МЕЛ МИНОРА', '-', 0, 'headerOfResult'],
  'min_&_maj': ['мелодический минор', 0, 0],
  'frig_&_min': ['дорийский b9', 0, 0],
  'TTTT_&_maj': ['лидийский #5', 0, 0],
  'TTT_&_min': ['миксолидийский #4', 0, 0],
  'maj_&_frig': ['миксолидийский b6', 0, 0],
  'min_&_TTT': ['локрийский #2', 0, 0],
  'frig_&_TTTT': ['альтерированный', 0, 0, 'rowBlock']
};

let marker = document.querySelectorAll('p');
for (let item of marker) {
  item.innerHTML = '';
}

let keys = document.querySelectorAll('.key');
let elements = document.querySelectorAll('.elem');
let monitor = document.querySelector('.monitor'); //монитор
let buttons = document.querySelectorAll('.button');
let circles = document.querySelectorAll('.circle');
let answerArr;

let ti;
let symmetry2;
let symmetry3;
let symmetry4;
let symmetry6;

let symBtnLevel;
let symBtnLevelGO;

// функция смены 1 блока симметрии
let clicks = 0;

const oneBlockFirstSlide = document.querySelector('.hrom');
oneBlockFirstSlide.onclick = function () {
  switch (clicks) {
    case 0:
      this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_null.svg';
      clicks += 1;
      break;
    case 1:
      this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_hromatic.svg';
      clicks += 1;
      break;
    case 2:
      this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_numbers_13.svg';
      clicks += 1;
      break;
    case 3:
      this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_half_tone_12.svg';
      clicks += 1;
      break;
    case 4:
      this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_steps_1_7.svg';
      clicks = 0;
      break;
  }
}


//ВЫБОР РЕЖИМА РАНДОМ
let symmetryNameArr = [symmetry2, symmetry3, symmetry4, symmetry6];
// let startSymmetry = getRandomIntInclusive(0,3);

//запуск при нажатии на кнопку режима
for (let item of buttons) {
  item.onclick = function () {
    // monitoring(item.dataset.number);
    symBtnLevel = item;
    // console.log(symBtnLevel.dataset.number);
    clear_ledOn();
    startWork();
    remove_border_color();
    item.classList.toggle('button_gold');
    let circle = item.children;
    for (let itemCircle of circle) {
      itemCircle.classList.toggle('border_color');
    }
  }
};

// ФУНКЦИЯ remove border_color
let remove_border_color = function () {
  for (let item of circles) {
    item.classList.remove('border_color');
  }
  for (let item of buttons) {
    item.classList.remove('button_gold');
  }
}

//функция подсветки голубым
for (let item of keys) {
  item.onclick = function () {
    item.classList.toggle('ledON');
    finderLed();
  }
};

//функция очистки клавиш
let clear_ledOn = function () {
  for (let item of keys) {
    item.classList.remove('ledON');
    item.classList.remove('ledWin');
  };
};

//повторяющиеся число
let ti_repeat_one = 0;
let ti_repeat_two = 0;

// ФУНКЦИЯ РАНДОМНОЕ ЧИСЛО
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }

Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  };

  return this;
};

// console.log('YYYYEEESSS')
let startNoteArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
startNoteArr.shuffle();
// ФУНКЦИЯ ПОДСВЕТКИ СТАРТОВОЙ ОКТАВЫ, ПРИСВОЕНИЕ ИСХОДНЫХ ЦИФР
let startWork = function () {
  clear_ledOn();
  let startOneNote;

  if (startNoteArr.length > 0) {
    let x = startNoteArr.shift();
    startOneNote = Number(x);
    console.log(startOneNote);
  } else {
    startNoteArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    startNoteArr.shuffle();
    let x = startNoteArr.shift();
    startOneNote = Number(x);
    console.log('пересборка');
  }


  ti_repeat_one = startOneNote;
  // console.log(ti_repeat_one + '=' + ti_repeat_two);
  let startTwoNote = startOneNote + 12;
  keys[startOneNote].classList.toggle('ledON');

  ti = startOneNote;

  // СИММЕТРИИ
  if (symBtnLevel.dataset.number == 'symmetry2') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 7), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'symmetry3') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 9), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'symmetry4') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 7), (ti + 10), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'symmetry6') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 11), (ti + 13)];
  };

  // КОМБИНАЦИИ ЦЕЛОТОНОВЫХ ГАММ
  if (symBtnLevel.dataset.number == 'melodic_minor') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'ionian') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'lydian') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'lydian_aug') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 10), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'WH') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 10), (ti + 12)];
  }

  // ТЕТРАХОРДЫ
  if (symBtnLevel.dataset.number == 'maj_tetrachord') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6)];
  }
  if (symBtnLevel.dataset.number == 'min_tetrachord') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6)];
  }
  if (symBtnLevel.dataset.number == 'frig_tetrachord') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 4), (ti + 6)];
  }
  if (symBtnLevel.dataset.number == 'harm_tetrachord') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 5), (ti + 6)];
  }
  if (symBtnLevel.dataset.number == 'whole_tetrachord') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7)];
  }

  // ТРЕЗВУЧИЯ
  if (symBtnLevel.dataset.number == 'aug_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 9)];
  }
  if (symBtnLevel.dataset.number == 'maj_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'min_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'dim_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 7)];
  }
  if (symBtnLevel.dataset.number == 'maj_add6_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 8), (ti + 10)];
  }
  if (symBtnLevel.dataset.number == 'min_add6_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 8), (ti + 10)];
  }
  if (symBtnLevel.dataset.number == 'sus2_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'sus4_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 6), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'maj_add2_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'min_add2_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'maj_add4_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 6), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'min_add4_triads') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 6), (ti + 8)];
  }

  //ИНТЕРВАЛЫ
  if (symBtnLevel.dataset.number == 'm2') {
    symBtnLevelGO = [(ti + 1), (ti + 2)];
  }
  if (symBtnLevel.dataset.number == 'B2') {
    symBtnLevelGO = [(ti + 1), (ti + 3)];
  }
  if (symBtnLevel.dataset.number == 'm3') {
    symBtnLevelGO = [(ti + 1), (ti + 4)];
  }
  if (symBtnLevel.dataset.number == 'B3') {
    symBtnLevelGO = [(ti + 1), (ti + 5)];
  }
  if (symBtnLevel.dataset.number == 'ch4') {
    symBtnLevelGO = [(ti + 1), (ti + 6)];
  }
  if (symBtnLevel.dataset.number == 'TTT') {
    symBtnLevelGO = [(ti + 1), (ti + 7)];
  }
  if (symBtnLevel.dataset.number == 'ch5') {
    symBtnLevelGO = [(ti + 1), (ti + 8)];
  }
  if (symBtnLevel.dataset.number == 'm6') {
    symBtnLevelGO = [(ti + 1), (ti + 9)];
  }
  if (symBtnLevel.dataset.number == 'B6') {
    symBtnLevelGO = [(ti + 1), (ti + 10)];
  }
  if (symBtnLevel.dataset.number == 'm7') {
    symBtnLevelGO = [(ti + 1), (ti + 11)];
  }
  if (symBtnLevel.dataset.number == 'B7') {
    symBtnLevelGO = [(ti + 1), (ti + 12)];
  }

  // диатоника мажора
  if (symBtnLevel.dataset.number == 'TTT_&_maj') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'maj_&_maj') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'maj_&_min') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'min_&_min') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'min_&_frig') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'frig_&_frig') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'frig_&_TTT') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 11), (ti + 13)];
  }

  // диатоника мелодического минора
  if (symBtnLevel.dataset.number == 'min_&_maj') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'frig_&_min') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'TTTT_&_maj') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 10), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'TTT_&_min') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'maj_&_frig') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'min_&_TTT') {
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'frig_&_TTTT') {
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 4), (ti + 5), (ti + 7), (ti + 9), (ti + 11), (ti + 13)];
  }

  // искусственные лады
  if (symBtnLevel.dataset.number == 'iscustv_melodic_minor') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'iscustv_minor_harmony') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'iscustv_major_harmony') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'iscustv_major_melodic') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)];
  }
  if (symBtnLevel.dataset.number == 'iscustv_2_major_harmony') {
    keys[startTwoNote].classList.toggle('ledON');
    symBtnLevelGO = [(ti + 1), (ti + 2), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)];
  }

  if (symBtnLevel.dataset.number == 'maj_aug_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 9), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'maj_original_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 8), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'seventh_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 5), (ti + 8), (ti + 11)];
  }
  if (symBtnLevel.dataset.number == 'minor_maj_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 8), (ti + 12)];
  }
  if (symBtnLevel.dataset.number == 'minor_seventh_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 8), (ti + 11)];
  }
  if (symBtnLevel.dataset.number == 'half_diminished_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 7), (ti + 11)];
  }
  if (symBtnLevel.dataset.number == 'diminished_chord') {
    symBtnLevelGO = [(ti + 1), (ti + 4), (ti + 7), (ti + 10)];
  }

};

//ПОИСК ВЫБРАННЫХ ЭЛЕМЕНТОВ
let finderLed = function () {
  let ledElement = document.querySelectorAll('.ledON');
  let answer = [];
  for (let i = 0; i < ledElement.length; i++) {
    answer.push(ledElement[i].dataset.number)
  };
  answerArr = ledElement;
  sravniElem(answer, symBtnLevelGO);
  return ledElement;
};

let big_number = 0;
let fakty_window = document.querySelector('.fakty_window');
let displayNone = function () {
  fakty_window.style.display = 'none';
}
fakty_window.addEventListener("click", displayNone);
faktyArr.shuffle()




// ПРОВЕРКА ОТВЕТА - СРАВНЕНИЕ
let sravniElem = function (a, b) {
  let sovpadeniya = 0;

  for (i = 0; a[i] == b[i] && i < a.length; i++) {
    if (a[i] == b[i]) {
      sovpadeniya += 1
    };
  }

  if (a.length == b.length && a.length == sovpadeniya) {
    // console.log('rabotaet' + sovpadeniya);
    // console.log(answerArr);
    spisokNamesForInfoMoni[symBtnLevel.dataset.number][1] += 1;
    win_ledOn(answerArr);
    setTimeout(startWork, 1000);
    big_number += 1;
    setTimeout(add_windows_facty, 1000);
  }
  // else {spisokNamesForInfoMoni[symBtnLevel.dataset.number][2] += 0.5;}

  // console.log(symBtnLevel.dataset.number);
  // console.log(spisokNamesForInfoMoni.symmetry2);
  // console.log(spisokNamesForInfoMoni)

};

let strokeFaktyDiv = document.querySelector('.stroke_fakty_monitor');
let checkBoxElem = document.querySelector('.checkbox_fakty');

checkBoxElem.onclick = function () {
  console.log(checkBoxElem.checked);
  if (checkBoxElem.checked) {
    strokeFaktyDiv.style.opacity = 1;
  } else {
    strokeFaktyDiv.style.opacity = 0;
  }

}


// функция демонстрации советов
// рандомная функция
Object.defineProperty(
  Object.prototype,
  'randElement', {
  value: function () {
    var rand = Math.floor(Math.random() * this.length);
    return this[rand];
  }
}
);

let add_windows_facty = function () {
  if (faktyAllObj[symBtnLevel.dataset.number]) {
    for (let i = 0; i < faktyAllObj[symBtnLevel.dataset.number].length; i++) {
      let item = faktyAllObj[symBtnLevel.dataset.number].randElement();
      strokeFaktyDiv.innerHTML = item.join('</br>');
    }
  }
}

//функция подсветки в случае верного ответа   
let win_ledOn = function (winArr) {
  for (let item of winArr) {
    item.classList.add('ledWin');
  };

};



// СОЗДАНИЕ СПИСКА РЕЗУЛЬТАТОВ
let popupWindow = document.querySelector('.popup');
let info_button = document.querySelector('.info_button');
let create_result = function () {

  //находим список ul

  let result_ul = document.querySelector('.result_ul');

  // создаем массив с ключами всех объектов
  let arr_info_obj = Object.keys(spisokNamesForInfoMoni);
  // console.log(spisokNamesForInfoMoni.probel)

  // очистка списка
  for (i = 0; i < Object.keys(spisokNamesForInfoMoni).length && result_ul.firstChild; i++) {
    result_ul.firstChild.remove();
  }

  // ФОРМИРОВАНИЕ СПИСКА
  for (i = 0; i < Object.keys(spisokNamesForInfoMoni).length; i++) {
    let result_ul_li = document.createElement('li');
    // console.log(spisokNamesForInfoMoni[arr_info_obj[i]][3]);
    if (spisokNamesForInfoMoni[arr_info_obj[i]][3] == 'headerOfResult') {
      // console.log(result_ul_li);
      result_ul_li.classList.add('headerOfResult');
    }
    if (spisokNamesForInfoMoni[arr_info_obj[i]][3] == 'rowBlock') {
      // console.log(result_ul_li);
      result_ul_li.classList.add('rowBlock');
    }
    result_ul_li.innerHTML = spisokNamesForInfoMoni[arr_info_obj[i]][0] + ' - ' + spisokNamesForInfoMoni[arr_info_obj[i]][1];
    result_ul.append(result_ul_li);
    // console.log('Go');
  }

  popupWindow.classList.toggle('show_result');
};

info_button.addEventListener("click", create_result);
document.querySelector('.popup-closer').onclick = () => {
  popupWindow.classList.toggle('show_result');
}

//SLIDER ZONE
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/* Set Current Slide */
let currSlide = 0;

/* define max length */
const maxSlide = slides.length;

/* Function to go to slide based on index number provided as argument  */
const goToSlide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
// goToSlide(2);

const init = function () {
  goToSlide(0);
};

init();

let popup_text = document.querySelector('.popup-text');
// console.log(popup_text);

function clock() {
  var d = new Date();
  var month_num = d.getMonth()
  var day = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря");

  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
    " г.&nbsp;&nbsp;&nbsp;Текущее время - " + hours + ":" + minutes + ":" + seconds;
  if (document.layers) {
    document.layers.doc_time.document.write(date_time);
    document.layers.doc_time.document.close();
  } else {
    document.getElementById("doc_time").innerHTML = date_time;
    setTimeout("clock()", 1000);
  }
}
clock();

let long_button = document.querySelector('.long_button');

let long_black_keys = function () {
  let arr_black_keys = document.querySelectorAll('.black_key');
  for (item of arr_black_keys) {
    item.classList.toggle('long_key');
  }
}
long_button.addEventListener("click", long_black_keys);



//таймер
let timeMinut = 1 * 0;
let monitor_footer = document.querySelector('.monitor_footer');

timer = setInterval(function () {
  seconds = timeMinut % 60 // Получаем секунды
  minutes = timeMinut / 60 % 60 // Получаем минуты
  // Условие если время закончилось то...
  if (timeMinut == 1800) {
    // Таймер удаляется
    clearInterval(timer);
    // Выводит сообщение что время закончилось
    alert("Время закончилось");
    result.style.display = 'flex';
    print_result();

  } else { // Иначе
    // Создаём строку с выводом времени
    if (seconds <= 9) {
      seconds = '0' + seconds;
    }
    let strTimer = 'время проведённое на странице ' + `0${Math.trunc(minutes)} : ${seconds}`;
    // Выводим строку в блок для показа таймера
    monitor_footer.innerHTML = strTimer;
  }
  ++timeMinut; // Уменьшаем таймер
}, 1000)


let print_result = function () {
  console.log(all_answer.length);

  result.innerHTML += '<br>' + `из ${all_answer.length} ответов`;
  result.innerHTML += '<br>' + `правильно - ${right_answer}`;
  result.innerHTML += '<br>';

}