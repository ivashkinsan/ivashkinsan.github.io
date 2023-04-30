let all_line = document.querySelectorAll('.line');
let all_keyb_elem = document.querySelectorAll('.keyb_elem');

let new_note_func = function () {
    let new_elem = document.createElement('div');
    new_elem.classList.add('note');
    return new_elem;
}


let obj_matrix = {
    0: 'C1 D1 E1',
    1: 'F1 G1 A1 B1',
    2: 'C2 D2 E2',
    3: 'F2 G2 A2 B2',
    4: 'C3 D3 E3',
    5: 'F3 G3 A3 B3',
    6: 'C4 D4 E4',
    7: 'F4 G4 A4 B4'
}

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
                    new_el.style.left = left_line_start + 'vh';
                    left_line_start += 12;
                    elem.append(new_el);
                }
            })
            if (new_arr_of_string[i] === '0') {
                left_line_start += 12;
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

let add_label_of_note = function () {
    let all_note = document.querySelectorAll('.note');
    for (let item of all_note) {
        item.innerHTML = item.dataset.note;
    }
}