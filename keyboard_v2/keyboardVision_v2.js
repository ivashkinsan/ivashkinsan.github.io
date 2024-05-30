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


let notes_123_mas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1'];
let halftones_mas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let wholetones_mas = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6 / 0'];
let notes_Intervals_mas = ['ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1', 'м2', 'Б2', 'м3', 'Б3', 'ч4', 'ТТТ', 'ч5', 'м6', 'Б6', 'м7', 'Б7', 'ч1'];
let notes_rim_mas = ['I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV/bV', 'V', 'bVI', 'VI', 'bVII', 'VII', 'I'];
let notes_Number_mas = ['1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7', '1'];
let maj_min_mas = ['+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+', '-', '+', '-', '+', '+', '+/-', '+', '-', '+', '-', '+', '+'];
let extensions_mas = ['1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1', 'b9', '9', '#9/b3', '3', '11', '#11/b5', '5', '#5/b13', '13', 'b7', '7', '1'];
let chords_mas = ['(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)', 'frig', 'add2', 'min', 'maj', 'sus', 'dim', '(5)', 'aug', '6', '7', '^', '(root)'];
let relative_mas = ['ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё'];
let color = ['#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00', '#5A009D', '#fff44f', '#0000FF', '#FF8000', '#7FFFD4', ' #ce2029', '#9acd32', '#8a2be2', '#FFFF00', '#89CFF0', '#FF0000', '#00FF00'];
let relative_center_mas = ['ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо', 'ру', 'ра', 'ту', 'ти', 'ё', 'лу', 'ле', 'ву', 'ви', 'на', 'ни', 'зо'];
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



function hide_moni() {
    console.log('hide');
    let monitor = document.querySelector('.monitor');
    let monitor_2 = document.querySelector('.monitor_2');
    monitor.classList.toggle('hide');
    monitor_2.classList.toggle('hide');
}
let moni_hide = document.querySelector('.moni_hide').onclick = hide_moni;


oneDable.onclick = function () {
    keyboard_add3.classList.toggle('hideClass');
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


document.querySelector('.label_checkbox').addEventListener('change', function (elem) {
    let paragrNumb = document.querySelectorAll('p')
    let noteLabelCenter = function (input, output) {
        for (var i = 7; i < paragrNumb.length; i++) {
            if (input.checked == true) {
                paragrNumb[i].textContent = output[i];
            } else {
                paragrNumb[i].textContent = '';
            }
        }
    };
    //нумерация клавиш цифрами
    let noteLabel = function (input, output) {
        const all_checkbox = document.querySelectorAll('.box_center > input');
        for (let item of all_checkbox) {
            if (elem.target == item) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
        for (let i = 0; i < paragrNumb.length; i++) {
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
    switch (elem.target.dataset.name) {
        case 'clear':
            for (let item of paragrNumb) {
                item.textContent = '';
            }
            noteLabel(elem.target);
            break;
        case 'цифры':
            noteLabel(elem.target, notes_123_mas);
            // console.log(notes_Number, notes_Number_mas);
            break;
        case 'полутон':
            noteLabel(elem.target, halftones_mas);
            break;
        case 'тон':
            noteLabel(elem.target, wholetones_mas);
            break;
        case 'интервалы':
            noteLabel(elem.target, notes_Intervals_mas);
            break;
        case 'римские':
            noteLabel(elem.target, notes_rim_mas);
            break;
        case 'ступени':
            noteLabel(elem.target, notes_Number_mas);
            break;
        case 'маж/мин':
            noteLabel(elem.target, maj_min_mas);
            break;
        case 'надстройки':
            noteLabel(elem.target, extensions_mas);
            break;
        case 'аккорды':
            noteLabel(elem.target, chords_mas);
            break;
        case 'релятив':
            noteLabel(elem.target, relative_mas);
            noteColor();
            console.log("YES");
            break;
        case 'релятив центр':
            noteLabelCenter(elem.target, relative_center_mas);
            noteColorCenter();
            console.log("YES");
            break;
    }
})

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
    // clearKey();
    x_circle_function('x_item', "", 2, 2);
    monitor.textContent = this.dataset.symbol;
    x_item_led_boolean ^= true;

    // conflict();
};
//Запуск целотоновой гаммы 2
wholetoneButtonY.onclick = function () {
    // clearKey();
    x_circle_function("", 'circle', 2, 2);
    monitor.textContent = this.dataset.symbol;
    circle_led_boolean ^= true;

    // conflict();
}

//Запуск целотоновых гамм 1 и 2
wholetoneButtonXY.onclick = function () {
    x_circle_function('x_item', 'circle', 2, 2);
    monitor.textContent = this.dataset.symbol;
    x_item_led_boolean ^= true;
    circle_led_boolean ^= true;
};

// создаем функцию слушания клика
// let keyboard_vision_tonality_count = 12;

// function tonality_sound() {
//     for (let i = 0; i < all_key_for_sound.length; i++) {
//         all_key_for_sound[i].dataset.src = array_of_nodelist[i + 12].src;
//     }
// }
// tonality_sound();
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


let section_for_contextmenu = document.querySelector('.section');
section_for_contextmenu.addEventListener('contextmenu', function (event) {
console.log('contextmenu');
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