
let step = backgroundMatrix.baseSize / 16; // Шаг изменения блока
let minWidth = backgroundMatrix.baseSize / 16;
let maxWidth = backgroundMatrix.baseSize;




function startResizing(e, direction) {
    e.preventDefault(true);
    e.stopPropagation();
    const target = e.target.parentNode; // растягиваемый блок
    const startX = e.clientX;
    const startWidth = parseFloat(getComputedStyle(target).width);
    const startLeft = parseFloat(getComputedStyle(target).left);

    document.documentElement.addEventListener('mousemove', resize);
    document.documentElement.addEventListener('mouseup', stopResizing);

    // родительский блок для корректировки положения курсора на оси x
    let appForPosition = document.querySelector('.app');
    let appLeftSide = appForPosition.offsetLeft;
    let appRightSide = backgroundMatrix.baseWidth + Number(appLeftSide);
console.log(appRightSide);
    // функция изменения размера элементов
    function resize(e) {
        e.preventDefault(true);
        e.stopPropagation();
        if (direction === 'right') {
            const newWidth = Math.min(Math.max(startWidth + e.clientX - startX, minWidth), maxWidth);

            let replaseSumm = target.style.height;
            replaseSumm = replaseSumm.replace('px', '');

            let nextElement = target.nextElementSibling ? target.nextElementSibling : undefined;
            let nextElementStyleLeft = nextElement ? Number(nextElement.style.left.replace('px', '')) : undefined;
            let nextElementStyleWidth = nextElement ? Number(nextElement.style.width.replace('px', '')) : undefined;
            let previousElement = target.previousElementSibling ? target.previousElementSibling : undefined;
            if (nextElement) {

                if (e.x < nextElementStyleLeft + appLeftSide) {
                    target.style.width = Math.round(newWidth / step) * step + 'px';
                    target.style.height = Math.round(newWidth / step) * step + 'px';
                    hameleon(target, sizeIdentif[replaseSumm]);
                }

            } else if (e.x < appRightSide) {
                target.style.width = Math.round(newWidth / step) * step + 'px';
                target.style.height = Math.round(newWidth / step) * step + 'px';
                hameleon(target, sizeIdentif[replaseSumm]);
            }



            // появление handle при соприкосании блоков и разделении
            if (nextElement && nextElementStyleLeft != Number(target.style.left.replace('px', '')) + Number(target.style.width.replace('px', ''))) {
                let handle = nextElement.querySelector('.left_double_arrow');
                handle.style.display = 'none';
            }
            if (nextElement && nextElementStyleLeft == Number(target.style.left.replace('px', '')) + Number(target.style.width.replace('px', ''))) {
                let handle = nextElement.querySelector('.left_double_arrow');
                handle.style.display = 'block';
            }

            if (previousElement) {
                if (previousElement.classList.contains('sixteenthNote_16') && target.classList.contains('eighthNote_8')) {
                    let handle = target.querySelector('.left_double_arrow');
                    handle.classList.remove('display_none');
                }
                if (previousElement.classList.contains('sixteenthNote_16') && target.classList.contains('sixteenthNote_16')) {
                    let handle = target.querySelector('.left_double_arrow');
                    handle.classList.add('display_none');
                }
            }

        } else if (direction === 'left') {
            const diff = startX - e.clientX;
            let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
            const newLeft = startLeft - (newWidth - startWidth);
            const newWidthRounded = Math.round(newWidth / step) * step;

            let replaseSumm = target.style.width;
            replaseSumm = replaseSumm.replace('px', '');

            let nextElement = target.nextElementSibling ? target.nextElementSibling : undefined;
            let previousElement = target.previousElementSibling ? target.previousElementSibling : undefined;
            let previousElementStyleLeft = previousElement ? Number(previousElement.style.left.replace('px', '')) : undefined;
            let previousElementStyleWidth = previousElement ? Number(previousElement.style.width.replace('px', '')) : undefined;
            let newLeftPositionTarget = Math.round(newLeft / step) * step;
            if (previousElement) {
                if (e.x - appLeftSide > previousElementStyleLeft + previousElementStyleWidth) {
                    target.style.width = newWidthRounded + 'px'; // присвоение ширины
                    target.style.height = newWidthRounded + 'px'; // присвоение высоты
                    target.style.left = newLeftPositionTarget + 'px';
                    hameleon(target, sizeIdentif[replaseSumm], newOutIndMatrix[newLeftPositionTarget]);
                }

            } else if (e.x > appLeftSide) {
                target.style.width = newWidthRounded + 'px'; // присвоение ширины
                target.style.height = newWidthRounded + 'px'; // присвоение высоты
                target.style.left = newLeftPositionTarget + 'px';
                hameleon(target, sizeIdentif[replaseSumm], newOutIndMatrix[newLeftPositionTarget]);
            }


            // появление handle при соприкосании блоков и разделении
            if (previousElement && previousElementStyleLeft + previousElementStyleWidth != Number(target.style.left.replace('px', ''))) {
                let handle = target.querySelector('.left_double_arrow');
                handle.style.display = 'none';
            }
            if (previousElement && previousElementStyleLeft + previousElementStyleWidth == Number(target.style.left.replace('px', ''))) {
                let handle = target.querySelector('.left_double_arrow');
                handle.style.display = 'block';
            }
            if (nextElement) {
                if (target.classList.contains('sixteenthNote_16') && nextElement.classList.contains('sixteenthNote_16')) {
                    let handle = target.querySelector('.left_double_arrow');
                    handle.classList.add('display_none');
                    console.log('16+16');
                }
            }
            if (nextElement) {
                if (target.classList.contains('sixteenthNote_8') && nextElement.classList.contains('sixteenthNote_16')) {
                    let handle = nextElement.querySelector('.left_double_arrow');
                    handle.classList.add('block');
                    console.log('8+16');
                }
            }
        } else if (direction === 'left_right') { // изменение двух блоков одновременно

            let searchHandleClass = target.querySelector('.left_double_arrow');
            if (searchHandleClass.classList.contains('display_block')) {

                let previousElement = target.previousElementSibling ? target.previousElementSibling : undefined;
                let previousElementLeftSide = previousElement ? Number(previousElement.style.left.replace('px', '')) : undefined;
                let previousElementWidth = previousElement ? Number(previousElement.style.width.replace('px', '')) : undefined;
                let widthHero = Number(target.style.width.replace('px', ''));


                if (previousElement) {
                    // изменение основного блока с левым handle
                    const diff = startX - e.clientX;
                    let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
                    const newLeft = startLeft - (newWidth - startWidth);
                    const newWidthRounded = Math.round(newWidth / step) * step;

                    let replaseSumm = Number(target.style.width.replace('px', ''));
                    let difference = newWidthRounded - widthHero;

                    let newLeftPositionTarget = Math.round(newLeft / step) * step;
                    let leftPositionPreviousElem = Number(previousElement.style.left.replace('px', ''));

                    if (previousElementWidth - difference >= minWidth) {
                        target.style.width = newWidthRounded + 'px'; // присвоение ширины
                        target.style.height = newWidthRounded + 'px'; // присвоение высоты
                        target.style.left = newLeftPositionTarget + 'px';;
                        hameleon(target, sizeIdentif[replaseSumm], newOutIndMatrix[newLeftPositionTarget]);
                        // изменение блока с левой стороны

                        previousElement.style.width = (previousElementWidth - difference) + 'px';
                        previousElement.style.height = (previousElementWidth - difference) + 'px';
                        hameleon(previousElement, sizeIdentif[previousElementWidth - difference], newOutIndMatrix[leftPositionPreviousElem]);
                    }


                }
            }


        }
    }

    function stopResizing(e) {
        e.preventDefault();
        e.stopPropagation();
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResizing);
    }
}

let hameleon = function (inputElem, noteObj, outIndx, width, left) {
console.log(inputElem);
    inputElem.classList.replace(inputElem.classList[0], noteObj.class);
    inputElem.classList.add(noteObj.class);
    inputElem.dataset.data = noteObj.nameEng;
    if (outIndx) {
        inputElem.dataset.outIndx = outIndx
    }
    if (inputElem.classList.contains('pause') && noteObj.pauseSymbol[inputElem.dataset.outIndx]) {
        inputElem.querySelector('p').textContent = noteObj.pauseSymbol[inputElem.dataset.outIndx];
    }else if (inputElem.classList.contains('pause') && !noteObj.fontSymbol[inputElem.dataset.outIndx]){
        inputElem.querySelector('p').textContent = noteObj.pauseSymbol.default;
    } else if (noteObj.fontSymbol[inputElem.dataset.outIndx]) {
        inputElem.querySelector('p').textContent = noteObj.fontSymbol[inputElem.dataset.outIndx];
    } else {
        inputElem.querySelector('p').textContent = noteObj.fontSymbol.default;
    }
    inputElem.style.width = width + 'px';
    inputElem.style.height = width + 'px';
    if (left) {
        inputElem.style.left = left + 'px';
    }
}

let coord = {};
let coordCreate = function (name) {
    coord[name] = {
        left: {
            start: '',
            end: '',
            width: '',
            newStart: '',
            newEnd: '',
            newWidth: ''
        },
        center: {
            start: '',
            end: '',
            width: '',
            newStart: '',
            newEnd: '',
            newWidth: ''
        },
        right: {
            start: '',
            end: '',
            width: '',
            newStart: '',
            newEnd: '',
            newWidth: ''
        }
    }
    return coord;
}

// console.dir(coordCreate('first'));
// console.dir(coordCreate('second'));