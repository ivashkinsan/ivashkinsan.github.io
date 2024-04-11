
let step = baseSize / 16; // Шаг изменения блока
let minWidth = baseSize / 16;
let maxWidth = baseSize;




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
    let appRightSide = Number(appForPosition.clientWidth) + Number(appLeftSide);

    // функция изменения размера элементов
    function resize(e) {
        e.preventDefault(true);
        e.stopPropagation();
        if (direction === 'right') {
            const newWidth = Math.min(Math.max(startWidth + e.clientX - startX, minWidth), maxWidth);

            let replaceSum = target.style.height.replace('px', '');

            let nextElement = target.nextElementSibling;
            let nextElementStyleLeft = nextElement ? parseFloat(nextElement.style.left) : undefined;
            let nextElementStyleWidth = nextElement ? parseFloat(nextElement.style.width) : undefined;
            let previousElement = target.previousElementSibling;

            if (nextElement) {
                if (e.clientX < nextElementStyleLeft + appLeftSide || e.clientX < appRightSide) {
                    target.style.width = Math.round(newWidth / step) * step + 'px';
                    target.style.height = Math.round(newWidth / step) * step + 'px';
                }
            } else if (e.clientX < appRightSide) {
                target.style.width = Math.round(newWidth / step) * step + 'px';
                target.style.height = Math.round(newWidth / step) * step + 'px';
            }

            hameleon(target, sizeIdentif[replaceSum]);

            if (nextElement) {
                const handle = nextElement.querySelector('.left_double_arrow');
                if (nextElementStyleLeft != Number(target.style.left.replace('px', '')) + Number(target.style.width.replace('px', ''))) {
                    handle.style.display = 'none';
                } else {
                    handle.style.display = 'block';
                }
            }

            if (previousElement) {
                const handle = target.querySelector('.left_double_arrow');
                if (previousElement.classList.contains('sixteenthNote_16') && target.classList.contains('eighthNote_8')) {
                    handle.classList.remove('display_none');
                } else if (previousElement.classList.contains('sixteenthNote_16') && target.classList.contains('sixteenthNote_16')) {
                    handle.classList.add('display_none');
                }
            }

        } else if (direction === 'left') {
            const diff = startX - e.clientX;
            let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
            const newLeft = startLeft - (newWidth - startWidth);
            const newWidthRounded = Math.round(newWidth / step) * step;
            const newLeftPositionTarget = Math.round(newLeft / step) * step;

            let replaceSum = target.style.width;
            let replacedSumParsed = parseFloat(replaceSum.replace('px', ''));

            let nextElement = target.nextElementSibling;
            let previousElement = target.previousElementSibling;
            let previousElementStyleLeft = previousElement ? parseFloat(previousElement.style.left) : undefined;
            let previousElementStyleWidth = previousElement ? parseFloat(previousElement.style.width) : undefined;

            if (previousElement) {
                if (e.x - appLeftSide > previousElementStyleLeft + previousElementStyleWidth || e.x > appLeftSide) {
                    target.style.width = newWidthRounded + 'px';
                    target.style.height = newWidthRounded + 'px';
                    target.style.left = newLeftPositionTarget + 'px';
                }
            } else if (e.x > appLeftSide) {
                target.style.width = newWidthRounded + 'px';
                target.style.height = newWidthRounded + 'px';
                target.style.left = newLeftPositionTarget + 'px';
            }

            hameleon(target, sizeIdentif[replacedSumParsed], newOutIndMatrix[newLeftPositionTarget]);

            if (previousElement && previousElementStyleLeft + previousElementStyleWidth != replacedSumParsed) {
                let handle = target.querySelector('.left_double_arrow');
                handle.style.display = 'none';
            }
            if (previousElement && previousElementStyleLeft + previousElementStyleWidth === replacedSumParsed) {
                let handle = target.querySelector('.left_double_arrow');
                handle.style.display = 'block';
            }
            if (nextElement && target.classList.contains('sixteenthNote_16') && nextElement.classList.contains('sixteenthNote_16')) {
                let handle = target.querySelector('.left_double_arrow');
                handle.classList.add('display_none');
            }

        } else if (direction === 'left_right') { // изменение двух блоков одновременно

            let searchHandleClass = target.querySelector('.left_double_arrow');

            if (searchHandleClass.classList.contains('display_block')) {
                let previousElement = target.previousElementSibling;
                let previousElementLeftSide = previousElement ? parseFloat(previousElement.style.left) : undefined;
                let previousElementWidth = previousElement ? parseFloat(previousElement.style.width) : undefined;
                let widthHero = parseFloat(target.style.width);

                if (previousElement) {
                    const diff = startX - e.clientX;
                    let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
                    const newLeft = startLeft - (newWidth - startWidth);
                    const newWidthRounded = Math.round(newWidth / step) * step;

                    let replaceSum = parseFloat(target.style.width);
                    let difference = newWidthRounded - widthHero;
                    let newLeftPositionTarget = Math.round(newLeft / step) * step;
                    let leftPositionPreviousElem = parseFloat(previousElement.style.left);

                    if (previousElementWidth - difference >= minWidth) {
                        target.style.width = newWidthRounded + 'px';
                        target.style.height = newWidthRounded + 'px';
                        target.style.left = newLeftPositionTarget + 'px';
                        hameleon(target, sizeIdentif[replaceSum], newOutIndMatrix[newLeftPositionTarget]);

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

    inputElem.classList.replace(inputElem.classList[0], noteObj.class);
    inputElem.classList.add(noteObj.class);
    inputElem.dataset.data = noteObj.nameEng;
    if (outIndx) {
        inputElem.dataset.outIndx = outIndx
    }
    if (inputElem.classList.contains('pause')) {
        inputElem.querySelector('p').textContent = noteObj.pauseSymbol.default;
    } else if (noteObj.fontSymbol[inputElem.dataset.outIndx]) {
        // console.log(true);
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

console.dir(coordCreate('first'));
console.dir(coordCreate('second'));