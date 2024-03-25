// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420



const wholeNote = {
    'class': 'wholeNote',
    'symbol': 1,
    'nameRus': 'целая',
    'nameEng': 'wholeNote',
    'fontSymbol': 'w',
    'duration_16': 16,
    'measure': (420*16),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');
        
        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_1';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 1 + 'px';
        div.style.height = baseSize / 1 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}
const halfNote = {
    'class':'halfNote',
    'symbol': 2,
    'nameRus': 'половинная',
    'nameEng': 'halfNote',
    'fontSymbol': 'h',
    'duration_16': 8,
    'measure': (420*8),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');

        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}
const quarterNote = {
    'class': 'quarterNote',
    'symbol': 4,
    'nameRus': 'четвертная',
    'nameEng': 'quarterNote',
    'fontSymbol': 'q',
    'duration_16': 4,
    'measure': (420*4),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');
        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_4';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 4 + 'px';
        div.style.height = baseSize / 4 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}
const eighthNoteWithAPoint = {
    'class': 'eighthNoteWithAPoint',
    'symbol': 6,
    'nameRus': 'восьмая с точкой',
    'nameEng': 'eighthNoteWithAPoint',
    'fontSymbol': 'i',
    'duration_16': 3,
    'measure': (420*3),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');
        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_8';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 8 + 'px';
        div.style.height = baseSize / 8 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}
const eighthNote = {
    'class': 'eighthNote',
    'symbol': 8,
    'nameRus': 'восьмая',
    'nameEng': 'eighthNote',
    'fontSymbol': 'e',
    'duration_16': 2,
    'measure': (420*2),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');
        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_8';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 8 + 'px';
        div.style.height = baseSize / 8 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}

const sixteenthNote = {
    'class': 'sixteenthNote',
    'symbol': 16,
    'nameRus': 'шестнадцатая',
    'nameEng': 'sixteenthNote',
    'fontSymbol': 's',
    'duration_16': 1,
    'measure': (420*1),
    createDivTag(outIndx,baseSize){
        let div = document.createElement('div');
        div.classList.add(this.class);
        div.textContent = this.fontSymbol;
        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_16';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 16 + 'px';
        div.style.height = baseSize / 16 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        return div;
    }
}


const tripleEighthNote = {
    'symbol': 38,
    'nameRus': 'триольная восьмая',
    'nameEng': 'triplet eighth',
    'fontSymbol': '',
    'duration_16': 2,
    'measure': (420*2/3),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('tripleEighthNote');
        div.style.width = '100%';
        div.style.height = '100%';
        div.addEventListener('click', function(elem){
            console.log('element');
            elem.stopPropagation();
            elem.target.remove();
        })
        return div;
    }
}
// console.log(tripleEighthNote.measure);

const allNotes = {
    1: wholeNote,
    2: halfNote,
    4: quarterNote,
    8: eighthNote,
    16: sixteenthNote,
    38: tripleEighthNote
}
// console.log(allNotes[1]);

let createHandleLeftElem = function(){
    let leftHandle = document.createElement('div');
    leftHandle.classList.add('handle','left-handle');
    leftHandle.addEventListener('mousedown', (elem)=>{
        startResizing(elem, 'left');
    });
    return leftHandle;
}
let createHandleRightElem = function(){
    let righttHandle = document.createElement('div');
    righttHandle.classList.add('handle','right-handle');
    righttHandle.addEventListener('mousedown', (elem)=>{
        startResizing(elem, 'right');
    });
    return righttHandle;
}

    
    // activeBlock.append(leftHandle);
    // activeBlock.append(righttHandle);


    const sizeIdentif = {
        26.25: sixteenthNote,
        52.5: eighthNote,
        60: '',
        70: '',
        84: '',
        105: quarterNote,
        140: '',
        210: halfNote,
        420: wholeNote
    }

//     целая w
// половинка с точкой d
// половинка р
// четверть с точкой j
// четверть q
// восьмая c точкой i
// восьмая e