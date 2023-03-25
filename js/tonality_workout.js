const keys = document.querySelectorAll('.key');
const buttons = document.querySelectorAll('.button');
const pads = document.querySelectorAll('.pad');
const binary_mask = document.querySelectorAll('.elem_of_mask');
const p_elements = document.querySelectorAll('.key p');
const checkbox = document.querySelector('.checkboxClass');
const elem_of_thermometr_numb = document.querySelectorAll('.thermometr_numb')
// console.log(checkbox);
// for (let i = 0; i < keys.length; i++) {
//     keys[i].innerHTML = i;
// };

let tonalityObj = {
    'C-dur': [1, 3, 5, 6, 8, 10, 12, 'до мажор'],
    'Db-dur': [2, 4, 6, 7, 9, 11, 13, 'реb мажор'],
    'D-dur': [3, 5, 7, 8, 10, 12, 14, 'ре мажор'],
    'Eb-dur': [4, 6, 8, 9, 11, 13, 15, 'миb мажор'],
    'E-dur': [5, 7, 9, 10, 12, 14, 16, 'ми мажор'],
    'F-dur': [6, 8, 10, 11, 13, 15, 17, 'фа мажор'],
    'F#-dur': [7, 9, 11, 12, 14, 16, 18, 'фа# мажор'],
    'Gb-dur': [7, 9, 11, 12, 14, 16, 18, 'сольb мажор'],
    'G-dur': [8, 10, 12, 13, 15, 17, 19, 'соль мажор'],
    'Ab-dur': [9, 11, 13, 14, 16, 18, 20, 'ляb мажор'],
    'A-dur': [10, 12, 14, 15, 17, 19, 21, 'ля мажор'],
    'Bb-dur': [11, 13, 15, 16, 18, 20, 22, 'сиb мажор'],
    'B-dur': [12, 14, 16, 17, 19, 21, 23, 'си мажор'],
    'Cb-dur': [12, 14, 16, 17, 19, 21, 23, 'доb мажор'],
    'C#-dur': [2, 4, 6, 7, 9, 11, 13, 'до# мажор']

};

const small_elements = document.querySelectorAll('.small_elem');
let small_el_obj = {};
//СОЗДАТЬ ОБЪЕКТ КЛЮЧ+ЗНАЧЕНИЕ
let createObj = function (obj) {
    let index = {};
    for (i = 0; i < obj.length; i++) {
        // console.log(obj[i]);
        index[obj[i].dataset.number] = obj[i];
    }
    return index;
}
small_el_obj = createObj(small_elements);

//ПОДСВЕТКА БОЛЬШОЙ КЛАВИАТУРЫ
let addLedOn = function (inputArr) {
    for (let i = 0; i < inputArr.length - 1; i++) {
        if (!checkbox.checked) {
            keys[inputArr[i] - 1].classList.add('ledOn');

        }
        if (checkbox.checked) {
            keys[inputArr[i] - 1].classList.add('long_key');
        }
        if (keys[inputArr[i] - 1].classList.contains('black_key')) {
            console.log('black_key')
        }
        // keys[inputArr[i] - 1].innerHTML = i + 1;
        // console.log(keys[inputArr[i] - 1].children[0]);
        keys[inputArr[i] - 1].children[0].innerHTML = i + 1;

    };
};

//активация елементов таблицы событием наведения мыши
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function (event) {
        one_time_block = event.target;
        clearLedOn();
        let jjj = buttons[i].dataset.number;

        addLedOn(tonalityObj[buttons[i].dataset.number]);
        small_el_obj[jjj].classList.add('ledOn');
        clear_borders_buttons();
        event.target.classList.add('border_active');
        add_border_active_for_pads_elem(jjj);
        add_border_active_for_binary_mask(jjj);
    })
};

//подсветка элемента таблицы
let add_border_active_for_table_elem = function (elem) {
    for (let item of buttons) {
        if (item.dataset.number == elem) {
            item.classList.add('border_active');
        }
    }
};

//подсветка левого и правого лейбла строк таблицы
let add_border_active_for_pads_elem = function (elem) {
    for (let item of pads) {
        if (item.dataset.number == elem) {
            item.classList.add('border_active');
        }
    }
};

let add_border_active_for_binary_mask = function (elem) {
    for (let item of binary_mask) {
        if (item.dataset.number == elem) {
            item.classList.add('border_active');
        }
    }
};

//активация елементов градусника событием клика
for (let i = 0; i < elem_of_thermometr_numb.length; i++) {
    elem_of_thermometr_numb[i].addEventListener('mouseenter', function () {
        clearLedOn();
        let jjj = elem_of_thermometr_numb[i].dataset.number;

        addLedOn(tonalityObj[elem_of_thermometr_numb[i].dataset.number]);
        clear_borders_buttons();
        add_border_active_for_table_elem(jjj);
        add_border_active_for_pads_elem(jjj);
        add_border_active_for_binary_mask(jjj);
        small_el_obj[jjj].classList.add('ledOn');
    })
};

//ОЧИСТКА БОЛЬШОЙ КЛАВИАТУРЫ
let clearLedOn = function () {
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.remove('ledOn');
        keys[i].children[0].innerHTML = '';
        keys[i].classList.remove('long_key');
    };
    for (let key in small_el_obj) {
        small_el_obj[key].classList.remove('ledOn');
    }
};

let clear_borders_buttons = function () {
    for (let item of buttons) {
        item.classList.remove('border_active');
    }
    for (let item of pads) {
        item.classList.remove('border_active');
    }
    for (let item of binary_mask) {
        item.classList.remove('border_active');
    }
}

let all_black_keys = document.querySelectorAll('.black_key');
checkbox.addEventListener('change', function () {
    clearLedOn();
    if (this.checked) {
        console.log('checked');
        console.log(checkbox.checked);
        for (let item of keys) {
            item.classList.add('cube_keys');
        }
        for (let item of p_elements) {
            item.classList.add('out_p');
        }
    } else {
        console.log('unchecked')
        console.log(checkbox.checked);

        for (let item of keys) {
            item.classList.remove('cube_keys');
        };

        for (let item of p_elements) {
            item.classList.remove('out_p');
        }

    };
})

// tonalityObj = {
//     'C-dur': [1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 18, 20, 22, 24, 25, 'до мажор'],
//     'Db-dur': [1, 2, 4, 6, 7, 9, 11, 13, 14, 16, 18, 19, 21, 23, 25, 'реb мажор'],
//     'D-dur': [2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 'ре мажор'],
//     'Eb-dur': [1, 3, 4, 6, 8, 9, 11, 13, 15, 16, 18, 20, 21, 23, 25, 'миb мажор'],
//     'E-dur': [2, 4, 5, 7, 9, 10, 12, 14, 16, 17, 19, 21, 22, 24, 'ми мажор'],
//     'F-dur': [1, 3, 5, 6, 8, 10, 11, 13, 15, 17, 18, 20, 22, 23, 25, 'фа мажор'],
//     'F#-dur': [2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23, 24, 'фа# мажор'],
//     'Gb-dur': [2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23, 24, 'сольb мажор'],
//     'G-dur': [1, 3, 5, 7, 8, 10, 12, 13, 15, 17, 19, 20, 22, 24, 25, 'соль мажор'],
//     'Ab-dur': [1, 2, 4, 6, 8, 9, 11, 13, 14, 16, 18, 20, 21, 23, 25, 'ляb мажор'],
//     'A-dur': [2, 3, 5, 7, 9, 10, 12, 14, 15, 17, 19, 21, 22, 24, 'ля мажор'],
//     'Bb-dur': [1, 3, 4, 6, 8, 10, 11, 13, 15, 16, 18, 20, 22, 23, 25, 'сиb мажор'],
//     'B-dur': [2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 'си мажор']
// };

// tonalityObj = {
//     'C-dur': [1, 3, 5, 6, 8, 10, 12, 'до мажор'],
//     'Db-dur': [2, 4, 6, 7, 9, 11, 13, 'реb мажор'],
//     'D-dur': [3, 5, 7, 8, 10, 12, 14, 'ре мажор'],
//     'Eb-dur': [4, 6, 8, 9, 11, 13, 15, 'миb мажор'],
//     'E-dur': [5, 7, 9, 10, 12, 14, 16, 'ми мажор'],
//     'F-dur': [6, 8, 10, 11, 13, 15, 17, 'фа мажор'],
//     'F#-dur': [7, 9, 11, 12, 14, 16, 18, 'фа# мажор'],
//     'Gb-dur': [7, 9, 11, 12, 14, 16, 18, 'сольb мажор'],
//     'G-dur': [8, 10, 12, 13, 15, 17, 19, 'соль мажор'],
//     'Ab-dur': [9, 11, 13, 14, 16, 18, 20, 'ляb мажор'],
//     'A-dur': [10, 12, 14, 15, 17, 19, 21, 'ля мажор'],
//     'Bb-dur': [11, 13, 15, 16, 18, 20, 22, 'сиb мажор'],
//     'B-dur': [12, 14, 16, 17, 19, 21, 23, 'си мажор']
// };