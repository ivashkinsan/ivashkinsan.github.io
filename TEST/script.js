const app = document.querySelector('.app');

const userSaveData = {
    name: '',
}

const inpUser = (event) => {
    console.log('input');
    console.log(event.target.value);
    userSaveData.name = event.target.value;
    localStorage.setItem('name', JSON.stringify(userSaveData));
    console.log(localStorage);
}

const job = {
    root_C_ionian: {
        content: 'C D E F G A B C',
        stage: '1 2 3 4 5 6 7 1',
        tetrachords: 'maj min frig TTT maj min frig maj',
        chords: 'maj min min maj maj min dim maj',
        seventhСhords: 'X^ Xm7 Xm7 X^ X7 Xm7 Xm7b5 X^',
        keyboards: 'w b w b w w b w b w b w w b w b w w b w b w b w',
        noteLabel: 'C C#/Db D D#/Eb E F F#/Gb G G#/Ab A A#/Bb B C C#/Db D D#/Eb E F F#/Gb G G#/Ab A A#/Bb B C',
        name: 'ионийский'
    },
    root_E_locrian: {
        content: 'E F G A Bb C D E',
        stage: '1 b2 b3 4 #4/b5 b6 b7 1',
        tetrachords: 'frig maj min frig TTT maj min frig',
        chords: 'dim maj min min maj maj min dim',
        seventhСhords: 'Xm7b5 X^ Xm7 Xm7 X^ X7 Xm7 Xm7b5',
        keyboards: 'w w b w b w b w w b w b w w b w b w b w w b w b w',
        noteLabel: 'E F F#/Gb G G#/Ab A A#/Bb B C C#/Db D D#/Eb E F F#/Gb G G#/Ab A A#/Bb B C C#/Db D D#/Eb E',
        name: 'локрийский'
    },
}

const allCountElem = document.querySelector('.allCount');
const allBagCountElem = document.querySelector('.allBagCount');
let allCount = 0;
let allBagCount = 0;
const addCount = function (insert) {
    if (insert == 'true') {
        allCount += 1;
        allCountElem.textContent = allCount;
    } else {
        allCount += 1;
        allCountElem.textContent = allCount;
        allBagCount += 1;
        allBagCountElem.textContent = allBagCount;
    }
}

const createKeyboard = function (input) {
    let keybContainer = document.createElement('div');
    keybContainer.classList.add('keybContainer');
    let allKeyb = [];
    let value = input.keyboards;
    let noteLabel = input.noteLabel;
    let noteLabelArr = noteLabel.split(' ');

    let arr = value.split(' ');
    for (let item of arr) {
        let div = document.createElement('div');
        allKeyb.push(div);
        let label = document.createElement('p');
        label.classList.add('key_label');
        label.textContent = noteLabelArr.shift();
        if (label.textContent.length > 1) {
            label.textContent = label.textContent.replace('/', '\n');
        }
        div.classList.add('key');
        if (item == 'w') {
            div.classList.add('white');
        } else {
            div.classList.add('black');
        }

        for (let item of input.content.split(' ')) {
            let find = label.textContent.split('\n');
            if (find.includes(item)) {
                div.classList.add('led_on');
            }
        }

        div.append(label);
        keybContainer.appendChild(div);
    }

    return keybContainer;
}

const saveState = function (input) {
    localStorage.setItem(input.id, input.value);
}

const createSelectStage = function (input, value) {

    let optionValue = '-- 1 b2 2 b3 3 4 #4/b5 5 b6 6 b7 7';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');

    select.classList.add('select_stage');
    for (let i = 0; i < optionArr.length; i++) {
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }

    if (window.localStorage[`createSelectStage_${input}`]) {
        console.log(`createSelectStage_${input}`);
        select.classList.add('winner');
        select.value = window.localStorage[`createSelectStage_${input}`];
        select.disabled = true;
    }

    select.addEventListener('change', (e) => {
        // console.log(e.target.parentNode.dataset.value);
        if (e.target.parentNode.dataset.valueStage == e.target.value) {
            e.target.classList.add('winner');
            e.target.disabled = true;
            // e.target.parentNode.classList.add('winner');
            addCount('true');
            let storage = {};
            storage.id = `createSelectStage_${input}`;
            storage.value = value;
            saveState(storage);
        } else {
            addCount();
        }
    })
    return select;
}

const createSelectTetrachords = function (input, value) {
    let optionValue = '-- maj min frig harm TTT';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('select_tetrachords');
    for (let i = 0; i < optionArr.length; i++) {
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }

    if (window.localStorage[`createSelectTetrachords_${input}`]) {
        console.log(`createSelectTetrachords_${input}`);
        select.classList.add('winner');
        select.value = window.localStorage[`createSelectTetrachords_${input}`];
        select.disabled = true;
    }

    select.addEventListener('change', (e) => {
        // console.log(e.target.parentNode.dataset.value);
        if (e.target.parentNode.dataset.valueTetrachord == e.target.value) {
            e.target.classList.add('winner');
            e.target.disabled = true
            // e.target.parentNode.classList.add('winner');
            addCount('true');
            let storage = {};
            storage.id = `createSelectTetrachords_${input}`;
            storage.value = value;
            saveState(storage);
        } else {
            addCount();
        }
    })
    return select;
}

const createSelectChords = function (input, value) {
    let optionValue = '-- maj min dim aug';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('select_chords');
    for (let i = 0; i < optionArr.length; i++) {
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }

    if (window.localStorage[`createSelectChords_${input}`]) {
        console.log(`createSelectChords_${input}`);
        select.classList.add('winner');
        select.value = window.localStorage[`createSelectChords_${input}`];
        select.disabled = true;
    }

    select.addEventListener('change', (e) => {
        // console.log(e.target.parentNode.dataset.value);
        if (e.target.parentNode.dataset.valueChord == e.target.value) {
            e.target.classList.add('winner');
            e.target.disabled = true
            addCount('true');
            let storage = {};
            storage.id = `createSelectChords_${input}`;
            storage.value = value;
            saveState(storage);
        } else {
            addCount();
        }
    })
    return select;
}

const createSeventhChords = function (input, value) {
    let optionValue = '-- X^ X^#5 Xm^ X7 Xm7 Xm7b5 Xo';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('seventh_chords');
    for (let i = 0; i < optionArr.length; i++) {
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }

    if (window.localStorage[`createSeventhChords_${input}`]) {
        console.log(`createSeventhChords_${input}`);
        select.classList.add('winner');
        select.value = window.localStorage[`createSeventhChords_${input}`];
        select.disabled = true;
    }

    select.addEventListener('change', (e) => {
        // console.log(e.target.parentNode.dataset.value);
        if (e.target.parentNode.dataset.valueSeventhСhords == e.target.value) {
            e.target.classList.add('winner');
            e.target.disabled = true
            addCount('true');
            let storage = {};
            storage.id = `createSeventhChords_${input}`;
            storage.value = value;
            saveState(storage);
        } else {
            addCount();
        }
    })
    return select;
}

const createJob = function (inputJob) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    let stage = inputJob.stage.split(' ');
    let tetrachords = inputJob.tetrachords.split(' ');
    let chords = inputJob.chords.split(' ');
    let seventhСhords = inputJob.seventhСhords.split(' ');
    let arrForOf = inputJob.content.split(' ');




    for (let i = 0; i < arrForOf.length + 1; i++) {

        if (i == 0) {
            let rowElem = document.createElement('div');
            rowElem.classList.add('row_elem');
            rowElem.classList.add('rowElemLabel');

            let stageLabel = document.createElement('div');
            stageLabel.textContent = 'ступени';
            let tetrachordLabel = document.createElement('div');
            tetrachordLabel.textContent = 'тетрахорды';
            let chordLabel = document.createElement('div');
            chordLabel.textContent = 'трезвучия';
            let sevenChordsLabel = document.createElement('div');
            sevenChordsLabel.textContent = 'септ-аккорды';
            rowElem.append(stageLabel);
            rowElem.append(tetrachordLabel);
            rowElem.append(chordLabel);
            rowElem.append(sevenChordsLabel);
            newRow.appendChild(rowElem);
        } else {
            let rowElem = document.createElement('div');
            rowElem.classList.add('row_elem');
            rowElem.dataset.valueStage = stage.shift();
            rowElem.dataset.valueTetrachord = tetrachords.shift();
            rowElem.dataset.valueChord = chords.shift();
            rowElem.dataset.valueSeventhСhords = seventhСhords.shift();

            let rowElemChild = document.createElement('p');
            rowElemChild.textContent = arrForOf[i - 1];

            rowElem.appendChild(rowElemChild);
            rowElem.append(createSelectStage(i - 1, rowElem.dataset.valueStage));
            rowElem.append(createSelectTetrachords(i - 1, rowElem.dataset.valueTetrachord));
            rowElem.append(createSelectChords(i - 1, rowElem.dataset.valueChord));
            rowElem.append(createSeventhChords(i - 1, rowElem.dataset.valueSeventhСhords));
            newRow.appendChild(rowElem);
        }

    }

    app.append(createKeyboard(inputJob));
    app.appendChild(newRow);
}


createJob(job.root_C_ionian);
localStorage.clear();