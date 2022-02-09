document.oncontextmenu = cmenu; function cmenu() { return false; };

let start = document.querySelector('.form');
let start_variant = document.querySelector('.start_variant')
let user = document.querySelector('.form .user');

let welcome = document.querySelector('.welcome');
let table = document.querySelector('.table');
let button_answer = document.querySelectorAll('.button');
let allAnswer = new Array();
let tab_elements;


let likeDiv = document.querySelector('.like');
let dislikeDiv = document.querySelector('.dislike');
let answerTrue = 0;
let answerFalse = 0;
let happy_end = document.querySelector('.happy_end'); 
let happy_end_label = document.querySelector('.happy_end .label'); 

let lisenok = document.querySelector('.lisenok'); 



let schitalka_neSpat = [ 
  {text: "Не спать!", answer: "di-din"},
  {text: "Всем встать!", answer: "di-din"},
  {text: "Вас тут", answer: "di-din"},
  {text: "Всех ждут!", answer: "di-din"},
  {text: "Здесь есть,", answer: "di-din"},
  {text: "Что съесть!", answer: "di-din"},
  {text: "Кто смел,", answer: "di-din"},
  {text: "Тот съел.", answer: "di-din"}
];

let schitalka_nePlach = [ 
    {text: "Не плачь,", answer: "di-din"},
    {text: "Не плачь,", answer: "di-din"},
    {text: "Куплю", answer: "di-din"},
    {text: "Калач.", answer: "di-din"},
    {text: "Не вой,", answer: "di-din"},
    {text: "Не вой,", answer: "di-din"},
    {text: "Куплю", answer: "di-din"},
    {text: "Другой.", answer: "di-din"},
    {text: "Не реви,", answer: "dili-din"},
    {text: "Не реви,", answer: "dili-din"},
    {text: "Куплю", answer: "di-din"},
    {text: "Сухари.", answer: "dili-din"}
  ];


  let schitalka_Parovoz = [ 
    {text: "Паровоз,", answer: "dili-din"},
    {text: "Паровоз,", answer: "dili-din"},
    {text: "Ты куда", answer: "dili-din"},
    {text: "Нас повёз?", answer: "dili-din"},
    {text: "Я стучу,", answer: "dili-din"},
    {text: "Я пыхчу,", answer: "dili-din"},
    {text: "Я качу,", answer: "dili-din"},
    {text: "Где хочу.", answer: "dili-din"}
  ];
  
  let schitalka_PrigSkok = [ 
    {text: "Прыг-скок,", answer: "di-din"},
    {text: "На листок,", answer: "dili-din"},
    {text: "А потом,", answer: "dili-din"},
    {text: "На цветок,", answer: "dili-din"},
    {text: "А потом,", answer: "dili-din"},
    {text: "На кусток,", answer: "dili-din"},
    {text: "Прыг-скок,", answer: "di-din"},
    {text: "Прыг-скок.", answer: "di-din"}
  ];
  
  let schitalka_Korovi = [ 
    {text: "Посмотрите", answer: "dili-dinli"},
    {text: "Вот коровы.", answer: "dili-dinli"},
    {text: "Все смеются,", answer: "dili-dinli"},
    {text: "Все здоровы.", answer: "dili-dinli"},
    {text: "Чисто моют", answer: "dili-dinli"},
    {text: "Все копыта.", answer: "dili-dinli"},
    {text: "Им не надо", answer: "dili-dinli"},
    {text: "Айболита.", answer: "dili-dinli"}
  ];

  let schitalka_RibaKit = [ 
    {text: "Рыба-рыба,", answer: "dili-dinli"},
    {text: "Рыба-Кит,", answer: "dili-din"},
    {text: "Рыба правду", answer: "dili-dinli"},
    {text: "Говорит.", answer: "dili-din"},
    {text: "Если рыба", answer: "dili-dinli"},
    {text: "Будет врать,", answer: "dili-din"},
    {text: "Я не буду", answer: "dili-dinli"},
    {text: "С ней играть.", answer: "dili-din"}
  ];

  let schitalka_obesiana_chichichi = [ 
    {text: "Обезьяна", answer: "dili-dinli"},
    {text: "Чи-чи-чи", answer: "dili-din"},
    {text: "Продавала", answer: "dili-dinli"},
    {text: "Кирпичи", answer: "dili-din"},
    {text: "Не успела", answer: "dili-dinli"},
    {text: "Всё продать", answer: "dili-din"},
    {text: "Улетела", answer: "dili-dinli"},
    {text: "Под кровать.", answer: "dili-din"}
  ];

  let schitalka_shishel_mishel = [ 
    {text: "Шишел-Мышел", answer: "dili-dinli"},
    {text: "Вон пошёл,", answer: "dili-din"},
    {text: "На боярский", answer: "dili-dinli"},
    {text: "Двор зашёл,", answer: "dili-din"},
    {text: "Там бояре", answer: "dili-dinli"},
    {text: "Шапки шьют,", answer: "dili-din"},
    {text: "На окошко", answer: "dili-dinli"},
    {text: "Их кладут.", answer: "dili-din"}
  ];

  let schitalka_ati_bati = [ 
    {text: "Аты-баты,", answer: "dili-dinli"},
    {text: "Шли солдаты.", answer: "dili-dinli"},
    {text: "Аты-баты,", answer: "dili-dinli"},
    {text: "На базар.", answer: "dili-din"},
    {text: "Аты-баты,", answer: "dili-dinli"},
    {text: "Что-купили?", answer: "dili-dinli"},
    {text: "Аты-баты,", answer: "dili-dinli"},
    {text: "Самовар.", answer: "dili-din"}
];

  let schitalka_povar_ehal = [ 
    {text: "Повар ехал", answer: "dili-dinli"},
    {text: "На свинье,", answer: "dili-din"},
    {text: "Балалайка", answer: "dili-dinli"},
    {text: "На спине.", answer: "dili-din"},
    {text: "Балалайка", answer: "dili-dinli"},
    {text: "Зазвенит -", answer: "dili-din"},
    {text: "Меня повар", answer: "dili-dinli"},
    {text: "Забранит.", answer: "dili-din"},
    {text: "Балалайка", answer: "dili-dinli"},
    {text: "Не звенит -", answer: "dili-din"},
    {text: "Меня повар", answer: "dili-dinli"},
    {text: "Не бранит.", answer: "dili-din"}
  ];

  let schitalka_anka_dranka = [ 
    {text: "Анка-дранка,", answer: "dili-dinli"},
    {text: "Дри-бедру,", answer: "dili-din"},
    {text: "Фибер-фабер,", answer: "dili-dinli"},
    {text: "Фибер-фу.", answer: "dili-din"},
    {text: "А, дран,", answer: "di-din"},
    {text: "Либестран,", answer: "dili-din"},
    {text: "Эта-фита,", answer: "dili-dinli"},
    {text: "Канифан.", answer: "dili-din"}
  ];

  let schitalka_moryak = [ 
    {text: "Моряк", answer: "di-din"},
    {text: "С печки бряк.", answer: "dili-din"},
    {text: "Расстянулся", answer: "dili-dinli"},
    {text: "Как червяк.", answer: "dili-din"}
  ];

  let schitalka_shla_torgovka = [ 
    {text: "Шла торговка", answer: "dili-dinli"},
    {text: "Мимо рынка", answer: "dili-dinli"},
    {text: "Наступила", answer: "dili-dinli"},
    {text: "На корзинку", answer: "dili-dinli"},
    {text: "И упала", answer: "dili-dinli"},
    {text: "В яму - бух!", answer: "dili-din"},
    {text: "Раздавила", answer: "dili-dinli"},
    {text: "Сорок мух.", answer: "dili-din"}
  ];

  let schitalka_katya_katya = [ 
    {text: "Катя-Катя", answer: "dili-dinli"},
    {text: "Катюха", answer: "dili-din"},
    {text: "Запрягла", answer: "dili-din"},
    {text: "Петуха.", answer: "dili-din"},
    {text: "Петух", answer: "di-din"},
    {text: "Заржал,", answer: "di-din"},
    {text: "В огород", answer: "dili-din"},
    {text: "Побежал.", answer: "dili-din"}
  ];

  let schitalka_vot_galka = [ 
    {text: "Вот галка,", answer: "di-dinli"},
    {text: "Вот кошка.", answer: "di-dinli"},
    {text: "Вот палка,", answer: "di-dinli"},
    {text: "Вот плошка.", answer: "di-dinli"},
    {text: "Вот осень,", answer: "di-dinli"},
    {text: "Вот лето.", answer: "di-dinli"},
    {text: "Не спутай,", answer: "di-dinli"},
    {text: "Всё это.", answer: "di-dinli"}
  ];

  let schitalka_pro_vanyu = [ 
    {text: "Ваня-Ваня", answer: "dili-dinli"},
    {text: "Простота", answer: "dili-din"},
    {text: "Купил лошадь", answer: "dili-dinli"},
    {text: "Без хвоста.", answer: "dili-din"},
    {text: "Сел задом", answer: "di-dinli"},
    {text: "Наперёд", answer: "dili-din"},
    {text: "И поехал", answer: "dili-dinli"},
    {text: "В огород.", answer: "dili-din"}
  ];

  let schitalka_raz_dwa_tri_chetire = [ 
    {text: "Раз, два, ", answer: "di-din"},
    {text: "Три, четыре", answer: "dili-dinli"},
    {text: "Мы сидели", answer: "dili-dinli"},
    {text: "На квартире.", answer: "dili-dinli"},
    {text: "Чай пили,", answer: "di-dinli"},
    {text: "Булки ели,", answer: "dili-dinli"},
    {text: "Позабыли", answer: "dili-dinli"},
    {text: "С кем сидели.", answer: "dili-dinli"}
  ];
//переменная всех считалок
const allNamesSchitalok = [
{text: "Не спать", imgsrc: "", dataSrc: schitalka_neSpat},
{text: "Не плачь", imgsrc: "", dataSrc: schitalka_nePlach},
{text: "Паровоз", imgsrc: "", dataSrc: schitalka_Parovoz},
{text: "Прыг скок", imgsrc: "", dataSrc: schitalka_PrigSkok},
{text: "Коровы", imgsrc: "", dataSrc: schitalka_Korovi},
{text: "Рыба-кит", imgsrc: "", dataSrc: schitalka_RibaKit},
{text: "Чи-чи-чи", imgsrc: "", dataSrc: schitalka_obesiana_chichichi},
{text: "Шишел-Мышел", imgsrc: "", dataSrc: schitalka_shishel_mishel},
{text: "Аты-баты", imgsrc: "", dataSrc: schitalka_ati_bati},
{text: "Повар ехал", imgsrc: "", dataSrc: schitalka_povar_ehal},
{text: "Анка-дранка", imgsrc: "", dataSrc: schitalka_anka_dranka},
{text: "Моряк", imgsrc: "", dataSrc: schitalka_moryak},
{text: "Шла торговка", imgsrc: "", dataSrc: schitalka_shla_torgovka},
{text: "Катя-Катя", imgsrc: "", dataSrc: schitalka_katya_katya},
{text: "Вот галка", imgsrc: "", dataSrc: schitalka_vot_galka},
{text: "Про Ваню", imgsrc: "", dataSrc: schitalka_pro_vanyu},
{text: "Раз, два", imgsrc: "", dataSrc: schitalka_raz_dwa_tri_chetire}
];

//генерируем стартовое меню
let NewGridStartMenuElements;
let startBtn = document.querySelector('.startBtn');
let startVariable;
//функция создания элементов
  let NewGridStartMenuGO = function(allNames){
    for(let i = 0; i < allNames.length; i++){
      NewGridStartMenuElements = document.createElement('div');
      NewGridStartMenuElements.textContent = allNames[i].text;
      NewGridStartMenuElements.dataSrc = allNames[i].dataSrc;
      NewGridStartMenuElements.className = "checkbox";
      start.append(NewGridStartMenuElements);
    };  
}
  
//запуск стартового меню
NewGridStartMenuGO(allNamesSchitalok);
  
//слушаем события на checkbox
let checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function(btn) {
  // Вешаем событие клик
    btn.addEventListener('click', function() {
      for(i = 0; i < checkboxes.length; i++){
        checkboxes[i].classList.remove('active_btn');
      }
      btn.classList.toggle('active_btn');
      startVariable = btn.dataSrc;
      console.log(startVariable);
       });
  });

  // функция для кнопки старт
  startBtn.addEventListener('click', function () {
    
    welcome.style.display = 'none';
      
    //запуск считалки
    schitalkaGO(startVariable);
    //сбор созданных элементов
    tab_elements = document.querySelectorAll('.table_elem');
    //запуск первого шага
    nextStep();
  });

//создаем блоки Грида считалки
let NewGridElements;
//функция считалки
  let schitalkaGO = function(schitalka){
    for(let i = 0; i < schitalka.length; i++){
      NewGridElements = document.createElement('div');
      NewGridElements.textContent = schitalka[i].text;
      NewGridElements.dataanswer = schitalka[i].answer;
      NewGridElements.className = "table_elem";
      table.append(NewGridElements);
    };  
  }

  
//счетчик индекса
let indexTop = 0;
//счетчик шагов
let step = 0;


//функция последовательного переключения между блоками
let nextStep = function(){
  
  if (indexTop > 0 && tab_elements[indexTop-1].classList[1] == 'active'){
    console.log(tab_elements);
    tab_elements[indexTop-1].classList.remove('active');
};
if (tab_elements.length > indexTop ){
    tab_elements[indexTop].classList.add('active');
    tab_elements[indexTop].scrollIntoView({block: "center", behavior: "smooth"});
};
  indexTop++;
};


let newAnswerElement;

//добавление картинки-ответа в div элемент
let add_image_answer = function(name){
  newAnswerElement = document.createElement('div');
  newAnswerElement.className = "tab_image";
  newAnswerElement.style.backgroundImage = 'url(../image/buttons/' + name + '.png)';
  newAnswerElement.datasetName = name;
  tab_elements[step].append(newAnswerElement);
  allAnswer.push(newAnswerElement);
  ++step;
};

// Слушаем события на драконах в ответах
button_answer.forEach(function(btn) {
// Вешаем событие клик
  btn.addEventListener('click', function() { 
    if(tab_elements.length >= indexTop ){
    nextStep();
    add_image_answer(btn.name);
}

//вывод результатов с последним ответом
    if(tab_elements.length + 1 == indexTop){
      for(i = 0; i < allAnswer.length; i++){
        if(allAnswer[i].datasetName == tab_elements[i].dataanswer){
        tab_elements[i].classList.add('true_answer');
        answerTrue++;
      } else {
          tab_elements[i].classList.add('false_answer');
          answerFalse++;
        };
      }
      happy_end.style.display = 'flex';
      happy_end.scrollIntoView({block: "center", behavior: "smooth"});
      happy_end_label.textContent = user.value + ' ТВОЙ РЕЗУЛЬТАТ';
      likeDiv.textContent = answerTrue;
      dislikeDiv.textContent = answerFalse;
      if(answerFalse > 0){
        lisenok.style.backgroundImage = 'url(../image/Lisenok/dislike.png)';
      } else {
        lisenok.style.backgroundImage = 'url(../image/Lisenok/like.png)';
      }
    }
    });
});

// let menuDiv = document.querySelector('.menuDiv');
let repeat = document.querySelector('.repeat');

repeat.addEventListener('click', function () {
// console.log('click');
let clearDivs = document.querySelectorAll('.table_elem');
// console.log(clearDivs);
for(let item of clearDivs){
  item.remove();
  // console.log(item);
}
// console.log(clearDivs);

happy_end.style.display = 'none';
//счетчик индекса
indexTop = 0;
//счетчик шагов
step = 0;
//счетчик верных ответов
answerTrue = 0;
//счетчик ложных ответов
answerFalse = 0;
//массив ответов
allAnswer = [];

console.log('tab elements = ' + tab_elements);
  //запуск считалки
  schitalkaGO(startVariable);
  //сбор созданных элементов
  tab_elements = document.querySelectorAll('.table_elem');
  //запуск первого шага
  nextStep();
});
// console.log(menuDiv)


//     for(i = 0; i < tab_elements.length; i++){
//     tab_elements = [];
//     allAnswer = [];
//     startVariable = [];
//     clearDiv = [];
//     console.log(tab_elements);
//     console.log(allAnswer);
//     }