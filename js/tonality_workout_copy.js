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