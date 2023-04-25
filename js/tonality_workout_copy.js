let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1', '3', '5', '6', '8', '10', '12', '13', '15', '17', '18', '20', '22', '24', '25'];

let main__table_grid__table = document.querySelector('.main__table_grid__table');
let all_table_rows = document.querySelectorAll('.table_rows');

let staff_image = document.querySelector('.main__staff');

// изменение картинки с нотным станом
let add_image_source = function (item) {
    staff_image.children[0].src = '/tonality_workout/image/staff_svg_elem/' + item.dataset.ton + '.svg';
}

let tonalityObj = {
    'C_dur': [1, 3, 5, 6, 8, 10, 12, 'до мажор'],
    'D_flat_dur': [2, 4, 6, 7, 9, 11, 13, 'реb мажор'],
    'D_dur': [3, 5, 7, 8, 10, 12, 14, 'ре мажор'],
    'E_flat_dur': [4, 6, 8, 9, 11, 13, 15, 'миb мажор'],
    'E_dur': [5, 7, 9, 10, 12, 14, 16, 'ми мажор'],
    'F_dur': [6, 8, 10, 11, 13, 15, 17, 'фа мажор'],
    'F_sharp_dur': [7, 9, 11, 12, 14, 16, 18, 'фа# мажор'],
    'G_flat_dur': [7, 9, 11, 12, 14, 16, 18, 'сольb мажор'],
    'G_dur': [8, 10, 12, 13, 15, 17, 19, 'соль мажор'],
    'A_flat_dur': [9, 11, 13, 14, 16, 18, 20, 'ляb мажор'],
    'A_dur': [10, 12, 14, 15, 17, 19, 21, 'ля мажор'],
    'B_flat_dur': [11, 13, 15, 16, 18, 20, 22, 'сиb мажор'],
    'B_dur': [12, 14, 16, 17, 19, 21, 23, 'си мажор'],
    'C_flat_dur': [12, 14, 16, 17, 19, 21, 23, 'доb мажор'],
    'C_sharp_dur': [2, 4, 6, 7, 9, 11, 13, 'до# мажор']
};

let go_big_keyboards_active = function (ton) {

    for (let item of keyboard_elements) {
        // console.log(item.dataset.numb);
        item.classList.remove('active_keyb_elem');
        // console.log(tonalityObj[ton][0].toString());
        switch (item.dataset.numb) {
            case tonalityObj[ton][0].toString():
            case tonalityObj[ton][1].toString():
            case tonalityObj[ton][2].toString():
            case tonalityObj[ton][3].toString():
            case tonalityObj[ton][4].toString():
            case tonalityObj[ton][5].toString():
            case tonalityObj[ton][6].toString():
                item.classList.add('active_keyb_elem')
                break;
        }
        // console.log(item);
        // if(item.dataset.numb == (tonalityObj[ton][0] || tonalityObj[ton][1] || tonalityObj[ton][2] || tonalityObj[ton][3] || tonalityObj[ton][4] || tonalityObj[ton][5] || tonalityObj[ton][6])){
        //     console.log(tonalityObj[ton][7])

        // }
    }
}

// подсветка тонической клавиши на маленькой клавиатуре
let all_elem_of_small_keyboard = document.querySelectorAll('.elem_of_small_keyboard');
let add_color_to_small_keyb_elem = function (inp_elem) {
    let numbbb = '';
    switch (inp_elem) {
        case 'C_dur':
            numbbb = 0;
            break;
        case 'D_flat_dur':
            numbbb = 1;
            break;
        case 'D_dur':
            numbbb = 2;
            break;
        case 'E_flat_dur':
            numbbb = 3;
            break;
        case 'E_dur':
            numbbb = 4;
            break;
        case 'F_dur':
            numbbb = 5;
            break;
        case 'G_flat_dur':
            numbbb = 6;
            break;
        case 'F_sharp_dur':
            numbbb = 6;
            break;
        case 'G_dur':
            numbbb = 7;
            break;
        case 'A_flat_dur':
            numbbb = 8;
            break;
        case 'A_dur':
            numbbb = 9;
            break;
        case 'B_flat_dur':
            numbbb = 10;
            break;
        case 'B_dur':
            numbbb = 11;
            break;
        case 'C_sharp_dur':
            numbbb = 1;
            break;
        case 'C_flat_dur':
            numbbb = 11;
            break;
    }
    for (let elem of all_elem_of_small_keyboard) {
        if (numbbb == elem.dataset.numb) {
            // console.log(inp_elem);
            // console.log(numbbb);
            elem.classList.add('active_small_keyb_elem');
        } else {
            elem.classList.remove('active_small_keyb_elem');
        }

    }
}





// стартовое распределение цвета клавиш большой клваиатуры
let big_keyboard_add_color = function () {
    for (let item of keyboard_elements) {
        // console.log(item.dataset.numb == ('1' || '3' || '5' || '6' || '8' || '10' || '12'))
        if (white_key_numb.includes(item.dataset.numb)) {
            item.classList.add('white_elem')
        } else {
            item.classList.add('black_elem')
        }
    }
}
big_keyboard_add_color();


// сортировка таблицы по возростанию знаков
let sort_1_to_7_var = 'false';

function sort_1_to_7() {
    if (sort_1_to_7_var == 'false') {
        main__table_grid__table.replaceChildren(
            all_table_rows[7],
            all_table_rows[4],
            all_table_rows[1],
            all_table_rows[5],
            all_table_rows[2],
            all_table_rows[6],
            all_table_rows[3],
            all_table_rows[0],
            all_table_rows[8],
            all_table_rows[11],
            all_table_rows[14],
            all_table_rows[10],
            all_table_rows[13],
            all_table_rows[9],
            all_table_rows[12],
            all_table_rows[15]
        );
        sort_1_to_7_var = 'true';
    } else {
        main__table_grid__table.replaceChildren(
            all_table_rows[0],
            all_table_rows[1],
            all_table_rows[2],
            all_table_rows[3],
            all_table_rows[4],
            all_table_rows[5],
            all_table_rows[6],
            all_table_rows[7],
            all_table_rows[8],
            all_table_rows[9],
            all_table_rows[10],
            all_table_rows[11],
            all_table_rows[12],
            all_table_rows[13],
            all_table_rows[14],
            all_table_rows[15])
        sort_1_to_7_var = 'false';
    }
}

// спрятать знаки в таблице
let all_sharp_and_flat_svg = document.querySelectorAll('.staff_rows > img');
let hide_all_sharp_and_flat_boolean = 'false';

function hide_all_sharp_and_flat_svg() {
    if (hide_all_sharp_and_flat_boolean) {
        all_sharp_and_flat_svg.forEach(element => element.classList.toggle('hide'));
        hide_all_sharp_and_flat_boolean = 'true';
    } else {
        all_sharp_and_flat_svg.forEach(element => element.classList.toggle('hide'));
        hide_all_sharp_and_flat_boolean = 'false';
    }
};


// спрятать текст в таблице
let all_text_row = document.querySelectorAll('.text_row');
let text_row_press_button = 'false';

function hide_text_row() {
    if (text_row_press_button) {
        all_text_row.forEach(element => element.classList.toggle('hide'));
        text_row_press_button = 'true';
    } else {
        all_text_row.forEach(element => element.classList.toggle('hide'));
        text_row_press_button = 'false';
    }
};

// спрятать бинарные линии в таблице
let all_bi_line = document.querySelectorAll('.name_sharp > img');
let all_bi_line_press_button = 'false';

function bi_line() {
    if (all_bi_line_press_button) {
        all_bi_line.forEach(element => element.classList.toggle('hide'));
        all_bi_line_press_button = 'true';
    } else {
        all_bi_line.forEach(element => element.classList.toggle('hide'));
        all_bi_line_press_button = 'false';
    }
};


// интерактивность мыши
let mouse_hover_or_click = 'false';

let main_table_grid = document.querySelector('.main__table_grid');
let current_active_box;

let all_function = function (star_hero) {
    console.log(star_hero);
    star_hero.classList.add('active_box_border');
    add_image_source(star_hero);
    add_color_to_small_keyb_elem(star_hero.dataset.ton);
    thermometr_go(star_hero.dataset.sort, star_hero.dataset.value);
    go_big_keyboards_active(star_hero.dataset.ton)
}


// let add_mouse_hover_or_click = function () {
//     for (let item of all_table_rows) {
//         function GOGo() {
//             all_function(item);
//         }
//         item.removeEventListener('click', GOGo)
//         item.removeEventListener('mouseenter', GOGo)
//         if (mouse_hover_or_click == 'false') {

//             item.addEventListener('click', GOGo)

//             // item.removeEventListener('mouseenter', GO());
//         } else {

//             item.addEventListener('mouseenter', GOGo)
//         }

//     }
//     mouse_hover_or_click = mouse_hover_or_click == 'true' ? 'false' : 'true';
//     console.log(mouse_hover_or_click);
// }

// add_mouse_hover_or_click();
for (let item of all_table_rows) {
    item.addEventListener('mouseenter', function () {
        all_function(item);
    })
}

for (let item of all_table_rows) {
    item.addEventListener('mouseleave', (event) => {
        // console.log(item);
        if (item.classList.contains('active_box_border')) {
            item.classList.remove('active_box_border');
        }
    })
}

// подсветка элементов термометра
let all_therm_elem = document.querySelectorAll('.therm_elem');
let thermometr_go = function (flat_or_sharp, value) {
    for (let item of all_therm_elem) {
        if (item.dataset.sort == flat_or_sharp & item.dataset.numb <= value) {
            item.classList.add('active_small_keyb_elem');
            // console.log(item.dataset.numb);
        } else {
            item.classList.remove('active_small_keyb_elem');
        }
        if (!item.dataset.sort == 'undefined') {
            item.classList.add('active_small_keyb_elem');
        }
    }
}