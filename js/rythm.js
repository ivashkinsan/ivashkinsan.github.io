document.oncontextmenu = function () {
    return false;
};
document.onselectstart = function () {
    return false;
}

let click_items;
let p_numb;

let all_variable_search = function () {
    click_items = document.querySelectorAll('.click_item');
    p_numb = document.querySelectorAll('.numb');
}
all_variable_search();

const taka = ['ТА', 'КА'];
const takita = ['ТА', 'КИ', 'ТА'];
const takadimi = ['ТА', 'КА', 'ДИ', 'МИ'];

let monitoringDIV = document.querySelector('.monitoring');

// console.log(click_items);
let monitoringBaseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let cheked = true;

// логика последовательного клика по элементу
let go_click_function = function () {
    for (let item of click_items) {
        // if (item.children[0].dataset.clickstatus == 'true') {
        //     // console.log('clickstatus true');
        // }

        item.addEventListener('click', function add(elem) {

            // console.log(item.classList.contains('border_active'));
            // console.log(elem.target.querySelectorAll('div'));
            console.log(elem.target.parentNode);
            // elem.target.parentNode.classList.add('no-click');
            // console.log(elem.target.nodeName.toUpperCase() == 'DIV');

            // сбор дочерних элементов
            let collection_child_div_elem = elem.target.querySelectorAll('div');
            let collection_child_p_elem = elem.target.querySelectorAll('.numb');



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
                    case '12':
                        item.children[0].innerHTML = 'i';
                        item.children[0].dataset.status = 'note';
                        break;
                    case '6':
                        item.children[0].innerHTML = 'j';
                        item.children[0].dataset.status = 'note';
                        break;
                    case '3':
                        item.children[0].innerHTML = 'd';
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
                    case '12':
                        item.children[0].innerHTML = 'I';
                        item.children[0].dataset.status = 'pause';
                        break;
                    case '6':
                        item.children[0].innerHTML = 'J';
                        item.children[0].dataset.status = 'pause';
                        break;
                    case '3':
                        item.children[0].innerHTML = 'D';
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
                    case '12':
                        item.children[0].innerHTML = '';
                        item.children[0].dataset.status = '0';
                        break;
                    case '6':
                        item.children[0].innerHTML = '';
                        item.children[0].dataset.status = '0';
                        break;
                    case '3':
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
}
// конец функции --------------------------------------------------------------------
go_click_function();


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
    // addFontSize();
    for (let item of click_items) {
        item.classList.remove('border_active');
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
    // customFontSize(50);
}

// кнопка скрытия всех граней
document.querySelector('.button_size_even').onclick = function () {
    for (let item of click_items) {

        item.classList.toggle('font_size_even');
    }
    // customFontSize(50);
}

// кнопка выравнивания <p></p>
document.querySelector('.button_p_center').onclick = function () {
    for (let item of p_numb) {
        item.classList.toggle('p_allign_center');
    }
}
// кнопка ширины бордера
let container = document.querySelector('.container');
document.querySelector('.input_range_width').addEventListener('change', function () {
    console.log(this.value);
    container.style.width = this.value + 'vw';
    // border.style.height = this.value + 'vw';

});

// активность инпут рэйндж
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

        console.log(item.dataset)
        if (item.dataset.contextmenu == 'false') {
            item.classList.toggle('border_press_contextmenu');
            // создание всплывающих кнопок и их род элемента 
            let circle_container_of_button = document.createElement('div');
            circle_container_of_button.classList.add('circle_container_of_button');
            // создание кнопки [-3-]
            let button_of_triple = document.createElement('p');
            button_of_triple.classList.add('triple');
            button_of_triple.innerHTML = '[-3-]';
            circle_container_of_button.append(button_of_triple);
            // её активность
            circle_container_of_button.querySelector('.triple').onclick = function (elem) {
                console.log('triple')
                elem.stopPropagation();
                let clone_node = item.parentNode.children[2].children[1];
                item.parentNode.children[2].children[1].remove();
                item.append(clone_node);
                console.log(item.parentNode.children[2].children[1])
            }



            // создание кнопки [+]
            let button_of_plus = document.createElement('p');
            button_of_plus.classList.add('plus');
            button_of_plus.innerHTML = '[+]';
            circle_container_of_button.append(button_of_plus);
            // её активность
            circle_container_of_button.querySelector('.plus').onclick = function (elem) {
                console.log('plus')
                elem.stopPropagation();
            }


            item.append(circle_container_of_button);
            item.dataset.contextmenu = 'true';



        } else {
            item.classList.toggle('border_press_contextmenu');
            item.lastChild.remove();
            item.dataset.contextmenu = 'false';
        }



        // нахождение внутри элемента всех объектов с нужными классами
        // let tripleAll = item.querySelectorAll('.triple');
        // let plusAll = item.querySelectorAll('.plus');

        // показ кнопок
        // tripleAll[tripleAll.length - 1].classList.toggle('triple_show');
        // plusAll[plusAll.length - 1].classList.toggle('plus_show');

        // прослушка кнопки [-3-]
        // item.childNodes[item.childNodes.length - 2].addEventListener('click', function (elem) {
        //     elem.stopPropagation(); // остановка всплывающего события
        //     let new_arr_click_items = item.querySelectorAll('.' + item.children[1].classList[0]);
        //     for (let jey of new_arr_click_items) {
        //         jey.classList.add('height_del_3');
        //     }

        //     all_variable_search();
        //     go_click_function();
        //     item.classList.toggle('border_press_contextmenu'); // подсветка бордера
        //     tripleAll[tripleAll.length - 1].classList.toggle('triple_show');// скрытие кнопки [-3-] после нажатия
        //     plusAll[plusAll.length - 1].classList.toggle('plus_show');// скрытие кнопки [+] после нажатия
        // });

        // console.log(item.parentNode.parentNode);
        // прослушка кнопки [+]
        // item.childNodes[item.childNodes.length - 1].addEventListener('click', function (elem) {
        //     elem.stopPropagation();




        // let new_circle_element = document.createElement('div');

        // создание начинки нового элемента
        // let new_p_element_in_circle_element = document.createElement('p');
        // let numb_for_dts_new_p = Number(item.childNodes[1].dataset.note);

        // зависимость дата атрибута от родителя
        // new_p_element_in_circle_element.dataset.note = numb_for_dts_new_p + (numb_for_dts_new_p / 2);
        // switch (new_p_element_in_circle_element.dataset.note) {

        // }

        // присвоение ему дата атрибутов и классов
        // new_p_element_in_circle_element.dataset.status = '0';
        // new_p_element_in_circle_element.dataset.clickstatus = 'true';
        // new_p_element_in_circle_element.classList.add('numb');
        // new_p_element_in_circle_element.classList.add('center');

        // new_circle_element.classList.add('click_item');
        // new_circle_element.classList.add('click_item_absolute');

        // new_circle_element.append(new_p_element_in_circle_element);
        // item.childNodes[3].append(new_circle_element);
        // console.log(item.childNodes[3].style.width);
        // let new_arr_click_items = item.querySelectorAll('.' + item.children[1].classList[0]);
        // for (let jey of new_arr_click_items) {
        //     jey.classList.add('height_del_3');
        // }
        all_variable_search();
        go_click_function();
        // item.classList.toggle('border_press_contextmenu');
        // tripleAll[tripleAll.length - 1].classList.toggle('triple_show');
        // plusAll[plusAll.length - 1].classList.toggle('plus_show');

        // click_item_absolute REMOVE---------------------------------
        // document.querySelector('.click_item_absolute').onclick = function () {
        //     this.remove();
        // }
    });

}
// запись во все дивы нового элемента-кнопки [-3-]
// for (let item of click_items) {
//     // console.log(item);
//     let newElement = document.createElement('p');
//     newElement.classList.add('triple');
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




// let triple_all_elements = document.querySelectorAll('.triple');
// for (let item of triple_all_elements) {
//     item.addEventListener('click', function (elem) {
//         console.log(item);
//         elem.stopPropagation();
//     })
// }

// ------------------------------------------------------------------------------------------------