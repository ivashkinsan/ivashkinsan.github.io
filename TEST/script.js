const app = document.querySelector('.app');

const userSaveData = {
    name: '',
}

const inpUser=(event)=>{
    console.log('input');
    console.log(event.target.value);
    userSaveData.name = event.target.value;
    localStorage.setItem('name', JSON.stringify(userSaveData));
    console.log(localStorage);
}

const job = {
    name: 'Определить лад, тетрахорды и ступени',
    row_1:{
        content: 'E F G A Bb C D E',
        stage: '1 b2 b3 4 #4/b5 b6 b7 1',
        tetrachords: 'frig maj min frig TTT maj min frig',
        chords: 'dim maj min min maj maj min dim',
        seventhСhords: 'Xm7b5 X^ Xm7 Xm7 X^ X7 Xm7 Xm7b5',
        name: 'локрийский'
    },
}

const allCountElem = document.querySelector('.allCount');
const allBagCountElem = document.querySelector('.allBagCount');
let allCount = 0;
let allBagCount = 0;
const addCount = function(insert){
    if(insert == 'true'){
        allCount += 1;
        allCountElem.textContent = allCount;
    } else {
        allCount += 1;
        allCountElem.textContent = allCount;
        allBagCount += 1;
        allBagCountElem.textContent = allBagCount;
    }
}

const createKeyboard = function(inputContent){
    let keybContainer = document.createElement('div');
    keybContainer.classList.add('keybContainer');
    let allKeyb = [];
    let value = 'w w b w b w b w w b w b w w b w b w b w w b w b w';
    let noteLabel = 'E F F#/Gb G G#/Ab A A#/Bb B C C#/Db D D#/Eb E F F#/Gb G G#/Ab A A#/Bb B C C#/Db D D#/Eb E';
    let noteLabelArr = noteLabel.split(' ');

    let arr = value.split(' ');
    for(let item of arr){
        let div = document.createElement('div');
        allKeyb.push(div);
        let label = document.createElement('p');
        label.classList.add('key_label');
        label.textContent = noteLabelArr.shift();
        if(label.textContent.length > 1){
            label.textContent = label.textContent.replace('/', '\n');
        }
        div.classList.add('key');
        if(item == 'w'){
            div.classList.add('white');
        } else {
            div.classList.add('black');
        }

        for(let item of inputContent.split(' ')){
            let find = label.textContent.split('\n');
            if(find.includes(item)){
                div.classList.add('led_on');
            }
        }

        div.append(label);
        keybContainer.appendChild(div);
    }

    return keybContainer;
}

const createSelectStage = function(){
    let optionValue = '-- 1 b2 2 b3 3 4 #4/b5 5 b6 6 b7 7';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('select_stage');
    for(let i = 0; i < optionArr.length; i++){
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }
    select.addEventListener('change', (e)=>{
        // console.log(e.target.parentNode.dataset.value);
        if(e.target.parentNode.dataset.valueStage == e.target.value){
            e.target.classList.add('winner');
            e.target.disabled = true;
            // e.target.parentNode.classList.add('winner');
            addCount('true');
        } else {
            addCount();
        }
    })
    return select;
}

const createSelectTetrachords = function(){
    let optionValue = '-- maj min frig harm TTT';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('select_tetrachords');
    for(let i = 0; i < optionArr.length; i++){
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }
    select.addEventListener('change', (e)=>{
        // console.log(e.target.parentNode.dataset.value);
        if(e.target.parentNode.dataset.valueTetrachord == e.target.value){
            e.target.classList.add('winner');
            e.target.disabled = true
            // e.target.parentNode.classList.add('winner');
            addCount('true');
        } else {
            addCount();
        }
    })
    return select;
}

const createSelectChords = function(){
    let optionValue = '-- maj min dim aug';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('select_chords');
    for(let i = 0; i < optionArr.length; i++){
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }
    select.addEventListener('change', (e)=>{
        // console.log(e.target.parentNode.dataset.value);
        if(e.target.parentNode.dataset.valueChord == e.target.value){
            e.target.classList.add('winner');
            e.target.disabled = true
            addCount('true');
        } else {
            addCount();
        }
    })
    return select;
}

const createSeventhChords = function(){
    let optionValue = '-- X^ X^#5 Xm^ X7 Xm7 Xm7b5 Xo';
    let optionArr = optionValue.split(' ');
    let select = document.createElement('select');
    select.classList.add('seventh_chords');
    for(let i = 0; i < optionArr.length; i++){
        let option = document.createElement('option');
        option.value = optionArr[i];
        option.textContent = optionArr[i];
        select.appendChild(option);
    }
    select.addEventListener('change', (e)=>{
        // console.log(e.target.parentNode.dataset.value);
        if(e.target.parentNode.dataset.valueSeventhСhords == e.target.value){
            e.target.classList.add('winner');
            e.target.disabled = true
            addCount('true');
        } else {
            addCount();
        }
    })
    return select;
}

const createJob = function(inputJob){
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    let stage = inputJob.stage.split(' ');
    let tetrachords = inputJob.tetrachords.split(' ');
    let chords = inputJob.chords.split(' ');
    let seventhСhords = inputJob.seventhСhords.split(' ');
    for(let item of inputJob.content.split(' ')){
        let rowElem = document.createElement('div');
        rowElem.classList.add('row_elem');
        rowElem.dataset.valueStage = stage.shift();
        rowElem.dataset.valueTetrachord = tetrachords.shift();
        rowElem.dataset.valueChord = chords.shift();
        rowElem.dataset.valueSeventhСhords = seventhСhords.shift();

        let rowElemChild = document.createElement('p');
        rowElemChild.textContent = item;

        rowElem.appendChild(rowElemChild);
        rowElem.append(createSelectStage());
        rowElem.append(createSelectTetrachords());
        rowElem.append(createSelectChords());
        rowElem.append(createSeventhChords());
        newRow.appendChild(rowElem);
    }

    app.append(createKeyboard(inputJob.content));
    app.appendChild(newRow);
}


createJob(job.row_1);