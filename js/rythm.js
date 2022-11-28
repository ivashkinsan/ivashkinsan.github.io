document.oncontextmenu = function () {
    return false
};
const click_items = document.querySelectorAll('.click_item');
const p_numb = document.querySelectorAll('.numb');

let monitoringDIV = document.querySelector('.monitoring');

// console.log(click_items);
let monitoringBaseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let item of click_items) {
    item.addEventListener('click', function add(elem) {
        item.classList.toggle('border_active');

        switch (true) {
            case item.classList.contains('whole_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                break;
            case item.classList.contains('half_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 8, 1, 1, 1, 1, 1, 1, 1, 1);
                break;
            case item.classList.contains('quarter_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 4, 1, 1, 1, 1);
                break;
            case item.classList.contains('eighth'):
                monitoringBaseArr.splice(item.dataset.position - 1, 2, 1, 1);
                break;
            case item.classList.contains('sixteenth'):
                monitoringBaseArr.splice(item.dataset.position - 1, 1, 1);
                break;
                // case item.classList.contains('whole_note') && !item.classList.contains('border_active'):
                //     monitoringBaseArr.splice(item.dataset.position - 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                //     break;
        };


        // monitoringStart(0);
        elem.stopPropagation(); // глушим всплывающее событие
        // console.log('this children = ' + this.children);
        // for(let newItem of this.childrens){
        //     newItem.stopImmediatePropagation();
        // }
        this.children;
        // console.log(this.children);
        // console.log( elem);
    })
}

for (let item of click_items) {
    item.addEventListener('dblclick', function add(elem) {
        // item.classList.toggle('border_active_doble');
        elem.stopPropagation(); // глушим всплывающее событие
        this.children;
        // console.log(this.children[0].dataset);
        switch (this.children[0].innerHTML) {
            case 'w':
                this.children[0].innerHTML = 'W';
                break;
            case 'h':
                this.children[0].innerHTML = 'H';
                break;
            case 'q':
                this.children[0].innerHTML = 'Q';
                break;
            case 'e':
                this.children[0].innerHTML = 'E';
                break;
            case 's':
                this.children[0].innerHTML = 'S';
                break;

            case 'W':
                this.children[0].innerHTML = 'w';
                break;
            case 'H':
                this.children[0].innerHTML = 'h';
                break;
            case 'Q':
                this.children[0].innerHTML = 'q';
                break;
            case 'E':
                this.children[0].innerHTML = 'e';
                break;
            case 'S':
                this.children[0].innerHTML = 's';
                break;
        }

    })
}

function addFontSize() {
    for (let item of p_numb) {

        switch (item.dataset.note) {
            case '1':
                item.style.fontSize = 'calc(12em / 1)';
                // item.style.lineHeight = '70%';
                break;
            case '2':
                item.style.fontSize = 'calc(12em / 2)';
                // item.style.lineHeight = '70%';
                break;
            case '4':
                item.style.fontSize = 'calc(12em / 3)';
                // item.style.lineHeight = '70%';
                break;
            case '8':
                item.style.fontSize = 'calc(12em / 4)';
                // item.style.lineHeight = '70%';
                break;
            case '16':
                item.style.fontSize = 'calc(12em / 5)';
                // item.style.lineHeight = '150%';
                break;

        }
    }
}


function addFontNote() {
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
}

addFontNote();
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

// кнопка показа длительностей
document.querySelector('.button_label_duration').onclick = function () {
    addFontNote();
    addFontSize();
}

// кнопка паузы
document.querySelector('.button_label_pause').onclick = addPause;

function addPause() {
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
}

// кнопка показа чисел
document.querySelector('.button_label_numb').onclick = function () {
    addFontSize();
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
}

// функция расчета скорости 1 2 4 8 16
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




// кнопка скорости шестнадцатых
document.querySelector('.button_label_16').onclick = () => {
    speedCalculation(32);
}

// кнопка скорости восьмых
document.querySelector('.button_label_8').onclick = () => {
    speedCalculation(16);
}
// кнопка скорости четвертей
document.querySelector('.button_label_4').onclick = () => {
    speedCalculation(8);
}

// кнопка скорости половинных
document.querySelector('.button_label_2').onclick = () => {
    speedCalculation(4);
}

// кнопка скорости целых
document.querySelector('.button_label_1').onclick = () => {
    speedCalculation(2);
}

// двойная кнопка скорости шестнадцатых
document.querySelector('.button_label_16').addEventListener('dblclick', (event) => {
    speedCalculationProporzion(16);
})

// двойная кнопка скорости восьмых
document.querySelector('.button_label_8').addEventListener('dblclick', (event) => {
    speedCalculationProporzion(8);
})

// двойная кнопка скорости четвертей
document.querySelector('.button_label_4').addEventListener('dblclick', (event) => {
    speedCalculationProporzion(4);
})

// двойного клика на кнопке
function speedCalculationProporzion(e) {
    for (let item of p_numb) {
        switch (item.dataset.note) {
            case '1':
                item.innerHTML = e * 1 + '/' + e;
                break;
            case '2':
                item.innerHTML = e / 2 + '/' + e;
                break;
            case '4':
                item.innerHTML = e / 4 + '/' + e;
                break;
            case '8':
                item.innerHTML = e / 8 + '/' + e;
                break;
            case '16':
                item.innerHTML = e / 16 + '/' + e;
                break;
        }
    }
}

// кнопка проценты
document.querySelector('.button_procent').onclick = () => {

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

// функция подключения простого шрифта
function addBodyFontOPUSTEXT() {
    addFontSize();
    document.querySelector('body').style.fontFamily = 'OPUSTEXT';
}

// кнопка сброса
document.querySelector('.button_reset_shadow').onclick = () => {
    addFontNote();
    addFontSize();
    for (let item of click_items) {
        // console.log('reset');
        item.classList.remove('border_active');
        item.classList.remove('border_active_doble');
    }
}

// действие правой кнопкой мыши
for (let item of click_items) {
    item.addEventListener('contextmenu', function add(elem) {
        console.log(item);
        elem.preventDefault();
        elem.stopPropagation(); // глушим всплывающее событие
        this.children;
        item.children[0].classList.toggle('hide');
    })
}

// кнопка прозрачности
document.querySelector('.button_opacity_on').onclick = () => {
    for (let item of click_items) {
        item.children[0].classList.add('hide');
    }
}

// кнопка прозрачности
document.querySelector('.button_opacity_off').onclick = () => {
    for (let item of p_numb) {
        item.classList.remove('hide');
    }
}