

let container_balls = document.querySelector('.container_balls');
// let big_container = document.querySelector('.big_container');
// let moni_for_text = document.querySelector('.moni_for_text');
// close_container = document.createElement('div');
// close_container.classList.add('close_container');
// close_container.innerHTML = '+';
// close_container.addEventListener("click", matrix_button_go);
// container_balls.append(close_container);
// let matrix_button_go = function () {
//     container_balls.classList.toggle('hide');
// }
// let matrix_button = document.querySelector('.matrix_button');
// matrix_button.addEventListener("click", matrix_button_go);

let all_keyb;
let all_circle;
let all_marker_bg_color;
let checkbox_checked;
let value_opacity_all_keyb = 0;
let new_stage_vertiical_line;
let value_opacity_vertical_line = 0;
let close_container_balls = document.querySelector('.close_container_balls');
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
// функция перевода строки в массив
let string_to_arr = function (input) {
    let new_arr = [];
    for (let item of input) {
        new_arr.push(item.split(' '));
    }
    return new_arr;
}
stage_arr = stage_arr.split(' ');

let create_sphere = function (pattern) {
    container_balls.replaceChildren();
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
        // let keyb_elem = document.createElement('div');
        // keyb_elem.classList.add('piano_keys');
        // keyb_elem.dataset.number = marker;
        // if (['b2', 'b3', 'b5', 'b6', 'b7'].includes(stage_arr[i])) {
        //     keyb_elem.classList.add('black_key');
        // } else {
        //     keyb_elem.classList.add('white_key');
        // }
        // new_div_column.append(keyb_elem);
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
        container_balls.append(new_div_column);
    }

    close_container_balls = document.createElement('div');
    close_container_balls.classList.add('close_container_balls');
    close_container_balls.innerHTML = '+';
    close_container_balls.addEventListener('click', () => container_balls.classList.toggle('show_flex'));

    container_balls.append(close_container_balls);
}

close_container_balls.addEventListener('click', () => container_balls.classList.toggle('show_flex'));