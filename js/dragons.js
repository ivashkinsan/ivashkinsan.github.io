document.oncontextmenu = cmenu; function cmenu() { return false; };

//функция предварительной загрузки медиа
function preload() {
  while(arguments.length) {
      new Image().src = [].shift.call(arguments);
  }
}

//ввод имени и выбор уровня
let level = [];
let user;
let blockUser = document.querySelector('.user');

let welcome = document.querySelector('.welcome');
let checkboxes = document.querySelectorAll('.start .checkbox');

let allBtn = document.querySelector('.allBtn');
let prize = document.querySelector('.prize');


// console.log(checkboxes);
//переменная блока основной картинки
let image = document.querySelector('.image');
let playBtn = document.querySelector('.playBtn');

//переменные монитора
let monitor = document.querySelector('.monitor');
let like_points_elem = document.querySelector('.like_points');
let like_points = like_points_elem.textContent;
let dislike_points_elem = document.querySelector('.dislike_points');
let dislike_points = dislike_points_elem.textContent;
//переменные кнопок button
let buttons = document.querySelectorAll('.button');
console.log(buttons);
let lisenok = document.querySelector('.lisenok');

let prizeCheck = true;
let happy_end = document.querySelector('.happy_end');

//картинки и драконы Ди-Динь
let diDinMas = [
    {source: "image/di_Din/Барсук.jpg", answer: "di-din", name: "БАРСУК", audioSrc:"",},
    {source: "image/di_Din/Бизон.jpg", answer: "di-din", name: "БИЗОН", audioSrc:"",},
    {source: "image/di_Din/Варан.jpg", answer: "di-din", name: "ВАРАН", audioSrc:"",},
    {source: "image/di_Din/Верблюд.jpg", answer: "di-din", name: "ВЕРБЛЮД", audioSrc:"",},
    {source: "image/di_Din/Гепард.jpg", answer: "di-din", name: "ГЕПАРД", audioSrc:"",},
    {source: "image/di_Din/Глухарь.jpg", answer: "di-din", name: "ГЛУХАРЬ", audioSrc:"",},
    {source: "image/di_Din/Дельфин.jpg", answer: "di-din", name: "ДЕЛЬФИН", audioSrc:"",},
    {source: "image/di_Din/Дрофа.jpg", answer: "di-din", name: "ДРОФА", audioSrc:"",},
    {source: "image/di_Din/Енот.jpg", answer: "di-din", name: "ЕНОТ", audioSrc:"",},
    {source: "image/di_Din/Индюк.jpg", answer: "di-din", name: "ИНДЮК", audioSrc:"",},
    {source: "image/di_Din/Кабан.jpg", answer: "di-din", name: "КАБАН", audioSrc:"",},
    {source: "image/di_Din/Медведь.jpg", answer: "di-din", name: "МЕДВЕДЬ", audioSrc:"",},
    {source: "image/di_Din/Орёл.jpg", answer: "di-din", name: "ОРЁЛ", audioSrc:"",},
    {source: "image/di_Din/Оса.jpg", answer: "di-din", name: "ОСА", audioSrc:"",},
    {source: "image/di_Din/Павлин.jpg", answer: "di-din", name: "ПАВЛИН", audioSrc:"",},
    {source: "image/di_Din/Петух.jpg", answer: "di-din", name: "ПЕТУХ", audioSrc:"",},
    {source: "image/di_Din/Сова.jpg", answer: "di-din", name: "СОВА", audioSrc:"",},
    {source: "image/di_Din/Сурок.jpg", answer: "di-din", name: "СУРОК", audioSrc:"",},
    {source: "image/di_Din/Тапир.jpg", answer: "di-din", name: "ТАПИР", audioSrc:"",},
    {source: "image/di_Din/Тукан.jpg", answer: "di-din", name: "ТУКАН", audioSrc:"",},
    {source: "image/di_Din/Тюлень.jpg", answer: "di-din", name: "ТЮЛЕНЬ", audioSrc:"",},
    {source: "image/di_Din/Фазан.jpg", answer: "di-din", name: "ФАЗАН", audioSrc:"",},
    {source: "image/di_Din/Щегол.jpg", answer: "di-din", name: "ЩЕГОЛ", audioSrc:"",}
    ];

//картинки и драконы ДиЛи-Динь    
let diliDinMas = [
    {source: "image/dili_Din/Бегемот.JPG", answer: "dili-din", name: "БЕГЕМОТ", audioSrc:"",},
    {source: "image/dili_Din/Богомол.JPG", answer: "dili-din", name: "БОГОМОЛ", audioSrc:"",},
    {source: "image/dili_Din/Бурундук.JPG", answer: "dili-din", name: "БУРУНДУК", audioSrc:"",},
    {source: "image/dili_Din/Гамадрил.JPG", answer: "dili-din", name: "ГАМАДРИЛ", audioSrc:"",},
    {source: "image/dili_Din/Дикобраз.JPG", answer: "dili-din", name: "ДИКОБРАЗ", audioSrc:"",},
    {source: "image/dili_Din/Каракал.JPG", answer: "dili-din", name: "КАРАКАЛ", audioSrc:"",},
    {source: "image/dili_Din/Кенгуру.JPG", answer: "dili-din", name: "КЕНГУРУ", audioSrc:"",},
    {source: "image/dili_Din/Крокодил.JPG", answer: "dili-din", name: "КРОКОДИЛ", audioSrc:"",},
    {source: "image/dili_Din/Леопард.JPG", answer: "dili-din", name: "ЛЕОПАРД", audioSrc:"",},
    {source: "image/dili_Din/Марабу.JPG", answer: "dili-din", name: "МАРАБУ", audioSrc:"",},
    {source: "image/dili_Din/Махаон.JPG", answer: "dili-din", name: "МАХАОН", audioSrc:"",},
    {source: "image/dili_Din/Муравьед.JPG", answer: "dili-din", name: "МУРАВЬЕД", audioSrc:"",},
    {source: "image/dili_Din/Носорог.JPG", answer: "dili-din", name: "НОСОРОГ", audioSrc:"",},
    {source: "image/dili_Din/Осьминог.JPG", answer: "dili-din", name: "ОСЬМИНОГ", audioSrc:"",},
    {source: "image/dili_Din/Пеликан.JPG", answer: "dili-din", name: "ПЕЛИКАН", audioSrc:"",},
    {source: "image/dili_Din/Попугай.JPG", answer: "dili-din", name: "ПОПУГАЙ", audioSrc:"",},
    {source: "image/dili_Din/Соловей.JPG", answer: "dili-din", name: "СОЛОВЕЙ", audioSrc:"",},
    {source: "image/dili_Din/Стрекоза.JPG", answer: "dili-din", name: "СТРЕКОЗА", audioSrc:"",},
    {source: "image/dili_Din/Утконос.jpg", answer: "dili-din", name: "УТКОНОС", audioSrc:"",},
    {source: "image/dili_Din/Ягуар.JPG", answer: "dili-din", name: "ЯГУАР", audioSrc:"",},
    ];

      
//картинки и драконы ДиЛи-ДиньЛи
let diliDinliMas = [
     {source: "image/dili_dinli/Барракуда.JPG", answer: "dili-dinli", name: "БАРРАКУДА", audioSrc:"",},
     {source: "image/dili_dinli/Жеребёнок.JPG", answer: "dili-dinli", name: "ЖЕРЕБЁНОК", audioSrc:"",},
     {source: "image/dili_dinli/Игуана.JPG", answer: "dili-dinli", name: "ИГУАНА", audioSrc:"",},
     {source: "image/dili_dinli/Куропатка.JPG", answer: "dili-dinli", name: "КУРОПАТКА", audioSrc:"",},
     {source: "image/dili_dinli/Перепёлка.JPG", answer: "dili-dinli", name: "ПЕРЕПЁЛКА", audioSrc:"",},
     {source: "image/dili_dinli/Поросёнок.JPG", answer: "dili-dinli", name: "ПОРОСЁНОК", audioSrc:"",},
     {source: "image/dili_dinli/Росомаха.JPG", answer: "dili-dinli", name: "РОССОМАХА", audioSrc:"",},
     {source: "image/dili_dinli/Саламандра.JPG", answer: "dili-dinli", name: "САЛАМАНДРА", audioSrc:"",},
     {source: "image/dili_dinli/Трясогузка.JPG", answer: "dili-dinli", name: "ТРЯСОГУЗКА", audioSrc:"",},
     {source: "image/dili_dinli/Черепаха.JPG", answer: "dili-dinli", name: "ЧЕРЕПАХА", audioSrc:"",}
];

let diDinliMas = [
  {source: "image/di_Dinli/Акула.jpg", answer: "di-dinli", name: "АКУЛА", audioSrc:"",},
  {source: "image/di_Dinli/Ворона.jpg", answer: "di-dinli", name: "ВОРОНА", audioSrc:"",},
  {source: "image/di_Dinli/Гиена.jpg", answer: "di-dinli", name: "ГИЕНА", audioSrc:"",},
  {source: "image/di_Dinli/Горилла.jpg", answer: "di-dinli", name: "ГОРИЛЛА", audioSrc:"",},
  {source: "image/di_Dinli/Ехидна.jpg", answer: "di-dinli", name: "ЕХИДНА", audioSrc:"",},
  {source: "image/di_Dinli/Коала.jpg", answer: "di-dinli", name: "КОАЛА", audioSrc:"",},
  {source: "image/di_Dinli/Колибри.jpg", answer: "di-dinli", name: "КОЛИБРИ", audioSrc:"",},
  {source: "image/di_Dinli/Корова.jpg", answer: "di-dinli", name: "КОРОВА", audioSrc:"",},
  {source: "image/di_Dinli/Кукушка.jpg", answer: "di-dinli", name: "КУКУШКА", audioSrc:"",},
  {source: "image/di_Dinli/Куница.jpg", answer: "di-dinli", name: "КУНИЦА", audioSrc:"",},
  {source: "image/di_Dinli/Лягушка.jpg", answer: "di-dinli", name: "ЛЯГУШКА", audioSrc:"",},
  {source: "image/di_Dinli/Синица.jpg", answer: "di-dinli", name: "СИНИЦА", audioSrc:"",},
  {source: "image/di_Dinli/Собака.jpg", answer: "di-dinli", name: "СОБАКА", audioSrc:"",},
  {source: "image/di_Dinli/Сорока.jpg", answer: "di-dinli", name: "СОРОКА", audioSrc:"",},
  {source: "image/di_Dinli/Улитка.jpg", answer: "di-dinli", name: "УЛИТКА", audioSrc:"",},
  {source: "image/di_Dinli/Фламинго.jpg", answer: "di-dinli", name: "ФЛАМИНГО", audioSrc:"",},
  {source: "image/di_Dinli/Цыплёнок.jpg", answer: "di-dinli", name: "ЦЫПЛЁНОК", audioSrc:"",}
];

let soundMasDiDin = [ 
  {source: "audio/ROYAL.jpg", answer: "di-din", name: "звук", audioSrc:"audio/diDinLEYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-din", name: "звук", audioSrc:"audio/diDinTIYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-din", name: "звук", audioSrc:"audio/diDinZOYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-din", name: "звук", audioSrc:"audio/diDinZOYOup.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-dinli", name: "звук", audioSrc:"audio/diDinliLEYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-dinli", name: "звук", audioSrc:"audio/diDinliTIYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-dinli", name: "звук", audioSrc:"audio/diDinliZOYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "di-dinli", name: "звук", audioSrc:"audio/diDinliZYOup.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-dinli", name: "звук", audioSrc:"audio/diliDinliLEYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-dinli", name: "звук", audioSrc:"audio/diliDinliTIYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-dinli", name: "звук", audioSrc:"audio/diliDinliZOYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-dinli", name: "звук", audioSrc:"audio/diliDinliZOYOup.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-din", name: "звук", audioSrc:"audio/diliDinLEYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-din", name: "звук", audioSrc:"audio/diliDinTIYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-din", name: "звук", audioSrc:"audio/diliDinZOYO.wav",},
  {source: "audio/ROYAL.jpg", answer: "dili-din", name: "звук", audioSrc:"audio/diliDinZOYOup.wav",}
];

let schitalki  = { 

neSpat: [ 
  {text: "Не спать!", answer: "di-din"},
  {text: "Всем встать!", answer: "di-din"},
  {text: "Вас тут", answer: "di-din"},
  {text: "Всех ждут!", answer: "di-din"},
  {text: "Здесь есть,", answer: "di-din"},
  {text: "Что съесть!", answer: "di-din"},
  {text: "Кто смел,", answer: "di-din"},
  {text: "Тот съел.", answer: "di-din"}],

nePlach:[ 
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
  ]

};



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


//запуск функции предзагрузки всех картинок
for (key in diDinMas){
  preload(diDinMas[key].source);
};

for (key in diliDinMas){
  preload(diliDinMas[key].source);
};

for (key in diliDinliMas){
  preload(diliDinliMas[key].source);
};

for (key in diDinliMas){
  preload(diDinliMas[key].source);
};


let dragons = [];
let dragon;
let audio;
// let dragon = diDinMas[0];

//функция рандомных драконов
let randomDragon = function(){
  dragon = dragons[Math.floor(Math.random()*dragons.length)];
      monitor.textContent = dragon.name;
      image.src = dragon.source;
      playSound(dragon.audioSrc);
      // if(dragon.audioSrc != ""){
      //   playBtn.style.display = "block";
      // }
  };

function playSound(url){
  audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove() //Remove when played.
  };
  document.body.appendChild(audio);
};


// Слушаем события на стартовых драконах
checkboxes.forEach(function(btn) {
  
  // Вешаем событие клик
  btn.addEventListener('click', function() { 
    btn.classList.toggle('checkbox_active');
    });
});


//функция вывода данных из формы
document.forms.start.onsubmit = function() {
  user = this.user.value;
  if(checkboxes[0].classList[2] == 'checkbox_active'){
  level[0] = checkboxes[0].value;
  dragons = dragons.concat(diDinMas);
  buttons[0].style.display = "block";
  dragon = dragons[0];
  }
  
  if(checkboxes[1].classList[2] == 'checkbox_active'){
    level[1] = checkboxes[1].value;
    dragons = dragons.concat(diliDinMas);
    buttons[1].style.display = "block";
    dragon = dragons[0];
  }
  if(checkboxes[2].classList[2] == 'checkbox_active'){
      level[2] = checkboxes[2].value;
      dragons = dragons.concat(diliDinliMas);
      buttons[2].style.display = "block";
      dragon = dragons[0];
  }
  if(checkboxes[3].classList[2] == 'checkbox_active'){
  level[3] = checkboxes[3].value;
  dragons = dragons.concat(diDinliMas);
  buttons[3].style.display = "block";
  dragon = dragons[0];
  }
  
  if(checkboxes[4].classList[2] == 'checkbox_active'){
    dragons = dragons.concat(soundMasDiDin);
    buttons[0].style.display = "block";
    buttons[1].style.display = "block";
    buttons[2].style.display = "block";
    buttons[3].style.display = "block";
    playBtn.style.display = "block";
  }


  welcome.remove();
  user = blockUser.value;
  randomDragon();
  // return false;
};

//кнопка выделить ВСЕ
allBtn.addEventListener('click', function(){
for(i = 0; i < checkboxes.length; i++){
  checkboxes[i].classList.add('checkbox_active');
};
});

//кнопка СБРОС
document.forms.start.onreset = function() {
  level = [];
  user = null;
for(i = 0; i < checkboxes.length; i++){
  checkboxes[i].classList.remove('checkbox_active');
}
};



// Выбираем все кнопки на странице и получаем массив
// Проходим по массиву
buttons.forEach(function(btn) {
  // Вешаем событие клик
  
  btn.addEventListener('click', function(e) {
    console.log(btn);
    console.log(e);
    console.log(e.target.classList);   
    console.log(dragon.answer); 
    console.log(e.target.name); 

    console.log('карточка' + btn.classList + "  " +  dragon.answer + "  " + btn.dataset.name);
    if(dragon.answer == btn.dataset.name){
        like_points = Number(like_points) + 1;
        like_points_elem.textContent = like_points;
        console.log('МОЛОДЕЦ' + "   " + like_points);
        lisenok.src = './image/Lisenok/like.png';
        // playBtn.style.display = "none";
    } else {
        dislike_points = Number(dislike_points) + 1;
        dislike_points_elem.textContent = dislike_points;
        console.log('ПОПРОБУЙ ЕЩЁ');
        lisenok.src = './image/Lisenok/dislike.png';
        // playBtn.style.display = "none";
    };
    
    randomDragon();
    
    if(like_points==9||like_points==19||like_points==29||like_points==39||like_points==49||like_points==59||like_points==69||like_points==79||like_points==89||like_points==99){
      prizeCheck=true;
    }; 

    if(like_points==10 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = `ХОРОШИЙ РЕЗУЛЬТАТ! </br> ЗАПИШЕМ - 10 ДРАКОНОВ`;
      prizeCheck = false; 
    }
    if(like_points==20 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "У ТЕБЯ ХОРОШИЙ СЛУХ! </br> УЖЕ 20 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/20_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==30 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "УЖЕ 30 ДРАКОНОВ </br> ОТЛИЧНО СПРАВЛЯЕШЬСЯ </br>" + user;
      prize.style.backgroundImage = "url(image/Lisenok/30_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==40 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "СЕГОДНЯ БУДЕТ ОТЛИЧНЫЙ УЛОВ! </br> УЖЕ 40 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/40_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==50 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "СЕГОДНЯ ТОЧНО БУДЕТ РЕКОРД </br> УЖЕ 50 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/50_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==60 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "С ДНЁМ РЕКОРДА!" + user + "</br>УЖЕ 60 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/60_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==70 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "УРАааааа!!! </br> 70 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/70_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==80 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = user + "КЛАСС!!! </br> УЖЕ 80 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/80_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==90 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = "КУБОК И РЕЗУЛЬТАТ </br> 90 ДРАКОНОВ";
      prize.style.backgroundImage = "url(image/Lisenok/90_dragons.png)";
      prizeCheck = false; 
    }
    if(like_points==100 && prizeCheck == true){
      prize.style.display = "block";
      prize.innerHTML = user + " ПОБЕДИТЕЛЬ!!! </br> ТВОЙ РЕЗУЛЬТАТ </br> ПОЙМАЛ 100 ДРАКОНОВ!!! </br> УЛЕТЕЛИ " + dislike_points;
      prize.style.backgroundImage = "url(image/Lisenok/100_dragons.png)";
      like_points=0;
      dislike_points=0;
    }
    console.log(like_points);

  });
});


prize.addEventListener('click', function () {
  prize.style.display = "none";
});

playBtn.addEventListener('click', function () {
  playSound(audio.src);
});

// rhymes.addEventListener('click', function () {
//   console.log('готово');
// });