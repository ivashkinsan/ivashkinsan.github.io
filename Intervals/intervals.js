let big_container = document.querySelector('.big_container');
let all_keyb;
let two_keys_for_int;
let all_marker_bg_color;

let all_keyb_elem_for_opacity;
let new_stage_vertiical_line;

let stage_arr = '1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1';
let numb_string = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37';

let new_numb_arr = function () {
    numb_arr = numb_string.split(' ');
}
new_numb_arr();


let dataset_name = {
    'end': ['', 0],
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


let string_to_arr = function (input) {
    let new_arr = [];
    for (let item of input) {
        new_arr.push(item.split(' '));
    }
    return new_arr;
}


// let big_pattern_arr = string_to_arr(big_pattern);
// console.log(big_pattern_arr.length);
// let big_pattern_symmetry_2 = string_to_arr(symmetry_2);


stage_arr = stage_arr.split(' ');


let create_sphere = function (pattern) {

    for (let i = 0; i < pattern.length; i++) {
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
            if (!pattern[i][j] == '0') {
                // console.log('должен остановиться');
                new_circle.dataset.name = dataset_name[pattern[i][j]][0];
                new_circle.dataset.summ = dataset_name[pattern[i][j]][1];
                let label_p = document.createElement('p');
                label_p.classList.add('label_p');
                label_p.textContent = dataset_name[pattern[i][j]][0];
                new_circle.append(label_p);
                new_circle.classList.add(pattern[i][j]);
                new_circle.classList.add('circle');
                new_circle.dataset.number = marker;
                new_div_column.append(new_circle);
            }
        }
        // arr_for_debugging.push(arr_row_for_debugging)
        big_container.append(new_div_column);

    }


}




// create_sphere(big_pattern_arr);


big_container.addEventListener('click', (event) => {
    let click_elem;
    // console.log(event.target);
    if (event.target.classList.contains('circle')) {
        event.target.classList.toggle('active_box');
        event.target.parentNode.classList.toggle('active_box');
        click_elem = event.target;
    } else if (event.target.classList.contains('label_p') || event.target.classList.contains('piano_keys')) {
        event.target.parentNode.classList.toggle('active_box');
        // event.target.parentNode.parentNode.classList.toggle('active_box');
        click_elem = event.target.parentNode;
    }
    if (click_elem.dataset.number && click_elem.dataset.summ) {
        two_keys_for_int = Number(click_elem.dataset.number) + Number(click_elem.dataset.summ);
    }
    if (event.target.classList.contains('piano_keys')) {
        console.log('piano_keys')
        two_keys_for_int = '';
    }




    let dump = [];
    let clickElemDatasetDump = [];
    if (click_elem.classList.contains('active_box')) {
        for (let i = 0; i < all_keyb.length; i++) {
            if (all_keyb[i].dataset.number == click_elem.dataset.number || all_keyb[i].dataset.number == two_keys_for_int) {
                let new_clone = all_keyb[i].cloneNode();
                dump = Math.random();
                if (!click_elem.dataset.dump) {
                    click_elem.dataset.dump = dump;
                } else {
                    click_elem.dataset.dump = click_elem.dataset.dump + ',' + dump;
                };
                new_clone.dataset.dump = dump;
                new_clone.classList.add('marker_bg_color');
                all_keyb[i].parentNode.append(new_clone);
            }
        }

    } else {
        clickElemDatasetDump = click_elem.dataset.dump.split(',');
        // console.log(clickElemDatasetDump);
        for (let i = 0; i < all_marker_bg_color.length; i++) {
            if (clickElemDatasetDump.includes(all_marker_bg_color[i].dataset.dump)) {
                all_marker_bg_color[i].remove();
            }
        }
        clickElemDatasetDump = [];
    }
    all_marker_bg_color = document.querySelectorAll('.marker_bg_color');
})





let sphere_select = document.querySelector('.sphere_select');
sphere_select.addEventListener('change', (e) => {
    console.log(e.target.value);

    big_container.innerHTML = '';
    switch (e.target.value) {
        case 'symmetry_2':
            create_sphere(string_to_arr(symmetry_2));
            break;
        case 'symmetry_3':
            create_sphere(string_to_arr(symmetry_3));
            break;
        case 'symmetry_4':
            create_sphere(string_to_arr(symmetry_4));
            break;
        case 'full':
            create_sphere(string_to_arr(full));
            break;
        case 'overtones':
            create_sphere(string_to_arr(overtones));
            break;
        case 'm2':
            create_sphere(string_to_arr(m2));
            break;
        case 'B2':
            create_sphere(string_to_arr(B2));
            break;
        case 'm3':
            create_sphere(string_to_arr(m3));
            break;
        case 'B3':
            create_sphere(string_to_arr(B3));
            break;
        case 'h4':
            create_sphere(string_to_arr(h4));
            break;
        case 'T3':
            create_sphere(string_to_arr(T3));
            break;
        case 'h5':
            create_sphere(string_to_arr(h5));
            break;
        case 'm6':
            create_sphere(string_to_arr(m6));
            break;
        case 'B6':
            create_sphere(string_to_arr(B6));
            break;
        case 'm7':
            create_sphere(string_to_arr(m7));
            break;
        case 'B7':
            create_sphere(string_to_arr(B7));
            break;
    }
    new_numb_arr();
    all_keyb_elem_for_opacity = document.querySelectorAll('.piano_keys');
    new_stage_vertiical_line = document.querySelectorAll('.new_stage_vertiical_line');
    all_keyb = document.querySelectorAll('.piano_keys');
})

// create_sphere(string_to_arr(symmetry_3));


// прозрачность клавиатуры
let opacity_input = document.querySelector('.input_opacity_piano_keys');
opacity_input.addEventListener('input', (e) => {
    for (item of all_keyb_elem_for_opacity) {
        item.style.opacity = e.target.value / 100;
        item.style.zIndex = 0;
        if (e.target.value == '100') {
            item.style.zIndex = 1000;
        }
    }
})

// прозрачность маркеров ступеней
let input_opacity_vertical_line = document.querySelector('.input_opacity_vertical_line');
input_opacity_vertical_line.addEventListener('input', (e) => {
    for (item of new_stage_vertiical_line) {
        item.style.opacity = e.target.value / 100;

    }
})