let all_line = document.querySelectorAll('.line');
let all_keyb_elem = document.querySelectorAll('.keyb_elem');
let black_keys = document.querySelectorAll('.black_key');
let white_keys = document.querySelectorAll('.white_key');
// let all_keyb_elem = document.querySelectorAll('.keyb_elem');

let new_note_func = function () {
    let new_elem = document.createElement('div');
    new_elem.classList.add('note');
    return new_elem;
}


// генерация матрицы нот
let generate_note_frame = function (obj_of_notes) {
    for (const [key, value] of Object.entries(obj_of_notes)) {
        // console.log(`${key}: ${value}`);
        let left_line_start = 14;
        let new_arr_of_string = value.split(' ');
        // console.log(new_arr_of_string);
        for (let i = 0; i < new_arr_of_string.length; i++) {
            all_line.forEach(function (elem) {
                // console.log(elem.dataset.note == new_arr_of_string[i]);
                if (elem.dataset.note == new_arr_of_string[i]) {
                    let new_el = new_note_func();
                    new_el.dataset.note = elem.dataset.note;
                    new_el.dataset.name = elem.dataset.name;
                    new_el.style.left = left_line_start + 'vh';
                    left_line_start += 8;
                    elem.append(new_el);
                }
            })
            if (new_arr_of_string[i] === '0') {
                left_line_start += 8;
            }
        }
    }
}
generate_note_frame(obj_matrix);

let clear_matrix = function () {
    for (let item of all_line) {
        item.innerHTML = '';
    }
}
// clear_matrix();

let value_of_add_ledon_class = 'none';
let box_123 = 'C1 D1 E1 C2 D2 E2 C3 D3 E3 C4 D4 E4'
let box_1234 = 'F1 G1 A1 B1 F2 G2 A2 B2 F3 G3 A3 B3 F4 G4 A4 B4'

// 3 режима отображения клавиш клавиатуры
let add_ledon_class = function (value) {
    document.querySelector('.container_with_keyboard').classList.remove('dspl_none');
    switch (value) {
        case 'none':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
            }
            value_of_add_ledon_class = 'white';
            break;
        case 'white':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
                switch (item.dataset.note) {
                    case 'G1':
                    case 'B1':
                    case 'D2':
                    case 'F2':
                    case 'A2':

                    case 'E3':
                    case 'G3':
                    case 'B3':
                    case 'D4':
                    case 'F4':
                        item.classList.add('led_on');
                        break;
                }
            }
            value_of_add_ledon_class = '10_line';
            break;

        case '10_line':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
                if ((box_123.indexOf(item.dataset.note)) >= 0) {
                    console.log('true');
                    item.classList.add('led_on_orange');
                } else if ((box_1234.indexOf(item.dataset.note)) >= 0) {
                    item.classList.add('led_on');
                }
            }
            value_of_add_ledon_class = '3+4';
            break;

        case '3+4':
            document.querySelector('.container_with_keyboard').classList.toggle('dspl_none');
            value_of_add_ledon_class = 'none';
            break;
    }

    if (Array.isArray(value)) {
        console.log('privet')
        for (let item of all_keyb_elem) {
            if (value.includes(item.dataset.note)) {
                item.classList.add('led_on');
            }
        }
    }
}
add_ledon_class(value_of_add_ledon_class);

// добавить название нот на старте
let add_label = function () {
    let all_note = document.querySelectorAll('.note');
    for (let item of all_note) {
        item.innerHTML = item.dataset.name;
    }
}
add_label();

// добавить название нот на старте
let add_label_background = function () {
    let all_note = document.querySelectorAll('.note');
    for (let item of all_note) {
        item.classList.toggle('note_background_text_color')
    }
}

// подписать активные ноты
let label_on_off = 'off';
let add_label_of_note = function () {
    let all_active_note = document.querySelectorAll('.active_note');
    for (let item of all_active_note) {
        item.classList.remove('text_show');
    }
    if (label_on_off == 'off') {
        for (let item of all_active_note) {
            item.classList.add('text_show');
        }
        label_on_off = 'on'
    } else {
        for (let item of all_active_note) {
            item.classList.remove('text_show');
        }
        label_on_off = 'off'
    }

}

// узнать длинну строки
function toArray(obj) {
    var array = [];
    // iterate backwards ensuring that length is an UInt32
    for (var i = obj.length >>> 0; i--;) {
        array[i] = obj[i];
    }
    return array;
}

// активировать элемент на нотном стане
document.querySelector('.container_with_line_background').addEventListener('click', () => {
    let all_note = document.querySelectorAll('.note');
    if (event.target.classList.contains('note')) {
        event.target.classList.toggle('active_note');

        if (!event.target.classList.contains('text_show') && label_on_off == 'on') {
            event.target.classList.add('text_show');
        } else {
            event.target.classList.remove('text_show');
        }
    }

    if (start_game_true) {
        let game_active = document.querySelectorAll('.active_note');
        for (let item of all_keyb_elem) {
            if (item.classList.contains('led_on')) {
                for (let in_cicle of game_active) {
                    if (item.dataset.note == in_cicle.dataset.note) {
                        console.log('contains')
                        item.classList.remove('led_on');
                        item.classList.add('led_right_answer');
                    }
                }
            }

        }
    }
})

// добавление длинного фона
let long_keyboard_background = function () {
    let long_keyboard_background = document.querySelector('.container_with_keyboard');
    // black_keys = document.querySelectorAll('.black_key');
    // white_keys = document.querySelectorAll('.white_key');
    // all_keyb_elem = document.querySelectorAll('.keyb_elem');
    if (long_keyboard_background.classList.contains('dspl_none')) {
        long_keyboard_background.classList.remove('dspl_none');
    }
    for (let item of black_keys) {
        item.classList.toggle('black_keys_short');
    }
    for (let item of white_keys) {
        if (item.dataset.note == '') {

        }
    }
    for (let item of all_keyb_elem) {
        item.classList.toggle('no_border');
    }

    long_keyboard_background.classList.toggle('long_keyboard_background');
    for (let item of all_line) {
        item.classList.toggle('black_line');
    }
    let dashed_lines = document.querySelectorAll('.dashed');
    for (let item of dashed_lines) {
        item.classList.toggle('dashed_black');
    }
}

// сброс активных нот
let add_reset_active_note = function () {
    let all_notes = document.querySelectorAll('.note');
    for (let item of all_notes) {
        if (item.classList.contains('active_note')) {
            item.classList.toggle('active_note');
            item.classList.remove('text_show');
        }
    }
}

// перемещать клавиатуру как линейку
let keyb_container = document.querySelector('.container_with_keyboard');
let range_input = document.querySelector('.range_width');
let right_left_keyb = function () {
    console.log(range_input.value);
    keyb_container.style.left = range_input.value + 'vw';
    console.log(keyb_container.style.left);
}

// повернуть клавиатуру
let add_rotate_style = function () {
    document.querySelector('.container_with_keyboard').classList.toggle('add_rotate_style');
    document.querySelector('.container_with_line_background').classList.toggle('add_bottom_margin');
    range_input.value = 20;
}

// тренировка
let game_pattern = ['A1', 'B1', 'C2', 'A3', 'B3', 'C3'];
let start_game_true = false;
let arr_game = [];
let start_game = function (pattern) {
    value_of_add_ledon_class = 'none';
    add_ledon_class(value_of_add_ledon_class);
    add_ledon_class(pattern);
    arr_game = pattern;
    start_game_true = true;

    // console.log(arr_game);
}
let training_button = document.querySelector('.training');
training_button.addEventListener('click', () => {
    start_game(training_var_obj[2]);
});

let clear_led_right_answer = function () {
    let all_active_led_right_answer = document.querySelectorAll('.led_right_answer');
    for (let item of all_active_led_right_answer) {
        item.classList.remove('led_right_answer');
    };
};


let compare = function (one_arr, two_arr) {
    let arr1 = one_arr;
    let arr2 = two_arr;
    console.log(arr1);
    console.log(arr2);
    for (let item of arr1) {
        for (let i = 0; i < two_arr.length; i++) {
            if (item == two_arr[i]) {
                two_arr.splice(i, 1);
            }
        }
    }
    if (two_arr.length == 0 && one_arr.length == two_arr.length) {
        console.log('trueeeeee');
        return true;
    }
};

let arr1 = [1, 7, 3, 4];
let arr2 = [2, 3, 1, 5];
compare(arr1, arr2);