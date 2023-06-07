let container_table = document.querySelector('.container_table');
let all_circle = document.querySelectorAll('.key_elem');
let dataset_for_circle = 'C Db D Eb E F Gb G Ab A Bb B C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2 C3';
let create_arr_of_circle = dataset_for_circle.split(' ');
let all_table_item;
let all_line;
let all_point_w_and_b;
let value_table;

for (let item of all_circle) {
    item.dataset.note = create_arr_of_circle.shift();
}


// матрица геометрических линий
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

// массив массивов с дата атрибутами первой и последней активируемой ноты
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

// массив массивов с дополнительно подсвечиваемыми элементами
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
    all_table_item = document.querySelectorAll('.table_item');
    all_line = document.querySelectorAll('.line');
}


// присвоение data атрибутов ячейкам таблицы

let add_dataatr = function (inp_arr, outp_arr, algorythm) {

    let indXXX = 0;
    let in12 = 0;
    for (let i = 0; i < inp_arr.length; i++) {
        if (in12 > 11) {
            in12 = 0;
        }
        if (in12 % 12 == 0 && i > 0) {
            indXXX++;
        }

        let new_split = outp_arr[indXXX][in12].split(' ');
        inp_arr[i].dataset.start_note = new_split[0];
        inp_arr[i].dataset.end_note = new_split[1];
        // console.log(data_algorythm[indXXX][in12]);
        inp_arr[i].dataset.algorythm = algorythm[indXXX][in12];

        in12++;
        // console.log(indXXX, in12);
    }
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
    if (active_elem.classList.contains('table_item') || active_elem.classList.contains('point_w_and_b')) {
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

// переключние стрелками вверх вниз влево вправо
let ind_cursor = 0;
document.addEventListener('keydown', function (event) {
    let go_go_elem = (value_table == 'geometry_table') ? all_table_item : all_point_w_and_b;
    // console.log(go_go_elem);
    clear_all();
    switch (event.keyCode) {
        case 37:
            (ind_cursor > 0) ? ind_cursor-- : false;
            go_active_elem(go_go_elem[ind_cursor]);
            break;
        case 39:
            (ind_cursor >= 0 && ind_cursor < 131) ? ind_cursor++ : false;
            go_active_elem(go_go_elem[ind_cursor]);
            break;
        case 40:
            (ind_cursor >= 0 && ind_cursor < 120) ? ind_cursor += 12 : false;
            go_active_elem(go_go_elem[ind_cursor]);
            break;
        case 38:
            (ind_cursor >= 0 && ind_cursor >= 12) ? ind_cursor -= 12 : false;
            go_active_elem(go_go_elem[ind_cursor]);
            break;
        case 32:
            active_x_block();
    }

    go_active_elem(go_go_elem[ind_cursor]);
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


// очистка всех созданных элементов в контейнере таблицы
// container_table.replaceChildren();

let point_arr = [
    '- C D E F G A B  C D E F G A B  Db Eb Gb Ab Bb  Db Eb Gb Ab Bb',
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

let data_attr_point = [
    ['E F', 'B C2', 'C Db', 'D Eb', 'F Gb', 'G Ab', 'A Bb', 'Db D', 'Eb E', 'Gb G', 'Ab A', 'Bb B'],
    ['C D', 'D E', 'F G', 'G A', 'A B', 'E Gb', 'B Db2', 'Db Eb', 'Gb Ab', 'Ab Bb', 'Eb F', 'Bb C2'],
    ['D F', 'E G', 'A C2', 'B D2', 'C Eb', 'F Ab', 'G Bb', 'Eb Gb', 'Bb Db2', 'Db E', 'Gb A', 'Ab B'],
    ['C E', 'F A', 'G B', 'D Gb', 'E Ab', 'A Db2', 'B Eb2', 'Gb Bb', 'Db F', 'Eb G', 'Ab C2', 'Bb D2'],
    ['C F', 'D G', 'E A', 'G C2', 'A D2', 'B E2', 'F Bb', 'Db Gb', 'Eb Ab', 'Ab Db2', 'Bb Eb2', 'Gb B'],
    ['F B', 'B F2', 'C Gb', 'D Ab', 'E Bb', 'G Db2', 'A Eb2', 'Db G', 'Eb A', 'Gb C2', 'Ab D2', 'Bb E2'],
    ['C G', 'D A', 'E B', 'F C2', 'G D2', 'A E2', 'B Gb2', 'Db Ab', 'Eb Bb', 'Gb Db2', 'Ab Eb2', 'Bb F2'],
    ['E C2', 'A F2', 'B G2', 'C Ab', 'D Bb', 'F Db2', 'G Eb2', 'Bb Gb2', 'Db A', 'Eb B', 'Gb D2', 'Ab E2'],
    ['C A', 'D B', 'F D2', 'G E2', 'E Db2', 'A Gb2', 'B Ab2', 'Db Bb', 'Gb Eb2', 'Eb C2', 'Ab F2', 'Bb G2'],
    ['D C2', 'E D2', 'G F2', 'A G2', 'B A2', 'C Bb', 'F Eb2', 'Eb Db2', 'Ab Gb2', 'Bb Ab2', 'Db B', 'Gb E2'],
    ['C B', 'F E2', 'D Db2', 'E Eb2', 'G Gb2', 'A Ab2', 'B Bb2', 'Db C2', 'Eb D2', 'Gb F2', 'Ab G2', 'Bb A2']
]

let point_algorythm = [
    ['E F B C2', 'E F B C2', 'C D F G A Db Eb Gb Ab Bb', 'C D F G A Db Eb Gb Ab Bb', 'C D F G A Db Eb Gb Ab Bb', 'C D F G A Db Eb Gb Ab Bb', 'C D F G A Db Eb Gb Ab Bb', 'Db Eb Gb Ab Bb D E G A B', 'Db Eb Gb Ab Bb D E G A B', 'Db Eb Gb Ab Bb D E G A B', 'Db Eb Gb Ab Bb D E G A B', 'Db Eb Gb Ab Bb D E G A B'],
    ['C Db D', 'D Eb E', 'F Gb G', 'G Ab A', 'A Bb B', 'E F Gb B C2 Db2', 'E F Gb B C2 Db2', 'Db D Eb', 'Gb G Ab', 'Ab A Bb', 'Eb E F Bb B C2', 'Eb E F Bb B C2'],

    ['D Eb E F Gb G', 'D Eb E F Gb G', 'A Bb B C2 Db2 D2', 'A Bb B C2 Db2 D2', 'C Db D Eb E', 'F Gb G Ab A', 'G Ab A Bb B', 'D Eb E F Gb G', 'A Bb B C2 Db2 D2', 'C Db D Eb E', 'F Gb G Ab A', 'G Ab A Bb B'],
    ['C Db D Eb E', 'F Gb G Ab A', 'G Ab A Bb B', 'D Gb E Ab A Db2 B Eb2', 'D Gb E Ab A Db2 B Eb2', 'D Gb E Ab A Db2 B Eb2', 'D Gb E Ab A Db2 B Eb2', 'Gb G Ab A Bb', 'Db Eb F G Ab Bb C2 D2', 'Db Eb F G Ab Bb C2 D2', 'Db Eb F G Ab Bb C2 D2', 'Db Eb F G Ab Bb C2 D2'],

    ['C Db Eb F', 'D Eb Gb G', 'E Gb Ab A', 'G Ab Bb C2', 'A Bb Db2 D2', 'B Db2 Eb2 E2', 'F Gb Bb B', 'Db Eb Gb', 'Eb Gb Ab', 'Ab Bb Db2', 'Bb Db2 Eb2', 'F Gb Bb B'],
    ['F B F2', 'F B F2', 'C D E G A Gb Ab Bb Db2 Eb2', 'C D E G A Gb Ab Bb Db2 Eb2', 'C D E G A Gb Ab Bb Db2 Eb2', 'C D E G A Gb Ab Bb Db2 Eb2', 'C D E G A Gb Ab Bb Db2 Eb2', 'Db Eb Gb Ab Bb G A C2 D2 E2', 'Db Eb Gb Ab Bb G A C2 D2 E2', 'Db Eb Gb Ab Bb G A C2 D2 E2', 'Db Eb Gb Ab Bb G A C2 D2 E2', 'Db Eb Gb Ab Bb G A C2 D2 E2'],
    ['C E G', 'D F A', 'E G B', 'F A C2', 'G B D2', 'A C2 E2', 'Bb B F2 Gb2', 'Db Eb Gb Ab', 'Eb Gb Ab Bb', 'Gb Ab Bb Db2', 'Ab Bb Db2 Eb2', 'Bb B F2 Gb2'],

    ['E Ab C2', 'A Db2 F2', 'B Eb2 G2', 'C D F G Ab Bb Db2 Eb2', 'C D F G Ab Bb Db2 Eb2', 'C D F G Ab Bb Db2 Eb2', 'C D F G Ab Bb Db2 Eb2', 'Bb D2 Gb2', 'Db Eb Gb Ab A B D2 E2', 'Db Eb Gb Ab A B D2 E2', 'Db Eb Gb Ab A B D2 E2', 'Db Eb Gb Ab A B D2 E2'],
    ['C Eb Gb A', 'D F Ab B', 'F Ab B D2', 'G Bb Db2 E2', 'E G Bb Db2', 'A C2 Eb2 Gb2', 'B D2 F2 Ab2', 'Db E G Bb', 'Gb A C2 Eb2', 'Eb Gb A C2', 'Ab B D2 F2', 'Bb Db2 E2 G2'],

    ['D C2', 'E D2', 'G F2', 'A G2', 'B A2', 'C Bb', 'F Eb2', 'Eb Db2', 'Ab Gb2', 'Bb Ab2', 'Db B', 'Gb E2'],
    ['C B', 'F E2', 'D Db2', 'E Eb2', 'G Gb2', 'A Ab2', 'B Bb2', 'Db C2', 'Eb D2', 'Gb F2', 'Ab G2', 'Bb A2']
]

let create_white_black_table = function () {
    // container_table.style.flexDirection = 'row';

    //создание 11 строк
    let new_row;
    let new_column;
    let new_vertical_line;
    for (let index_of_row = 0; index_of_row < 12; index_of_row++) {
        new_row = document.createElement('div');
        new_row.classList.add('table_row');

        //создание 5 колонок
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

            new_row.append(new_column);
        }
        container_table.append(new_row);
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
        // console.log(all_vertical_line[i].dataset.value)
        switch (all_vertical_line[i].dataset.value) {
            case '0':
                break;
            case '1':
                let new_point = document.createElement('div');
                new_point.classList.add('point_w_and_b');
                all_vertical_line[i].append(new_point);
                break;
            default:
                all_vertical_line[i].classList.add('fix_width');
                let new_label = document.createElement('div');
                new_label.classList.add('point_label');

                // all_vertical_line[i].innerHTML = all_vertical_line[i].dataset.value;
                new_label.innerHTML = all_vertical_line[i].dataset.value;
                all_vertical_line[i].append(new_label);

                break;
        }
        // console.log(new_arr_of_point_arr);
    }
    all_point_w_and_b = document.querySelectorAll('.point_w_and_b');

}

// create_table(tactile_table);
// add_dataatr(all_table_item,dataset_note,data_algorythm);
// active_space();

// create_white_black_table();



document.querySelector('.geometry_btn').onclick = function () {
    container_table.replaceChildren();
    create_table(tactile_table);
    add_dataatr(all_table_item, dataset_note, data_algorythm);
    active_space();
    document.querySelector('.hide_show_block').classList.remove('hide_btn');
    value_table = 'geometry_table';
    ind_cursor = 0;
}
document.querySelector('.color_btn').onclick = function () {
    container_table.replaceChildren();
    create_white_black_table();
    document.querySelector('.hide_show_block').classList.add('hide_btn');
    add_dataatr(all_point_w_and_b, data_attr_point, point_algorythm);
    value_table = 'color_table';
    ind_cursor = 0;
}
document.querySelector('.x_button').onclick = function () {
    active_x_block();
}
document.querySelector('.margin_button').onclick = function () {
    active_space();
}

// create_white_black_table();
// add_dataatr(all_point_w_and_b, data_attr_point, point_algorythm);
// value_table = 'color_table';
create_table(tactile_table);
add_dataatr(all_table_item, dataset_note, data_algorythm);
active_space();
document.querySelector('.hide_show_block').classList.remove('hide_btn');
value_table = 'geometry_table';
ind_cursor = 0;