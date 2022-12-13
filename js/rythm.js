document.oncontextmenu = function () {
    return false;
};
document.onselectstart = function () {
    return false;
}

let click_items;
let p_numb;

let search_all_click_items = function () {
    click_items = document.querySelectorAll('.click_item');
    p_numb = document.querySelectorAll('.numb');
}
search_all_click_items();

const taka = ['ТА', 'КА'];
const takita = ['ТА', 'КИ', 'ТА'];
const takadimi = ['ТА', 'КА', 'ДИ', 'МИ'];

let monitoringDIV = document.querySelector('.monitoring');

// console.log(click_items);
let monitoringBaseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let cheked = true;

// логика последовательного клика по элементу
// let go_click_function = function () {
//     for (let item of click_items) {
// if (item.children[0].dataset.clickstatus == 'true') {
//     // console.log('clickstatus true');
// }


// item.addEventListener('click', 

function clickability(elem) {
    // console.log(elem);
    event.stopPropagation();
    // сбор дочерних элементов
    let collection_child_div_elem = elem.querySelectorAll('div');
    let collection_child_p_elem = elem.querySelectorAll('.numb');

    if (elem.children[0].dataset.status == '0') {
        // добавление рамки
        // глушим всплывающее событие

        elem.classList.add('border_active');

        // отключение в дочерних элементах кликабельности
        if (elem.children[1] && elem.children[2]) {
            elem.children[1].classList.add('no-click');
            elem.children[2].classList.add('no-click');
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

        switch (elem.children[0].dataset.note) {
            case '1':
                elem.children[0].innerHTML = 'w';
                elem.children[0].dataset.status = 'note';
                break;
            case '2':
                elem.children[0].innerHTML = 'h';
                elem.children[0].dataset.status = 'note';
                break;
            case '4':
                elem.children[0].innerHTML = 'q';
                elem.children[0].dataset.status = 'note';
                break;
            case '8':
                elem.children[0].innerHTML = 'e';
                elem.children[0].dataset.status = 'note';
                break;
            case '16':
                elem.children[0].innerHTML = 's';
                elem.children[0].dataset.status = 'note';
                break;
            case '12':
                elem.children[0].innerHTML = 'i';
                elem.children[0].dataset.status = 'note';
                break;
            case '6':
                elem.children[0].innerHTML = 'j';
                elem.children[0].dataset.status = 'note';
                break;
            case '3':
                elem.children[0].innerHTML = 'd';
                elem.children[0].dataset.status = 'note';
                break;
        }
    } else if (elem.children[0].dataset.status == 'note') {
        elem.classList.remove('border_active');
        switch (elem.children[0].dataset.note) {
            case '1':
                elem.children[0].innerHTML = 'W';
                elem.children[0].dataset.status = 'pause';
                break;
            case '2':
                elem.children[0].innerHTML = 'H';
                elem.children[0].dataset.status = 'pause';
                break;
            case '4':
                elem.children[0].innerHTML = 'Q';
                elem.children[0].dataset.status = 'pause';
                break;
            case '8':
                elem.children[0].innerHTML = 'E';
                elem.children[0].dataset.status = 'pause';
                break;
            case '16':
                elem.children[0].innerHTML = 'S';
                elem.children[0].dataset.status = 'pause';
                break;
            case '12':
                elem.children[0].innerHTML = 'I';
                elem.children[0].dataset.status = 'pause';
                break;
            case '6':
                elem.children[0].innerHTML = 'J';
                elem.children[0].dataset.status = 'pause';
                break;
            case '3':
                elem.children[0].innerHTML = 'D';
                elem.children[0].dataset.status = 'pause';
                break;

        }
    } else if (elem.children[0].dataset.status == 'pause') {

        for (let child_elem of collection_child_div_elem) {
            child_elem.classList.remove('no-click');
        }

        switch (elem.children[0].dataset.note) {
            case '1':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '2':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '4':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '8':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '16':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '12':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '6':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
            case '3':
                elem.children[0].innerHTML = '';
                elem.children[0].dataset.status = '0';
                break;
        }
    }


}
//---------

//     }
// }
// конец функции --------------------------------------------------------------------

// go_click_function();


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




let font_size = 6;

// function addFontSize() {
//     for (let item of p_numb) {

//         switch (item.dataset.note) {
//             case '1':
//                 item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 1)`;
//                 item.style.lineHeight = '70%';
//                 break;
//             case '2':
//                 item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 2)`;
//                 item.style.lineHeight = '70%';
//                 break;
//             case '4':
//                 item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 3)`;
//                 item.style.lineHeight = '70%';
//                 break;
//             case '8':
//                 item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 5)`;
//                 item.style.lineHeight = '100%';
//                 break;
//             case '16':
//                 item.style.fontSize = `calc((${font_size}vw + ${font_size}vh)/ 5)`;
//                 item.style.lineHeight = '70%';
//                 break;

//         }
//     }
// }

function customFontSize(e) {
    for (let item of p_numb) {
        item.style.fontSize = e + 'px';
    }
}

// addFontNote();
// addFontSize();

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
// добавление тени
document.querySelector('.button_box_shadows').onclick = function () {
    for (let item of click_items) {
        item.classList.toggle('box_shadows');
    }
}

// добавление space
document.querySelector('.button_space').onclick = function () {
    for (let item of click_items) {
        item.classList.toggle('space');
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
    // addFontSize();
    document.querySelector('body').style.fontFamily = 'OPUSTEXT';
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

// кнопка сброс
document.querySelector('.button_clear_p').onclick = function () {
    clear_p();
    // addFontSize();
    for (let item of click_items) {
        item.classList.remove('border_active');
    }
}

// кнопка скрытия сетки--------------------------------------
document.querySelector('.button_setka').onclick = function () {
    for (let item of click_items) {
        if (!item.classList.contains('button_setka_hide')) {
            item.classList.add('button_setka_hide'); // скрыть сетку
        } else {
            item.classList.remove('button_setka_hide'); // скрыть сетку
        }
    }

}

// изменение центровки длительностей
document.querySelector('.button_position').onclick = function () {
    for (let item of click_items) {
        item.classList.toggle('click_item_position'); // изменение центровки длительностей
    }
}

// кнопка скрытия всех граней--------------------------------------
document.querySelector('.button_hide_circkle').onclick = function () {
    for (let item of click_items) {

        item.classList.toggle('button_hide_circkle'); // скрыть круги
    }
    // customFontSize(50);
}

// кнопка размера шрифта--------------------------------------
document.querySelector('.button_size_even').onclick = function () {
    for (let item of click_items) {

        item.classList.toggle('font_size_even'); // увеличить шрифт
    }

}

// кнопка выравнивания <p></p> в линию --------------------------------------
document.querySelector('.button_p_allgn_line').onclick = function () {
    for (let item of p_numb) {
        item.classList.toggle('button_p_allgn_line'); // выровнять шрифт в линию
    }
}
// кнопка ширины бордера--------------------------------------
let container = document.querySelector('.container');
document.querySelector('.input_range_width').addEventListener('change', function () {
    console.log(this.value);
    container.style.width = this.value + 'vw';
    // border.style.height = this.value + 'vw';

});

// активность инпут рэйндж--------------------------------------
document.querySelector('.reset_width').onclick = function () {
    container.style.width = 800 + 'px';
}

// let number_i = 0;
// for (let item of click_items) {
//     // console.log(item);
//     let newElement = document.createElement('p');
//     newElement.classList.add('p_center');
//     newElement.innerHTML = number_i;
//     number_i++;
//     item.append(newElement);


//     item.addEventListener('mousedown', function (elem) {
//         console.log('mousedown');
//         // console.log(item);
//         elem.stopPropagation();
//     });

//     item.addEventListener('mouseup', function (elem) {
//         console.log('mouseup');
//         // console.log(item);
//         elem.stopPropagation();
//     });

// }

// активность правой кнопки мыши ---------------------------------------------------------------------
for (let item of click_items) {
    item.addEventListener('contextmenu', function add(elem) {
        elem.preventDefault();
        elem.stopPropagation();



        // console.log(item.dataset);
        if (item.dataset.contextmenu == 'false') {
            // создание шторки
            let shtorka = document.createElement('div');
            shtorka.classList.add('shtorka');
            document.querySelector('.container').append(shtorka);
            // создание всплывающих кнопок и их род элемента 
            let circle_container_of_button = document.createElement('div');
            circle_container_of_button.classList.add('circle_container_of_button');
            circle_container_of_button.classList.add('border_press_contextmenu');

            // создание кнопки [+1]-----------------------------------------------------------
            let button_of_plus_one = document.createElement('p');
            button_of_plus_one.classList.add('plus_one');
            button_of_plus_one.innerHTML = '[ +1 ]';
            circle_container_of_button.append(button_of_plus_one);
            // её активность
            circle_container_of_button.querySelector('.plus_one').onclick = function (elem) {
                elem.stopPropagation();
                let clone_node = item.children[1].cloneNode(true);
                clone_node.classList.add('new_clone_element');
                item.append(clone_node);

                // адаптируем размер элементов
                for (let i = 1; i < item.children.length; i++) {
                    if (item.children[i].classList.contains('click_item')) {
                        item.children[i].style.height = (100 / (item.children.length - 2)) + '%';
                    }
                }
            }

            // создание кнопки [ -1 ]---------------------------------------------------------------
            let button_of_minus_one = document.createElement('p');
            button_of_minus_one.classList.add('minus_one');
            button_of_minus_one.innerHTML = '[ -1 ]';
            circle_container_of_button.append(button_of_minus_one);
            // её активность
            circle_container_of_button.querySelector('.minus_one').onclick = function (elem) {
                elem.stopPropagation();
                for (let i = 1; i < item.children.length; i++) {
                    if (item.children[i].classList.contains('new_clone_element')) {
                        item.querySelector('.new_clone_element').remove();
                    }
                }
                // адаптируем размер элементов
                for (let i = 1; i < item.children.length; i++) {
                    if (item.children[i].classList.contains('click_item')) {
                        item.children[i].style.height = (100 / (item.children.length - 2)) + '%';
                        item.children[i].style.width = (100 / (item.children.length - 2)) + '%';
                    }
                }
            }




            // создание кнопки [++]
            let button_of_plus = document.createElement('p');
            button_of_plus.classList.add('plus_plus');
            button_of_plus.innerHTML = '[ ++ ]';
            circle_container_of_button.append(button_of_plus);
            // её активность
            circle_container_of_button.querySelector('.plus_plus').onclick = function (elem) {
                console.log('plus_plus')
                elem.stopPropagation();
                console.log(item.parentNode);

            }


            // создание кнопки [del]
            let button_of_del = document.createElement('p');
            button_of_del.classList.add('del');
            button_of_del.innerHTML = '[ Х ]';
            circle_container_of_button.append(button_of_del);
            // её активность
            circle_container_of_button.querySelector('.del').onclick = function (elem) {
                console.log('del')
                elem.stopPropagation();
                // console.log(item.parentNode);
                let clone = item.cloneNode(true);
                let parent = item.parentNode;
                // console.log('clone = ', clone);
                // console.log('parent = ', parent);
                // console.log('clone.children = ', clone.children);
                // console.log('clone.childNode = ', clone.childNode);
                // console.log('clone.children[1] = ', clone.children[1]);
                // console.log('clone.children[2] =', clone.children[2]);
                // console.log('clone.children.length)', clone.children.length);
                // document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2]);



                switch (clone.children.length) {
                    case 3:
                        item.replaceWith(clone.children[1], clone.children[2]);
                        del_context_menu(item);
                        break;
                    case 4:
                        item.replaceWith(clone.children[1], clone.children[2], clone.children[3]);
                        del_context_menu(item);
                        break;
                    case 5:
                        item.replaceWith(clone.children[1], clone.children[2], clone.children[3], clone.children[4]);
                        del_context_menu(item);
                        break;
                    case 6:
                        item.replaceWith(clone.children[1], clone.children[2], clone.children[3], clone.children[4], clone.children[5]);
                        del_context_menu(item);
                        break;
                }

                // адаптируем размер элементов
                for (let i = 1; i < parent.children.length; i++) {
                    console.log('parent.children.length', parent.children.length);
                    if (parent.children[i].classList.contains('click_item')) {
                        console.log(parent.children[i].style.height);
                        parent.children[i].style.height = (100 / (parent.children.length - 1)) + '%';
                        // item.children[i].style.width = (100 / (item.children.length - 3)) + '%';
                    }
                }
            }





            item.append(circle_container_of_button);
            item.dataset.contextmenu = 'true';

            console.log(item);

        } else {
            // document.querySelector('.shtorka').remove();
            // document.querySelector('.circle_container_of_button').remove();
            // item.dataset.contextmenu = 'false';
            del_context_menu(item);
        }
    });

    search_all_click_items();
    // go_click_function();
}

function del_context_menu(elem) {
    document.querySelector('.shtorka').remove();
    document.querySelector('.circle_container_of_button').remove();
    elem.dataset.contextmenu = 'false';
}
// запись во все дивы нового элемента-кнопки [-3-]
// for (let item of click_items) {
//     // console.log(item);
//     let newElement = document.createElement('p');
//     newElement.classList.add('plus_one');
//     newElement.innerHTML = '[-3-]';
//     item.append(newElement);
// }

// запись во все дивы нового элемента-кнопки [+]
// for (let item of click_items) {
//     // console.log(item);
//     let newElement = document.createElement('p');
//     newElement.classList.add('plus');
//     newElement.innerHTML = '[+]';
//     item.append(newElement);
// }




// let plus_one_all_elements = document.querySelectorAll('.plus_one');
// for (let item of plus_one_all_elements) {
//     item.addEventListener('click', function (elem) {
//         console.log(item);
//         elem.stopPropagation();
//     })
// }

// ------------------------------------------------------------------------------------------------


//-----------------experiment
// document.querySelector('body').onclick = function () {
//     let clone = document.querySelector('.border_active').cloneNode(true);
//     let parent = document.querySelector('.border_active').parentNode;
//     // console.log(clone);
//     // console.log(parent);
//     // console.log(clone.children[1]);
//     // console.log(clone.children[2]);
//     // console.log(clone.children.length);
//     // document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2]);

//     switch (clone.children.length) {
//         case 3:
//             document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2]);
//             break;
//         case 4:
//             document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2], clone.children[3]);
//             break;
//         case 5:
//             document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2], clone.children[3], clone.children[4]);
//             break;
//         case 6:
//             document.querySelector('.border_active').replaceWith(clone.children[1], clone.children[2], clone.children[3], clone.children[4], clone.children[5]);
//             break;
//     }

//     // document.querySelector('.border_active').remove();
// }

//функция подсветки скоростей

let speed_buttons = document.querySelectorAll('.speed');
console.log(speed_buttons);

function add_speed_board_activ(duration) {
    for (let click_item of click_items) {
        switch (click_item.classList[0]) {
            case duration:
                click_item.classList.toggle('add_speed_board_activ');
        }
    }
}



for (let speed_button of speed_buttons) {
    speed_button.addEventListener('click', function addClick(event) {
        switch (speed_button.classList[1]) {
            case 'button_speed_16':
                add_speed_board_activ('sixteenth');
                break;
            case 'button_speed_8':
                add_speed_board_activ('eighth');
                break;
            case 'button_speed_4':
                add_speed_board_activ('quarter_note');
                break;
            case 'button_speed_2':
                add_speed_board_activ('half_note');
                break;
            case 'button_speed_1':
                add_speed_board_activ('whole_note');
                break;
        }
    })
}