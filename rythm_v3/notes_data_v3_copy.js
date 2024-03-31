// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420


const uncSbl = {
'n1': '\uF077',
'n2': '\uF068',
'n4': '\uF071',
'n8': '\uF065',
'n16': '\uF078',
'p1': '\uF0EE',
'p2': '\uF0B7',
'p4': '\uF0CE',
'p8': '\uF0E4',
'p16': '\uF0C5',
'pnt': '\uF06B',
'pnt2': '\uF02E',
'plus': '\uF0F6',
'plus2': '\uF084',
'dash': '\uF05F'
}


const root = document.querySelector(':root');
let baseSize = getComputedStyle(root).getPropertyValue('--const');
// console.log(Number(baseSize.replace('px','')));
baseSize = Number(baseSize.replace('px', ''))

class Note {
    constructor( classVal, fontSymbolVal, pauseSymbolVal, nameRusVal, nameEngVal, durationVal, measureVal, matrixVal) {
        this.baseSize = baseSize;
        this.class = classVal;
        this.fontSymbol = fontSymbolVal;
        this.pauseSymbol = pauseSymbolVal;
        this.nameRus = nameRusVal;
        this.nameEng = nameEngVal;
        this.fontSymbol = fontSymbolVal;
        this.duration_16 = durationVal;
        this.measure = measureVal;
        this.matrix = matrixVal;
    }

    createDivTag(outIndx, baseSize, is_pause) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        if(is_pause){
            p_label.textContent = this.pauseSymbol;
        } else {
            p_label.textContent = this.fontSymbol;
        }
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = this.matrix;
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / this.measure + 'px';
        div.style.height = baseSize / this.measure + 'px';
        div.append(this.createHandleLeftElem());
        div.append(this.createHandleRightElem());
        div.append(this.createHandleLeftRight()[0]);
        return div;
    }
    createHandleLeftElem = function () {
        let leftHandle = document.createElement('div');
        leftHandle.classList.add('handle', 'left-handle');
        leftHandle.addEventListener('mousedown', (elem) => {
            startResizing(elem, 'left');
        });
        return leftHandle;
    }
    createHandleRightElem = function () {
        let righttHandle = document.createElement('div');
        righttHandle.classList.add('handle', 'right-handle');
        righttHandle.addEventListener('mousedown', (elem) => {
            startResizing(elem, 'right');
        });
        return righttHandle;
    }
    
    createHandleLeftRight = function () {
        let left_double_arrow = document.createElement('div');
        left_double_arrow.classList.add('handle');
        left_double_arrow.classList.add('left_double_arrow');
        left_double_arrow.addEventListener('mousedown', (elem) => {
            startResizing(elem, 'left_right');
        });
        let right_double_arrow = document.createElement('div');
        right_double_arrow.classList.add('handle');
        right_double_arrow.classList.add('right_double_arrow');
        right_double_arrow.addEventListener('mousedown', (elem) => {
            startResizing(elem, 'left_right');
        });
        return [left_double_arrow, right_double_arrow];
    }
}

const wholeNote_1 = new Note(
    'wholeNote', 
    uncSbl.n1,
    uncSbl.p1,
    1, 
    'целая', 
    'wholeNote', 
    1, 
    (420*16)
    );

const halfNote_2w4w8w16 = new Note (
    'halfNote_2w4w8w16',
    uncSbl.n2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt,
    uncSbl.p2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt,
    2,
    'половинная и четверть и восьмая c точкой',
    'halfNote_2w4w8w16',
    2,
    (420 * 15),
    );

const halfNote_2w4w8 = new Note (
    'halfNote_2w4w8',
    uncSbl.n2 + uncSbl.pnt + uncSbl.pnt,
    uncSbl.p2 + uncSbl.pnt + uncSbl.pnt,
    2,
    'половинная и четверть и восьмая',
    'halfNote_2w4w8',
3,
    (420 * 14)
    );

const halfNote_2w4w16 = new Note (
'halfNote_2w4w16',
uncSbl.n2 + '  ' + uncSbl.n4 + '  ' + uncSbl.n16,
uncSbl.p2 + '  ' + uncSbl.p4 + '  ' + uncSbl.p16,
2,
'половинная и четверть и шестнадцатая',
'halfNote_2w4w16',
4,
(420 * 13)
);

const halfNote_2w4 = new Note (
'halfNote_2w4',
uncSbl.n2 + uncSbl.pnt,
uncSbl.p2 + uncSbl.pnt,
2,
'половинная и четверть',
'halfNote_2w4',
5,
(420 * 12)
);

const halfNote_2w8w16 = new Note (
'halfNote_2w8w16',
uncSbl.n2 + '  '  + uncSbl.n8 + uncSbl.pnt,
uncSbl.p2 + '  ' + uncSbl.p8 + uncSbl.pnt,
2,
'половинная и восьмая с точкой',
'halfNote_2w8w16',
6,
(420 * 11)
);
    
const halfNote_2w8 = new Note (
'halfNote_2w8',
uncSbl.n2 + ' ' + uncSbl.n8,
uncSbl.p2 + ' ' + uncSbl.p8,
2,
'половинная и восьмая',
'halfNote_2w8',
7,
(420 * 10)
);
    
const halfNote_2w16 = new Note (
'halfNote_2w16',
uncSbl.n2 + ' ' + uncSbl.n16,
uncSbl.p2 + ' ' + uncSbl.p16,
2,
'половинная и шестнадцатая',
'halfNote_2w16',
8,
(420 * 9)
);
   
const halfNote_2 = new Note (
'halfNote',
uncSbl.n2,
uncSbl.p2,
2,
'половинная',
'halfNote',
2,
(420 * 8)
);
    
const quarterNote_4w8w16 = new Note (
'quarterNote_4w8w16',
uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
3,
'четвертная с точкой и шестнадцатой',
'quarterNote_4w8w16',
10,
(420 * 7)
);
    
const quarterNote_4w8 = new Note (
'quarterNote_4w8',
uncSbl.n4 + ' ' + uncSbl.pnt,
uncSbl.p4 + ' ' + uncSbl.pnt,
3,
'четвертная с точкой',
'quarterNote_4w8',
11,
(420 * 6)
);

const quarterNote_4w16 = new Note (
'quarterNote_4w16',
uncSbl.n4 + ' ' + uncSbl.n16,
uncSbl.p4 + ' ' + uncSbl.p16,
4.25,
'четвертная c шестнадцатой',
'quarterNote_4w16',
4.25,
(420 * 5)
);
   

const quarterNote_4 = new Note (
'quarterNote_4',
uncSbl.n4,
uncSbl.p4,
4,
'четвертная',
'quarterNote_4',
4,
(420 * 4)
);
    
const eighthNote_8w16 = new Note (
'eighthNote_8w16',
uncSbl.n8 + uncSbl.pnt,
uncSbl.p8 + uncSbl.pnt,
6,
'восьмая с точкой',
'eighthNote_8w16',
6,
(420 * 3)
);
   
const eighthNote_8 = new Note (
'eighthNote_8',
uncSbl.n8,
uncSbl.p8,
8,
'восьмая',
'eighthNote_8',
8,
(420 * 2)
);
  

const sixteenthNote_16 = new Note (
'sixteenthNote_16',
uncSbl.n16,
uncSbl.p16,
16,
'шестнадцатая',
'sixteenthNote_16',
16,
(420 * 1)
);




const allNotes = {
    1: wholeNote_1,
    2: halfNote_2,
    4: quarterNote_4,
    8: eighthNote_8,
    16: sixteenthNote_16,
}

const sizeIdentif = {
    26.25: sixteenthNote_16,
    52.5: eighthNote_8,
    60: '',
    70: '',
    78.750: eighthNote_8w16,
    84: '',
    105: quarterNote_4,
    131.250: quarterNote_4w16,
    140: '',
    157.500: quarterNote_4w8,
    183.750: quarterNote_4w8w16,
    210: halfNote_2,
    236.250: halfNote_2w16,
    262.500: halfNote_2w8,
    288.750: halfNote_2w8w16,
    315: halfNote_2w4,
    341.250: halfNote_2w4w16,
    367.500: halfNote_2w4w8,
    393.750: halfNote_2w4w8w16,
    420: wholeNote_1
}
