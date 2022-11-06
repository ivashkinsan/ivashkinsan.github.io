const startButtons = [{
        'name': 'G',
        'sound': 'G1',
        'name_rus': 'соль',
        'numberTrafficPatternUp': [0, 1, 2],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 21
    },
    {
        'name': 'D',
        'sound': 'D2',
        'name_rus': 'ре',
        'numberTrafficPatternUp': [0],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 38
    },
    {
        'name': 'A',
        'sound': 'A2',
        'name_rus': 'ля',
        'numberTrafficPatternUp': [0],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 55
    },
    {
        'name': 'E',
        'sound': 'E3',
        'name_rus': 'ми',
        'numberTrafficPatternUp': [0],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 72
    },
    {
        'name': 'B',
        'sound': 'B3',
        'name_rus': 'си',
        'numberTrafficPatternUp': [0],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 89
    },
    {
        'name': 'F',
        'sound': 'F4',
        'name_rus': 'фа',
        'numberTrafficPatternUp': [0],
        'numberTrafficPatternDown': [0],
        'notesTrafficPatternUp': [],
        'notesTrafficPatternDown': [],
        'checked': false,
        'numberLine': 106
    }
];

const phrasesOneEasyStage = [{
        'numberTrafficPatternUp': [0, 1],
        'numberTrafficPatternDown': [0, -1],
    },
    {
        'numberTrafficPatternUp': [0, 1, 0],
        'numberTrafficPatternDown': [0, -1, 0],
    },
    {
        'numberTrafficPatternUp': [0, 1, 2],
        'numberTrafficPatternDown': [0, -1, -2],
    },
    {
        'numberTrafficPatternUp': [0, 1, 2, 3],
        'numberTrafficPatternDown': [0, -1, -2, -3]
    }
];

const phrasesTwoMediumStage = [{
        'numberTrafficPatternUp': [0, 1, 2, 0],
        'numberTrafficPatternDown': [0, -1, -2, 0],
    },
    {
        'numberTrafficPatternUp': [0, 1, 2, 1],
        'numberTrafficPatternDown': [0, -1, -2, -1],
    },
    {
        'numberTrafficPatternUp': [0, 2, 1, 0],
        'numberTrafficPatternDown': [0, -2, -1, 0],
    },
    {
        'numberTrafficPatternUp': [0, 1, -1, 0],
        'numberTrafficPatternDown': [0, -1, 1, 0],
    }
];

const chromaticsArr = [
    'C1', 'Db1', 'D1', 'Eb1', 'E1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'B1',
    'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2',
    'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
    'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'
];

const whiteArr = [
    'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1',
    'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
    'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'
];


let startContainerCard = document.querySelector('.startContainerCard')
let boxHorisont;
let arrItemNumberLine = [];

let createNote = function (newNoteElement, box_append, topCoordinats, leftCoordinats) {

    for (let i = 0; i < newNoteElement.length; i++) {

        let noteQueenInCards = document.createElement('div');
        noteQueenInCards.style.top = topCoordinats + 'px';
        noteQueenInCards.style.left = leftCoordinats + 'px';
        noteQueenInCards.classList.add('note_queen_in_cards');
        box_append.appendChild(noteQueenInCards);
        leftCoordinats += 13;
    }
}

function generateButtons(divIn) {

    for (let item of divIn) {

        //создание карточки
        let newDivCardContainer = document.createElement('div');
        newDivCardContainer.classList.add('startCard');
        startContainerCard.appendChild(newDivCardContainer);

        //добавление скрипичного и басового ключа
        let newTrebleClief = document.createElement('div');
        let newBassClief = document.createElement('div');
        newTrebleClief.classList.add('new_treble_clief')
        newBassClief.classList.add('new_bass_clief')
        newDivCardContainer.appendChild(newTrebleClief);
        newDivCardContainer.appendChild(newBassClief);

        // добавление горизонтального бокса
        boxHorisont = document.createElement('div');
        boxHorisont.classList.add('boxHorisont');
        newDivCardContainer.appendChild(boxHorisont);

        //добавление линеек
        let valueOffSetTop = 0;
        let valueOffSetLeft = 54;
        let marginTop = 3;
        for (let i = 0; i < 21; i++) {
            let newLine = document.createElement('div');

            //присвоение data атрибуттов линиям
            newLine.dataset.note = whiteArr[24 - i];
            newLine.classList.add('line');

            if (i == 10) {
                newLine.classList.add('short_line');
            };
            if (i % 2 != 0) {
                newLine.classList.add('hide_line');
            };

            newDivCardContainer.appendChild(newLine);
            valueOffSetTop = newLine.offsetTop + marginTop - 47;

            marginTop += 2;

            // console.log(valueOffSetTop);
            if (item.sound == newLine.dataset.note) {
                console.log('совпадает!');
                let valueNotesArr = phrasesOneEasyStage[0].numberTrafficPatternUp;
                console.log(valueNotesArr);
                createNote(valueNotesArr, boxHorisont, valueOffSetTop, valueOffSetLeft);
                valueOffSetLeft += 13;
            }

        }


    };
}
generateButtons(startButtons, phrasesOneEasyStage);

let findAndSlice = function (sliceElem) {
    let findStartElem = whiteArr.indexOf('G3');
    console.log(findStartElem);

    let newReturnElement = [];
    for (let i = 0; i < sliceElem.length; i++) {
        let sliceElement = whiteArr.slice(findStartElem, findStartElem + 1);
        let joinElem = sliceElement.join('')
        console.log(joinElem);
        // newReturnElement[i] = sliceElement;
        // console.log(newReturnElement);
    }
}
findAndSlice([0, 1, 2, 1]);