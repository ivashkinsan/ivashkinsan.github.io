document.oncontextmenu = cmenu; function cmenu() { return false; };

let marker = document.querySelectorAll('p');
for(let item of marker){
    item.innerHTML = '';
}

let keys = document.querySelectorAll('.key');
let elements = document.querySelectorAll('.elem');
let monitor = document.querySelector('.monitor');//монитор
let buttons = document.querySelectorAll('.button');
let circles = document.querySelectorAll('.circle');
let answerArr;

let ti;
let symmetry2;
let symmetry3;
let symmetry4;
let symmetry6;

let symBtnLevel;
let symBtnLevelGO;

//ВЫБОР РЕЖИМА РАНДОМ
let symmetryNameArr = [symmetry2, symmetry3, symmetry4, symmetry6];
let startSymmetry = getRandomIntInclusive(0,3);

//запуск при нажатии на кнопку режима
for (let item of buttons) {
    item.onclick = function () {
        // monitoring(item.dataset.number);
        symBtnLevel = item;
        // console.log(symBtnLevel.dataset.number);
        clear_ledOn();
        startWork();
        remove_border_color();
        item.classList.toggle('ledGoldON');
        let circle = item.children;
        for(let itemCircle of circle){
            itemCircle.classList.toggle('border_color');
        }
    }
};

// ФУНКЦИЯ remove border_color
let remove_border_color = function(){
    for(let item of circles){
        item.classList.remove('border_color');
    }
    for(let item of buttons){
        item.classList.remove('ledGoldON');
    }
}

//функция подсветки голубым
for (let item of keys) {
    item.onclick = function () {
        item.classList.toggle('ledON');
        finderLed();  
    }
};

//функция очистки клавиш
let clear_ledOn = function(){
for (let item of keys) {
     item.classList.remove('ledON');
     item.classList.remove('ledWin');    
};
};

// ФУНКЦИЯ РАНДОМНОЕ ЧИСЛО
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

// console.log('YYYYEEESSS')
// ФУНКЦИЯ ПОДСВЕТКИ СТАРТОВОЙ ОКТАВЫ, ПРИСВОЕНИЕ ИСХОДНЫХ ЦИФР
  let startWork = function(){
    clear_ledOn();
    let startOneNote = getRandomIntInclusive(0,12);
    let startTwoNote = startOneNote+12;
    keys[startOneNote].classList.toggle('ledON');
    

    ti = startOneNote;
    if(symBtnLevel.dataset.number == 'symmetry2'){
        keys[startTwoNote].classList.toggle('ledON');
        symBtnLevelGO = [(ti+1),(ti+7),(ti+13)];}
    if(symBtnLevel.dataset.number == 'symmetry3'){
        keys[startTwoNote].classList.toggle('ledON');
        symBtnLevelGO = [(ti+1),(ti+5),(ti+9),(ti+13)];}
    if(symBtnLevel.dataset.number == 'symmetry4'){
        keys[startTwoNote].classList.toggle('ledON');
        symBtnLevelGO = [(ti+1),(ti+4),(ti+7),(ti+10),(ti+13)];}
    if(symBtnLevel.dataset.number == 'symmetry6'){
        keys[startTwoNote].classList.toggle('ledON');
        symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+7),(ti+9),(ti+11),(ti+13)];};
        
    if(symBtnLevel.dataset.number == 'melodic_minor'){symBtnLevelGO = [(ti+1),(ti+3),(ti+4),(ti+6),(ti+8),(ti+10),(ti+12)];}
    if(symBtnLevel.dataset.number == 'ionian'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+6),(ti+8),(ti+10),(ti+12)];}
    if(symBtnLevel.dataset.number == 'lydian'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+7),(ti+8),(ti+10),(ti+12)];}
    if(symBtnLevel.dataset.number == 'lydian_aug'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+7),(ti+9),(ti+10),(ti+12)];}    

    if(symBtnLevel.dataset.number == 'maj_tetrachord'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+6)];}
    if(symBtnLevel.dataset.number == 'min_tetrachord'){symBtnLevelGO = [(ti+1),(ti+3),(ti+4),(ti+6)];}
    if(symBtnLevel.dataset.number == 'frig_tetrachord'){symBtnLevelGO = [(ti+1),(ti+2),(ti+4),(ti+6)];}
    if(symBtnLevel.dataset.number == 'harm_tetrachord'){symBtnLevelGO = [(ti+1),(ti+2),(ti+5),(ti+6)];}

    if(symBtnLevel.dataset.number == 'major_35'){symBtnLevelGO = [(ti+1),(ti+5),(ti+8)];}
    if(symBtnLevel.dataset.number == 'minor_35'){symBtnLevelGO = [(ti+1),(ti+4),(ti+8)];}
    if(symBtnLevel.dataset.number == 'diminished'){symBtnLevelGO = [(ti+1),(ti+5),(ti+9)];}
    if(symBtnLevel.dataset.number == 'augmented'){symBtnLevelGO = [(ti+1),(ti+4),(ti+7)];}
};

//ПОИСК ВЫБРАННЫХ ЭЛЕМЕНТОВ
let finderLed = function () {
    let ledElement = document.querySelectorAll('.ledON');
    let answer = [];
    for (let i = 0; i < ledElement.length; i++){
        answer.push(ledElement[i].dataset.number) 
    };
    answerArr = ledElement;
    sravniElem(answer,symBtnLevelGO);
    return ledElement;
};

// ПРОВЕРКА ОТВЕТА - СРАВНЕНИЕ
let sravniElem = function(a,b){
    let sovpadeniya = 0;

    for(i = 0; a[i] == b[i] && i < a.length ; i++){
        if(a[i] == b[i]){sovpadeniya +=1}; 
    }

    if(a.length == b.length && a.length == sovpadeniya){
        // console.log('rabotaet' + sovpadeniya);
        // console.log(answerArr);
        win_ledOn(answerArr);
        setTimeout(startWork,1300);
    }
};

//функция подсветки в случае верного ответа   
let win_ledOn = function(winArr){
    for (let item of winArr) {
        item.classList.add('ledWin');  
    };
};

// let monitoring = function(level){
//    if(level == 'symmetry2'){monitor.textContent = 'СИММЕТРИЯ из 2';}
//    if(level == 'symmetry3'){monitor.textContent = 'СИММЕТРИЯ из 3';}
//    if(level == 'symmetry4'){monitor.textContent = 'СИММЕТРИЯ из 4';}
//    if(level == 'symmetry6'){monitor.textContent = 'СИММЕТРИЯ из 6';}
// };

