// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420



const wholeNote_1 = {
    'class': 'wholeNote',
    'symbol': 1,
    'nameRus': 'целая',
    'nameEng': 'wholeNote',
    'fontSymbol': 'w',
    'duration_16': 16,
    'measure': (420 * 16),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_1';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 1 + 'px';
        div.style.height = baseSize / 1 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w4w8w16 = {
    'class': 'halfNote_2w4w8w16',
    'symbol': 2,
    'nameRus': 'половинная и четверть и восьмая c точкой',
    'nameEng': 'halfNote_2w4w8w16',
    'fontSymbol': 'h+q+ek',
    'duration_16': 15,
    'measure': (420 * 15),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w4w8 = {
    'class': 'halfNote_2w4w8',
    'symbol': 2,
    'nameRus': 'половинная и четверть и восьмая',
    'nameEng': 'halfNote_2w4w8',
    'fontSymbol': 'h+q+e',
    'duration_16': 14,
    'measure': (420 * 14),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w4w16 = {
    'class': 'halfNote_2w4w16',
    'symbol': 2,
    'nameRus': 'половинная и четверть и шестнадцатая',
    'nameEng': 'halfNote_2w4w16',
    'fontSymbol': 'h+q+x',
    'duration_16': 13,
    'measure': (420 * 13),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w4 = {
    'class': 'halfNote_2w4',
    'symbol': 2,
    'nameRus': 'половинная и четверть',
    'nameEng': 'halfNote_2w4',
    'fontSymbol': 'h+q',
    'duration_16': 12,
    'measure': (420 * 12),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w8w16 = {
    'class': 'halfNote_2w8w16',
    'symbol': 2,
    'nameRus': 'половинная и восьмая с точкой',
    'nameEng': 'halfNote_2w8w16',
    'fontSymbol': 'h+ek',
    'duration_16': 11,
    'measure': (420 * 11),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w8 = {
    'class': 'halfNote_2w8',
    'symbol': 2,
    'nameRus': 'половинная и восьмая',
    'nameEng': 'halfNote_2w8',
    'fontSymbol': 'h+e',
    'duration_16': 10,
    'measure': (420 * 10),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const halfNote_2w16 = {
    'class': 'halfNote_2w16',
    'symbol': 2,
    'nameRus': 'половинная и шестнадцатая',
    'nameEng': 'halfNote_2w16',
    'fontSymbol': 'h+x',
    'duration_16': 9,
    'measure': (420 * 9),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}
const halfNote_2 = {
    'class': 'halfNote',
    'symbol': 2,
    'nameRus': 'половинная',
    'nameEng': 'halfNote',
    'fontSymbol': 'h',
    'duration_16': 8,
    'measure': (420 * 8),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_2';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 2 + 'px';
        div.style.height = baseSize / 2 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const quarterNote_4w8w16 = {
    'class': 'quarterNote_4w8w16',
    'symbol': 3,
    'nameRus': 'четвертная с точкой и шестнадцатой',
    'nameEng': 'quarterNote_4w8w16',
    'fontSymbol': 'q+ek',
    'duration_16': 7,
    'measure': (420 * 7),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_4';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 4 + 'px';
        div.style.height = baseSize / 4 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}
const quarterNote_4w8 = {
    'class': 'quarterNote_4w8',
    'symbol': 3,
    'nameRus': 'четвертная с точкой',
    'nameEng': 'quarterNote_4w8',
    'fontSymbol': 'qk',
    'duration_16': 6,
    'measure': (420 * 6),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_4';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 4 + 'px';
        div.style.height = baseSize / 4 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const quarterNote_4w16 = {
    'class': 'quarterNote_4w16',
    'symbol': 4.25,
    'nameRus': 'четвертная c шестнадцатой',
    'nameEng': 'quarterNote_4w16',
    'fontSymbol': 'q+e',
    'duration_16': 5,
    'measure': (420 * 5),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_4';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 4 + 'px';
        div.style.height = baseSize / 4 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const quarterNote_4 = {
    'class': 'quarterNote_4',
    'symbol': 4,
    'nameRus': 'четвертная',
    'nameEng': 'quarterNote_4',
    'fontSymbol': 'q',
    'duration_16': 4,
    'measure': (420 * 4),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_4';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 4 + 'px';
        div.style.height = baseSize / 4 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}
const eighthNote_8w16 = {
    'class': 'eighthNote_8w16',
    'symbol': 6,
    'nameRus': 'восьмая с точкой',
    'nameEng': 'eighthNote_8w16',
    'fontSymbol': 'ek',
    'duration_16': 3,
    'measure': (420 * 3),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_8';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 8 + 'px';
        div.style.height = baseSize / 8 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}
const eighthNote_8 = {
    'class': 'eighthNote_8',
    'symbol': 8,
    'nameRus': 'восьмая',
    'nameEng': 'eighthNote_8',
    'fontSymbol': 'e',
    'duration_16': 2,
    'measure': (420 * 2),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_8';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 8 + 'px';
        div.style.height = baseSize / 8 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        return div;
    }
}

const sixteenthNote_16 = {
    'class': 'sixteenthNote_16',
    'symbol': 16,
    'nameRus': 'шестнадцатая',
    'nameEng': 'sixteenthNote_16',
    'fontSymbol': 'x',
    'duration_16': 1,
    'measure': (420 * 1),
    createDivTag(outIndx, baseSize) {
        let div = document.createElement('div');
        div.classList.add(this.class);

        let p_label = document.createElement('p');
        p_label.textContent = this.fontSymbol;
        div.append(p_label);

        div.dataset.data = this.nameEng;
        div.dataset.matrix = 'matrix_16';
        div.dataset.outIndx = outIndx;
        div.style.width = baseSize / 16 + 'px';
        div.style.height = baseSize / 16 + 'px';
        div.append(createHandleLeftElem());
        div.append(createHandleRightElem());
        div.append(createHandleLeftRight()[0]);
        // div.append(createHandleLeftRight()[1]);
        // div.append(createHandleLeftRight());
        return div;
    }
}


const tripleEighthNote = {
    'symbol': 38,
    'nameRus': 'триольная восьмая',
    'nameEng': 'triplet eighth',
    'fontSymbol': '',
    'duration_16': 2,
    'measure': (420 * 2 / 3),
    createDivTag() {
        let div = document.createElement('div');
        div.classList.add('active');
        div.classList.add('tripleEighthNote');
        div.style.width = '100%';
        div.style.height = '100%';
        div.addEventListener('click', function (elem) {
            console.log('element');
            elem.stopPropagation();
            elem.target.remove();
        })
        return div;
    }
}
// console.log(tripleEighthNote.measure);

const allNotes = {
    1: wholeNote_1,
    2: halfNote_2,
    4: quarterNote_4,
    8: eighthNote_8,
    16: sixteenthNote_16,
    38: tripleEighthNote
}
// console.log(allNotes[1]);

let createHandleLeftElem = function () {
    let leftHandle = document.createElement('div');
    leftHandle.classList.add('handle', 'left-handle');
    leftHandle.addEventListener('mousedown', (elem) => {
        startResizing(elem, 'left');
    });
    return leftHandle;
}
let createHandleRightElem = function () {
    let righttHandle = document.createElement('div');
    righttHandle.classList.add('handle', 'right-handle');
    righttHandle.addEventListener('mousedown', (elem) => {
        startResizing(elem, 'right');
    });
    return righttHandle;
}

let createHandleLeftRight = function () {
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

// activeBlock.append(leftHandle);
// activeBlock.append(righttHandle);


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

//     целая w
// половинка с точкой d
// половинка р
// четверть с точкой j
// четверть q
// восьмая c точкой i
// восьмая e