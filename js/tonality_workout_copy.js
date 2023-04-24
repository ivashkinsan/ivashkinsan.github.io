let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1', '3', '5', '6', '8', '10', '12', '13', '15', '17', '18', '20', '22', '24', '25'];
let all_table_rows = document.querySelectorAll('.table_rows');
let staff_image = document.querySelector('.main__staff');

// изменение картинки с нотным станом
let add_image_source = function (item) {
    staff_image.children[0].src = '/tonality_workout/image/staff_svg_elem/' + item.dataset.ton + '.svg';
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
            console.log(inp_elem);
            console.log(numbbb);
            elem.classList.add('active_small_keyb_elem');
        } else {
            elem.classList.remove('active_small_keyb_elem');
        }

    }
}



// стартовое распределение цвета клавиш большой клваиатуры
let big_keyboard_add_color = function () {
    for (let item of keyboard_elements) {
        console.log(item.dataset.numb == ('1' || '3' || '5' || '6' || '8' || '10' || '12'))
        if (white_key_numb.includes(item.dataset.numb)) {
            item.classList.add('white_elem')
        } else {
            item.classList.add('black_elem')
        }
    }
}
big_keyboard_add_color();



for (let item of all_table_rows) {

    console.log(item.dataset.sortnumb);
}
// console.log(all_table_rows);
// console.log('-------------------------------');

all_table_rows.forEach(function (currentValue, currentIndex, listObj) {
    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log(listObj);
});

let main_table_grid = document.querySelector('.main__table_grid');
let current_active_box;

for (let item of all_table_rows) {
    item.addEventListener('mouseenter', (event) => {
        // console.log(item.dataset.ton);
        item.classList.add('active_box_border');
        // console.log(staff_image.children[0].src)
        add_image_source(item);
        add_color_to_small_keyb_elem(item.dataset.ton)
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
