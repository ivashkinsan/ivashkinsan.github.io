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
        item.classList.toggle('button_gold');
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
        item.classList.remove('button_gold');
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
    if(symBtnLevel.dataset.number == 'whole_tetrachord'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+7)];}

    if(symBtnLevel.dataset.number == '3_AUG'){symBtnLevelGO = [(ti+1),(ti+5),(ti+9)];}
    if(symBtnLevel.dataset.number == '3_MAJ'){symBtnLevelGO = [(ti+1),(ti+5),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_MIN'){symBtnLevelGO = [(ti+1),(ti+4),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_DIM'){symBtnLevelGO = [(ti+1),(ti+4),(ti+7)];}
    if(symBtnLevel.dataset.number == '3_SUS2'){symBtnLevelGO = [(ti+1),(ti+3),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_SUS4'){symBtnLevelGO = [(ti+1),(ti+6),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_ADD2_maj'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_ADD2_min'){symBtnLevelGO = [(ti+1),(ti+3),(ti+4),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_ADD4_maj'){symBtnLevelGO = [(ti+1),(ti+5),(ti+6),(ti+8)];}
    if(symBtnLevel.dataset.number == '3_ADD4_min'){symBtnLevelGO = [(ti+1),(ti+4),(ti+6),(ti+8)];}

    if(symBtnLevel.dataset.number == 'М2'){symBtnLevelGO = [(ti+1),(ti+2)];}
    if(symBtnLevel.dataset.number == 'Б2'){symBtnLevelGO = [(ti+1),(ti+3)];}
    if(symBtnLevel.dataset.number == 'М3'){symBtnLevelGO = [(ti+1),(ti+4)];}
    if(symBtnLevel.dataset.number == 'Б3'){symBtnLevelGO = [(ti+1),(ti+5)];}
    if(symBtnLevel.dataset.number == 'ч4'){symBtnLevelGO = [(ti+1),(ti+6)];}
    if(symBtnLevel.dataset.number == 'ТТТ'){symBtnLevelGO = [(ti+1),(ti+7)];}
    if(symBtnLevel.dataset.number == 'ч5'){symBtnLevelGO = [(ti+1),(ti+8)];}
    if(symBtnLevel.dataset.number == 'М6'){symBtnLevelGO = [(ti+1),(ti+9)];}
    if(symBtnLevel.dataset.number == 'Б6'){symBtnLevelGO = [(ti+1),(ti+10)];}
    if(symBtnLevel.dataset.number == 'М7'){symBtnLevelGO = [(ti+1),(ti+11)];}
    if(symBtnLevel.dataset.number == 'Б7'){symBtnLevelGO = [(ti+1),(ti+12)];}

    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_LYD'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+7),(ti+8),(ti+10),(ti+12),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_ION'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+6),(ti+8),(ti+10),(ti+12),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_MIX'){symBtnLevelGO = [(ti+1),(ti+3),(ti+5),(ti+6),(ti+8),(ti+10),(ti+11),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_DOR'){symBtnLevelGO = [(ti+1),(ti+3),(ti+4),(ti+6),(ti+8),(ti+10),(ti+11),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_EOL'){symBtnLevelGO = [(ti+1),(ti+3),(ti+4),(ti+6),(ti+8),(ti+9),(ti+11),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_FRI'){symBtnLevelGO = [(ti+1),(ti+2),(ti+4),(ti+6),(ti+8),(ti+9),(ti+11),(ti+13)];}
    if(symBtnLevel.dataset.number == 'MAJ_DIATONIK_LOC'){symBtnLevelGO = [(ti+1),(ti+2),(ti+4),(ti+6),(ti+7),(ti+9),(ti+11),(ti+13)];}
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
        setTimeout(startWork,1000);
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

//SLIDER ZONE

const slider = document.querySelector(".slider");

const slides = slider.querySelectorAll(".slide");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/* Set Current Slide */
let currSlide = 0;

/* define max length */
const maxSlide = slides.length;

/* Function to go to slide based on index number provided as argument  */

const goToSlide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
// goToSlide(2);

const init = function () {
  goToSlide(0);
};

init();
