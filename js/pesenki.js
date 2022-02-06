let staff_5 = document.querySelectorAll('.line');
let notes = document.querySelectorAll('.note');
let margin_left = 110;
let interval_x = 37;
let nameStage = ['ZO','RA','TI','YO','LE','WI','NA','ZO_up'];
let tonalnost_os_Y = {};
let monitor_for_text = document.querySelector('.monitor_for_text');
let container_notes = document.querySelector('.container_notes');

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
    {text: 'Наш кораблик по волнам плывёт,', formula: ['YO','YO','TI','TI','RA','TI','YO','YO','ZO']},
    {text: 'капитаном одноглазый кот,', formula: ['YO','YO','TI','TI','RA','TI','YO','YO','ZO']},
    {text: 'ворон с мачты глядит вперёд', formula: ['RA','TI','YO','YO','TI','RA','TI','YO']},
    {text: 'и матросы мыши.', formula: ['TI','TI','RA','TI','YO','YO']},
    {text: 'Удивляется любой моряк –', formula: ['YO','YO','TI','TI','RA','TI','YO','YO','ZO']},
    {text: 'паруса у нас вперекосяк.', formula: ['YO','YO','TI','TI','RA','TI','YO','YO','ZO']},
    {text: 'Ну и что же? Зато наш флаг', formula: ['RA','TI','YO','YO','TI','RA','TI','YO']},
    {text: 'прочих флагов выше!', formula: ['TI','TI','RA','TI','YO','YO']}
    ];
    

// Создание массива с координатами высот
let topBottomArr = [];
let startLineDo = staff_5[4].getBoundingClientRect().y + 2 + 17.5;
let oneItemArrTopBottom = Math.round(startLineDo);
for(let i = 0; i < 12; i++){
    topBottomArr.push(oneItemArrTopBottom);
    oneItemArrTopBottom -= 17.5;
};
console.log(oneItemArrTopBottom);

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
            newDiv.style.width = '10px';
            interval += 18.5;
            console.log(parowoz[1].formula[3])
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
start(korablik[0]);


// notes[0].style.top = topBottomArr[0] + 'px';
// notes[1].style.top = topBottomArr[1] + 'px';
// notes[2].style.top = topBottomArr[2] + 'px';
// notes[3].style.top = topBottomArr[3] + 'px';
// notes[4].style.top = topBottomArr[4] + 'px';
// notes[5].style.top = topBottomArr[5] + 'px';
// notes[6].style.top = topBottomArr[6] + 'px';
// notes[7].style.top = topBottomArr[7] + 'px';
// notes[8].style.top = topBottomArr[8] + 'px';
// notes[9].style.top = topBottomArr[9] + 'px';
// notes[10].style.top = topBottomArr[10] + 'px';
// notes[11].style.top = topBottomArr[11] + 'px';
// notes[12].style.top = topBottomArr[12] + 'px';

// Позиция нот по горизонтали
// notes[0].style.left = rightLeftArr[0] + 'px';
// notes[1].style.left = rightLeftArr[1] + 'px';
// notes[2].style.left = rightLeftArr[2] + 'px';
// notes[3].style.left = rightLeftArr[3] + 'px';
// notes[4].style.left = rightLeftArr[4] + 'px';
// notes[5].style.left = rightLeftArr[5] + 'px';
// notes[6].style.left = rightLeftArr[6] + 'px';
// notes[7].style.left = rightLeftArr[7] + 'px';
// notes[8].style.left = rightLeftArr[8] + 'px';
// notes[9].style.left = rightLeftArr[9] + 'px';
// notes[10].style.left = rightLeftArr[10] + 'px';
// notes[11].style.left = rightLeftArr[11] + 'px';
// notes[12].style.left = rightLeftArr[12] + 'px';
// notes[13].style.left = rightLeftArr[13] + 'px';
// notes[14].style.left = rightLeftArr[14] + 'px';
// notes[15].style.left = rightLeftArr[15] + 'px';
