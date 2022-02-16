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

let page_number = 0;
let container_notes = document.querySelector('.container_notes');
let monitor_for_text = document.querySelector('.monitor_for_text');
let nameStage = ['ZO','RA','TI','YO','LE','WI','NA','ZO_up'];


//прячем лишние горизонтальные линии
let allLine = document.querySelectorAll('.line');
for(let i=0; i<allLine.length; i++){
    allLine[i].dataset.name = nameStage[i];
        if(i % 2 == 0 || i == 11){
        allLine[i].style.backgroundColor = 'transparent';
    }   
}


// Создание массива с координатами горизонтального расположения
// let start_Line_Left = 60;
let grid_X = [];
let interval_x = 50;
let one_Item_Grid_X = 60; // первая нота отступ слева
for(let i = 0; i < 20; i++){
    grid_X.push(one_Item_Grid_X);
    one_Item_Grid_X += interval_x;
};


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
    //   console.log(startVariable);
       });
  });



// функция для кнопки старт
  let startBtn = document.querySelector('.startBtn');
  let welcome = document.querySelector('.welcome');
  startBtn.addEventListener('click', function () {
    welcome.style.display = 'none';
    start_game(startVariable);
  });

// ориентация по горизонтали
for(let i = 0; i < parowoz[0].formula.length; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('note');
            if(parowoz[0].formula[i] == 0){
                newDiv.style.width = '0px';
            } else {
                newDiv.style.backgroundImage = "url(../image/staff/" + parowoz[0].formula[i]+ ".svg)";
            }
            newDiv.style.left = grid_X[i] + 'px';
            // console.log(newDiv.style.left)
            for(let j = allLine.length; j > 0; j--){
                allLine[j].append(newDiv);
            }
}



// запуск странички с частью песни
// let interval = 0;
// let start = function(mass){
    
   
//     for(let i = 0; i < mass.formula.length-1; i++){
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('note');
        
//         if(mass.formula[i] == 0){
//             newDiv.style.width = '0px';
//             newDiv.style.left = grid_X[i] +'px';
//         } else {
//             newDiv.style.left = grid_X[i] +'px';
//             newDiv.style.backgroundImage = "url(../image/staff/" + mass.formula[i]+ ".svg)";
//             for(let j=mass.formula[i].length; j > 0 ; j--){
//                 if(mass.formula[i] == allLine[j].dataset.name){
//                     allLine[j].append(newDiv);
//                 }
//         }
        
//         }
        
//     }
//     monitor_for_text.innerHTML = mass.text;
// }

//старт игры
start_game = function(game){
    start(game[page_number]);
    length_song = game.length-1;
}
