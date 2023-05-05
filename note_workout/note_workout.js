let all_line = document.querySelectorAll('.line');
let all_keyb_elem = document.querySelectorAll('.keyb_elem');

let new_note_func = function () {
    let new_elem = document.createElement('div');
    new_elem.classList.add('note');
    return new_elem;
}


// let obj_matrix = {
//     0: 'C1 D1 E1',
//     1: 'F1 G1 A1 B1',
//     2: 'C2 D2 E2',
//     3: 'F2 G2 A2 B2',
//     4: 'C3 D3 E3',
//     5: 'F3 G3 A3 B3',
//     6: 'C4 D4 E4',
//     7: 'F4 G4 A4 B4'
// }

// let obj_matrix = {
//     0: 'C1 D1 E1 F1 G1 A1 B1',
//     1: 'D1 E1 F1 G1 A1 B1 C2',
//     2: 'E1 F1 G1 A1 B1 C2 D2',
//     3: 'F1 G1 A1 B1 C2 D2 E2',
//     4: 'G1 A1 B1 C2 D2 E2 F2',
//     5: 'A1 B1 C2 D2 E2 F2 G2',
//     6: 'B1 C2 D2 E2 F2 G2 A2',
//     7: 'C2 D2 E2 F2 G2 A2 B2',
//     8: 'D2 E2 F2 G2 A2 B2 C3',
//     9: 'E2 F2 G2 A2 B2 C3 D3',
//     10: 'F2 G2 A2 B2 C3 D3 E3',
//     11: 'G2 A2 B2 C3 D3 E3 F3',
//     12: 'A2 B2 C3 D3 E3 F3 G3',
//     13: 'B2 C3 D3 E3 F3 G3 A3',
//     14: 'C3 D3 E3 F3 G3 A3 B3'
// }

let obj_matrix = {
    0: 'C1 C1 C1 C1 C1 C1 C1 C1 C1 C1 C1 C1 C1',
    1: 'D1 D1 D1 D1 D1 D1 D1 D1 D1 D1 D1 D1 D1',
    2: 'E1 E1 E1 E1 E1 E1 E1 E1 E1 E1 E1 E1 E1',
    3: 'F1 F1 F1 F1 F1 F1 F1 F1 F1 F1 F1 F1 F1',
    4: 'G1 G1 G1 G1 G1 G1 G1 G1 G1 G1 G1 G1 G1',
    5: 'A1 A1 A1 A1 A1 A1 A1 A1 A1 A1 A1 A1 A1',
    6: 'B1 B1 B1 B1 B1 B1 B1 B1 B1 B1 B1 B1 B1',
    7: 'C2 C2 C2 C2 C2 C2 C2 C2 C2 C2 C2 C2 C2',
    8: 'D2 D2 D2 D2 D2 D2 D2 D2 D2 D2 D2 D2 D2',
    9: 'E2 E2 E2 E2 E2 E2 E2 E2 E2 E2 E2 E2 E2',
    10: 'F2 F2 F2 F2 F2 F2 F2 F2 F2 F2 F2 F2 F2',
    11: 'G2 G2 G2 G2 G2 G2 G2 G2 G2 G2 G2 G2 G2',
    12: 'A2 A2 A2 A2 A2 A2 A2 A2 A2 A2 A2 A2 A2',
    13: 'B2 B2 B2 B2 B2 B2 B2 B2 B2 B2 B2 B2 B2',
    14: 'C3 C3 C3 C3 C3 C3 C3 C3 C3 C3 C3 C3 C3',
    15: 'D3 D3 D3 D3 D3 D3 D3 D3 D3 D3 D3 D3 D3',
    16: 'E3 E3 E3 E3 E3 E3 E3 E3 E3 E3 E3 E3 E3',
    17: 'F3 F3 F3 F3 F3 F3 F3 F3 F3 F3 F3 F3 F3',
    18: 'G3 G3 G3 G3 G3 G3 G3 G3 G3 G3 G3 G3 G3',
    19: 'A3 A3 A3 A3 A3 A3 A3 A3 A3 A3 A3 A3 A3',
    20: 'B3 B3 B3 B3 B3 B3 B3 B3 B3 B3 B3 B3 B3',
    21: 'C4 C4 C4 C4 C4 C4 C4 C4 C4 C4 C4 C4 C4',
    22: 'D4 D4 D4 D4 D4 D4 D4 D4 D4 D4 D4 D4 D4',
    23: 'E4 E4 E4 E4 E4 E4 E4 E4 E4 E4 E4 E4 E4',
    24: 'F4 F4 F4 F4 F4 F4 F4 F4 F4 F4 F4 F4 F4',
    25: 'G4 G4 G4 G4 G4 G4 G4 G4 G4 G4 G4 G4 G4',
    26: 'A4 A4 A4 A4 A4 A4 A4 A4 A4 A4 A4 A4 A4',
    27: 'B4 B4 B4 B4 B4 B4 B4 B4 B4 B4 B4 B4 B4',
    28: 'C5 C5 C5 C5 C5 C5 C5 C5 C5 C5 C5 C5 C5'
}

// генерация матрицы нот
let generate_note_frame = function (obj_of_notes) {
    for (const [key, value] of Object.entries(obj_of_notes)) {
        // console.log(`${key}: ${value}`);
        let left_line_start = 38;
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

let value_of_add_ledon_class = '';
let box_123 = 'C1 D1 E1 C2 D2 E2 C3 D3 E3 C4 D4 E4'
let box_1234 = 'F1 G1 A1 B1 F2 G2 A2 B2 F3 G3 A3 B3 F4 G4 A4 B4'

// 3 режима отображения клавиш клавиатуры
let add_ledon_class = function () {
    document.querySelector('.container_with_keyboard').classList.remove('dspl_none');
    if (value_of_add_ledon_class == '') {
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
    } else if (value_of_add_ledon_class == '10_line') {
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
    } else if (value_of_add_ledon_class == '3+4') {
        document.querySelector('.container_with_keyboard').classList.toggle('dspl_none');
        value_of_add_ledon_class = '';
    }
}
add_ledon_class();




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

// let row_length = function () {
//     let xvx = '';
//     let length_value = 0;
//     let all_note = document.querySelectorAll('.note');
//     let new_arr = toArray(all_note);
//     for (let i = 0; i < all_note.length; i++) {

//     }
// }
// row_length();




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
        // if (label_on_off == 'on') {
        //     event.target.classList.add('text_show');
        // }

    }
})

// добавление длинного фона
let long_keyboard_background = function () {
    let long_keyboard_background = document.querySelector('.container_with_keyboard');
    let black_keys = document.querySelectorAll('.black_key');
    let white_keys = document.querySelectorAll('.white_key');
    let all_keyb_elem = document.querySelectorAll('.keyb_elem');
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