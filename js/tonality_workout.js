
const keys = document.querySelectorAll('.key');
const buttons = document.querySelectorAll('.button');


for (let i = 0; i < keys.length; i++){
        keys[i].innerHTML = '';
};    



let tonalityObj= {
    'C-dur':    [1,3,5,6,8,10,12,'до мажор'],
    'Db-dur':   [2,4,6,7,9,11,13,'реb мажор'],
    'D-dur':    [3,5,7,8,10,12,14,'ре мажор'],
    'Eb-dur':   [4,6,8,9,11,13,15,'миb мажор'],
    'E-dur':    [5,7,9,10,12,14,16,'ми мажор'],
    'F-dur':    [6,8,10,11,13,15,17,'фа мажор'],
    'F#-dur':   [7,9,11,12,14,16,18,'фа# мажор'],
    'Gb-dur':   [7,9,11,12,14,16,18,'сольb мажор'],
    'G-dur':    [8,10,12,13,15,17,19,'соль мажор'],
    'Ab-dur':   [9,11,13,14,16,18,20,'ляb мажор'],
    'A-dur':    [10,12,14,15,17,19,21,'ля мажор'],
    'Bb-dur':   [11,13,15,16,18,20,22,'сиb мажор'],
    'B-dur':    [12,14,16,17,19,21,23,'си мажор']
};

const small_elements = document.querySelectorAll('.small_elem');
let small_el_obj = {};
//СОЗДАТЬ ОБЪЕКТ КЛЮЧ+ЗНАЧЕНИЕ
let createObj = function(obj){
    let index = {};
    for(i = 0; i < obj.length; i++){
        // console.log(obj[i]);
        index[obj[i].dataset.number] = obj[i];
    }
    return index;
}
small_el_obj = createObj(small_elements);

//ПОДСВЕТКА БОЛЬШОЙ КЛАВИАТУРЫ
let addLedOn = function (inputArr) {
    for (let i = 0; i < inputArr.length-1; i++){
        keys[inputArr[i]-1].classList.add('ledOn');
    };    
};



// addLedOn(tonalityObj['B-dur']);

//озвучка кнопок BUTTON событием клика
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('mouseenter', function () {
        clearLedOn();
        let jjj = buttons[i].dataset.number;
        addLedOn(tonalityObj[buttons[i].dataset.number]);
        small_el_obj[jjj].classList.add('ledOn');
    })
};


//ОЧИСТКА БОЛЬШОЙ КЛАВИАТУРЫ
let clearLedOn = function () {
    for (let i = 0; i < keys.length; i++){
        keys[i].classList.remove('ledOn');
    };    
    for(let key in small_el_obj){
        small_el_obj[key].classList.remove('ledOn');
    }
};

// console.log(small_elements[1]);
console.log(small_el_obj);

const checkbox = document.querySelector('.checkboxClass');

checkbox.addEventListener('change', function () {
    if ( this.checked ) {
        console.log('checked');
        tonalityObj= {
            'C-dur':    [1,3,5,6,8,10,12,13,15,17,18,20,22,24,25,'до мажор'],
            'Db-dur':   [1,2,4,6,7,9,11,13,14,16,18,19,21,23,25,'реb мажор'],
            'D-dur':    [2,3,5,7,8,10,12,14,15,17,19,20,22,24,'ре мажор'],
            'Eb-dur':   [1,3,4,6,8,9,11,13,15,16,18,20,21,23,25,'миb мажор'],
            'E-dur':    [2,4,5,7,9,10,12,14,16,17,19,21,22,24,'ми мажор'],
            'F-dur':    [1,3,5,6,8,10,11,13,15,17,18,20,22,23,25,'фа мажор'],
            'F#-dur':   [2,4,6,7,9,11,12,14,16,18,19,21,23,24,'фа# мажор'],
            'Gb-dur':   [2,4,6,7,9,11,12,14,16,18,19,21,23,24,'сольb мажор'],
            'G-dur':    [1,3,5,7,8,10,12,13,15,17,19,20,22,24,25,'соль мажор'],
            'Ab-dur':   [1,2,4,6,8,9,11,13,14,16,18,20,21,23,25,'ляb мажор'],
            'A-dur':    [2,3,5,7,9,10,12,14,15,17,19,21,22,24,'ля мажор'],
            'Bb-dur':   [1,3,4,6,8,10,11,13,15,16,18,20,22,23,25,'сиb мажор'],
            'B-dur':    [2,4,5,7,9,11,12,14,16,17,19,21,23,24,'си мажор']
        };
    } else {
        console.log('unchecked')

        tonalityObj= {
            'C-dur':    [1,3,5,6,8,10,12,'до мажор'],
            'Db-dur':   [2,4,6,7,9,11,13,'реb мажор'],
            'D-dur':    [3,5,7,8,10,12,14,'ре мажор'],
            'Eb-dur':   [4,6,8,9,11,13,15,'миb мажор'],
            'E-dur':    [5,7,9,10,12,14,16,'ми мажор'],
            'F-dur':    [6,8,10,11,13,15,17,'фа мажор'],
            'F#-dur':   [7,9,11,12,14,16,18,'фа# мажор'],
            'Gb-dur':   [7,9,11,12,14,16,18,'сольb мажор'],
            'G-dur':    [8,10,12,13,15,17,19,'соль мажор'],
            'Ab-dur':   [9,11,13,14,16,18,20,'ляb мажор'],
            'A-dur':    [10,12,14,15,17,19,21,'ля мажор'],
            'Bb-dur':   [11,13,15,16,18,20,22,'сиb мажор'],
            'B-dur':    [12,14,16,17,19,21,23,'си мажор']
        };
    };
})