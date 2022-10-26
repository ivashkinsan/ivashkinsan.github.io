const startButtons = [{
        'name': 'G',
        'sound': 'G1',
        'name_rus': 'соль',
        'checked': false,
        'number_line': 21
    },
    {
        'name': 'D',
        'sound': 'D2',
        'name_rus': 'ре',
        'checked': false,
        'number_line': 38
    },
    {
        'name': 'A',
        'sound': 'A2',
        'name_rus': 'ля',
        'checked': false,
        'number_line': 55
    },
    {
        'name': 'E',
        'sound': 'E1',
        'name_rus': 'ми',
        'checked': false,
        'number_line': 72
    },
    {
        'name': 'B',
        'sound': 'B1',
        'name_rus': 'си',
        'checked': false,
        'number_line': 89
    },
    {
        'name': 'F',
        'sound': 'F2',
        'name_rus': 'фа',
        'checked': false,
        'number_line': 106
    },


];

let startContainerCard = document.querySelector('.startContainerCard')
let lineNoHideArr = [];
let koordinat = [];
let iii = 0;

function generateButtons(divIn) {

    for (let item of divIn) {

        //создание карточки
        let newDiv = document.createElement('div');
        newDiv.classList.add('startCard');
        startContainerCard.appendChild(newDiv);

        //добавление скрипичного и басового ключа
        let newTrebleClief = document.createElement('div');
        let newBassClief = document.createElement('div');

        newTrebleClief.classList.add('new_treble_clief')
        newBassClief.classList.add('new_bass_clief')

        // добавление ноты
        let noteQueenInCards = document.createElement('div');
        noteQueenInCards.classList.add('note_queen_in_cards');
        newDiv.appendChild(noteQueenInCards);

        //добавление линеек
        for (let i = 0; i < 21; i++) {
            let newLine = document.createElement('div');
            newLine.classList.add('line');
            if (i == 10) {
                newLine.classList.add('short_line')

            };
            if (i % 2 != 0) {
                newLine.classList.add('hide_line')
            };
            newDiv.appendChild(newLine);
            lineNoHideArr.push(newLine);


        }

        koordinat.push(lineNoHideArr[item.number_line - 1].offsetTop);
        noteQueenInCards.style.top = koordinat[koordinat.length - 1] - 3 + 'px';

        newDiv.appendChild(newTrebleClief);
        newDiv.appendChild(newBassClief);
    }
}
generateButtons(startButtons);


const phrasesOneEasyStage = [{
        'numbExercise': '1',
        'whiteTrafficPatternUp': [0, 1],
        'whiteTrafficPatternDown': [0, -1],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '2',
        'whiteTrafficPatternUp': [0, 1, 0],
        'whiteTrafficPatternDown': [0, -1, 0],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '3',
        'whiteTrafficPatternUp': [0, 1, 2],
        'whiteTrafficPatternDown': [0, -1, -2],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '4',
        'whiteTrafficPatternUp': [0, 1, 2, 3],
        'whiteTrafficPatternDown': [0, -1, -2, -3],
        'sound': [],
        'name_rus': ''
    }
];

const phrasesTwoMediumStage = [{
        'numbExercise': '1',
        'whiteTrafficPatternUp': [0, 1, 2, 0],
        'whiteTrafficPatternDown': [0, -1, -2, 0],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '2',
        'whiteTrafficPatternUp': [0, 1, 2, 1],
        'whiteTrafficPatternDown': [0, -1, -2, -1],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '3',
        'whiteTrafficPatternUp': [0, 2, 1, 0],
        'whiteTrafficPatternDown': [0, -2, -1, 0],
        'sound': [],
        'name_rus': ''
    },
    {
        'numbExercise': '4',
        'whiteTrafficPatternUp': [0, 1, -1, 0],
        'whiteTrafficPatternDown': [0, -1, 1, 0],
        'sound': [],
        'name_rus': ''
    }
];



const chromaticsArr = [
    'C1', 'Db1', 'D1', 'Eb1', 'E1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'B1',
    'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2',
    'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
    'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'
]

const whiteArr = [
    'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1',
    'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
    'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'
]