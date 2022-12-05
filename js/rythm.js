document.oncontextmenu = function () {
    return false
};
const click_items = document.querySelectorAll('.click_item');
const p_numb = document.querySelectorAll('.numb');

const taka = ['ТА', 'КА'];
const takita = ['ТА', 'КИ', 'ТА'];
const takadimi = ['ТА', 'КА', 'ДИ', 'МИ'];

let monitoringDIV = document.querySelector('.monitoring');

// console.log(click_items);
let monitoringBaseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let cheked = true;

// логика последовательного клика по элементу
for (let item of click_items) {
    if (item.children[0].dataset.clickstatus == 'true') {
        // console.log('clickstatus true');
    }

    item.addEventListener('click', function add(elem) {

        // console.log(item.classList.contains('border_active'));
        // console.log(elem.target.querySelectorAll('div'));
        console.log(elem.target.parentNode);
        // elem.target.parentNode.classList.add('no-click');
        // console.log(elem.target.nodeName.toUpperCase() == 'DIV');

        // сбор дочерних элементов
        let collection_child_div_elem = elem.target.querySelectorAll('div');
        let collection_child_p_elem = elem.target.querySelectorAll('p');



        if (item.children[0].dataset.status == '0') {
            // добавление рамки
            item.classList.add('border_active');

            // отключение в дочерних элементах кликабельности
            if (item.children[1] && item.children[2]) {
                item.children[1].classList.add('no-click');
                item.children[2].classList.add('no-click');
            }


            // сброс с внутренних элементов классов border-active и очистка textContent
            for (let child_elem of collection_child_div_elem) {
                child_elem.classList.remove('border_active');
            }
            for (let child_elem of collection_child_p_elem) {
                if (child_elem.textContent != '') {
                    child_elem.textContent = '';
                    child_elem.dataset.status = '0'
                }
            }

            // отключение в родительском элементе кликабельности

            switch (item.children[0].dataset.note) {
                case '1':
                    item.children[0].innerHTML = 'w';
                    item.children[0].dataset.status = 'note';
                    break;
                case '2':
                    item.children[0].innerHTML = 'h';
                    item.children[0].dataset.status = 'note';
                    break;
                case '4':
                    item.children[0].innerHTML = 'q';
                    item.children[0].dataset.status = 'note';
                    break;
                case '8':
                    item.children[0].innerHTML = 'e';
                    item.children[0].dataset.status = 'note';
                    break;
                case '16':
                    item.children[0].innerHTML = 's';
                    item.children[0].dataset.status = 'note';
                    break;
            }
        } else if (item.children[0].dataset.status == 'note') {
            item.classList.remove('border_active');
            switch (item.children[0].dataset.note) {
                case '1':
                    item.children[0].innerHTML = 'W';
                    item.children[0].dataset.status = 'pause';
                    break;
                case '2':
                    item.children[0].innerHTML = 'H';
                    item.children[0].dataset.status = 'pause';
                    break;
                case '4':
                    item.children[0].innerHTML = 'Q';
                    item.children[0].dataset.status = 'pause';
                    break;
                case '8':
                    item.children[0].innerHTML = 'E';
                    item.children[0].dataset.status = 'pause';
                    break;
                case '16':
                    item.children[0].innerHTML = 'S';
                    item.children[0].dataset.status = 'pause';
                    break;
            }
        } else if (item.children[0].dataset.status == 'pause') {

            // включение в дочерних элементах кликабельности
            // if (item.children[1] && item.children[2]) {
            //     item.children[1].classList.remove('no-click');
            //     item.children[2].classList.remove('no-click');
            // }

            for (let child_elem of collection_child_div_elem) {
                child_elem.classList.remove('no-click');
            }

            switch (item.children[0].dataset.note) {
                case '1':
                    item.children[0].innerHTML = '';
                    item.children[0].dataset.status = '0';
                    break;
                case '2':
                    item.children[0].innerHTML = '';
                    item.children[0].dataset.status = '0';
                    break;
                case '4':
                    item.children[0].innerHTML = '';
                    item.children[0].dataset.status = '0';
                    break;
                case '8':
                    item.children[0].innerHTML = '';
                    item.children[0].dataset.status = '0';
                    break;
                case '16':
                    item.children[0].innerHTML = '';
                    item.children[0].dataset.status = '0';
                    break;
            }
        }





        // switch (true) {
        //     case item.classList.contains('whole_note'):
        //         monitoringBaseArr.splice(item.dataset.position - 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        //         break;
        //     case item.classList.contains('half_note'):
        //         monitoringBaseArr.splice(item.dataset.position - 1, 8, 1, 1, 1, 1, 1, 1, 1, 1);
        //         break;
        //     case item.classList.contains('quarter_note'):
        //         monitoringBaseArr.splice(item.dataset.position - 1, 4, 1, 1, 1, 1);
        //         break;
        //     case item.classList.contains('eighth'):
        //         monitoringBaseArr.splice(item.dataset.position - 1, 2, 1, 1);
        //         break;
        //     case item.classList.contains('sixteenth'):
        //         monitoringBaseArr.splice(item.dataset.position - 1, 1, 1);
        //         break;
        // };


        elem.stopPropagation(); // глушим всплывающее событие
        // console.log('this children = ' + this.children);
        // this.children[0].classList.toggle('hide');

    })

}


// очистка innerHTML параграфов <p>
function clear_p() {
    for (let item of click_items) {
        switch (item.children[0].dataset.note) {
            case '1':
                item.children[0].innerHTML = '';
                item.children[0].dataset.status = '0';
                break;
            case '2':
                item.children[0].innerHTML = '';
                item.children[0].dataset.status = '0';
                break;
            case '4':
                item.children[0].innerHTML = '';
                item.children[0].dataset.status = '0';
                break;
            case '8':
                item.children[0].innerHTML = '';
                item.children[0].dataset.status = '0';
                break;
            case '16':
                item.children[0].innerHTML = '';
                item.children[0].dataset.status = '0';
                break;
        }
    }
}

// кнопка сброс
document.querySelector('.button_clear_p').onclick = function () {
    clear_p();
    addFontSize();
    for (let item of click_items) {
        item.classList.remove('border_active');
    }
}

for (let item of click_items) {
    item.addEventListener('contextmenu', function add(elem) {
        // item.classList.toggle('border_active_doble');
        if (cheked) {
            item.classList.toggle('border_active_dashed');
        }

        elem.preventDefault();
        elem.stopPropagation();
        this.children;
        // console.log(this.children[0].dataset);


    })
}

let font_size = 6;

function addFontSize() {
    for (let item of p_numb) {

        switch (item.dataset.note) {
            case '1':
                item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 1)`;
                item.style.lineHeight = '70%';
                break;
            case '2':
                item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 2)`;
                item.style.lineHeight = '70%';
                break;
            case '4':
                item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 3)`;
                item.style.lineHeight = '70%';
                break;
            case '8':
                item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 5)`;
                item.style.lineHeight = '100%';
                break;
            case '16':
                item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 5)`;
                item.style.lineHeight = '70%';
                break;

        }
    }
}

// addFontNote();
addFontSize();

function monitoringStart(all) {

    for (let j = all; j <= monitoringBaseArr.length; j++) {
        // console.log('RUN');
        monitoringDIV.innerHTML = String(monitoringBaseArr);
    };
    console.log(monitoringBaseArr);
}

// изменение формы круга в квадрат
document.querySelector('.button_square').onclick = function () {
    for (let item of click_items) {
        item.classList.toggle('click_item_square');
    }
}

// изменение центровки длительностей
document.querySelector('.button_position').onclick = function () {
    for (let item of click_items) {
        item.classList.toggle('click_item_position');
    }
}

// двойного клика на кнопке
// function speedCalculationProporzion(e) {
//     for (let item of p_numb) {
//         switch (item.dataset.note) {
//             case '1':
//                 item.innerHTML = e * 1 + '/' + e;
//                 break;
//             case '2':
//                 item.innerHTML = e / 2 + '/' + e;
//                 break;
//             case '4':
//                 item.innerHTML = e / 4 + '/' + e;
//                 break;
//             case '8':
//                 item.innerHTML = e / 8 + '/' + e;
//                 break;
//             case '16':
//                 item.innerHTML = e / 16 + '/' + e;
//                 break;
//         }
//     }
// }



// функция подключения простого шрифта
function addBodyFontOPUSTEXT() {
    addFontSize();
    document.querySelector('body').style.fontFamily = 'OPUSTEXT';
}

// действие правой кнопкой мыши
for (let item of click_items) {
    item.addEventListener('', function add(elem) {
        console.log(item);
        elem.preventDefault();
        elem.stopPropagation(); // глушим всплывающее событие
        this.children;
        item.children[0].classList.toggle('hide');
    })
}

// кнопка прозрачности
// document.querySelector('.button_opacity_on').onclick = () => {
//     for (let item of click_items) {
//         item.children[0].classList.add('hide');
//     }
// }

// кнопка прозрачности
// document.querySelector('.button_opacity_off').onclick = () => {
//     for (let item of p_numb) {
//         item.classList.remove('hide');
//     }
// }

// отображение двоичной системы в 16
// document.querySelector('.button_ta_ka').onclick = () => {
//     function ta_ka() {
//         let chelnok = 0;
//         for (let item of click_items) {
//             item.children[0].style.fontSize = '100%';
//             switch (item.children[0].dataset.note) {
//                 case '1':
//                     item.children[0].innerHTML = 'ТА_КА ТА_КА ТА_КА ТА_КА ТА_КА ТА_КА ТА_КА ТА_КА';
//                     break;
//                 case '2':
//                     item.children[0].innerHTML = 'ТА_КА ТА_КА ТА_КА ТА_КА';
//                     break;
//                 case '4':
//                     item.children[0].innerHTML = 'ТА_КА ТА_КА';
//                     break;
//                 case '8':
//                     item.children[0].innerHTML = 'ТА_КА';
//                     break;
//                 case '16':
//                     item.children[0].innerHTML = 'ТА';
//                     item.children[0].innerHTML = 'КА';
//                     break;


//             }
//             chelnok += 1;
//             console.log(chelnok);
//         }
//     }
//     ta_ka();
// }


// console.log(document.querySelector('.select_variation'));
// select
document.querySelector('.select_variation').addEventListener('change', function (elem) {

    // функция расчета скорости 1 2 4 8 16 и записи в элементы
    function speedCalculation(e) {
        for (let item of p_numb) {
            switch (item.dataset.note) {
                case '1':
                    item.innerHTML = e / 2;
                    break;
                case '2':
                    item.innerHTML = e / 4;
                    break;
                case '4':
                    item.innerHTML = e / 8;
                    break;
                case '8':
                    item.innerHTML = e / 16;
                    break;
                case '16':
                    item.innerHTML = e / 32;
                    break;
            }
        }
    }

    switch (this.value) {
        case 'value_NO':
            clear_p();
            break;
        case 'value_notes':
            // запись в нотах
            for (let item of p_numb) {

                switch (item.dataset.note) {
                    case '1':
                        item.innerHTML = 'w';
                        break;
                    case '2':
                        item.innerHTML = 'h';
                        break;
                    case '4':
                        item.innerHTML = 'q';
                        break;
                    case '8':
                        item.innerHTML = 'e';
                        break;
                    case '16':
                        item.innerHTML = 's';
                        break;

                }
            }
            break;
        case 'value_pause':
            // запись в паузах
            for (let item of p_numb) {
                switch (item.dataset.note) {
                    case '1':
                        item.innerHTML = 'W';
                        break;
                    case '2':
                        item.innerHTML = 'H';
                        break;
                    case '4':
                        item.innerHTML = 'Q';
                        break;
                    case '8':
                        item.innerHTML = 'E';
                        break;
                    case '16':
                        item.innerHTML = 'S';
                        break;
                }

            }
            break;
        case 'value_number':
            // запись в числах
            for (let item of p_numb) {
                switch (item.dataset.note) {
                    case '1':
                        item.innerHTML = '1';
                        break;
                    case '2':
                        item.innerHTML = '2';
                        break;
                    case '4':
                        item.innerHTML = '4';
                        break;
                    case '8':
                        item.innerHTML = '8';
                        break;
                    case '16':
                        item.innerHTML = '16';
                        break;
                }
            }
            break;
        case 'value_1':
            // кнопка скорости целых
            speedCalculation(2);
            break;
        case 'value_2':
            // кнопка скорости целых
            speedCalculation(4);
            break;
        case 'value_4':
            // кнопка скорости целых
            speedCalculation(8);
            break;
        case 'value_8':
            // кнопка скорости целых
            speedCalculation(16);
            break;
        case 'value_16':
            // кнопка скорости целых
            speedCalculation(32);
            break;
        case 'procent':
            // запись в процентах
            for (let item of p_numb) {
                switch (item.dataset.note) {
                    case '1':
                        item.innerHTML = '100';
                        break;
                    case '2':
                        item.innerHTML = '50';
                        break;
                    case '4':
                        item.innerHTML = '25';
                        break;
                    case '8':
                        item.innerHTML = '12,5';
                        break;
                    case '16':
                        item.innerHTML = '6.25';
                        break;
                }
            }
    }
})

// кнопка скрытия фона
document.querySelector('.button_hide_fon').onclick = function () {
    for (let item of click_items) {

        item.classList.toggle('button_fon_hide');
    }

}

// кнопка скрытия всех граней
document.querySelector('.button_hide_grani').onclick = function () {
    for (let item of click_items) {

        item.classList.toggle('button_grani_hide');
    }

}

// кнопка выравнивания <p></p>
document.querySelector('.button_p_center').onclick = function () {
    for (let item of p_numb) {
        item.classList.toggle('p_allign_center');
    }
}
// кнопка ширины бордера
let border = document.querySelector('.border');
document.querySelector('.input_range_width').addEventListener('change', function () {
    console.log(this.value);
    border.style.width = this.value + 'vw';
    // border.style.height = this.value + 'vw';
});

document.querySelector('.reset_width').onclick = function () {
    border.style.width = 85 + 'vw'
}