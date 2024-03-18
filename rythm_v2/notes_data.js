// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420

const wholeNote = {
    'symbol': 1,
    'nameRus': 'целая',
    'nameEng': 'whole',
    'fontSymbol': '',
    'duration_16': 16,
    'measure': (420*16),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('wholeNote');
        div.style.width = '100%';
        div.style.height = '100%';
        return div;
    }
}
const halfNote = {
    'symbol': 2,
    'nameRus': 'половинная',
    'nameEng': 'half',
    'fontSymbol': '',
    'duration_16': 8,
    'measure': (420*8),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('halfNote');
        div.style.width = '100%';
        div.style.height = '100%';
        return div;
    }
}
const quarterNote = {
    'symbol': 4,
    'nameRus': 'четвертная',
    'nameEng': 'quarter',
    'fontSymbol': '',
    'duration_16': 4,
    'measure': (420*4),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('quarterNote');
        div.style.width = '100%';
        div.style.height = '100%';
        return div;
    }
}
const eighthNote = {
    'symbol': 8,
    'nameRus': 'восьмая',
    'nameEng': 'eighth',
    'fontSymbol': '',
    'duration_16': 2,
    'measure': (420*2),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('eighthNote');
        div.style.width = '100%';
        div.style.height = '100%';
        return div;
    }
}
const sixteenthNote = {
    'symbol': 16,
    'nameRus': 'шестнадцатая',
    'nameEng': 'sixteenth',
    'fontSymbol': '',
    'duration_16': 1,
    'measure': (420*1),
    createDivTag(){
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('sixteenthNote');
        div.style.width = '100%';
        div.style.height = '100%';
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
        div.classList.add('eighthNote');
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