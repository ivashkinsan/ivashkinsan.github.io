let parowoz = [
    {all: 156, text: '- Паровоз, паровоз, ты куда нас повез?', formula: ['ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO',0,'ZO','ZO','YO']},
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
    {all: 26, text: 'Если очень захотеть,', formula: ['ZO','ZO','ZO','ZO','ZO','ZO','YO']},
    {text: 'замахать руками –', formula: ['ZO','ZO','ZO','ZO','YO',0,'YO']},
    {text: 'можно даже полететь', formula: ['ZO','ZO','ZO','ZO','ZO','ZO','YO']},
    {text: 'рядом с облаками.', formula: ['ZO','ZO','ZO','ZO','YO',0,'YO']}
    ];

let soroka = [
    {all: 50, text: 'Сорока, сорока, где была? Далёко –', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'кашу варила, деточек кормила,', formula: ['RA',0,'RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'на порог скакала, гостей созывала,', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA','RA','RA','RA','RA',0,'ZO']},
    {text: 'гости услыхали, быть обещали…', formula: ['RA','RA','RA','RA','RA',0,'ZO',0,'RA',0,'RA','RA','RA',0,'ZO']},
    {text: 'И не пришли.', formula: ['RA',0,'ZO','ZO','YO']}
    ];

let zaichik = [
    {all: 23, text: 'Зайчик, ты, зайчик,', formula: ['YO',0,'ZO','ZO','RA',0,'ZO']},
    {text: 'коротеньки ножки.', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']},
    {text: 'На этих на ножках', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']},
    {text: 'сафьяны сапожки.', formula: ['YO','YO','ZO','ZO','RA',0,'ZO']}
    ];

let vorobey = [
    {all: 26, text: 'Ой мороз, белеет нос.', formula: ['YO','RA','ZO','RA','YO','RA','ZO']},
    {text: 'Что же это значит?', formula: ['YO','RA','ZO','RA','YO','YO']},
    {text: 'Почему же воробей', formula: ['YO','RA','ZO','RA','YO','RA','ZO']},
    {text: 'Скачет и не плачет?', formula: ['YO','RA','ZO','RA','YO','YO']}
    ];

let medved = [
    {all: 32, text: 'Весной медведь решил запеть.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'Он пел и пел, сопел, хрипел.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'А мы не прочь ему помочь:', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']},
    {text: 'Ё-РА, Ё-ЗО, ЗО-РА, ЗО-Ё.', formula: ['YO','RA',0,0,'YO','ZO',0,0,'ZO','RA',0,0,'ZO','YO']}
    ];
    
let koza = [
    {all: 38, text: 'Идёт коза рогатая', formula: ['TI','YO',0,'TI','ZO',0,'TI','YO',0,'TI','ZO']},
    {text: 'за малыми ребятами.', formula: ['TI','YO',0,'TI','ZO',0,'TI','YO',0,'TI','ZO']},
    {text: 'Кто кашу не ест, молоко не пьёт,', formula: ['TI','YO','YO','TI','ZO','ZO','TI','YO',0,'TI','ZO']},
    {text: 'того бу! забоду! на рога посажу!', formula: ['ZO','TI','YO','YO','TI','ZO','ZO','TI','YO','YO','TI','ZO']}
    ];

let kuznechik = [
    {all: 27, text: 'В траве сидел кузнечик', formula: ['YO','ZO','YO','ZO','YO','TI','TI']},
    {text: 'Совсем как огуречик', formula: ['TI','ZO','TI','ZO','TI','YO','YO']},
    {text: 'Совсем как огуречик', formula: ['YO','ZO','YO','ZO','YO','TI','TI']},
    {text: 'Зелёненький он был', formula: ['TI','ZO','TI','ZO','TI','YO']}
    ];

let solnishko = [
    {all: 36, text: 'Солнышко, солнышко,', formula: ['YO',0,'TI','TI','YO',0,'ZO','ZO']},
    {text: 'выгляни в окошечко.', formula: ['YO','YO','TI','TI','YO',0,'ZO','ZO']},
    {text: 'Там твои детки', formula: ['YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'сидят на загнетке,', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'лепёшки валяют,', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']},
    {text: 'тебя поджидают.', formula: ['ZO','YO',0,'TI','TI','YO',0,'ZO']}
    ];

let dveteteri = [
    {all: 28, text: 'На зелёном на лугу', formula: ['YO','TI','RA','YO','TI','TI','YO']},
    {text: 'стоит чашка творогу.', formula: ['YO','TI','RA','YO','TI','TI','YO']},
    {text: 'Прилетели две тетери,', formula: ['ZO','ZO','RA','RA','TI','TI','YO']},
    {text: 'поклевали, улетели.', formula: ['ZO','ZO','RA','RA','TI','TI','YO']}
    ];

let kurochka = [
    {all: 78, text: 'Вышла курочка гулять,', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'свежей травки пощипать.', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'А за ней ребятки', formula: ['ZO','ZO','RA','TI','YO','YO']},
    {text: 'жёлтые цыплятки.', formula: ['ZO','ZO','RA','TI','YO','YO']},
    {text: 'Ко-ко-ко, ко-ко-ко,', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'не ходите далеко.', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'Лапками гребите,', formula: ['ZO','ZO','RA','TI','YO','YO']},
    {text: 'зёрнышки ищите.', formula: ['ZO','ZO','RA','TI','YO','YO']},
    {text: 'Съели толстого жука,', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'дождевого червяка.', formula: ['YO','YO','ZO','ZO','RA','RA','ZO']},
    {text: 'Выпили водицы', formula: ['ZO','ZO','RA','TI','YO','YO']},
    {text: 'полное корытце.', formula: ['ZO','ZO','RA','TI','YO','YO']}
    ];

let korablik = [
    {all: 64, text: 'Наш кораблик по волнам плывёт,', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'капитаном одноглазый кот,', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'ворон с мачты глядит вперёд', formula: ['RA',0,'TI','YO',0,'YO','TI','RA',0,'TI',0,'YO']},
    {text: 'и матросы мыши.', formula: ['TI',0,'TI','RA',0,'TI',0,'YO',0,'YO']},
    {text: 'Удивляется любой моряк –', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'паруса у нас вперекосяк.', formula: ['YO',0,'YO','TI','TI','RA','TI','YO',0,'YO',0,'ZO']},
    {text: 'Ну и что же? Зато наш флаг', formula: ['RA',0,'TI','YO',0,'YO','TI','RA',0,'TI',0,'YO']},
    {text: 'прочих флагов выше!', formula: ['TI',0,'TI','RA',0,'TI',0,'YO',0,'YO']}
    ];

let kolibelnaya = [
    {all: 42, text: 'Баю, баюшки, баю,', formula: ['YO','TI','RA','ZO','RA','TI','YO']},
    {text: 'не ложися на краю -', formula: ['TI','RA','ZO','ZO','ZO','RA','TI']},
    {text: 'придёт серенький волчок', formula: ['YO','TI','RA','ZO','RA','TI','YO']},
    {text: 'и ухватит за бочок,', formula: ['TI','RA','ZO','ZO','ZO','RA','TI']},
    {text: 'и потащит во лесок,', formula: ['YO','TI','RA','ZO','RA','TI','YO']},
    {text: 'под ракитовый кусток.', formula: ['TI','RA','ZO','ZO','ZO','RA','TI']}
    ];

let full_menu = [
    { name: 'Паровоз', arr: parowoz},
    { name: 'Если очень захотеть', arr: esli},
    { name: 'Сорока', arr: soroka},
    { name: 'Зайчик', arr: zaichik},
    { name: 'Воробей', arr: vorobey},
    { name: 'Медведь', arr: medved},
    { name: 'Кузнечик', arr: kuznechik},
    { name: 'Коза', arr: koza},
    { name: 'Солнышко', arr: solnishko},
    { name: 'Две тетери', arr: dveteteri},
    { name: 'Вышла курочка гулять', arr: kurochka},
    { name: 'Колыбельная', arr: kolibelnaya},
    { name: 'Кораблик', arr: korablik}
    
];
let winner_image = document.querySelector('.winner_image');

let page_number = 0;
let container_notes = document.querySelector('.container_notes');
let monitor_for_text = document.querySelector('.monitor_for_text');
let nameStage = ['ZO_up','NA','WI','LE','YO','TI','RA','ZO'];

let all_page_pigs;
const audioAll = document.querySelectorAll('audio');
let stop = 0;
let reverse_item = 0;

let start_ZO = -1;
//прячем лишние горизонтальные линии
let allLine = document.querySelectorAll('.line');
for(let i= 0; i < allLine.length; i++){
    allLine[i].dataset.name = nameStage[i+start_ZO];
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
       });
  });

// функция для кнопки старт
  let startBtn = document.querySelector('.startBtn');
  let welcome = document.querySelector('.welcome');
  startBtn.addEventListener('click', function () {
    welcome.style.display = 'none';

    reverse_item = startVariable[0].all;
    console.log(reverse_item);

    start_game(startVariable);
    
  });
// console.log(startVariable);



// запуск одной страницы
let start = function(pageArr){
    stop = pageArr.formula.length;
    
for(let i = 0; i < pageArr.formula.length; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('note');
            if(pageArr.formula[i] == 0){
                newDiv.style.width = '0px';
                stop = stop -1;
            } else {
                newDiv.style.backgroundImage = "url(../image/staff/" + pageArr.formula[i]+ ".svg)";
            }
            newDiv.style.left = grid_X[i] + 'px';
            for(let j = allLine.length-1; j >= 0 ; j--){
                if(pageArr.formula[i] == allLine[j].dataset.name){
                    newDiv.dataset.name = pageArr.formula[i];
                    // console.log(allLine[j].dataset.name);
                    allLine[j].append(newDiv);
                    
                }
            }
    }
    monitor_for_text.innerHTML = pageArr.text;
//собрать массив с полученными нотами
let find_all_page_pigs = function(){
    all_page_pigs = document.querySelectorAll('.note');
    let audio = new Audio();
for (let i = 0; i < all_page_pigs.length; i++){
    all_page_pigs[i].addEventListener('click', function () {
        for(let jj = 0; jj < audioAll.length; jj++){
            
            if(audioAll[jj].dataset.name == all_page_pigs[i].dataset.name){
                audio.src = audioAll[jj].src;
                reverse_item = reverse_item -1;
                all_page_pigs[i].remove();
                stop = stop -1;
                console.log(reverse_item);
                
                
            }
        }
        audio.load();
        audio.play();

        if(stop == 0 && reverse_item > 0){
            page_number++;
            start_game(startVariable);
        }
        if(stop == 0 && reverse_item == 0){
            winner_image.style.display = 'block';
        }
    });  
    
};
}
find_all_page_pigs();
// console.log(all_page_pigs[1].dataset.name);
}




// startVariable = parowoz[0];
// start_new_page(startVariable);

//старт игры
start_game = function(game){
    length_song = game.length-1;
    start(game[page_number]);
    
}

let button_left = document.querySelector('.button_left');
let button_right = document.querySelector('.button_right');
let button_menu = document.querySelector('.button_menu');
let length_song = 0;

//Сброс счетчиков
let reset = function(){
    stop = 0;
    reverse_item = 0;
    page_number = 0;
    length_song = 0;
}


//кнопка МЕНЮ
button_menu.addEventListener('click', function() {
    reset();
    if(page_number <= length_song){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
    welcome.style.display = 'block';
    }
});

//кнопка Left
button_left.addEventListener('click', function() { 
    // length_song = esli.length;
    // console.log('left =' + page_number);
    if(page_number > 0){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
        page_number--;
        start_game(startVariable);
    } 
});

//кнопки Right
button_right.addEventListener('click', function() {
    // length_song = esli.length;
    // console.log('right =' + page_number);
    if(page_number < length_song){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
        page_number++;
        start_game(startVariable);
    }
});



//кнопка на картинке попеды
winner_image.addEventListener('click', function() {
    reset();
    if(page_number <= length_song){
        let note_delete = document.querySelectorAll('.note');
    for(let item of note_delete){
        item.remove();
    }
    winner_image.style.display = 'none';
    welcome.style.display = 'block';
    }
});

