const step = 26.25; // Шаг изменения блока
const minWidth = 26.25;
const maxWidth = 420;

function startResizing(e, direction) {
    e.preventDefault();

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
        if (direction === 'right') {
            const newWidth = Math.min(Math.max(startWidth + e.clientX - startX, minWidth), maxWidth);

            let replaseSumm = target.style.height;
            replaseSumm = replaseSumm.replace('px', '');

            let nextElement = target.nextElementSibling;
            let nextElementStyleLeft = nextElement ? Number(nextElement.style.left.replace('px', '')) : undefined;
            let nextElementStyleWidth = nextElement ? Number(nextElement.style.width.replace('px', '')) : undefined;
            if (nextElement) {
                if (e.x < nextElementStyleLeft + appLeftSide) {
                    console.log(nextElementStyleLeft);
                    target.style.width = Math.round(newWidth / step) * step + 'px';
                    target.style.height = Math.round(newWidth / step) * step + 'px';
                }

            } else if (e.x < appRightSide) {
                target.style.width = Math.round(newWidth / step) * step + 'px';
                target.style.height = Math.round(newWidth / step) * step + 'px';
            }

            hameleon(target, sizeIdentif[replaseSumm]);

        } else if (direction === 'left') {
            const diff = startX - e.clientX;
            let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
            const newLeft = startLeft - (newWidth - startWidth);
            const newWidthRounded = Math.round(newWidth / step) * step;

            let replaseSumm = target.style.width;
            replaseSumm = replaseSumm.replace('px', '');

            let previousElement = target.previousElementSibling;
            let previousElementStyleLeft = previousElement ? Number(previousElement.style.left.replace('px', '')) : undefined;
            let previousElementStyleWidth = previousElement ? Number(previousElement.style.width.replace('px', '')) : undefined;
            if (previousElement) {
                if (e.x - appLeftSide > previousElementStyleLeft + previousElementStyleWidth) {
                    target.style.width = newWidthRounded + 'px'; // присвоение ширины
                    target.style.height = newWidthRounded + 'px'; // присвоение высоты
                    target.style.left = Math.round(newLeft / step) * step + 'px';
                }

            } else if (e.x > appLeftSide) {
                target.style.width = newWidthRounded + 'px'; // присвоение ширины
                target.style.height = newWidthRounded + 'px'; // присвоение высоты
                target.style.left = Math.round(newLeft / step) * step + 'px';
            }
            hameleon(target, sizeIdentif[replaseSumm]);

        } else if (direction === 'left_right') {
            // изменение двух блоков одновременно
            let previousElement = target.previousElementSibling;
            console.log(previousElement);
            if (previousElement) {
                let targetLeftPosition = Number(target.style.left.replace('px', ''));
                let previousElementLeftPosition = Number(previousElement.style.left.replace('px', ''));
                let difference = targetLeftPosition - previousElementLeftPosition;

                hameleon(previousElement, sizeIdentif[difference], difference);

            } else {
                target.style.width = newWidthRounded + 'px'; // присвоение ширины
                target.style.height = newWidthRounded + 'px'; // присвоение высоты
                target.style.left = Math.round(newLeft / step) * step + 'px';
            }

        }
    }

    function stopResizing() {
        // target.parentNode.replaceChild(sizeIdentif[replaseSumm].createDivTag('',baseSize), target);
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResizing);
    }
}

let hameleon = function (inputElem, noteObj, width, left) {
    inputElem.classList.replace(inputElem.classList[0], noteObj.class);
    inputElem.classList.add(noteObj.class);
    inputElem.dataset.data = noteObj.nameEng;
    inputElem.querySelector('p').textContent = noteObj.fontSymbol;
    inputElem.style.width = width + 'px';
    inputElem.style.height = width + 'px';
    if (left) {
        inputElem.style.left = left + 'px';
    }
}