let staff_5 = document.querySelectorAll('.line');
let notes = document.querySelectorAll('.note');
let margin_left = 60;
let interval_x = 37;
let nameStage = ['ZO','RA','TI','YO','LE','WI','NA','ZO_up'];
let tonalnost_os_Y = {};
let monitor_for_text = document.querySelector('.monitor_for_text');
let container_notes = document.querySelector('.container_notes');
let button_left = document.querySelector('.button_left');
let button_right = document.querySelector('.button_right');
let length_song = 0;
let page_number = 0;
let start_game;


let parowoz = [
{text: '- Паровоз, паровоз, ты куда нас повез?', formula: ['ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO']},
{text: '- Я стучу, я пыхчу, я качу, где хочу.', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: '- Паровоз, паровоз, ты зачем нас повез?', formula: ['ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO']},
{text: '- Что б узнать вы смогли: нет конца у земли', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: '- Паровоз, паровоз, ты куда нас привез?', formula: ['YO','YO','YO',0,'YO','YO','YO',0,'YO','YO','YO',0,'YO','YO','YO']},
{text: '- Зеленей здесь леса и синей небеса -', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: 'постоим, отдохнём и назад повернём.', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: '- А теперь, паровоз, ты куда нас повёз?', formula: ['YO','YO','ZO',0,'YO','YO','ZO',0,'YO','YO','ZO',0,'YO','YO','ZO']},
{text: '- Через дождь и грозу я домой вас везу,', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: 'по горам, по долам, развезу по домам.', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: '- Паровоз, паровоз, ты куда нас привёз?', formula: ['ZO','ZO','ZO',0,'ZO','ZO','ZO',0,'ZO','ZO','ZO',0,'ZO','ZO','ZO']},
{text: '- Дыма нет над трубой, я привёз вас домой.', formula: ['RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA',0,'RA','RA','RA']},
{text: '- Хорошо, что привёз! Молодец, паровоз!', formula: ['ZO','ZO','ZO',0,'ZO','ZO','ZO',0,'ZO','ZO','ZO',0,'ZO','ZO','ZO']}
];

let esli = [
    {text: 'Если очень захотеть,', formula: ['ZO','ZO','ZO','ZO','ZO','ZO','YO']},
    {text: 'замахать руками –', formula: ['ZO','ZO','ZO','ZO','YO',0,'YO']},
    {text: 'можно даже полететь', formula: ['ZO','ZO','ZO','ZO','ZO','ZO','YO']},
    {text: 'рядом с облаками.', formula: ['ZO','ZO','ZO','ZO','YO',0,'YO']}
    ];

let soroka = [
    {text: 'Сорока, сорока, где была? Далёко –', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'кашу варила, деточек кормила,', formula: ['RA',0,'RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'на порог скакала, гостей созывала,', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'гости услыхали, быть обещали…', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA',0,'RA','RA','RA',0,'ZO']},
    {text: 'И не пришли.', formula: ['RA',0,'ZO','ZO','YO']}
    ];

let zaichik = [
    {text: 'Зайчик, ты, зайчик,', formula: ['YO',0,'ZO','ZO','RA',0,'ZO']},
    {text: 'коротеньки ножки.', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']},
    {text: 'На этих на ножках', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']},
    {text: 'сафьяны сапожки.', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']}
    ];

let vorobey = [
    {text: 'Ой мороз, белеет нос.', formula: ['YO','RA','ZO','RA','YO','RA','ZO']},
    {text: 'Что же это значит?', formula: ['YO','RA','ZO','RA','YO','YO']},
    {text: 'Почему же воробей', formula: ['YO','RA','ZO','RA','YO','RA','ZO']},
    {text: 'Скачет и не плачет?', formula: ['YO','RA','ZO','RA','YO','YO']}
    ];

let medved = [
    {text: 'Весной медведь решил запеть.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'Он пел и пел, сопел, хрипел.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'А мы не прочь ему помочь:', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'Ё-РА, Ё-ЗО, ЗО-РА, ЗО-Ё.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']}
    ];
    
let koza = [
    {text: 'Идёт коза рогатая', formula: ['TI','YO',0,'TI','ZO',0,'TI','YO',0,'TI','ZO']},
    {text: 'за малыми ребятами.', formula: ['TI','YO',0,'TI','ZO',0,'TI','YO',0,'TI','ZO']},
    {text: 'Кто кашу не ест, молоко не пьёт,', formula: ['TI','YO','YO','TI','ZO','ZO','TI','YO',0,'TI','ZO']},
    {text: 'того бу! забоду! на рога посажу!', formula: ['ZO','TI','YO','YO','TI','ZO','ZO','TI','YO','YO','TI','ZO']}
    ];

let solnishko = [
    {text: 'Солнышко, солнышко,', formula: ['YO',0,'TI','TI','YO',0,'ZO','ZO']},
    {text: 'выгляни в окошечко.', formula: ['YO','YO','TI','TI','YO',0,'ZO','ZO']},
    {text: 'Там твои детки', formula: ['YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'сидят на загнетке,', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'лепёшки валяют,', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'тебя поджидают.', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']}
    ];

let dveteteri = [
    {text: 'На зелёном на лугу', formula: ['YO','TI','RA','YO','TI','TI','YO']},
    {text: 'стоит чашка творогу.', formula: ['YO','TI','RA','YO','TI','TI','YO']},
    {text: 'Прилетели две тетери,', formula: ['ZO','ZO','RA','RA','TI','TI','YO']},
    {text: 'поклевали, улетели.', formula: ['ZO','ZO','RA','RA','TI','TI','YO']}
    ];

let korablik = [
    {text: 'Наш кораблик по волнам плывёт,', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'капитаном одноглазый кот,', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'ворон с мачты глядит вперёд', formula: ['RA',0,'TI','YO',0,'YO','TI','RA',0,'TI',0,'YO']},
    {text: 'и матросы мыши.', formula: ['TI',0,'TI','RA',0,'TI',0,'YO',0,'YO']},
    {text: 'Удивляется любой моряк –', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'паруса у нас вперекосяк.', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'Ну и что же? Зато наш флаг', formula: ['RA',0,'TI','YO',0,'YO','TI','RA',0,'TI',0,'YO']},
    {text: 'прочих флагов выше!', formula: ['TI',0,'TI','RA',0,'TI',0,'YO',0,'YO']}
    ];
    
let full_menu = [
    { name: 'Паровоз', arr: parowoz},
    { name: 'Если очень захотеть', arr: esli},
    { name: 'Сорока', arr: soroka},
    { name: 'Зайчик', arr: zaichik},
    { name: 'Воробей', arr: vorobey},
    { name: 'Медведь', arr: medved},
    { name: 'Коза', arr: koza},
    { name: 'Солнышко', arr: solnishko},
    { name: 'Две тетери', arr: dveteteri},
    { name: 'Кораблик', arr: korablik}
];

//генерируем стартовое меню
let NewGridStartMenuElements;
let buttonsBlock = document.querySelector('.buttons_block');
//контейнер для стартовой игры
let startVariable;
//функция создания элементов
  let NewGridStartMenuGO = function(allNames){
    for(let i = 0; i < allNames.length; i++){
      NewGridStartMenuElements = document.createElement('div');
      NewGridStartMenuElements.textContent = allNames[i].name;
      NewGridStartMenuElements.dataSrc = allNames[i].arr;
      NewGridStartMenuElements.className = "start_buttons";
      buttonsBlock.append(NewGridStartMenuElements);
    };  
}



//запуск стартового меню
NewGridStartMenuGO(full_menu);

//слушаем события на start_buttons
let start_buttons = document.querySelectorAll('.start_buttons');
start_buttons.forEach(function(btn) {
  // Вешаем событие клик
    btn.addEventListener('click', function() {
      for(i = 0; i < start_buttons.length; i++){
        start_buttons[i].classList.remove('active_btn');
      }
      btn.classList.toggle('active_btn');
      startVariable = btn.dataSrc;
      console.log(startVariable);
       });
  });


  let startBtn = document.querySelector('.startBtn');
  let welcome = document.querySelector('.welcome');
  // функция для кнопки старт
  startBtn.addEventListener('click', function () {
    console.log(startVariable);
    welcome.style.display = 'none';
    
    start_game(startVariable);
  });



// Создание массива с координатами высот
let topBottomArr = [];
let startLineDo = staff_5[4].getBoundingClientRect().y + 2 + 17.5;
let oneItemArrTopBottom = Math.round(startLineDo);
for(let i = 0; i < 12; i++){
    topBottomArr.push(oneItemArrTopBottom);
    oneItemArrTopBottom -= 17.5;
};
// console.log(oneItemArrTopBottom);

// Создание массива с координатами горизонтального расположения
let rightLeftArr = [];
let startLineLeft = margin_left;
let oneItemRightLeftArr = startLineLeft;
for(let i = 0; i < 15; i++){
    rightLeftArr.push(oneItemRightLeftArr);
    oneItemRightLeftArr += interval_x;
};

let firstTon = 3;

for(let i = 0; i < 12; i++){
    tonalnost_os_Y[nameStage[i]] = topBottomArr[firstTon];
    firstTon++;
}

// запуск странички с частью песни
let start = function(mass){
    
    let interval = 0;
    for(let i = 0; i < mass.formula.length; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('note');
        if(mass.formula[i] == 0){
            newDiv.style.width = '0px';
            newDiv.style.top = tonalnost_os_Y[mass.formula[i]] + 'px';
            newDiv.style.left = margin_left + interval + 'px';
            interval += 37;
            // console.log(parowoz[1].formula[3]);
        } else {
            
            newDiv.style.backgroundImage = "url(../image/staff/" + mass.formula[i]+ ".svg)";
            newDiv.style.top = tonalnost_os_Y[mass.formula[i]] + 'px';
            newDiv.style.left = margin_left + interval + 'px';
            interval += 37;
        }
        container_notes.append(newDiv);
    }
    monitor_for_text.innerHTML = mass.text;
}

start_game = function(game){
    console.log(game);
    console.log(game[page_number]);
    start(game[page_number]);
    length_song = game.length-1;
}


button_left.addEventListener('click', function() { 
    // length_song = esli.length;
    if(page_number > 0){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
        page_number--;
        start_game(startVariable);
    } 
});


button_right.addEventListener('click', function() {
    // length_song = esli.length;
    if(page_number < length_song){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
        page_number++;
        start_game(startVariable);
    }
});