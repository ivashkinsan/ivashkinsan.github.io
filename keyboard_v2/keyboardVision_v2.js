let section = document.querySelector('.section'); //секция для клавиатуры
let monitor = document.querySelector('.monitor'); //монитор
let monitor_2 = document.querySelector('.monitor_2'); //монитор 2
let elements = document.querySelectorAll('.elem');
let key = document.querySelectorAll('.key'); //клавиши фортепиано
let buttons = document.querySelectorAll('.btn_gamma')
let buttons_34 = document.querySelectorAll('.maj_34')
let massive = 0;
let wholeToneBoolean = true;
let x_item_led_boolean;
let circle_led_boolean;
let all_key_for_sound = document.querySelectorAll('.key');
let all_audio_elem = document.querySelectorAll('audio');
let array_of_nodelist = [...all_audio_elem];

let notes_123 = document.querySelector('.notes_123');
//массив цифр
let notes_123_mas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1'];

let halftones = document.querySelector('.halftones');
//массив полутонов
let halftones_mas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

let wholetones = document.querySelector('.wholetones');
//массив тонов
let wholetones_mas = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0'];

let notes_Intervals = document.querySelector('.notes_Intervals');
//массив интервалов
let notes_Intervals_mas = ['ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1'];

let notes_rim = document.querySelector('.notes_rim');
//массив римских цифр
let notes_rim_mas = ['I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I'];

let paragrNumb = document.querySelectorAll('p')
let notes_Number = document.querySelector('.notes_Number');
//массив ступеней
let notes_Number_mas = ['1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1'];

let maj_min = document.querySelector('.maj_min');
//массив маж-мин
let maj_min_mas = ['+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+'];

let extensions = document.querySelector('.extensions');
//массив надстроек
let extensions_mas = ['1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1'];

let chords = document.querySelector('.chords');
//массив аккордов
let chords_mas = ['(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)'];

let relative = document.querySelector('.relative');
//массив релятив
let relative_mas = ['ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё'];

//цвета релятив
let color = ['#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00'];

let relative_center = document.querySelector('.relative_center');
//массив релятив центр
let relative_center_mas = ['ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо'];

//цвета релятив
let color_center = ['#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32'];


let wholetoneButtonX = document.querySelector('.wholetoneX'); //кнопка целотон X
let wholetoneButtonY = document.querySelector('.wholetoneY'); //кнопка целотон Y
let wholetoneButtonXY = document.querySelector('.wholetoneXY'); //кнопка целотон XY
let whole_and_half_step_1 = document.querySelector('.whole_and_half_step_1');
let whole_and_half_step_2 = document.querySelector('.whole_and_half_step_2');
let whole_and_half_step_3 = document.querySelector('.whole_and_half_step_3');
let symmetric_1 = document.querySelector('.symmetric_1');
let symmetric_2 = document.querySelector('.symmetric_2');
let symmetric_3 = document.querySelector('.symmetric_3');
let clear = document.querySelector('.clear'); //кнопка очистки
let oneDable = document.querySelector('.oneDable'); //кнопка второй октавы
let keyboard_add2 = document.querySelector('.add2'); //блок второй октавы
let keyboard_add3 = document.querySelector('.add3'); //блок второй октавы
let keyHide = document.querySelector('.key_hide'); //лишняя клавиша



let five_Black = {
    'C': ['b2', 'b3', 'b5', 'b6', 'b7'],
    'Db': ['1', '2', '4', '5', '6', '8'],
    'D': ['7', 'b2', '3', 'b5', 'b6'],
    'Eb': ['b7', '1', 'b3', '4', '5', '8'],
    'E': ['6', '7', '2', '3', 'b5'],
    'F': ['b6', 'b7', 'b2', 'b3', '4'],
    'Gb': ['5', '6', '1', '2', '3', '8'],
    'G': ['b5', 'b6', '7', 'b2', 'b3'],
    'Ab': ['4', '5', 'b7', '1', '2', '8'],
    'A': ['3', 'b5', '6', '7', 'b2'],
    'Bb': ['b3', '4', 'b6', 'b7', '1', '8'],
    'B': ['2', '3', '5', '6', '7']
};

let noteName = [
    ['C', 'Db', 'D', 'Eb', 'E', 'F', 'TTT', 'G', 'Ab', 'A', 'Bb', 'B', 'C'],
    ['реb', 'миbb', 'миb', 'фаb', 'фа', 'сольb', 'TTT', 'ляb', 'сиbb', 'сиb', 'доb', 'до', 'реb'],
    ['ре', 'миb', 'ми', 'фа', 'фа#', 'соль', 'TTT', 'ля', 'сиb', 'си', 'до', 'до#', 'ре'],
    ['миb', 'фаb', 'фа', 'сольb', 'соль', 'ляb', 'TTT', 'сиb', 'доb', 'до', 'реb', 'ре', 'миb'],
    ['ми', 'фа', 'фа#', 'соль', 'соль#', 'ля', 'TTT', 'си', 'до', 'до#', 'ре', 'ре#', 'ми'],
    ['фа', 'сольb', 'соль', 'ляb', 'ля', 'сиb', 'TTT', 'до', 'реb', 'ре', 'миb', 'ми', 'фа'],
    ['сольb', 'ляbb', 'ляb', 'сиbb', 'сиb', 'доb', 'TTT', 'реb', 'миbb', 'миb', 'фаb', 'фа', 'сольb'],
    ['соль', 'ляb', 'ля', 'сиb', 'си', 'до', 'TTT', 'ре', 'миb', 'ми', 'фа', 'фа#', 'соль'],
    ['ляb', 'сиbb', 'сиb', 'доb', 'до', 'реb', 'TTT', 'миb', 'фаb', 'фа', 'сольb', 'соль', 'ляb'],
    ['ля', 'сиb', 'си', 'до', 'до#', 'ре', 'TTT', 'ми', 'фа', 'фа#', 'соль', 'соль#', 'ля'],
    ['сиb', 'доb', 'до', 'реb', 'ре', 'миb', 'TTT', 'фа', 'сольb', 'соль', 'ляb', 'ля', 'сиb'],
    ['си', 'до', 'до#', 'ре', 'ре#', 'ми', 'TTT', 'фа#', 'соль', 'соль#', 'ля', 'ля#', 'си']
];




oneDable.onclick = function () {
    keyboard_add3.classList.toggle('hideClass');
    // keyHide.classList.toggle('key_hide');
    // let newElement = keyboard_add.cloneNode(true);
    // console.log(newElement);
    // console.log(section);
    // section.append(newElement);
    // onload = workCode;
};

//функция подсветки голубым
for (let circle of key) {
    circle.onclick = function () {
        circle.classList.toggle('ledON');

        let finderLed = function (ledElement) {
            ledElement = document.querySelectorAll('.ledON');
            return ledElement;
        }
        monitor.textContent = '';
        monitor_2.textContent = '';
        for (let i = 0; i < finderLed().length; i++) {

            monitor.textContent += finderLed()[i].dataset.number + ' ';
        };
        // let perem = monitor.textContent;
        let poisk = ident.find(item => item.key == monitor.textContent);
        if (poisk) {
            monitor.textContent = poisk.name;
            monitor_2.textContent = poisk.symbol;
        };
    }
};

//функция очистки фортепианных клавиш
let clearKey = function () {
    for (let newList of key) {
        // newList.classList.remove('ledON');
        newList.classList.remove('x_item');
        newList.classList.remove('circle');

        //   newList.classList.remove('tonika');
        monitor.textContent = '';
        monitor_2.textContent = '';
    }
}

//кнопка сброс
clear.onclick = function () {
    for (let newList of key) {
        newList.classList.remove('ledON');
        newList.classList.remove('x_item');
        newList.classList.remove('circle');
        newList.classList.remove('triangle');
        newList.classList.remove('symmetric_left');
        newList.classList.remove('symmetric_right');
        monitor.textContent = '';
        monitor_2.textContent = '';
    }
};



// функция сортировки и присваивания класса black_key
var calculateMassive = function (massive) {
    // console.log(massive);
    for (let item of elements) {
        if (massive.includes(item.dataset.number)) {
            item.classList.add('black_key');
        }
    }
};
// console.log(five_Black['C']);
calculateMassive(five_Black['C']);

//нумерация клавиш цифрами
let noteLabel = function (input, output) {
    for (var i = 0; i < paragrNumb.length; i++) {
        if (input.checked == true) {
            paragrNumb[i].textContent = output[i];
            if (output[i] == "+" || output[i] == 'Б2' || output[i] == 'Б3' || output[i] == 'Б6' || output[i] == 'Б7' || output[i] == 'ч1' || output[i] == 'ч4' || output[i] == 'ч5') {
                paragrNumb[i].style.fontSize = '40px';
                paragrNumb[i].style.color = 'orange';
            } else if (output[i] == "-" || output[i] == "+/-") {
                paragrNumb[i].style.fontSize = '50px';
            } else {
                paragrNumb[i].style.fontSize = '24px';
                paragrNumb[i].style.color = 'rgb(4, 0, 255)';
            }
        } else {
            paragrNumb[i].textContent = '';
        }
    }
};

let noteLabelCenter = function (input, output) {
    for (var i = 7; i < paragrNumb.length; i++) {
        if (input.checked == true) {
            paragrNumb[i].textContent = output[i];
        } else {
            paragrNumb[i].textContent = '';
        }
    }
};
notes_Number.addEventListener('click', function () {
    // console.log('check');
    noteLabel(notes_Number, notes_Number_mas);
});

halftones.addEventListener('click', function () {
    // console.log('check');
    noteLabel(halftones, halftones_mas);
});

wholetones.addEventListener('click', function () {
    // console.log('check');
    noteLabel(wholetones, wholetones_mas);
});


notes_Intervals.addEventListener('click', function () {
    // console.log('check');
    noteLabel(notes_Intervals, notes_Intervals_mas);
});

notes_rim.addEventListener('click', function () {
    // console.log('check');
    noteLabel(notes_rim, notes_rim_mas);
});

notes_123.addEventListener('click', function () {
    // console.log('check');
    noteLabel(notes_123, notes_123_mas);
});

maj_min.addEventListener('click', function () {
    // console.log('check');
    noteLabel(maj_min, maj_min_mas);
});

extensions.addEventListener('click', function () {
    // console.log('check');
    noteLabel(extensions, extensions_mas);
});

chords.addEventListener('click', function () {
    // console.log('check');
    noteLabel(chords, chords_mas);
});

relative.addEventListener('click', function () {
    // console.log('check');
    noteLabel(relative, relative_mas);
    noteColor();
    console.log("YES");
});

relative_center.addEventListener('click', function () {
    // console.log('check');
    noteLabelCenter(relative_center, relative_center_mas);
    noteColorCenter();
    console.log("YES");
});

//расскрашивание клавиш
let noteColor = function () {
    for (var i = 0; i < key.length; i++) {
        key[i].style.backgroundColor = color[i];

    }
};

//расскрашивание клавиш
let noteColorCenter = function () {
    for (var i = 7; i < key.length; i++) {
        key[i].style.backgroundColor = color_center[i];

    }
};

//функция прорисовки ноликов и крестиков
let x_circle_function = function (x_item, circle, xxx, yyy) {
    // console.log(invert);
    if (wholeToneBoolean == true) {
        start_x = 0;
        start_circle = 1;
    } else if (wholeToneBoolean == false) {
        start_x = 1;
        start_circle = 0;
    }
    if (x_item) {
        for (let i = start_x; i <= key.length - 1; i += xxx) {
            key[i].classList.toggle('x_item');
        }
    }
    if (circle) {
        for (let i = start_circle; i <= key.length - 1; i += yyy) {
            key[i].classList.toggle('circle');
        };
    };
};

//Запуск целотоновой гаммы 1
wholetoneButtonX.onclick = function () {
    clearKey();
    x_circle_function('x_item', "", 2, 2);
    monitor.textContent = this.dataset.symbol;
    x_item_led_boolean ^= true;

    // conflict();
};
//Запуск целотоновой гаммы 2
wholetoneButtonY.onclick = function () {
    clearKey();
    x_circle_function("", 'circle', 2, 2);
    monitor.textContent = this.dataset.symbol;
    circle_led_boolean ^= true;

    // conflict();
}

//Запуск целотоновых гамм 1 и 2
wholetoneButtonXY.onclick = function () {
    clearKey();
    x_circle_function('x_item', 'circle', 2, 2);
    monitor.textContent = this.dataset.symbol;
    x_item_led_boolean ^= true;
    circle_led_boolean ^= true;
    // conflict();
};

// создаем функцию слушания клика
let keyboard_vision_tonality_count = 12;

function tonality_sound() {
    for (let i = 0; i < all_key_for_sound.length; i++) {
        all_key_for_sound[i].dataset.src = array_of_nodelist[i + 12].src;
    }
}
tonality_sound();
let button_vision_section = document.querySelector('.button_vision_section');

button_vision_section.addEventListener('click', function (event) {

    let el = event.target;
    // keyboard_vision_tonality_count = Number(el.dataset.count) + 12;
    console.log(keyboard_vision_tonality_count);
    if (["C", "D", "E", "Gb", "Ab", "Bb"].includes(el.dataset.mas)) {
        wholeToneBoolean = true;
    } else {
        wholeToneBoolean = false;
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("black_key"); //сброс со всех клавиш класса black
    }

    tonality_sound();

    calculateMassive(five_Black[event.target.dataset.mas]);
    if (x_item_led_boolean == 1 & circle_led_boolean != 1) {
        clearKey();
        x_circle_function('x_item', null, 2, 2);
    } else if (x_item_led_boolean != 1 & circle_led_boolean == 1) {
        clearKey();
        x_circle_function(null, 'circle', 2, 2);

    } else if (x_item_led_boolean == 1 & circle_led_boolean == 1) {
        clearKey();
        x_circle_function('x_item', 'circle', 2, 2);
    }
})



let set_34 = true;

var addClickEvent_34 = function (button, numb) {

    button.addEventListener('click', function () {
        if (button.textContent == "C" || button.textContent == "D" || button.textContent == "E" || button.textContent == "Gb" || button.textContent == "Ab" || button.textContent == "Bb") {
            clearKey();
            console.log(numb);
            for (let i = numb - 1; i <= numb; i += 2) {
                key[i].classList.toggle('x_item')
                key[i + 2].classList.toggle('x_item')
                key[i + 4].classList.toggle('x_item')
                key[i + 5].classList.toggle('circle')
                key[i + 7].classList.toggle('circle')
                key[i + 9].classList.toggle('circle')
                key[i + 11].classList.toggle('circle');
            }

        } else {
            clearKey();
            for (let i = numb - 1; i <= numb; i += 12) {
                key[i].classList.toggle('circle')
                key[i + 2].classList.toggle('circle')
                key[i + 4].classList.toggle('circle')
                key[i + 5].classList.toggle('x_item')
                key[i + 7].classList.toggle('x_item')
                key[i + 9].classList.toggle('x_item')
                key[i + 11].classList.toggle('x_item');
            }
        }
    })
};

// циклом запускаем функцию на все кнопки
// for (var i = 0; i < buttons.length; i++) {
//     addClickEvent(buttons[i], five_Black[i], set_34);
// };




// циклом запускаем функцию на все кнопки мажоры 34
for (var i = 0; i < buttons_34.length; i++) {
    addClickEvent_34(buttons_34[i], buttons_34[i].dataset.numb);
};

// активация гаммы тон полутон - 1
whole_and_half_step_1.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i].classList.toggle('x_item');
        key[i + 2].classList.toggle('x_item');
        key[i + 3].classList.toggle('circle');
        key[i + 5].classList.toggle('circle');
    }
}

// активация гаммы тон полутон - 2
whole_and_half_step_2.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i + 1].classList.toggle('circle');
        key[i + 3].classList.toggle('circle');
        key[i + 4].classList.toggle('x_item');
        key[i + 6].classList.toggle('x_item');
    }
}

// активация гаммы тон полутон - 3
whole_and_half_step_3.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i + 1].classList.toggle('circle');
        key[i + 2].classList.toggle('x_item');
        key[i + 4].classList.toggle('x_item');
        key[i + 5].classList.toggle('circle');
    }
}

// активация симметрии - 1
symmetric_1.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i + 2].classList.toggle('triangle');
        key[i + 5].classList.toggle('triangle');
    }
}

// активация симметрии - 2
symmetric_2.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i].classList.toggle('symmetric_left');
        key[i + 3].classList.toggle('symmetric_left');
    }
}

// активация симметрии - 3
symmetric_3.onclick = function () {
    clearKey();
    monitor.textContent = this.dataset.symbol;
    for (let i = 0; i <= 30; i += 6) {

        key[i + 1].classList.toggle('symmetric_right');
        key[i + 4].classList.toggle('symmetric_right');
    }
}


// =================================== ВОСПРОИЗВЕДЕНИЕ ЗВУКА =================================
function playArray(newArray, reverse, blok_chord, up_down) {
    let list = Array.from(newArray);
    if (reverse)(list.reverse());
    if (up_down) {
        for (let i = list.length - 1; i > 0; i--) {
            list.push(list[i - 1]);
        }
    }
    let audioElements = [];
    for (let i = 0; i < list.length; i++) {
        audioElements.push(list[i]);
    }
    if (blok_chord) {
        playMultipleAudioWithInterval(audioElements, 0);
    } else {
        playMultipleAudioWithInterval(audioElements, 250);
    }
}


let section_for_contextmenu = document.querySelector('.section');
section_for_contextmenu.addEventListener('contextmenu', function (event) {

    // let audio = new Audio(event.target.dataset.src);
    // audio.play();
    event.preventDefault(false);
    // event.target.classList.add('play_led')
    // setTimeout(function () {
    //     event.target.classList.remove('play_led')
    // }, 200)
})


let play_up = document.querySelector('.play_up');
let play_down = document.querySelector('.play_down');
let play_all = document.querySelector('.play_all');
let play_up_down = document.querySelector('.play_up_down');


play_up.addEventListener('click', () => {
    let all_active_keys = document.querySelectorAll('.ledON');
    playArray(all_active_keys);
});
play_down.addEventListener('click', () => {
    let all_active_keys = document.querySelectorAll('.ledON');
    playArray(all_active_keys, true);
});
play_all.addEventListener('click', () => {
    let all_active_keys = document.querySelectorAll('.ledON');
    playArray(all_active_keys, null, true);
});
play_up_down.addEventListener('click', () => {
    let all_active_keys = document.querySelectorAll('.ledON');
    playArray(all_active_keys, null, null, true);
});


// ======================================== audioContext =======================================
// const context = new AudioContext();
// const gain = new GainNode(context);
// const delay = new DelayNode(context);
// const source = new MediaElementAudioSourceNode(
//     context, {
//         mediaElement: document.querySelector('audio')
//     });
// gain.gain.value = 0.5;
// source.connect(context.destination);
// source.connect(delay);
// delay.connect(gain);
// gain.connect(context.destination);


// console.log(context);
// console.log(gain);
// console.log(delay);
// console.log(source);

// function playAudio(audioFile) {
//     const audioContext = new AudioContext();
//     const reader = new FileReader();

//     reader.onload = function (event) {
//         const arrayBuffer = event.target.result;

//         audioContext.decodeAudioData(arrayBuffer, function (buffer) {
//             const source = audioContext.createBufferSource();
//             source.buffer = buffer;
//             source.connect(audioContext.destination);
//             source.start();
//         });
//     };

//     reader.readAsArrayBuffer(audioFile);
// }

// function play(audioElement) {
//     const audioContext = new AudioContext();
//     const source = audioContext.createMediaElementSource(audioElement);

//     source.connect(audioContext.destination);
//     audioElement.play();
// }