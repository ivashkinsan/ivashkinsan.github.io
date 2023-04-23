let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1', '3', '5', '6', '8', '10', '12', '13', '15', '17', '18', '20', '22', '24', '25'];
let all_table_rows = document.querySelectorAll('.table_rows');

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
console.log(all_table_rows);
console.log('-------------------------------');

all_table_rows.forEach(function (currentValue, currentIndex, listObj) {
    console.log(currentValue);
    console.log(currentIndex);
    console.log(listObj);
});

let main_table_grid = document.querySelector('.main__table_grid');
let current_active_box;

for (let item of all_table_rows) {
    item.addEventListener('mouseenter', (event) => {
        console.log(item.dataset.ton);
        item.classList.add('active_box_border');
    })
}

for (let item of all_table_rows) {
    item.addEventListener('mouseleave', (event) => {
        console.log(item);
        if (item.classList.contains('active_box_border')) {
            item.classList.remove('active_box_border');
        }

    })
}

// main_table_grid.addEventListener('mouseover', (event) => {

//     // console.log(event);
//     // console.log(event.target.classList.contains('table_rows'));
//     if (current_active_box) {
//         current_active_box.classList.remove('active_box_border');
//     }
//     if (event.target.classList.contains('table_rows')) {
//         event.target.classList.add('active_box_border');
//         event.stopPropagation();
//         current_active_box = event.target;
//     }
// })

// main_table_grid.addEventListener('mouseout', (event) => {
//     console.log(event);
//     console.log(event.target.classList.contains('table_rows'));
//     if (event.target.classList.contains('active_box_border')) {
//         event.target.classList.remove('active_box_border');
//     }
// })
