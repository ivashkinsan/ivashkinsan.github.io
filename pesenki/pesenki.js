let parowoz = [
    { all: 156, text: '- Паровоз, паровоз, ты куда нас повез?', formula: ['ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO'] },
    { text: '- Я стучу, я пыхчу, я качу, где хочу.', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: '- Паровоз, паровоз, ты зачем нас повез?', formula: ['ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO', 0, 'ZO', 'ZO', 'YO'] },
    { text: '- Что б узнать вы смогли: нет конца у земли', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: '- Паровоз, паровоз, ты куда нас привез?', formula: ['YO', 'YO', 'YO', 0, 'YO', 'YO', 'YO', 0, 'YO', 'YO', 'YO', 0, 'YO', 'YO', 'YO'] },
    { text: '- Зеленей здесь леса и синей небеса -', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: 'постоим, отдохнём и назад повернём.', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: '- А теперь, паровоз, ты куда нас повёз?', formula: ['YO', 'YO', 'ZO', 0, 'YO', 'YO', 'ZO', 0, 'YO', 'YO', 'ZO', 0, 'YO', 'YO', 'ZO'] },
    { text: '- Через дождь и грозу я домой вас везу,', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: 'по горам, по долам, развезу по домам.', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: '- Паровоз, паровоз, ты куда нас привёз?', formula: ['ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO'] },
    { text: '- Дыма нет над трубой, я привёз вас домой.', formula: ['RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA', 0, 'RA', 'RA', 'RA'] },
    { text: '- Хорошо, что привёз! Молодец, паровоз!', formula: ['ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO', 0, 'ZO', 'ZO', 'ZO'] }
];

let esli = [
    { all: 26, text: 'Если очень захотеть,', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'YO'] },
    { text: 'замахать руками –', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'YO', 0, 'YO'] },
    { text: 'можно даже полететь', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'YO'] },
    { text: 'рядом с облаками.', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'YO', 0, 'YO'] }
];

let soroka = [
    { all: 50, text: 'Сорока, сорока, где была? Далёко –', formula: ['RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO', 0, 'RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO'] },
    { text: 'кашу варила, деточек кормила,', formula: ['RA', 0, 'RA', 'RA', 'RA', 0, 'ZO', 0, 'RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO'] },
    { text: 'на порог скакала, гостей созывала,', formula: ['RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO', 0, 'RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO'] },
    { text: 'гости услыхали, быть обещали…', formula: ['RA', 'RA', 'RA', 'RA', 'RA', 0, 'ZO', 0, 'RA', 0, 'RA', 'RA', 'RA', 0, 'ZO'] },
    { text: 'И не пришли.', formula: ['RA', 0, 'ZO', 'ZO', 'YO'] }
];

let zaichik = [
    { all: 23, text: 'Зайчик, ты, зайчик,', formula: ['YO', 0, 'ZO', 'ZO', 'RA', 0, 'ZO'] },
    { text: 'коротеньки ножки.', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 0, 'ZO'] },
    { text: 'На этих на ножках', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 0, 'ZO'] },
    { text: 'сафьяны сапожки.', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 0, 'ZO'] }
];

let vorobey = [
    { all: 26, text: 'Ой мороз, белеет нос.', formula: ['YO', 'RA', 'ZO', 'RA', 'YO', 'RA', 'ZO'] },
    { text: 'Что же это значит?', formula: ['YO', 'RA', 'ZO', 'RA', 'YO', 'YO'] },
    { text: 'Почему же воробей', formula: ['YO', 'RA', 'ZO', 'RA', 'YO', 'RA', 'ZO'] },
    { text: 'Скачет и не плачет?', formula: ['YO', 'RA', 'ZO', 'RA', 'YO', 'YO'] }
];

let medved = [
    { all: 32, text: 'Весной медведь решил запеть.', formula: ['YO', 'RA', 0, 0, 'YO', 'ZO', 0, 0, 'ZO', 'RA', 0, 0, 'ZO', 'YO'] },
    { text: 'Он пел и пел, сопел, хрипел.', formula: ['YO', 'RA', 0, 0, 'YO', 'ZO', 0, 0, 'ZO', 'RA', 0, 0, 'ZO', 'YO'] },
    { text: 'А мы не прочь ему помочь:', formula: ['YO', 'RA', 0, 0, 'YO', 'ZO', 0, 0, 'ZO', 'RA', 0, 0, 'ZO', 'YO'] },
    { text: 'Ё-РА, Ё-ЗО, ЗО-РА, ЗО-Ё.', formula: ['YO', 'RA', 0, 0, 'YO', 'ZO', 0, 0, 'ZO', 'RA', 0, 0, 'ZO', 'YO'] }
];

let koza = [
    { all: 38, text: 'Идёт коза рогатая', formula: ['TI', 'YO', 0, 'TI', 'ZO', 0, 'TI', 'YO', 0, 'TI', 'ZO'] },
    { text: 'за малыми ребятами.', formula: ['TI', 'YO', 0, 'TI', 'ZO', 0, 'TI', 'YO', 0, 'TI', 'ZO'] },
    { text: 'Кто кашу не ест, молоко не пьёт,', formula: ['TI', 'YO', 'YO', 'TI', 'ZO', 'ZO', 'TI', 'YO', 0, 'TI', 'ZO'] },
    { text: 'того бу! забоду! на рога посажу!', formula: ['ZO', 'TI', 'YO', 'YO', 'TI', 'ZO', 'ZO', 'TI', 'YO', 'YO', 'TI', 'ZO'] }
];

let kuznechik = [
    { all: 27, text: 'В траве сидел кузнечик', formula: ['YO', 'ZO', 'YO', 'ZO', 'YO', 'TI', 'TI'] },
    { text: 'Совсем как огуречик', formula: ['TI', 'ZO', 'TI', 'ZO', 'TI', 'YO', 'YO'] },
    { text: 'Совсем как огуречик', formula: ['YO', 'ZO', 'YO', 'ZO', 'YO', 'TI', 'TI'] },
    { text: 'Зелёненький он был', formula: ['TI', 'ZO', 'TI', 'ZO', 'TI', 'YO'] }
];

let solnishko = [
    { all: 36, text: 'Солнышко, солнышко,', formula: ['YO', 0, 'TI', 'TI', 'YO', 0, 'ZO', 'ZO'] },
    { text: 'выгляни в окошечко.', formula: ['YO', 'YO', 'TI', 'TI', 'YO', 0, 'ZO', 'ZO'] },
    { text: 'Там твои детки', formula: ['YO', 0, 'TI', 'TI', 'YO', 0, 'ZO'] },
    { text: 'сидят на загнетке,', formula: ['ZO', 'YO', 0, 'TI', 'TI', 'YO', 0, 'ZO'] },
    { text: 'лепёшки валяют,', formula: ['ZO', 'YO', 0, 'TI', 'TI', 'YO', 0, 'ZO'] },
    { text: 'тебя поджидают.', formula: ['ZO', 'YO', 0, 'TI', 'TI', 'YO', 0, 'ZO'] }
];

let dveteteri = [
    { all: 30, text: 'На зелёном на лугу', formula: ['YO', 'TI', 'RA', 'YO', 'TI', 'TI', 'YO'] },
    { text: 'стоит чашка творогу.', formula: ['YO', 'TI', 'RA', 'YO', 'TI', 'TI', 'YO'] },
    { text: 'Прилетели две тетери,', formula: ['ZO', 'ZO', 'RA', 'RA', 'TI', 'TI', 'YO', 'YO'] },
    { text: 'поклевали, улетели.', formula: ['ZO', 'ZO', 'RA', 'RA', 'TI', 'TI', 'YO', 'YO'] }
];

let kurochka = [
    { all: 77, text: 'Вышла курочка гулять,', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 'RA', 'ZO'] },
    { text: 'свежей травки пощипать.', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 'RA', 'ZO'] },
    { text: 'А за ней ребятки', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] },
    { text: 'жёлтые цыплятки.', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] },
    { text: 'Ко-ко-ко, ко-ко-ко,', formula: ['YO', 'YO', 'ZO', 0, 'RA', 'RA', 'ZO'] },
    { text: 'не ходите далеко.', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 'RA', 'ZO'] },
    { text: 'Лапками гребите,', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] },
    { text: 'зёрнышки ищите.', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] },
    { text: 'Съели толстого жука,', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 'RA', 'ZO'] },
    { text: 'дождевого червяка.', formula: ['YO', 'YO', 'ZO', 'ZO', 'RA', 'RA', 'ZO'] },
    { text: 'Выпили водицы', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] },
    { text: 'полное корытце.', formula: ['ZO', 'ZO', 'RA', 'TI', 'YO', 'YO'] }
];

let korablik = [
    { all: 64, text: 'Наш кораблик по волнам плывёт,', formula: ['YO', 0, 'YO', 'TI', 'TI', 'RA', 'TI', 'YO', 0, 'YO', 0, 'ZO'] },
    { text: 'капитаном одноглазый кот,', formula: ['YO', 0, 'YO', 'TI', 'TI', 'RA', 'TI', 'YO', 0, 'YO', 0, 'ZO'] },
    { text: 'ворон с мачты глядит вперёд', formula: ['RA', 0, 'TI', 'YO', 0, 'YO', 'TI', 'RA', 0, 'TI', 0, 'YO'] },
    { text: 'и матросы мыши.', formula: ['TI', 0, 'TI', 'RA', 0, 'TI', 0, 'YO', 0, 'YO'] },
    { text: 'Удивляется любой моряк –', formula: ['YO', 0, 'YO', 'TI', 'TI', 'RA', 'TI', 'YO', 0, 'YO', 0, 'ZO'] },
    { text: 'паруса у нас вперекосяк.', formula: ['YO', 0, 'YO', 'TI', 'TI', 'RA', 'TI', 'YO', 0, 'YO', 0, 'ZO'] },
    { text: 'Ну и что же? Зато наш флаг', formula: ['RA', 0, 'TI', 'YO', 0, 'YO', 'TI', 'RA', 0, 'TI', 0, 'YO'] },
    { text: 'прочих флагов выше!', formula: ['TI', 0, 'TI', 'RA', 0, 'TI', 0, 'YO', 0, 'YO'] }
];

let kolibelnaya = [
    { all: 42, text: 'Баю, баюшки, баю,', formula: ['YO', 'TI', 'RA', 'ZO', 'RA', 'TI', 'YO'] },
    { text: 'не ложися на краю -', formula: ['TI', 'RA', 'ZO', 'ZO', 'ZO', 'RA', 'TI'] },
    { text: 'придёт серенький волчок', formula: ['YO', 'TI', 'RA', 'ZO', 'RA', 'TI', 'YO'] },
    { text: 'и ухватит за бочок,', formula: ['TI', 'RA', 'ZO', 'ZO', 'ZO', 'RA', 'TI'] },
    { text: 'и потащит во лесок,', formula: ['YO', 'TI', 'RA', 'ZO', 'RA', 'TI', 'YO'] },
    { text: 'под ракитовый кусток.', formula: ['TI', 'RA', 'ZO', 'ZO', 'ZO', 'RA', 'TI'] }
];

let tausen = [
    { all: 82, text: 'Таусеньки, таусень', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'Варит бабушка кисель', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'LE', 'YO'] },
    { text: 'На горушечке,', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'В черепушечке', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 0, 'YO'] },
    { text: 'Летел, летел голубок.', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'Через бабушкин дворок.', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'LE', 'YO'] },
    { text: 'Голубь крыльями забил,', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'По земле кисель разлил', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'LE', 'YO'] },
    { text: 'Вот и нету киселя', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'На горушечке.', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'LE', 'YO'] },
    { text: 'На горушечке,', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 'RA', 'YO'] },
    { text: 'В черепушечке', formula: ['LE', 'LE', 'YO', 'RA', 'LE', 0, 'YO'] }
];

let kukla = [
    { all: 48, text: 'Кукла плачет, весь день лежит', formula: ['ZO', 'ZO', 'YO', 'LE', 'YO', 'ZO', 'ZO', 'YO'] },
    { text: 'у неё голова болит.', formula: ['ZO', 'ZO', 'YO', 'LE', 'YO', 'ZO', 'LE', 'YO'] },
    { text: 'Я её полечить хочу,', formula: ['RA', 'YO', 'YO', 'TI', 'YO', 'RA', 'YO', 'RA'] },
    { text: 'отвезу я её к врачу.', formula: ['RA', 'LE', 'LE', 'YO', 'LE', 'RA', 'LE', 'RA'] },
    { text: 'Вот опять она весела - ', formula: ['ZO', 'ZO', 'YO', 'LE', 'YO', 'ZO', 'ZO', 'YO'] },
    { text: 'голова у неё прошла.', formula: ['ZO', 'ZO', 'YO', 'LE', 'YO', 'ZO', 'LE', 'YO'] }
];

let rucheek = [
    { all: 39, text: 'В ручье найдется заводь,', formula: ['ZO', 'YO', 0, 'YO', 'RA', 0, 'YO', 'ZO', 0, 'ZO'] },
    { text: 'в ней тихая вода.', formula: ['ZO', 'YO', 0, 'YO', 'RA', 0, 'YO', 'ZO'] },
    { text: 'Я там хочу поплавать,', formula: ['ZO', 'RA', 0, 'RA', 'TI', 0, 'YO', 'LE', 0, 'RA'] },
    { text: 'возьми меня туда.', formula: ['RA', 'LE', 0, 'LE', 'RA', 0, 'TI', 'YO'] },
    { text: 'Я там хочу поплавать,', formula: ['ZO', 'RA', 0, 'RA', 'TI', 0, 'YO', 'LE', 0, 'RA'] },
    { text: 'возьми меня туда.', formula: ['RA', 'LE', 0, 'LE', 'RA', 0, 'TI', 'YO'] }
];

let zvezdi = [
    { all: 56, text: 'Звёзды смотрят с высоты,', formula: ['LE', 'LE', 'RA', 'LE', 'YO', 'YO', 'ZO'] },
    { text: 'ночью спишь не только ты -', formula: ['LE', 'LE', 'RA', 'TI', 'YO', 'RA', 'ZO'] },
    { text: 'Ночь настала для телят,', formula: ['RA', 'RA', 'LE', 'LE', 'ZO', 'ZO', 'YO'] },
    { text: 'и зайчата ночью спят.', formula: ['RA', 'RA', 'LE', 'RA', 'TI', 'ZO', 'YO'] },
    { text: 'В стойле, в норке, здесь и там', formula: ['LE', 'LE', 'RA', 'LE', 'YO', 'YO', 'ZO'] },
    { text: 'спят малышки возле мам.', formula: ['LE', 'LE', 'RA', 'TI', 'YO', 'RA', 'ZO'] },
    { text: 'Тишина стоит кругом,', formula: ['RA', 'RA', 'LE', 'LE', 'ZO', 'ZO', 'YO'] },
    { text: 'сон приходит в каждый дом.', formula: ['RA', 'RA', 'LE', 'RA', 'TI', 'ZO', 'YO'] }
];

let tuzik = [
    { all: 53, text: 'Тузик отважен и суров', formula: ['WI', 'WI', 0, 'WI', 'WI', 'LE', 'YO', 'LE', 'WI'] },
    { text: 'страху нагонит на воров', formula: ['WI', 'WI', 0, 'WI', 'WI', 'LE', 'YO', 'LE', 'WI'] },
    { text: 'и один, без меня,', formula: ['LE', 'LE', 'RA', 0, 'LE', 'LE', 'RA'] },
    { text: 'может оставаться.', formula: ['LE', 'YO', 'TI', 'RA', 'ZO', 0, 'ZO'] },
    { text: 'Если посмеет кто-нибудь', formula: ['WI', 'WI', 0, 'WI', 'WI', 'LE', 'YO', 'LE', 'WI'] },
    { text: 'что-то чужое утянуть.', formula: ['WI', 'WI', 0, 'WI', 'WI', 'LE', 'YO', 'LE', 'WI'] },
    { text: 'Тузик наш скажет "Гав!" - просто жуть!', formula: ['LE', 'LE', 'RA', 0, 'LE', 'LE', 'RA', 0, 'LE', 0, 'WI', 0, 'YO'] }
];

let karavai = [
    { all: 68, text: 'Как на Дашины именины', formula: ['ZO', 'ZO', 'YO', 'YO', 'YO', 'WI', 'WI', 'LE', 'LE'] },
    { text: 'испекли мы каравай -', formula: ['ZO', 'ZO', 'YO', 'YO', 'WI', 'WI', 'LE'] },
    { text: 'вот такой вышины,', formula: ['LE', 'LE', 'RA', 0, 'LE', 'LE', 'TI'] },
    { text: 'вот такой нижины,', formula: ['LE', 'LE', 'RA', 0, 'LE', 'LE', 'TI'] },
    { text: 'вот такой ширины,', formula: ['LE', 'LE', 'RA', 0, 'LE', 'LE', 'TI'] },
    { text: 'вот такой ужины.', formula: ['LE', 'LE', 'LE', 'YO', 'TI', 'RA', 'ZO'] },
    { text: '- Каравай, каравай,', formula: ['ZO', 'ZO', 'YO', 0, 'WI', 'WI', 'LE'] },
    { text: 'кого любишь - выбирай!', formula: ['ZO', 'ZO', 'YO', 'YO', 'WI', 'WI', 'LE'] },
    { text: '- Я люблю, конечно, всех.', formula: ['LE', 'LE', 'RA', 'RA', 'LE', 'LE', 'TI'] },
    { text: 'а вот Лизу больше всех.', formula: ['LE', 'LE', 'LE', 'YO', 'TI', 'RA', 'ZO'] }
];

let kolokolchik = [
    { all: 23, text: 'Дили динь, дили дон,', formula: ['YO', 'ZO', 'YO', 0, 'ZO', 'RA', 'ZO'] },
    { text: 'В далеке слышен звон.', formula: ['YO', 'ZO', 'YO', 0, 'ZO', 'RA', 'ZO'] },
    { text: 'Серебристый такой -', formula: ['LE', 'ZO', 'LE', 0, 'ZO', 'RA', 'ZO'] },
    { text: 'Где-то за рекой.', formula: ['YO', 'ZO', 'YO', 'ZO', 'YO'] }
];

let zvony = [
    { all: 25, text: 'Ой, звоны звонят,', formula: ['WI', 0, 'YO', 'YO', 'LE', 0, 'YO'] },
    { text: 'Злого волка гонят.', formula: ['WI', 'WI', 'YO', 'YO', 'LE', 0, 'YO'] },
    { text: 'По болотам, по оврагам.', formula: ['WI', 'WI', 'YO', 'YO', 'LE', 'LE', 'YO', 'YO'] },
    { text: 'Где никто не ходит.', formula: ['WI', 'WI', 'YO', 'YO', 'LE', 0, 'YO'] }
];

let kotok = [
    { all: 14, text: 'Как повадился коток', formula: ['YO', 'TI', 'RA', 'ZO', 'LE', 'WI', 'YO'] },
    { text: 'На сметану, да творог', formula: ['YO', 'TI', 'RA', 'ZO', 'LE', 'WI', 'YO'] }
];

let kolybelnaya_Soni = [
    { all: 56, text: 'Баю-баюшки, баю,', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'WI', 'LE'] },
    { text: 'Баю Сонечку мою.', formula: ['LE', 'LE', 'WI', 'LE', 'RA', 'TI', 'YO'] },
    { text: 'Приди котик ночевать', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'WI', 'LE'] },
    { text: 'Мою Сонечку качать.', formula: ['LE', 'LE', 'WI', 'LE', 'RA', 'TI', 'YO'] },
    { text: 'Как у котика, кота', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'WI', 'LE'] },
    { text: 'Колыбелька хороша.', formula: ['LE', 'LE', 'WI', 'LE', 'RA', 'TI', 'YO'] },
    { text: 'У моей у Сонечки,', formula: ['ZO', 'ZO', 'ZO', 'ZO', 'ZO', 'WI', 'LE'] },
    { text: 'Что получше, да его.', formula: ['LE', 'LE', 'WI', 'LE', 'RA', 'TI', 'YO'] }
];

let gusi = [
    { all: 160, text: 'Жили у бабуси', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Два веселых гуся.', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Два веселых гуся.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Два веселых гуся.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },

    { text: 'Мыли гуси лапки', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'В луже у канавки.', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Спрятались в канавке.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Спрятались в канавке.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },

    { text: 'Вот кричит бабуся:', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Ой, пропали гуси!', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Гуси мои, гуси!', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Гуси мои, гуси!', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },

    { text: 'Выходили гуси,', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Кланялись бабусе.', formula: ['NA', 'WI', 'LE', 'YO', 'ZO_up', 0, 'ZO_up'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Кланялись бабусе.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] },
    { text: 'Один серый, другой белый-', formula: ['NA', 'RA_up', 'RA_up', 'NA', 'WI', 'ZO_up', 'ZO_up', 'WI'] },
    { text: 'Кланялись бабусе.', formula: ['LE', 'WI', 'NA', 'LE', 'YO', 0, 'YO'] }
];

let elochka = [
    { all: 42, text: 'В лесу родилась ёлочка,', formula: ['ZO', 'WI', 'WI', 'LE', 'WI', 'YO', 'ZO', 'ZO'] },
    { text: 'В лесу она росла.', formula: ['ZO', 'WI', 'WI', 'NA', 'LE', 'ZO_up'] },
    { text: 'Зимой и летом стройная,', formula: ['ZO_up', 'RA', 'RA', 'NA', 'NA', 'WI', 'LE', 'YO'] },
    { text: 'Зеленая была.', formula: ['ZO', 'WI', 'WI', 'LE', 'WI', 'YO'] },
    { text: 'Зимой и летом стройная', formula: ['ZO_up', 'RA', 'RA', 'NA', 'NA', 'WI', 'LE', 'YO'] },
    { text: 'Зеленая была.', formula: ['ZO', 'WI', 'WI', 'LE', 'WI', 'YO'] }
];

let kotenok = [
    { all: 30, text: 'Шёл котенок по дорожке,', formula: ['WI', 'WI', 'WI', 'WI', 'WI', 'LE', 'YO', 'WI'] },
    { text: 'И мяукнул ноту до.', formula: ['LE', 'LE', 'LE', 'LE', 'ZO', 'TI', 'YO'] },
    { text: 'Встретил он котёнка моську,', formula: ['WI', 'WI', 'WI', 'WI', 'WI', 'LE', 'YO', 'WI'] },
    { text: 'Дружба это хорошо.', formula: ['LE', 'LE', 'LE', 'LE', 'ZO', 'TI', 'YO'] }
];

let antoshka = [
    { all: 63, text: 'Антошка, Антошка,', formula: ['WI', 'LE', 'LE', 0, 'WI', 'YO', 'YO'] },
    { text: 'Пойдём копать картошку.', formula: ['WI', 'LE', 'LE', 'TI', 'ZO', 'WI', 0, 'YO'] },
    { text: 'Антошка, Антошка,', formula: ['WI', 'LE', 'LE', 0, 'WI', 'YO', 'YO'] },
    { text: 'Пойдём копать картошку.', formula: ['WI', 'LE', 0, 'WI', 'LE', 'YO', 'TI', 0, 'RA', 0, 'ZO'] },
    { text: 'Тили-тили,', formula: ['WI', 'NA', 'WI', 'LE'] },
    { text: 'Трали-вали,', formula: ['LE', 'WI', 'LE', 'YO'] },
    { text: 'Это мы не проъодили,', formula: ['WI', 'NA', 'WI', 'LE', 'YO', 'TI', 'LE', 'YO'] },
    { text: 'Это нам не задавали.', formula: ['WI', 'NA', 'WI', 'LE', 'YO', 'TI', 'LE', 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'TI', 0, 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'TI', 0, 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'ZO_up', 0, 'YO'] }
];
let esli_dobriy_ti = [
    { all: 63, text: 'вступление', formula: ['ZO', 'RU', 'TU', 0, 'ZO', 'RU', 'TU', 0, 'LU', 'YO', 'RU'] },
    { text: 'вступление', formula: ['NA_down', 'ZO', 'RU', 0, 'NA_down', 'ZO', 'RU', 0, 'YO', 'TU', 'ZO'] },
    { text: 'вступление', formula: ['WU_down', 'NA_down', 'ZO', 0, 'WU_down', 'NA_down', 'ZO', 0, 'TU', 'RU', 'NA'] },
    { text: 'вступление', formula: ['RU', 'ZO', 'TI', 'YO'] },
    { text: 'Тили-тили,', formula: ['WI', 'NA', 'WI', 'LE'] },
    { text: 'Трали-вали,', formula: ['LE', 'WI', 'LE', 'YO'] },
    { text: 'Это мы не проъодили,', formula: ['WI', 'NA', 'WI', 'LE', 'YO', 'TI', 'LE', 'YO'] },
    { text: 'Это нам не задавали.', formula: ['WI', 'NA', 'WI', 'LE', 'YO', 'TI', 'LE', 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'TI', 0, 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'TI', 0, 'YO'] },
    { text: 'Парам пам пам,', formula: ['WI', 'LE', 0, 'ZO_up', 0, 'YO'] }
];

let full_menu = [
    { name: 'Паровоз', arr: parowoz },
    { name: 'Если очень захотеть', arr: esli },
    { name: 'Сорока', arr: soroka },
    { name: 'Зайчик', arr: zaichik },
    { name: 'Воробей', arr: vorobey },
    { name: 'Медведь', arr: medved },
    { name: 'Кузнечик', arr: kuznechik },
    { name: 'Коза', arr: koza },
    { name: 'Солнышко', arr: solnishko },
    { name: 'Две тетери', arr: dveteteri },
    { name: 'Вышла курочка гулять', arr: kurochka },
    { name: 'Колыбельная', arr: kolibelnaya },
    { name: 'Кораблик', arr: korablik },
    { name: 'Таусень', arr: tausen },
    { name: 'Кукла', arr: kukla },
    { name: 'Ручеёк', arr: rucheek },
    { name: 'Звёзды', arr: zvezdi },
    { name: 'Тузик', arr: tuzik },
    { name: 'Каравай', arr: karavai },
    { name: 'Колокольчик', arr: kolokolchik },
    { name: 'Звоны', arr: zvony },
    { name: 'Коток', arr: kotok },
    { name: 'Колыбельная Сонечке', arr: kolybelnaya_Soni },
    { name: 'Гуси', arr: gusi },
    { name: 'Ёлочка', arr: elochka },
    { name: 'Котёнок', arr: kotenok },
    { name: 'Антошка', arr: antoshka },
    { name: 'Если добрый ты', arr: esli_dobriy_ti },

];
let winner_image = document.querySelector('.winner_image');

let page_number = 0;
let container_notes = document.querySelector('.container_notes');
let monitor_for_text = document.querySelector('.monitor_for_text');
// let nameStage = ['RA_up', 'ZO_up', 'NA', 'WI', 'LE', 'YO', 'TI', 'RA', 'ZO'];
// let nameStage = ['RA_up', 'RU_up', 'ZO_up', 'NI', 'NA', 'WI', 'WU', 'LE', 'LU', 'YO', 'TI', 'TU', 'RA', 'RU', 'ZO'];

let all_page_pigs;
const audioAll = document.querySelectorAll('audio');
let stop = 0;
let reverse_item = 0;

let start_ZO = 5;
//прячем лишние горизонтальные линии
let allLine = document.querySelectorAll('.line');
for (let i = 0; i < allLine.length; i++) {
    // allLine[i].dataset.name = nameStage[i + start_ZO];
    if (i % 2 == 0 || i < 3 || i > 11) {
        allLine[i].classList.add('transparent');
    } else {
        allLine[i].classList.add('white');
    }
}

// Создание массива с координатами горизонтального расположения
// let start_Line_Left = 60;
let grid_X = [];
let interval_x = 50;
let one_Item_Grid_X = 60; // первая нота отступ слева
for (let i = 0; i < 20; i++) {
    grid_X.push(one_Item_Grid_X);
    one_Item_Grid_X += interval_x;
};

//генерируем стартовое меню
let NewGridStartMenuElements;
let buttonsBlock = document.querySelector('.buttons_block');
//контейнер для стартовой игры
let startVariable;
//функция создания элементов
let NewGridStartMenuGO = function (allNames) {
    for (let i = 0; i < allNames.length; i++) {
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
start_buttons.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener('click', function () {
        for (i = 0; i < start_buttons.length; i++) {
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
let start = function (pageArr) {
    stop = pageArr.formula.length;

    for (let i = 0; i < pageArr.formula.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('note');
        if (pageArr.formula[i] == 0) {
            newDiv.style.width = '0px';
            stop = stop - 1;
        } else {
            newDiv.style.backgroundImage = "url(PIGS/" + pageArr.formula[i] + ".svg)";
        }
        newDiv.style.left = grid_X[i] + 'px';
        for (let j = allLine.length - 1; j >= 0; j--) {
            if (pageArr.formula[i] == allLine[j].dataset.name || pageArr.formula[i] == allLine[j].dataset.name2) {
                newDiv.dataset.name = pageArr.formula[i];
                // console.log(allLine[j].dataset.name);
                // console.log(pageArr.formula[i]);
                allLine[j].append(newDiv);
            }
        }
    }
    monitor_for_text.innerHTML = pageArr.text;
    //собрать массив с полученными нотами
    let find_all_page_pigs = function () {
        all_page_pigs = document.querySelectorAll('.note');
        let audio = new Audio();
        for (let i = 0; i < all_page_pigs.length; i++) {
            all_page_pigs[i].addEventListener('click', function () {
                for (let jj = 0; jj < audioAll.length; jj++) {

                    if (audioAll[jj].dataset.name == all_page_pigs[i].dataset.name) {
                        audio.src = audioAll[jj].src;
                        reverse_item = reverse_item - 1;
                        all_page_pigs[i].remove();
                        stop = stop - 1;
                        console.log(reverse_item);


                    }
                }
                audio.load();
                audio.play();

                if (stop == 0 && reverse_item > 0) {
                    page_number++;
                    start_game(startVariable);
                }
                if (stop == 0 && reverse_item == 0) {
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
start_game = function (game) {
    length_song = game.length - 1;
    start(game[page_number]);

}

let button_left = document.querySelector('.button_left');
let button_right = document.querySelector('.button_right');
let button_menu = document.querySelector('.button_menu');
let length_song = 0;

//Сброс счетчиков
let reset = function () {
    stop = 0;
    reverse_item = 0;
    page_number = 0;
    length_song = 0;
}


//кнопка МЕНЮ
button_menu.addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        welcome.style.display = 'block';
    }
});

//кнопка Left
button_left.addEventListener('click', function () {
    // length_song = esli.length;
    // console.log('left =' + page_number);
    if (page_number > 0) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        page_number--;
        start_game(startVariable);
    }
});

//кнопки Right
button_right.addEventListener('click', function () {
    // length_song = esli.length;
    // console.log('right =' + page_number);
    if (page_number < length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        page_number++;
        start_game(startVariable);
    }
});



//кнопка на картинке победы
winner_image.addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        winner_image.style.display = 'none';
        welcome.style.display = 'block';
    }
});

