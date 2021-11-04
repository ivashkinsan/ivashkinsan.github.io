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
    {text: "Айболита.", answer: "dili-dinli"},
    {text: "Ну а рядом", answer: "dili-dinli"},
    {text: "Плачут блохи", answer: "dili-dinli"},
    {text: "Их желудки", answer: "dili-dinli"},
    {text: "Очень плохи", answer: "dili-dinli"},
    {text: "О водичке", answer: "dili-dinli"},
    {text: "И о мыле", answer: "dili-dinli"},
    {text: "Эти блохи", answer: "dili-dinli"},
    {text: "Позабыли", answer: "dili-dinli"},
    {text: "Всё семейство", answer: "dili-dinli"},
    {text: "Недовольно", answer: "dili-dinli"},
    {text: "Потому что", answer: "dili-dinli"},
    {text: "Очень больно.", answer: "dili-dinli"},
    {text: "Не кусайте", answer: "dili-dinli"},
    {text: "Блохи локти", answer: "dili-dinli"},
    {text: "Чаще мойте", answer: "dili-dinli"},
    {text: "Лапки, когти", answer: "dili-dinli"},
    {text: "Уши, ноги", answer: "dili-dinli"},
    {text: "И копыта.", answer: "dili-dinli"},
    {text: "Вот вам тазик", answer: "dili-dinli"},
    {text: "Вот корыто.", answer: "dili-dinli"},
    {text: "Вот вам мыло,", answer: "dili-dinli"},
    {text: "Вот мочалка", answer: "dili-dinli"},
    {text: "Мойте, мойте,", answer: "dili-dinli"},
    {text: "Нам не жалко.", answer: "dili-dinli"}
  ];


//переменная всех считалок
let allNamesSchitalok = [
{text: "Не спать", imgsrc: "", dataSrc: schitalka_neSpat},
{text: "Не плачь", imgsrc: "", dataSrc: schitalka_nePlach},
{text: "Паровоз", imgsrc: "", dataSrc: schitalka_Parovoz},
{text: "Прыг скок", imgsrc: "", dataSrc: schitalka_PrigSkok},
{text: "Коровы", imgsrc: "", dataSrc: schitalka_Korovi}
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
    tab_elements[indexTop-1].classList.remove('active');
};
if (tab_elements.length > indexTop ){
    tab_elements[indexTop].classList.add('active');
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

// Слушаем события на драконах ответах
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
      happy_end.style.display = 'block';
      happy_end_label.textContent = user.value + ' ТВОЙ РЕЗУЛЬТАТ';
      likeDiv.textContent = "ПОЙМАЛИ - " + answerTrue;
      dislikeDiv.textContent = "УЛЕТЕЛИ - " + answerFalse;
      if(answerFalse > 0){
        lisenok.style.backgroundImage = 'url(../image/Lisenok/dislike.png)';
      } else {
        lisenok.style.backgroundImage = 'url(../image/Lisenok/like.png)';
      }
    }
    });
});


