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
    'dash': '\uf02d'
}


const root = document.querySelector(':root');
let baseSize = getComputedStyle(root).getPropertyValue('--const');

baseSize = Number(baseSize.replace('px', ''))

class Note {
    constructor(classVal, fontSymbolVal, pauseSymbolVal, nameRusVal, nameEngVal, durationVal, measureVal, matrixVal) {
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
        if (is_pause) {
            p_label.textContent = this.pauseSymbol.default;
        } else {
            p_label.textContent = this.fontSymbol.default;
        }
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = this.matrix;
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / this.measure + 'px';
        div.style.height = baseSize / this.measure + 'px';
        div.append(this.createHandleLeftElem());
        div.append(this.createHandleRightElem());
        div.append(this.createHandleLeftRight());
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
        left_double_arrow.classList.add('display_block');
        left_double_arrow.classList.add('display_none');
        left_double_arrow.addEventListener('mousedown', (elem) => {
            startResizing(elem, 'left_right');
        });

        return left_double_arrow;
    }
}

// ================================ длительности кратные 16-ой ====================================
const wholeNote_1 = new Note(
    'wholeNote', 
    {
    'default': uncSbl.n1
},
{
    'default': uncSbl.p1
},
    1,
    'целая',
    'wholeNote',
    1,
    (420 * 16)
);

const halfNote_2w4w8w16 = new Note(
    'halfNote_2w4w8w16', 
    {
    'default': uncSbl.n2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt
},
    uncSbl.p2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt,
    2,
    'половинная и четверть и восьмая c точкой',
    'halfNote_2w4w8w16',
    2,
    (420 * 15),
);

const halfNote_2w4w8 = new Note(
    'halfNote_2w4w8', 
    {
    'default': uncSbl.n2 + uncSbl.pnt + uncSbl.pnt
},
    uncSbl.p2 + uncSbl.pnt + uncSbl.pnt,
    2,
    'половинная и четверть и восьмая',
    'halfNote_2w4w8',
    3,
    (420 * 14)
);

const halfNote_2w4w16 = new Note(
    'halfNote_2w4w16', 
    {
    'default': uncSbl.n2 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16
},
    uncSbl.p2 + '  ' + uncSbl.p4 + '  ' + uncSbl.p16,
    2,
    'половинная и четверть и шестнадцатая',
    'halfNote_2w4w16',
    4,
    (420 * 13)
);

const halfNote_2w4 = new Note(
    'halfNote_2w4', 
    {
    'default': uncSbl.n2 + uncSbl.pnt
},
    uncSbl.p2 + uncSbl.pnt,
    2,
    'половинная и четверть',
    'halfNote_2w4',
    5,
    (420 * 12)
);

const halfNote_2w8w16 = new Note(
    'halfNote_2w8w16', 
    {
    'default': uncSbl.n2 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt
},
    uncSbl.p2 + '  ' + uncSbl.p8 + uncSbl.pnt,
    2,
    'половинная и восьмая с точкой',
    'halfNote_2w8w16',
    6,
    (420 * 11)
);

const halfNote_2w8 = new Note(
    'halfNote_2w8',
    {
        'default': uncSbl.n2 + uncSbl.dash + uncSbl.n8,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n2
    },
    {
        'default': uncSbl.p2 + uncSbl.dash + uncSbl.p8,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p4,
        '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p4 + uncSbl.p16,
        '5': uncSbl.p4 + uncSbl.p4 + uncSbl.pnt,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '7': uncSbl.p8 + uncSbl.p2
    },
    2,
    'половинная и восьмая',
    'halfNote_2w8',
    7,
    (420 * 10)
);

const halfNote_2w16 = new Note(
    'halfNote_2w16',
    {
        'default': uncSbl.n2 + uncSbl.dash + uncSbl.n16,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n4,
        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n2
    },
    {
        'default': uncSbl.p2 + uncSbl.p16,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8,
        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p8 + uncSbl.pnt,
        '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p4,
        '5': uncSbl.p4 + uncSbl.p4 + uncSbl.p16,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.pnt,
        '7': uncSbl.p8 + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '8': uncSbl.p16 + uncSbl.p2
    },
    2,
    'половинная и шестнадцатая',
    'halfNote_2w16',
    8,
    (420 * 9)
);

const halfNote_2 = new Note(
    'halfNote',
    {
        'default': uncSbl.n2,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
    },
    {
        'default': uncSbl.p2,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p16,
        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p8,
        '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '5': uncSbl.p4 + uncSbl.p4,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p16,
        '7': uncSbl.p8 + uncSbl.p4 + uncSbl.pnt,
        '8': uncSbl.p16 + + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
    },
    2,
    'половинная',
    'halfNote',
    2,
    (420 * 8)
);

const quarterNote_4w8w16 = new Note(
    'quarterNote_4w8w16',
    {
        'default': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
        '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4
    },
    {
        'default': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4,
        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p16,
        '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p8,
        '5': uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4,
        '7': uncSbl.p8 + uncSbl.p4 + uncSbl.p16,
        '8': uncSbl.p16 + uncSbl.p4 + uncSbl.p8,
        '10': uncSbl.p8 + uncSbl.pnt + uncSbl.p4
    },
    3,
    'четвертная с точкой и шестнадцатой',
    'quarterNote_4w8w16',
    10,
    (420 * 7)
);

const quarterNote_4w8 = new Note(
    'quarterNote_4w8',
    {
        'default': uncSbl.n4 + uncSbl.pnt,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
    },
    {
        'default': uncSbl.p4 + uncSbl.pnt,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p8 + uncSbl.pnt,
        '10': uncSbl.p8 + uncSbl.pnt + uncSbl.p8 + uncSbl.pnt,
        '4': uncSbl.p16 + uncSbl.n4 + uncSbl.p16,
        '5': uncSbl.p4 + uncSbl.p8,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p8 + uncSbl.pnt,
        '7': uncSbl.p8 + uncSbl.p4,
        '8': uncSbl.p16 + uncSbl.p4 + uncSbl.p16,
    },
    3,
    'четвертная с точкой',
    'quarterNote_4w8',
    11,
    (420 * 6)
);

const quarterNote_4w16 = new Note(
    'quarterNote_4w16',
    {
        'default': uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '3': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '11': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n4
    },
    {
        'default': uncSbl.p4 + uncSbl.p16,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p8,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p8,
        '10': uncSbl.p8 + uncSbl.pnt + uncSbl.p8,
        '3': uncSbl.p8 + uncSbl.p8 + uncSbl.pnt,
        '7': uncSbl.p8 + uncSbl.p8 + uncSbl.pnt,
        '11': uncSbl.p8 + uncSbl.p8 + uncSbl.pnt,
        '4': uncSbl.p16 + uncSbl.p4,
        '8': uncSbl.p16 + uncSbl.p4,
        '12': uncSbl.p16 + uncSbl.p4
    },
    4.25,
    'четвертная c шестнадцатой',
    'quarterNote_4w16',
    4.25,
    (420 * 5)
);


const quarterNote_4 = new Note(
    'quarterNote_4',
    {
        'default': uncSbl.n4,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '3': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
        '11': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt
    },
    {
        'default': uncSbl.p4,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p16,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p16,
        '10': uncSbl.p8 + uncSbl.pnt + uncSbl.p16,
        '3': uncSbl.p8 + uncSbl.p8,
        '7': uncSbl.p8 + uncSbl.p8,
        '11': uncSbl.p8 + uncSbl.p8,
        '4': uncSbl.p16 + uncSbl.p8 + uncSbl.pnt,
        '8': uncSbl.p16 + uncSbl.p8 + uncSbl.pnt,
        '12': uncSbl.p16 + uncSbl.p8 + uncSbl.pnt
    },
    4,
    'четвертная',
    'quarterNote_4',
    4,
    (420 * 4)
);

const eighthNote_8w16 = new Note(
    'eighthNote_8w16',
    {
        'default': uncSbl.n8 + uncSbl.pnt,
        '3': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
        '11': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n8
    },
    {
        'default': uncSbl.p8 + uncSbl.pnt,
        '3': uncSbl.p8 + uncSbl.p16,
        '7': uncSbl.p8 + uncSbl.p16,
        '11': uncSbl.p8 + uncSbl.p16,
        '4': uncSbl.p16 + uncSbl.p8,
        '8': uncSbl.p16 + uncSbl.p8,
        '12': uncSbl.p16 + uncSbl.p8
    },
    6,
    'восьмая с точкой',
    'eighthNote_8w16',
    6,
    (420 * 3)
);


const eighthNote_8 = new Note(
    'eighthNote_8',
    {
        'default': uncSbl.n8,
        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n16
    },
    {
        'default': uncSbl.p8,
        '4': uncSbl.p16 + uncSbl.p16,
        '8': uncSbl.p16 + uncSbl.p16,
        '12': uncSbl.p16 + uncSbl.p16
    },
    8,
    'восьмая',
    'eighthNote_8',
    8,
    (420 * 2)
);

const sixteenthNote_16 = new Note(
    'sixteenthNote_16',
    {
        'default': uncSbl.n16
    },
    {
        'default': uncSbl.p16
    },
    16,
    'шестнадцатая',
    'sixteenthNote_16',
    16,
    (420 * 1)
);


// ======================  триольные длительности ====================
const eighthNote_8_triple = new Note(
    'eighthNote_8_triple',
    {
        'default': uncSbl.n8
    },
    {
        'default': uncSbl.p8
    },
    16,
    'триольная восьмая',
    'eighthNote_8_triple',
    12,
    (420 * 1)
);

const quarterNote_4_triple = new Note(
    'quarterNote_4_triple',
    {
        'default': uncSbl.n4
    },
    {
        'default': uncSbl.p4
    },
    4,
    'триольная четвертная',
    'quarterNote_4_triple',
    6,
    (420 * 4)
);





const sizeIdentif = {
    [(baseSize / 16) * 1]: sixteenthNote_16,
    [(baseSize / 16) * 2]: eighthNote_8,
    [(baseSize / 16) * 3]: eighthNote_8w16,
    [(baseSize / 16) * 4]: quarterNote_4,
    [(baseSize / 16) * 5]: quarterNote_4w16,
    [(baseSize / 16) * 6]: quarterNote_4w8,
    [(baseSize / 16) * 7]: quarterNote_4w8w16,
    [(baseSize / 16) * 8]: halfNote_2,
    [(baseSize / 16) * 9]: halfNote_2w16,
    [(baseSize / 16) * 10]: halfNote_2w8,
    [(baseSize / 16) * 11]: halfNote_2w8w16,
    [(baseSize / 16) * 12]: halfNote_2w4,
    [(baseSize / 16) * 13]: halfNote_2w4w16,
    [(baseSize / 16) * 14]: halfNote_2w4w8,
    [(baseSize / 16) * 15]: halfNote_2w4w8w16,
    [(baseSize / 16) * 16]: wholeNote_1,
    // триоли
    [baseSize / 12]: eighthNote_8_triple,
    [baseSize / 6]: quarterNote_4_triple,
}



// восьмая на позиции 4 8 12 должна менять символ на "16 16"
// восьмая с точкой на позиции 3 7 11 должна менять символ на "8 16"

// четверть на позиции 2 6 10 должна менять символ на "8 точка 16"
// четверть на позиции 3 7 11 должна менять символ на "8 8"
// четверть на позиции 4 8 12 должна менять символ на "16 точка 8" и т.п.