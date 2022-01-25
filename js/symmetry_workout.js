let keys = document.querySelectorAll('.key');
let elements = document.querySelectorAll('.elem');
let monitor = document.querySelector('.monitor');//монитор
let buttons = document.querySelectorAll('.button');

let ti;
let symmetry2;
let symmetry3;
let symmetry4;
let symmetry6;
// let x = [[1,13],[2,14],[3,15],[4,16],[5,17],[6,18],[7,19],];
// console.log(symmetry2);
// console.log(symmetry3);
// console.log(symmetry4);
// console.log(symmetry6);

for (let item of buttons) {
    item.onclick = function () {
        item.classList.toggle('ledGoldON');
        let circle = item.children;
        for(let itemCircle of circle){
            itemCircle.classList.toggle('border_color');
            console.log(itemCircle);
        }
        
    }
};

//функция подсветки голубым
for (let item of keys) {
    item.onclick = function () {
        item.classList.toggle('ledON');
        finderLed();  
        // monitor.textContent = '';
        
        // for (let i = 0; i < finderLed().length; i++) {
        //     monitor.textContent += finderLed()[i].dataset.number + ' ';
        // };

        // let perem = monitor.textContent;
        // let poisk = ident.find(item => item.keys == monitor.textContent);
        //     if (poisk) {
        //     monitor.textContent = poisk.name;
        //     };

    }
};







// РАНДОМНОЕ ЧИСЛО
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

//ПОДСВЕТКА ОКТАВЫ, ПРИСВОЕНИЕ ИСХОДНЫХ ЦИФР
  let startWork = function(){
    let startOneNote = getRandomIntInclusive(0,12);
    let startTwoNote = startOneNote+12;
    keys[startOneNote].classList.toggle('ledON');
    keys[startTwoNote].classList.toggle('ledON');
    ti = startOneNote;
symmetry2 = [(ti+1),(ti+7),(ti+13)];
symmetry3 = [(ti+1),(ti+5),(ti+9),(ti+13)];
symmetry4 = [(ti+1),(ti+4),(ti+7),(ti+10),(ti+13)];
symmetry6 = [(ti+1),(ti+3),(ti+5),(ti+7),(ti+9),(ti+11),(ti+13)];
    // console.log(startOneNote,startTwoNote);

}

//ВЫБОР РЕЖИМА РАНДОМ
let symmetryNameArr = [symmetry2, symmetry3, symmetry4, symmetry6];
let startSymmetry = getRandomIntInclusive(0,3);
// console.log(startSymmetry);

// console.log(getRandomIntInclusive(1,13));

//ПОИСК ВЫБРАННЫХ ЭЛЕМЕНТОВ
let finderLed = function (ledElement) {
    ledElement = document.querySelectorAll('.ledON');
    let answer = [];
    for (let i = 0; i < ledElement.length; i++){
        answer.push(ledElement[i].dataset.number)
        // console.log(ledElement[i].dataset.number);
        sravniElem(answer,symmetry2);
    }
    // console.log(answer);
    
    return ledElement;
}


let sravniElem = function(a,b){
    let sovpadeniya = 0;
    for(i = 0; a[i] == b[i] && i < a.length ; i++){
        if(a[i] == b[i]){sovpadeniya +=1};
        if(a.length == b.length && a.length == sovpadeniya){
            console.log('rabotaet' + sovpadeniya);
            setInterval(monitoring(), 5000);
        }
    }
}

let monitoring = function(){
   
    monitor.textContent = 'GOTOVO';
}



startWork();