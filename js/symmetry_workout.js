// document.oncontextmenu = cmenu;

// function cmenu() {
//   return false;
// };



let spisokNamesForInfoMoni = {
  'header_1': ['СИММЕТРИИ', ' ', 0, 'headerOfResult'],
  'symmetry_2': ['на 2ч', 0, 0],
  'symmetry_3': ['на 3ч', 0, 0],
  'symmetry_4': ['на 4ч', 0, 0],
  'symmetry_6': ['на 6ч', 0, 0],

  'header_2': ['ТЕТРАХОРДЫ', '-', 0, 'headerOfResult'],
  'maj_tetrachord': ['мажорный', 0, 0],
  'min_tetrachord': ['минорный', 0, 0],
  'frig_tetrachord': ['фригийский', 0, 0],
  'harm_tetrachord': ['гармонический', 0, 0],
  'whole_tetrachord': ['целотоновый', 0, 0, 'rowBlock'],

  'header_3': ['ИНТЕРВАЛЫ', '-', 0, 'headerOfResult'],
  'm2': ['м2', 0, 0], //left
  'm6': ['м6', 0, 0], //right
  'B2': ['Б2', 0, 0], //left
  'B6': ['Б6', 0, 0], //right
  'm3': ['м3', 0, 0], //left
  'm7': ['м7', 0, 0], //right
  'B3': ['Б3', 0, 0], //left
  'B7': ['Б7', 0, 0], //right
  'ch4': ['Ч4', 0, 0], //left
  'ch5': ['Ч5', 0, 0], //right
  'TTT': ['ТТТ', 0, 0, 'rowBlock'],


  'header_4': ['КОМБИНАЦИИ ЦЕЛОТОНОВ', '-', 0, 'headerOfResult'],
  'melodic_minor': ['2+5 ( мел минор )', 0, 0],
  'ionian': ['3+4 ( нат мажор )', 0, 0],
  'lydian': ['4+3 ( лидийский )', 0, 0],
  'lydian_aug': ['5+2 ( лидийский #5)', 0, 0],
  'WH': ['Тон-полутон', 0, 0, 'rowBlock'],

  'header_5': ['ДИАТОНИКА МАЖОРА', '-', 0, 'headerOfResult'],
  'TTT__maj': ['лидийский', 0, 0], //left
  'min__min': ['дорийский', 0, 0], //right
  'maj__maj': ['ионийский', 0, 0], //left
  'min__frig': ['эолийский', 0, 0], //right
  'maj__min': ['миксолидийский', 0, 0], //left
  'frig__frig': ['фригийский', 0, 0], //right
  'frig__TTT': ['локрийский', 0, 0, 'rowBlock'],

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
  'min__maj': ['мелодический минор', 0, 0],
  'frig__min': ['дорийский b9', 0, 0],
  'TTTT__maj': ['лидийский #5', 0, 0],
  'TTT__min': ['миксолидийский #4', 0, 0],
  'maj__frig': ['миксолидийский b6', 0, 0],
  'min__TTT': ['локрийский #2', 0, 0],
  'frig__TTTT': ['альтерированный', 0, 0, 'rowBlock'],

  'header_10': ['ДЕЛЕНИЕ на 2', '-', 0, 'headerOfResult'],
  'B2_in_2': ['Б2 на 2', 0, 0],
  'B3_in_2': ['Б3 на 2', 0, 0],
  'TTT_in_2': ['ТТТ на 2', 0, 0],
  'm6_in_2': ['m6 на 2', 0, 0],
  'm7_in_2': ['m7 на 2', 0, 0],
  'ch8_in_2': ['ч8 на 2', 0, 0],
  'B9_in_2': ['Б9 на 2', 0, 0],

  'м3_in_3': ['м3 на 3', 0, 0],
  'ТТТ_in_3': ['ТТТ на 3', 0, 0],
  'B6_in_3': ['Б6 на 3', 0, 0],
  'ch8_in_3': ['ч8 на 3', 0, 0],
};

let marker = document.querySelectorAll('.elem>p');
let clear_marker = function () {
  for (let item of marker) {
    item.innerHTML = '';
  }
};
clear_marker();

let keys = document.querySelectorAll('.key');
let elements = document.querySelectorAll('.elem');
let monitor = document.querySelector('.monitor'); //монитор
let buttons = document.querySelectorAll('.button');
let circles = document.querySelectorAll('.circle');
let answerArr;


// let symmetry_2;
// let symmetry_3;
// let symmetry_4;
// let symmetry_6;

let symBtnLevel;
let symBtnLevelGO;

// функция смены 1 блока симметрии
let clicks = 0;

let correct_answer_add = 0;
let startNoteArr;


let allHrom = document.querySelectorAll('.hrom');
allHrom.forEach(hrom => {
  hrom.addEventListener('click', function () {
    switch (clicks) {
      case 0:
        this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_null.svg';
        clicks += 1;
        break;
      case 1:
        this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_steps_1_7.svg';
        clicks = 0;
        break;
      // case 2:
      //   this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_numbers_13.svg';
      //   clicks += 1;
      //   break;
      // case 3:
      //   this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_half_tone_12.svg';
      //   clicks += 1;
      //   break;
      // case 4:
      //   this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_hromatic.svg';
      //   clicks = 0;
      //   break;
    }
  });
});


// const oneBlockFirstSlide = document.querySelector('.hrom');
// oneBlockFirstSlide.onclick = function () {
//   switch (clicks) {
//     case 0:
//       this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_null.svg';
//       clicks += 1;
//       break;
//     case 1:
//       this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_hromatic.svg';
//       clicks += 1;
//       break;
//     case 2:
//       this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_numbers_13.svg';
//       clicks += 1;
//       break;
//     case 3:
//       this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_half_tone_12.svg';
//       clicks += 1;
//       break;
//     case 4:
//       this.childNodes[1].src = '/image/Symmetry/1_1_1_1_1_1_1_1_1_1_1_1_top_steps_1_7.svg';
//       clicks = 0;
//       break;
//   }
// }

// создание 12 элементов внутри грид блока
let arr_element_position_for_column = {
  // симметрии
  symmetry_2: ['C D E G A', 'F B', 'Db Eb Gb Ab Bb'],
  symmetry_3: ['C F G 0 E A B', 'Db Eb Ab 0 D Gb Bb'],
  symmetry_4: ['C Eb Gb A', 'Db E G Bb', 'D F Ab B'],
  symmetry_6: ['C D E Gb Ab Bb', 'Db Eb F G A B'],
  // интервалы
  m2: ['C D F G A', 'E B 0 Db Eb Gb Ab Bb'],
  B2: ['C D F G A 0 E B', 'Db Gb Ab 0 Eb Bb'],
  m3: ['D E A B 0 Eb Bb', 'C F G 0 Db Gb Ab'],
  B3: ['C F G 0 D E A B', 'Db Eb Ab Bb 0 Gb'],
  ch4: ['C D E G A B 0 F', 'Db Eb Ab Bb 0 Gb'],
  TTT: ['C D E G A', 'F B 0 Db Eb Gb Ab Bb'],
  ch5: ['C D E F G A 0 B', 'Db Eb Gb Ab 0 Bb'],
  m6: ['E A B 0 C D F G', 'Db Eb Gb Ab 0 Bb'],
  B6: ['C D F G 0 E A B', 'Db Gb 0 Eb Ab Bb'],
  m7: ['D E G A B 0 C F', 'Db Gb 0 Eb Ab Bb'],
  B7: ['D E G A B 0 C F', 'Db Eb Gb Ab Bb'],
  // тетрахорды
  maj_tetrachord: ['C G 0 D A 0 E B', 'Db Ab 0 Eb Bb 0 F Gb'],
  min_tetrachord: ['C G 0 D A 0 E B', 'Db Ab 0 Eb Bb 0 F Gb'],
  frig_tetrachord: ['C G 0 D A 0 E B', 'Db Ab 0 Eb Bb 0 F Gb'],
  harm_tetrachord: ['C G 0 D A 0 E B', 'Db Ab 0 Eb Bb 0 F Gb'],
  whole_tetrachord: ['C G 0 D A 0 E B', 'Db Ab 0 Eb Bb 0 F Gb'],
  // диатоника мажора
  TTT__maj: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  min__min: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  maj__maj: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  min__frig: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  maj__min: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  frig__frig: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  frig__TTT: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  // комб целотонов
  melodic_minor: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  ionian: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  lydian: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  lydian_aug: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  WH: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  // искусственные гаммы
  iscustv_melodic_minor: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  iscustv_minor_harmony: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  iscustv_major_harmony: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  iscustv_major_melodic: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  iscustv_2_major_harmony: ['C G D A E B', 'Gb Db Ab Eb Bb F'],
  // трезвучия
  aug_triads: ['C D E Gb Ab Bb', 'Db Eb F G A B'],
  maj_triads: ['C F G 0 D E A', 'Gb Bb B 0 Db Eb Ab'],
  min_triads: ['C F G 0 D E A', 'Eb Bb B 0 Db Gb Ab'],
  dim_triads: ['C Eb Gb A', 'Db E G Bb', 'D F Ab B'],
  maj_add6_triads: ['C F G 0 D 0 E A', 'Gb Bb B 0 Db 0 Eb Ab'],
  min_add6_triads: ['C F G 0 D 0 E A', 'Eb Bb B 0 Db Gb 0 Ab'],
  sus2_triads: ['C D F G A 0 E', 'Db Gb Ab 0 Bb B 0 Eb'],
  sus4_triads: ['C F G 0 D E A', 'Gb Bb B 0 Db Eb Ab'],
  maj_add2_triads: ['C F G 0 D E A', 'Gb Bb B 0 Db Eb Ab'],
  min_add2_triads: ['C F G 0 D E A', 'Eb Bb B 0 Db Gb Ab'],
  maj_add4_triads: ['C F G 0 D E A', 'Gb Bb B 0 Db Eb Ab'],
  min_add4_triads: ['C F G 0 D E A', 'Eb Bb B 0 Db Gb Ab'],
  // септ-аккорды
  maj_aug_chord: ['C F 0 Db Eb Ab 0 E A B', 'D 0 Gb 0 G 0 Bb'],
  maj_original_chord: ['D E A 0 Gb G Bb B', 'C F 0 Db 0 Eb 0 Ab'],
  seventh_chord: ['C F 0 D E A 0 Eb Ab', 'Db 0 Gb 0 G 0 Bb 0 B'],
  minor_maj_chord: ['C F 0 D E A 0 Db Gb Ab', 'Eb 0 G 0 Bb 0 B'],
  minor_seventh_chord: ['D E A 0 C F 0 Db Gb', 'Eb 0 G 0 Ab 0 Bb 0 B'],
  half_diminished_chord: ['D E A 0 Db Gb 0 Eb Bb', 'C 0 F 0 G 0 Ab 0 B'],
  diminished_chord: ['C Eb Gb A', 'Db E G Bb', 'D F Ab B'],
  // деление на 2ч
  B2_in_2: ['C D F G A 0 E B', 'Db Gb Ab 0 Eb Bb'],
  B3_in_2: ['C F G 0 Db Ab 0 Gb', 'D A 0 Eb Bb 0 E B'],
  TTT_in_2: ['C G 0 D E A 0 F', 'Db Gb 0 Eb Bb 0 B'],
  m6_in_2: ['C D E Gb Ab Bb', 'Db Eb F G A B'],
  m7_in_2: ['D E G A B', 'Eb Ab Bb', 'C Db F Gb'],
  ch8_in_2: ['C D E G A', 'F B', 'Db Eb Gb Ab Bb'],
  B9_in_2: ['C D F G A', 'Db Gb Ab', 'Eb E 0 Bb B'],
  // деление на 3ч
  м3_in_3: ['Eb Bb 0 C F G 0 D A', 'Db Gb Ab 0 E B'],
  ТТТ_in_3: ['C D E Gb Ab Bb', 'Db Eb F G A B'],
  B6_in_3: ['C Eb Gb A', 'Db E G Bb', 'D F Ab B'],
  ch8_in_3: ['C D E Gb Ab Bb', 'Db Eb F G A B'],
};

let rus_name_obj = {
  'C': 'ДО',
  'Db': 'РЕb',
  'D': 'РЕ',
  'Eb': 'МИb',
  'E': 'МИ',
  'F': 'ФА',
  'Gb': 'СОЛЬb',
  'G': 'СОЛЬ',
  'Ab': 'ЛЯb',
  'A': 'ЛЯ',
  'Bb': 'СИb',
  'B': 'СИ',
}


let matrix_keyb_string = 'w b w b w w b w b w b w w b w b w w b w b w b w w';
let matrix_keyb_arr = matrix_keyb_string.split(' ');

let name_keyb_string = '3C 3Db 3D 3Eb 3E 3F 3Gb 3G 3Ab 3A 3Bb 3B 4C 4Db 4D 4Eb 4E 4F 4Gb 4G 4Ab 4A 4Bb 4B 5C';
let name_keyb_arr = name_keyb_string.split(' ');
let close_container;
let matrix_container = document.querySelector('.matrix_container');
let create_12_elem = function () {
  // create_shuffle_arr();
  correct_answer_add = 0;
  matrix_container.innerHTML = '';
  let new_column_for_12_elem;

  if (symBtnLevel && arr_element_position_for_column[symBtnLevel.dataset.number]) {

    // console.log(ti);
    // console.log(symBtnLevelGO);

    arr_element_position_for_column[symBtnLevel.dataset.number];
    for (item of arr_element_position_for_column[symBtnLevel.dataset.number]) {
      new_column_for_12_elem = document.createElement('div');
      new_column_for_12_elem.classList.add('new_column_for_12_elem')
      new_column_for_12_elem.dataset.matrix = item;
      let shablon_for_square_item = new_column_for_12_elem.dataset.matrix.split(' ');
      // console.log(shablon_for_square_item);

      for (let i = 0; i < shablon_for_square_item.length; i++) {
        let item_in_column = document.createElement('div');
        item_in_column.classList.add(shablon_for_square_item[i]);

        //лэйбл для строки
        let new_label = document.createElement('p');
        new_label.textContent = rus_name_obj[shablon_for_square_item[i]];
        new_label.classList.add('font_opus_std');
        item_in_column.append(new_label);

        item_in_column.classList.add('item_in_column');
        if (shablon_for_square_item[i] == 0) {
          item_in_column.classList.add('opacity_null');
        }

        // создание кругов внутри элемента
        for (let j = 0; j < matrix_keyb_arr.length; j++) {
          let piano_circle_elem = document.createElement('div');
          piano_circle_elem.classList.add('item_circle');
          switch (matrix_keyb_arr[j]) {
            case 'w':
              piano_circle_elem.classList.add('white_circle');
              break;
            case 'b':
              piano_circle_elem.classList.add('black_circle');
              break;
          }
          piano_circle_elem.dataset.note = name_keyb_arr[j];
          piano_circle_elem.dataset.note_orig = name_keyb_arr[j].slice(1, 3);
          item_in_column.append(piano_circle_elem);
        }

        // создание дополнительного элемента
        if (shablon_for_square_item[i] == 'B' && symBtnLevel.dataset.number == 'B9_in_2') {
          let piano_circle_elem = document.createElement('div');
          piano_circle_elem.classList.add('item_circle');
          piano_circle_elem.classList.add('black_circle');
          piano_circle_elem.dataset.note = '5Db';
          piano_circle_elem.dataset.note_orig = 'Db';
          item_in_column.append(piano_circle_elem);
          keys.forEach((e) => {
            if (e.dataset.note == '5Db') {
              e.classList.remove('hide')
              console.log(e);
            }
          })
          // console.log('dop_element_B');
          // console.log(symBtnLevel);
        }


        new_column_for_12_elem.append(item_in_column);
      }
      matrix_container.append(new_column_for_12_elem);
    }
  }

  close_container = document.createElement('div');
  close_container.classList.add('close_container');
  close_container.innerHTML = '+';
  close_container.addEventListener("click", matrix_button_go);
  matrix_container.append(close_container);
}

//ВЫБОР РЕЖИМА РАНДОМ
// let symmetryNameArr = [symmetry_2, symmetry_3, symmetry_4, symmetry_6];
// let startSymmetry = getRandomIntInclusive(0,3);

//запуск при нажатии на кнопку выбранного режима
for (let item of buttons) {

  item.onclick = function () {

    symBtnLevel = item;

    // скрыть дополнительную клавишу
    // console.log(symBtnLevel);
    if (keys[25].dataset.note == '5Db' && !keys[25].classList.contains('hide')) {
      keys[25].classList.add('hide')
      // console.log(keys[25]);
    }

    let circle = item.children;
    for (let itemCircle of circle) {
      itemCircle.classList.toggle('border_color');
    }
    if (!item.classList.contains('button_gold')) {
      create_12_elem();
      create_shuffle_arr();
    }

    remove_border_color();
    item.classList.add('button_gold');
    // create_12_elem();
    // create_shuffle_arr();


    clear_ledOn();
    startWork();

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
    // console.log(item);
    // playNotesAnsver(item);
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
let create_shuffle_arr = function () {
  startNoteArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  startNoteArr.shuffle();
  console.log('пересборка');
}
create_shuffle_arr();


let label_stage_arr = ['1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1']
let label_checkbox = document.querySelector('.label_checkbox');
label_checkbox.onclick = function () {
  if (!label_checkbox.checked) {
    clear_marker();
  } else {
    add_label_checkbox(ti);
  }
};

let add_label_checkbox = function (start_ti) {
  if (label_checkbox.checked) {
    clear_marker();
    let jundex = 0;
    for (let i = start_ti; i < label_stage_arr.length + start_ti; i++) {
      // console.log(i);
      keys[i].children[0].innerHTML = label_stage_arr[jundex];
      jundex++;
    }
  }
}

// console.log('YYYYEEESSS')


// ФУНКЦИЯ ПОДСВЕТКИ СТАРТОВОЙ ОКТАВЫ, ПРИСВОЕНИЕ ИСХОДНЫХ ЦИФР ==============================================================================
let startOneNote;
let x;
let timer_for_all_12_correct_answer;
// let ti;
let startWork = function (ti) {
  clear_ledOn();
  if (startNoteArr.length > 0) {
    x = startNoteArr.shift();
    startOneNote = Number(x);
  } else {
    create_shuffle_arr();
    x = startNoteArr.shift();
    startOneNote = Number(x);
    // setTimeout(create_12_elem, 3000);
    timer_for_all_12_correct_answer = true;
  }
  ti_repeat_one = startOneNote;
  let startTwoNote = startOneNote + 12;
  keys[startOneNote].classList.toggle('ledON');
  ti = startOneNote;
  add_label_checkbox(ti);
  add_windows_facty();
  create_sphere(string_to_arr(all_balls_obj[symBtnLevel.dataset.number]));
  full_answer(ti, keys[startTwoNote]);
  symBtnLevelGO = full_answer_obj[symBtnLevel.dataset.number];
  if (two_note_obj[symBtnLevel.dataset.number] === true) {
    keys[startTwoNote].classList.toggle('ledON');
  }
  if (typeof two_note_obj[symBtnLevel.dataset.number] == 'number') {
    startTwoNote = startOneNote + two_note_obj[symBtnLevel.dataset.number];
    keys[startTwoNote].classList.toggle('ledON');
  }
};



//ПОИСК ВЫБРАННЫХ ЭЛЕМЕНТОВ ============================================================================================================
let ledElement;
let answer;
let finderLed = function () {
  if (timer_for_all_12_correct_answer) {
    create_12_elem();
    timer_for_all_12_correct_answer = false;
  }
  ledElement = document.querySelectorAll('.ledON');
  answer = [];
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


// добавление подсветки пройденным элементам ===========================================================

let add_correct_answer_for_matrix = function () {
  let length_block_circle = 0;
  let start_answer_note = answerArr[0].dataset.note;
  let item_in_matrix = document.querySelectorAll('.item_in_column');
  let plus_elem_arr = ['3C', '3D', '3E', '3Gb', '3Ab', '3Bb', '4C', '4D', '4E', '4Gb', '4Ab', '4Bb'];
  let ball_elem_arr = ['3Db', '3Eb', '3F', '3G', '3A', '3B', '4Db', '4Eb', '4F', '4G', '4A', '4B', '5Db'];
  let black_key_circle = ['3Db', '3Eb', '3Gb', '3Ab', '3Bb', '4Db', '4Eb', '4Gb', '4Ab', '4Bb'];
  let white_key_circle = ['3C', '3D', '3E', '3F', '3G', '3A', '3B', '4C', '4D', '4E', '4F', '4G', '4A', '4B'];
  start_answer_note = start_answer_note.slice(1);
  for (item of item_in_matrix) {
    if (item.classList.contains(start_answer_note)) {
      item.classList.add('correct_answer');
      correct_answer_add++;
      for (answ_item of answerArr) {
        for (let mini_circle of item.children) {
          if (mini_circle.dataset.note == answ_item.dataset.note) {
            switch (symBtnLevel.dataset.number) {
              case 'symmetry_2':
              case 'symmetry_3':
              case 'symmetry_6':
              case 'melodic_minor':
              case 'ionian':
              case 'lydian':
              case 'lydian_aug':
              case 'WH':
              case 'B3_in_2':
              case 'm6_in_2':
              case 'aug_triads':
              case 'ch8_in_2':
              case 'ТТТ_in_3':
              case 'ch8_in_3':
              case 'B2':
              case 'B3':
              case 'TTT':
              case 'm6':
              case 'm7':
                // console.log(mini_circle);
                if (plus_elem_arr.includes(mini_circle.dataset.note)) {
                  mini_circle.classList.add('active_mini_circle_plus');
                }
                if (ball_elem_arr.includes(mini_circle.dataset.note)) {
                  mini_circle.classList.add('active_mini_circle_ball');
                }
                break;

              case 'whole_tetrachord':
                mini_circle.classList.add('active_mini_circle_TTT');
                break;
              case 'maj_tetrachord':
                mini_circle.classList.add('active_mini_circle_maj');
                break;
              case 'min_tetrachord':
                mini_circle.classList.add('active_mini_circle_min');
                break;
              case 'frig_tetrachord':
                mini_circle.classList.add('active_mini_circle_frig');
                break;
              case 'harm_tetrachord':
                mini_circle.classList.add('active_mini_circle_harm');
                break;

              case 'TTT__maj':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_TTT');
                } else {
                  mini_circle.classList.add('active_mini_circle_maj');
                }
                break;

              case 'maj__maj':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_maj');
                } else {
                  mini_circle.classList.add('active_mini_circle_maj');
                }
                break;

              case 'maj__min':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_maj');
                } else {
                  mini_circle.classList.add('active_mini_circle_min');
                }
                break;

              case 'min__min':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_min');
                } else {
                  mini_circle.classList.add('active_mini_circle_min');
                }
                break;

              case 'min__frig':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_min');
                } else {
                  mini_circle.classList.add('active_mini_circle_frig');
                }
                break;

              case 'frig__frig':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_frig');
                } else {
                  mini_circle.classList.add('active_mini_circle_frig');
                }
                break;

              case 'frig__TTT':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_frig');
                } else {
                  mini_circle.classList.add('active_mini_circle_TTT');
                }
                break;

              case 'iscustv_melodic_minor':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_min');
                } else {
                  mini_circle.classList.add('active_mini_circle_maj');
                }
                break;

              case 'iscustv_minor_harmony':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_min');
                } else {
                  mini_circle.classList.add('active_mini_circle_harm');
                }
                break;

              case 'iscustv_major_harmony':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_maj');
                } else {
                  mini_circle.classList.add('active_mini_circle_harm');
                }
                break;

              case 'iscustv_major_melodic':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_maj');
                } else {
                  mini_circle.classList.add('active_mini_circle_frig');
                }
                break;

              case 'iscustv_2_major_harmony':
                if (length_block_circle < 4) {
                  mini_circle.classList.add('active_mini_circle_harm');
                } else {
                  mini_circle.classList.add('active_mini_circle_harm');
                }
                break;

              default:

                mini_circle.classList.add('active_mini_circle');
                // if (black_key_circle.includes(mini_circle.dataset.note)) {
                //   mini_circle.classList.add('active_mini_circle_black');
                // }
                // if (white_key_circle.includes(mini_circle.dataset.note)) {
                //   mini_circle.classList.add('active_mini_circle_white');
                // }
                break;

            }
            length_block_circle++;
          }
        }
      }
    }
  }
}

let matrix_button_go = function () {
  matrix_container.classList.toggle('hide');
}
let matrix_button = document.querySelector('.matrix_button');
matrix_button.addEventListener("click", matrix_button_go);
// close_container = document.querySelector('.close_container');



// ПРОВЕРКА ОТВЕТА - СРАВНЕНИЕ ============================================================================================================
let sravniElem = function (a, b) {
  let sovpadeniya = 0;

  for (i = 0; a[i] == b[i] && i < a.length; i++) {
    if (a[i] == b[i]) {
      sovpadeniya += 1
    };
  }

  if (a.length == b.length && a.length == sovpadeniya) {
    spisokNamesForInfoMoni[symBtnLevel.dataset.number][1] += 1;
    win_ledOn(answerArr);
    setTimeout(startWork, 1000);
    big_number += 1;
    setTimeout(add_windows_facty, 1000);
    playArray(answerArr);
    add_correct_answer_for_matrix();
  }
  // else {spisokNamesForInfoMoni[symBtnLevel.dataset.number][2] += 0.5;}
};

// let strokeFaktyDiv = document.querySelector('.stroke_fakty_monitor');
let container_monitor = document.querySelector('.container_monitor');
let checkBoxElem = document.querySelector('.checkbox_fakty');

checkBoxElem.onclick = function () {
  // console.log(checkBoxElem.checked);
  container_monitor.classList.toggle('show');
  // if (checkBoxElem.checked) {

  // } else {
  //   container_monitor.style.opacity = 0;
  // }

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
      container_monitor.innerHTML = item.join('</br>');
    }
  }
}

//функция подсветки в случае верного ответа   
let win_ledOn = function (winArr) {
  for (let item of winArr) {
    item.classList.add('ledWin');
  };
};



// СОЗДАНИЕ СПИСКА РЕЗУЛЬТАТОВ ============================================================================================================
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
// document.querySelector('.popup-closer').onclick = () => {
//   popupWindow.classList.toggle('show_result');
// }
document.querySelector('.popup-content').onclick = () => {
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

// ФУНКЦИЯ ПОДСВЕТКИ КЛАВИШ ЦЕЛОТОНОМ

// создание внутренних дивов
for (let item of elements) {
  let newDivBlock = document.createElement('div');
  item.append(newDivBlock);
}



// добавление целотоновых звукорядов
let addElementsWToneLabel = function () {

  for (let item of elements) {
    item.childNodes[3].classList.remove('DIM_znak1', 'DIM_znak2', 'DIM_znak3');
    if (item.dataset.number % 2 != 0) {
      item.childNodes[3].classList.toggle('WT_PLUS');
    } else {
      item.childNodes[3].classList.toggle('WT_CIRCLE');
    }
  }
}
document.querySelector('.WT_button').onclick = addElementsWToneLabel;

// добавление уменьшённых симметрий
let addElementsDimToneLabel = function () {

  for (let item of elements) {
    item.childNodes[3].classList.remove('WT_PLUS', 'WT_CIRCLE');
    // console.log(item.dataset.number)
    switch (item.dataset.number) {
      case '1':
      case '4':
      case '7':
      case '10':
      case '13':
      case '16':
      case '19':
      case '22':
      case '25':
        item.childNodes[3].classList.toggle('DIM_znak1');
        break;
      case '2':
      case '5':
      case '8':
      case '11':
      case '14':
      case '17':
      case '20':
      case '23':
        item.childNodes[3].classList.toggle('DIM_znak2');
        break;
      case '3':
      case '6':
      case '9':
      case '12':
      case '15':
      case '18':
      case '21':
      case '24':
        item.childNodes[3].classList.toggle('DIM_znak3');
        break;
    }

  }
}

document.querySelector('.DIM_button').onclick = addElementsDimToneLabel;

//добавление лейблов ступеней
let addStageLabel = function () {
  console.log()
}


// Listen for orientation changes
window.addEventListener("orientationchange", function () {
  // Announce the new orientation number
  // alert(window.orientation);
  if (window.orientation == 0) {
    this.alert('ПОВЕРНИТЕ УСТРОЙСТВО В ГОРИЗОНТАЛЬНЫЙ РЕЖИМ');
  }

}, false);


// озвучка правильного ответа
// const audioAll = document.querySelectorAll('audio');
// let audio = new Audio();

let soundON = true;

function playArray(newArray) {
  if (soundON) {
    let list = Array.from(newArray);
    let audioElements = [];
    let int = 1;
    for (let i = 0; i < list.length; i++) {
      let audio = new Audio(list[i].dataset.src);
      audioElements.push(audio);
      setTimeout(function () {
        audioElements[i].play()
      }, int * 300);
      int += 1;
    }
  }
}

document.querySelector('.audio_button').onclick = function () {
  this.classList.toggle('noSound');
  soundON = soundON ? false : true;
}
let balls_container = document.querySelector('.container_balls');
document.querySelector('.balls_button').onclick = function () {
  balls_container.classList.toggle('show_flex');
}

