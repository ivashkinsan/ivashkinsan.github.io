let container_table = document.querySelector('.container_table');
let all_circle = document.querySelectorAll('.key_elem');
let dataset_for_circle = 'C Db D Eb E F Gb G Ab A Bb B C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2 C3';
let create_arr_of_circle = dataset_for_circle.split(' ');
for (let item of all_circle) {
    item.dataset.note = create_arr_of_circle.shift();
}

let tactile_table = [
    'м2 wB Bw wB Bw ww wB Bw wB Bw wB Bw ww',
    'Б2 ww BB ww Bw wB ww BB ww BB ww Bw wB',
    'м3 wB Bw ww BB ww wB Bw wB Bw ww BB ww',
    'Б3 ww Bw wB Bw wB ww BB ww Bw wB Bw wB',
    'ч4 ww BB ww BB ww wB Bw ww BB ww BB ww',
    '3Т wB Bw wB Bw wB ww Bw wB Bw wB Bw ww',
    'ч5 ww BB ww BB ww ww BB ww BB ww Bw wB',
    'м6 wB Bw wB Bw ww wB Bw wB Bw ww BB ww',
    'Б6 ww BB ww Bw wB ww BB ww Bw wB Bw wB',
    'м7 wB Bw ww BB ww wB Bw ww BB ww BB ww',
    'Б7 ww Bw wB Bw wB ww Bw wB Bw wB Bw wB'
]

let dataset_note = [
    ['C Db', 'Db D', 'D Eb', 'Eb E', 'E F', 'F Gb', 'Gb G', 'G Ab', 'Ab A', 'A Bb', 'Bb B', 'B C2'],
    ['C D', 'Db Eb', 'D E', 'Eb F', 'E Gb', 'F G', 'Gb Ab', 'G A', 'Ab Bb', 'A B', 'Bb C2', 'B Db2'],
    ['C Eb', 'Db E', 'D F', 'Eb Gb', 'E G', 'F Ab', 'Gb A', 'G Bb', 'Ab B', 'A C2', 'Bb Db2', 'B D2'],
    ['C E', 'Db F', 'D Gb', 'Eb G', 'E Ab', 'F A', 'Gb Bb', 'G B', 'Ab C2', 'A Db2', 'Bb D2', 'B Eb2'],
    ['C F', 'Db Gb', 'D G', 'Eb Ab', 'E A', 'F Bb', 'Gb B', 'G C2', 'Ab Db2', 'A D2', 'Bb Eb2', 'B E2'],
    ['C Gb', 'Db G', 'D Ab', 'Eb A', 'E Bb', 'F B', 'Gb C2', 'G Db2', 'Ab D2', 'A Eb2', 'Bb E2', 'B F2'],
    ['C G', 'Db Ab', 'D A', 'Eb Bb', 'E B', 'F C2', 'Gb Db2', 'G D2', 'Ab Eb2', 'A E2', 'Bb F2', 'B Gb2'],
    ['C Ab', 'Db A', 'D Bb', 'Eb B', 'E C2', 'F Db2', 'Gb D2', 'G Eb2', 'Ab E2', 'A F2', 'Bb Gb2', 'B G2'],
    ['C A', 'Db Bb', 'D B', 'Eb C2', 'E Db2', 'F D2', 'Gb Eb2', 'G E2', 'Ab F2', 'A Gb2', 'Bb G2', 'B Ab2'],
    ['C Bb', 'Db B', 'D C2', 'Eb Db2', 'E D2', 'F Eb2', 'Gb E2', 'G F2', 'Ab Gb2', 'A G2', 'Bb Ab2', 'B A2'],
    ['C B', 'Db C2', 'D Db2', 'Eb D2', 'E Eb2', 'F E2', 'Gb F2', 'G Gb2', 'Ab G2', 'A Ab2', 'Bb A2', 'B Bb2'],
]

let data_algorythm = [
    ['C Db D', 'C Db D', 'D Eb E', 'D Eb E', 'E F', 'F Gb G', 'F Gb G', 'G Ab A', 'G Ab A', 'A Bb B', 'A Bb B', 'B C2'],
    ['C Db D Eb E', 'C Db D Eb E', 'C Db D Eb E', 'Eb E F Gb', 'Eb E F Gb', 'F Gb G Ab A Bb B', 'F Gb G Ab A Bb B', 'F Gb G Ab A Bb B', 'F Gb G Ab A Bb B', 'F Gb G Ab A Bb B', 'Bb B C2 Db2', 'Bb B C2 Db2'],
    ['C Db Eb E', 'C Db Eb E', 'D Eb E F Gb G', 'D Eb E F Gb G', 'D Eb E F Gb G', 'F Gb Ab A', 'F Gb Ab A', 'G Ab Bb B', 'G Ab Bb B', 'A Bb B C2 Db2 D2', 'A Bb B C2 Db2 D2', 'A Bb B C2 Db2 D2'],
    ['C E', 'Db D Eb E F Gb G Ab', 'Db D Eb E F Gb G Ab', 'Db D Eb E F Gb G Ab', 'Db D Eb E F Gb G Ab', 'F Gb G A Bb B', 'F Gb G A Bb B', 'F Gb G A Bb B', 'Ab A Bb B C2 Db2 D2 Eb2', 'Ab A Bb B C2 Db2 D2 Eb2', 'Ab A Bb B C2 Db2 D2 Eb2', 'Ab A Bb B C2 Db2 D2 Eb2'],
    ['C Db D Eb E F Gb G Ab A', 'C Db D Eb E F Gb G Ab A', 'C Db D Eb E F Gb G Ab A', 'C Db D Eb E F Gb G Ab A', 'C Db D Eb E F Gb G Ab A', 'F Gb Bb B', 'F Gb Bb B', 'G Ab A Bb B C2 Db2 D2 Eb2 E2', 'G Ab A Bb B C2 Db2 D2 Eb2 E2', 'G Ab A Bb B C2 Db2 D2 Eb2 E2', 'G Ab A Bb B C2 Db2 D2 Eb2 E2', 'G Ab A Bb B C2 Db2 D2 Eb2 E2'],
    ['C Db D Eb E Gb G Ab A Bb', 'C Db D Eb E Gb G Ab A Bb', 'C Db D Eb E Gb G Ab A Bb', 'C Db D Eb E Gb G Ab A Bb', 'C Db D Eb E Gb G Ab A Bb', 'F B', 'Gb G Ab A Bb C2 Db2 D2 Eb2 E2', 'Gb G Ab A Bb C2 Db2 D2 Eb2 E2', 'Gb G Ab A Bb C2 Db2 D2 Eb2 E2', 'Gb G Ab A Bb C2 Db2 D2 Eb2 E2', 'Gb G Ab A Bb C2 Db2 D2 Eb2 E2', 'B F2'],
    ['C Db D Eb E G Ab A Bb B', 'C Db D Eb E G Ab A Bb B', 'C Db D Eb E G Ab A Bb B', 'C Db D Eb E G Ab A Bb B', 'C Db D Eb E G Ab A Bb B', 'F Gb G Ab A C2 Db2 D2 Eb2 E2', 'F Gb G Ab A C2 Db2 D2 Eb2 E2', 'F Gb G Ab A C2 Db2 D2 Eb2 E2', 'F Gb G Ab A C2 Db2 D2 Eb2 E2', 'F Gb G Ab A C2 Db2 D2 Eb2 E2', 'Bb B F2 Gb2', 'Bb B F2 Gb2'],
    ['C Db D Eb Ab A Bb B', 'C Db D Eb Ab A Bb B', 'C Db D Eb Ab A Bb B', 'C Db D Eb Ab A Bb B', 'E C2', 'F Gb G Ab Db2 D2 Eb2 E2', 'F Gb G Ab Db2 D2 Eb2 E2', 'F Gb G Ab Db2 D2 Eb2 E2', 'F Gb G Ab Db2 D2 Eb2 E2', 'A Bb B F2 Gb2 G2', 'A Bb B F2 Gb2 G2', 'A Bb B F2 Gb2 G2'],
    ['C Db D A Bb B', 'C Db D A Bb B', 'C Db D A Bb B', 'Eb E C2 Db2', 'Eb E C2 Db2', 'F Gb G D2 Eb2 E2', 'F Gb G D2 Eb2 E2', 'F Gb G D2 Eb2 E2', 'Ab A Bb B F2 Gb2 G2 Ab2', 'Ab A Bb B F2 Gb2 G2 Ab2', 'Ab A Bb B F2 Gb2 G2 Ab2', 'Ab A Bb B F2 Gb2 G2 Ab2'],
    ['C Db Bb B', 'C Db Bb B', 'D Eb E C2 Db2 D2', 'D Eb E C2 Db2 D2', 'D Eb E C2 Db2 D2', 'F Gb Eb2 E2', 'F Gb Eb2 E2', 'G Ab A Bb B F2 Gb2 G2 Ab2 A2', 'G Ab A Bb B F2 Gb2 G2 Ab2 A2', 'G Ab A Bb B F2 Gb2 G2 Ab2 A2', 'G Ab A Bb B F2 Gb2 G2 Ab2 A2', 'G Ab A Bb B F2 Gb2 G2 Ab2 A2'],
    ['C B', 'Db D Eb E C2 Db2 D2 Eb2', 'Db D Eb E C2 Db2 D2 Eb2', 'Db D Eb E C2 Db2 D2 Eb2', 'Db D Eb E C2 Db2 D2 Eb2', 'F E2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2', 'Gb G Ab A Bb B F2 Gb2 G2 Ab2 A2 Bb2']
]

let create_table = function (inp_arr) {
    for (let item_in_arr of inp_arr) {
        let new_rows = document.createElement('div');
        new_rows.classList.add('rows_table');
        let arr_in_stroke = item_in_arr.split(' ');
        for (let item_in_stroke of arr_in_stroke) {
            let new_item = document.createElement('div');
            let new_item_children = document.createElement('div');


            if (item_in_stroke == arr_in_stroke[0]) {
                new_item.textContent = item_in_stroke;
                // new_item.classList.add('translateY')
            } else {
                new_item.classList.add('table_item');
            }
            switch (item_in_stroke) {
                case 'wB':
                    new_item_children.classList.add('line', 'line_wB');
                    break;
                case 'Bw':
                    new_item_children.classList.add('line', 'line_Bw');
                    break;
                case 'BB':
                    new_item_children.classList.add('line', 'line_BB');
                    break;
                case 'ww':
                    new_item_children.classList.add('line', 'line_ww');
                    break;
            }

            new_item.append(new_item_children);
            new_rows.append(new_item);
        }
        container_table.append(new_rows);
    }
}
create_table(tactile_table);


let all_table_item = document.querySelectorAll('.table_item');
let indXXX = 0;
let in12 = 0;
for (let i = 0; i < all_table_item.length; i++) {
    if (in12 > 11) {
        in12 = 0;
    }
    if (in12 % 12 == 0 && i > 0) {
        indXXX++;
    }

    let new_split = dataset_note[indXXX][in12].split(' ');
    all_table_item[i].dataset.start_note = new_split[0];
    all_table_item[i].dataset.end_note = new_split[1];
    // console.log(data_algorythm[indXXX][in12]);
    all_table_item[i].dataset.algorythm = data_algorythm[indXXX][in12];

    in12++;
    // console.log(indXXX, in12);
}

// функция активации элементов
let go_active_elem = function (event) {
    let algorythm_split_arr;
    let active_elem;
    if (event.target) {
        active_elem = event.target;
    } else {
        active_elem = event;
    }
    // console.log(active_elem);
    if (active_elem.classList.contains('table_item')) {
        // active_elem = event.target; 
        active_elem.classList.add('mousemove');
        algorythm_split_arr = active_elem.dataset.algorythm.split(' ');
    }
    if (active_elem.classList.contains('line')) {
        active_elem = active_elem.parentElement;
        active_elem.classList.add('mousemove');
        algorythm_split_arr = active_elem.dataset.algorythm.split(' ');
    }


    // console.log(active_elem);
    for (let item of all_circle) {
        if (item.dataset.note == active_elem.dataset.start_note) {
            item.classList.add('yellow');
        }
        if (item.dataset.note == active_elem.dataset.end_note) {
            item.classList.add('yellow');
        }
        if (Array.isArray(algorythm_split_arr)) {
            for (let algo_item of algorythm_split_arr) {
                if (item.dataset.note == algo_item) {
                    item.classList.add('dash_border');
                }
            }
        }
    }

}


container_table.addEventListener('mousemove', function (event) {
    go_active_elem(event);
});

let clear_all = function () {
    let all_mouse_move = document.querySelectorAll('.mousemove');
    let all_yellow = document.querySelectorAll('.yellow');
    let dash_border = document.querySelectorAll('.dash_border');
    for (let item of all_mouse_move) {
        item.classList.remove('mousemove');
    }
    for (let item of all_yellow) {
        item.classList.remove('yellow');
    }
    for (let item of dash_border) {
        item.classList.remove('dash_border');
    }
}

container_table.addEventListener('mouseout', function (event) {
    clear_all();
});

let all_line = document.querySelectorAll('.line');
let active_x_block = function () {
    for (let i = 0; i < all_line.length; i++) {
        switch (true) {
            case [1, 3, 6, 8, 10].includes(i): //м2
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [16, 23].includes(i): //Б2
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
            case [25, 30, 32].includes(i): //м3
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [38, 40, 45, 47].includes(i): //Б3
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
            case [54].includes(i): //ч4
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [61, 63].includes(i): //ТТТ
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [67, 69].includes(i): //ТТТ
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
            case [83].includes(i): //ч5
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
            case [85, 87, 90, 92].includes(i): //м6
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [100, 105, 107].includes(i): //Б6
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
            case [109, 114].includes(i): //ТТТ
                all_line[i].classList.toggle('margin_left_and_rotate');
                break;
            case [122, 124, 127, 129, 131].includes(i): //ТТТ
                all_line[i].classList.toggle('margin_left_and_minus_rotate');
                break;
        }
    }
}

// отмена функций скролла стрелками
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

let ind_cursor = 0;
document.addEventListener('keydown', function (event) {
    clear_all();
    if (event.keyCode == 37) { // влево
        if (ind_cursor > 0) {
            ind_cursor--;
        }
        go_active_elem(all_table_item[ind_cursor]);
    }
    else if (event.keyCode == 39) { // вправо
        console.log('Right was pressed');
        if (ind_cursor >= 0 && ind_cursor < 131) {
            ind_cursor++;
        }
        go_active_elem(all_table_item[ind_cursor]);
    } else if (event.keyCode == 40) { // вверх
        console.log('Right was pressed');
        if (ind_cursor >= 0) {
            if (ind_cursor < 120) {
                ind_cursor += 12;
            }

        }
        go_active_elem(all_table_item[ind_cursor]);
    } else if (event.keyCode == 38) { // вниз
        console.log('Right was pressed');
        if (ind_cursor >= 0) {
            if (ind_cursor >= 12) {
                ind_cursor -= 12;
            }
        }
        go_active_elem(all_table_item[ind_cursor]);
    } else if (event.keyCode == 32) { // пробел
        active_x_block();

    }
    go_active_elem(all_table_item[ind_cursor]);
}

);

container_table.addEventListener('click', function (event) {
    console.log(event.target)
    go_active_elem(event);
})

let active_space = function () {
    for (let i = 0; i < all_table_item.length; i++) {
        switch (true) {
            case [4, 5, 11].includes(i): //м2
                all_table_item[i].classList.toggle('space_left');
                break;
            case [15, 17, 22].includes(i): //Б2
                all_table_item[i].classList.toggle('space_left');
                break;
            case [26, 29, 33].includes(i): //м3
                all_table_item[i].classList.toggle('space_left');
                break;
            case [37, 41, 44].includes(i): //Б3
                all_table_item[i].classList.toggle('space_left');
                break;
            case [48, 53, 55].includes(i): //ч4
                all_table_item[i].classList.toggle('space_left');
                break;
            case [65, 66, 71].includes(i): //ТТТ
                all_table_item[i].classList.toggle('space_left');
                break;
            case [72, 77, 82].includes(i): //ч5
                all_table_item[i].classList.toggle('space_left');
                break;
            case [88, 89, 93].includes(i): //m6
                all_table_item[i].classList.toggle('space_left');
                break;
            case [99, 101, 104].includes(i): //Б6
                all_table_item[i].classList.toggle('space_left');
                break;
            case [110, 113, 115].includes(i): //м7
                all_table_item[i].classList.toggle('space_left');
                break;
            case [121, 125, 126].includes(i): //Б7
                all_table_item[i].classList.toggle('space_left');
                break;
        }
    }
}
active_space();

// очистка всех созданных элементов в контейнере таблицы
container_table.replaceChildren();

let point_arr = [
    'м2 0 0 1 0 0 0 1  1 1 0 1 1 1 0  0 0 0 0 0  1 1 1 1 1',
    'Б2 1 1 0 1 1 1 0  0 0 1 0 0 0 1  1 0 1 1 0  0 1 0 0 1',
    'м3 0 1 1 0 0 1 1  1 0 0 1 1 0 0  0 1 0 0 1  1 0 1 1 0',
    'Б3 1 0 0 1 1 0 0  0 1 1 0 0 1 1  0 0 1 0 0  1 1 0 1 1',
    'ч4 1 1 1 0 1 1 1  0 0 0 1 0 0 0  1 1 0 1 1  0 0 1 0 0',
    '3Т 0 0 0 1 0 0 1  1 1 1 0 1 1 0  0 0 0 0 0  1 1 1 1 1',
    'ч5 1 1 1 1 1 1 0  0 0 0 0 0 0 1  1 1 1 1 0  0 0 0 0 1',
    'м6 0 0 1 0 0 1 1  1 1 0 1 1 0 0  0 0 0 0 1  1 1 1 1 0',
    'Б6 1 1 0 1 1 0 0  0 0 1 0 0 1 1  1 0 1 0 0  0 1 0 1 1',
    'м7 0 1 1 0 1 1 1  1 0 0 1 0 0 0  0 1 0 1 1  1 0 1 0 0',
    'Б7 1 0 0 1 0 0 0  0 1 1 0 1 1 1  0 0 0 0 0  1 1 1 1 1'
]

let create_white_black_table = function () {
    container_table.style.flexDirection = 'row';

    //создание 11 строк
    let new_row;
    for (let index_of_row = 0; index_of_row < 11; index_of_row++) {
        new_row = document.createElement('div');
    }
    //создание 5 колонок
    let new_column;
    let new_vertical_line;
    for (let i = 0; i < 5; i++) {
        new_column = document.createElement('div');
        new_column.classList.add('wb_table_column');

        //создание вертикальных линий
        let arr_all_line = [1, 7, 7, 5, 5]
        for (let i_of_line = 0; i_of_line < arr_all_line[i]; i_of_line++) {
            // console.log(i_of_line);
            new_vertical_line = document.createElement('div');
            new_vertical_line.classList.add('new_vertical_line');
            new_column.append(new_vertical_line);
        }

        container_table.append(new_column);
    }
    // создание массива с полным порядком поинтов
    let new_arr_of_point_arr = [];
    for (let i = 0; i < point_arr.length; i++) {
        let let_time_arr = point_arr[i].split(' ').filter(val => !val == '');
        for (let j = 0; j < let_time_arr.length; j++) {
            new_arr_of_point_arr.push(let_time_arr[j]);
        }

    }
    console.log(new_arr_of_point_arr);

    // сбор всех линий и присвоение им значений
    let all_vertical_line = document.querySelectorAll('.new_vertical_line');

    for (let i = 0; i < all_vertical_line.length; i++) {
        all_vertical_line[i].dataset.value = new_arr_of_point_arr[i];
        console.log(all_vertical_line[i].dataset.value)
        switch (all_vertical_line[i].dataset.value) {
            case '0':
                break;
            case '1':
                let new_point = document.createElement('div');
                new_point.classList.add('point_w_and_b');
                all_vertical_line[i].append(new_point);
                break;
            case 'м2':
                all_vertical_line[i].innerHTML = all_vertical_line[i].dataset.value;
                break;
        }
        // console.log(new_arr_of_point_arr);
    }

}
create_white_black_table();