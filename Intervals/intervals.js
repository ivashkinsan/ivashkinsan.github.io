let big_container = document.querySelector('.big_container');
let all_keyb;
let two_keys_for_int;

let stage_arr = '1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1';
let numb_string = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37';

let new_numb_arr = function () {
    numb_arr = numb_string.split(' ');
}
new_numb_arr();

let pattern_for_sphere = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2',
    'm3 0 0 m3 0 0 m3 0 0 m3 0 0',
    'TTT 0 0 TTT 0 0 TTT 0 0 0 0 0',
    'B6 0 0 B6 0 0 0 0 0 0 0 0',
    'ch8 0 0 0 0 0 0 0 0 0 0 0'
]

let dataset_name = {
    'm2': ['м2', 1],
    'B2': ['Б2', 2],
    'm3': ['м3', 3],
    'B3': ['Б3', 4],
    'h4': ['ч4', 5],
    'T3': ['ТТТ', 6],
    'h5': ['ч5', 7],
    'm6': ['м6', 8],
    'B6': ['Б6', 9],
    'm7': ['м7', 10],
    'B7': ['Б7', 11],
    'h8': ['ч8', 12]
}

let symmetry_2 = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2', // 12
    'B2 0 B2 0 B2 0 B2 0 B2 0 B2', // 11
    '0 0 0 0 0 0 0 0 0 0', // 10
    'B3 0 0 0 B3 0 0 0 B3', // 9
    '0 0 0 0 0 0 0 0', // 8
    '0 0 0 0 0 0 0', // 7
    '0 0 0 0 0 0', // 6
    'm6 0 0 0 m6', // 5
    '0 0 0 0', // 4
    '0 0 0', // 3
    '0 0', // 2
    'h8', // 1
    ''
]
let big_pattern = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2',
    'B2 B2 B2 B2 B2 B2 B2 B2 B2 B2 B2',
    'm3 m3 m3 m3 m3 m3 m3 m3 m3 m3',
    'B3 B3 B3 B3 B3 B3 B3 B3 B3',
    'h4 h4 h4 h4 h4 h4 h4 h4',
    'T3 T3 T3 T3 T3 T3 T3',
    'h5 h5 h5 h5 h5 h5',
    'm6 m6 m6 m6 m6',
    'B6 B6 B6 B6',
    'm7 m7 m7',
    'B7 B7',
    'h8',
    ''
]
let string_to_arr = function (input) {
    let new_arr = [];
    for (let item of input) {
        new_arr.push(item.split(' '));
    }
    return new_arr;
}
// console.log(string_to_arr(big_pattern));

let big_pattern_arr = string_to_arr(big_pattern);
let big_pattern_symmetry_2 = string_to_arr(symmetry_2);
stage_arr = stage_arr.split(' ');
console.log(stage_arr);

let create_sphere = function (pattern) {

    for (let i = 0; i < 12; i++) {
        let marker = numb_arr.shift();

        // блок колонка
        let new_div_column = document.createElement('div');
        new_div_column.classList.add('new_div_column');

        // блок вертикальная линия
        let new_stage_vertiical_line = document.createElement('div');
        let vertiical_line_label = document.createElement('p');
        new_stage_vertiical_line.classList.add('new_stage_vertiical_line');
        vertiical_line_label.classList.add('vertiical_line_label');
        vertiical_line_label.textContent = stage_arr[i];
        new_stage_vertiical_line.append(vertiical_line_label);

        new_div_column.dataset.number = marker;
        new_div_column.append(new_stage_vertiical_line);

        // блоки клавиатуры
        let keyb_elem = document.createElement('div');
        keyb_elem.classList.add('piano_keys');
        keyb_elem.dataset.number = marker;
        if (['b2', 'b3', 'b5', 'b6', 'b7'].includes(stage_arr[i])) {
            keyb_elem.classList.add('black_key');
        } else {
            keyb_elem.classList.add('white_key');
        }
        new_div_column.append(keyb_elem);

        // блоки окружности


        for (let j = 0; j < pattern[i].length; j++) {
            let new_circle = document.createElement('div');
            if (pattern[j][i] != 0) {
                new_circle.dataset.name = dataset_name[pattern[j][i]][0];
                new_circle.dataset.summ = dataset_name[pattern[j][i]][1];
                let label_p = document.createElement('p');
                label_p.classList.add('label_p');
                label_p.textContent = dataset_name[pattern[j][i]][0];
                new_circle.append(label_p);
                new_circle.classList.add(pattern[j][i]);
                new_circle.classList.add('circle');
                new_circle.dataset.number = marker;
                new_div_column.append(new_circle);
            }

        }
        big_container.append(new_div_column);
    }
}

create_sphere(big_pattern_symmetry_2);
create_sphere(big_pattern_symmetry_2);
create_sphere(big_pattern_symmetry_2);
// create_sphere(big_pattern_arr);


big_container.addEventListener('click', (event) => {
    let click_elem;
    // console.log(event.target);
    if (event.target.classList.contains('circle')) {
        event.target.classList.toggle('active_box');
        click_elem = event.target;
    } else if (event.target.classList.contains('label_p')) {
        event.target.parentNode.classList.toggle('active_box');
        click_elem = event.target.parentNode;
    }
    two_keys_for_int = Number(click_elem.dataset.number) + Number(click_elem.dataset.summ);
    all_keyb = document.querySelectorAll('.piano_keys');
    for (let i = 0; i < all_keyb.length; i++) {
        if (all_keyb[i].dataset.number == click_elem.dataset.number || all_keyb[i].dataset.number == two_keys_for_int) {
            if (!all_keyb[i].classList.contains('active_box_key') && event.target.classList.contains('active_box')) {
                let new_clone = all_keyb[i].cloneNode();
                new_clone.classList.add('marker_bg_color');
                all_keyb[i].parentNode.append(new_clone);
            } else {
                console.log(all_keyb[i]);
                all_keyb[i].parentNode.lastChild.remove();
                i++
            }

        }
    }
})

let all_keyb_elem_for_opacity = document.querySelectorAll('.piano_keys')
let opacity_input = document.querySelector('.input_opacity_piano_keys');
opacity_input.addEventListener('input', (e) => {
    for (item of all_keyb_elem_for_opacity) {
        item.style.opacity = e.target.value / 100;
    }
})

let new_stage_vertiical_line = document.querySelectorAll('.new_stage_vertiical_line')
let input_opacity_vertical_line = document.querySelector('.input_opacity_vertical_line');
input_opacity_vertical_line.addEventListener('input', (e) => {
    for (item of new_stage_vertiical_line) {
        item.style.opacity = e.target.value / 100;
    }
})