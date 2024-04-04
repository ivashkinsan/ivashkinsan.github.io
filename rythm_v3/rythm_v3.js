// число-делитель для масштабирования
let constNumber = 5;

let createNumberMatrix = function () {
    let allPoint = [];
    let onePoint = 0;
    for (let i = 0; i < 16; i++) {
        allPoint.push(onePoint);
        onePoint += baseSize / 16;
    }
    // console.log(allPoint);
    return allPoint;
}


// let section_for_contextmenu = document.querySelector('.app');
// section_for_contextmenu.addEventListener('contextmenu', function (event) {
//     event.preventDefault(false);
// })



// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420

// 0
// 0                 0
// 0        0        0        0   
// 0   0    0   0    0   0    0   0
// 0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0


// 1 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0
// 1 0 0 0  0 0 0 0  1 0 0 0  0 0 0 0
// 1 0 0 0  1 0 0 0  1 0 0 0  1 0 0 0
// 1 0 1 0  1 0 1 0  1 0 1 0  1 0 1 0
// 1 1 1 1  1 1 1 1  1 1 1 1  1 1 1 1

// {1} 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0
// {1} 0 0 0  0 0 0 0  {1} 0 0 0  0 0 0 0
// {1} 0 0 0  {1} 0 0 0  1 0 0 0  1 0 0 0
// 1 0 1 0  1 0 1 0  1 0 1 0  1 0 1 0
// 1 1 1 1  1 1 1 1  1 1 1 1  1 1 1 1

// 6720
// 3360                                3360
// 1680              1680              1680              1680
// 840     840       840     840       840     840       840     840
// 420 420 420 420   420 420 420 420   420 420 420 420   420 420 420 420


// для создания визуала в px и универсальных триольных/квинтольных блоков потребуется 
// число которое без труда сможет делиться на 2,3,4,5,6,7
// 8    7  6  5  4   3    2    1
// 52,5 60 70 84 105 140  210  420
// выбрано число 420
let containMatrix = document.createElement('div');
containMatrix.classList.add('containMatrix');

let activeElemLayer = document.createElement('div');
activeElemLayer.classList.add('activeElemLayer');

let newOutIndMatrix = {};

const backgroundMatrix = {
    'matrix_1x4': [
        '4 8 16',       //1
        '16',           //2
        '8 16',         //3
        '16'            //4
    ],
    'matrix_2x4': [
        '2 4 8 16',   //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '4 8 16',       //5
        '16',           //6
        '8 16',         //7
        '16'            //8
    ],
    'matrix_3x4': [
        '1.5 2 4 8 16',     //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '2 4 8 16',       //5
        '16',           //6
        '8 16',         //7
        '16',           //8
        '4 8 16',       //9
        '16',           //10
        '8 16',         //11
        '16'            //12
    ],
    'matrix_4x4': [
        '1 2 4 8 16',   //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '4 8 16',       //5
        '16',           //6
        '8 16',         //7
        '16',           //8
        '2 4 8 16',     //9
        '16',           //10
        '8 16',         //11
        '16',           //12
        '4 8 16',       //13
        '16',           //14
        '8 16',         //15
        '16'            //16
    ],
    createBackground(array, leftPosition) {

        // внешний цикл
        for (let outIndx = 0; outIndx < array.length; outIndx++) {
            let stringToArr = array[outIndx].split(' ');

            // внутренний цикл
            for (let inIndx = 0; inIndx < stringToArr.length; inIndx++) {
                let new_circle = document.createElement('div');
                new_circle.classList.add('mtrxCircle');
                new_circle.style.left = leftPosition + 'px';
                switch (stringToArr[inIndx]) {
                    case '16':
                        new_circle.classList.add('matrix_16');
                        new_circle.dataset.symbol = 16;
                        new_circle.style.width = baseSize / 16 + 'px';
                        new_circle.style.height = baseSize / 16 + 'px';
                        break;
                    case '8':
                        new_circle.classList.add('matrix_8');
                        new_circle.dataset.symbol = 8;
                        new_circle.style.width = baseSize / 8 + 'px';
                        new_circle.style.height = baseSize / 8 + 'px';
                        break;
                    case '4':
                        new_circle.classList.add('matrix_4');
                        new_circle.dataset.symbol = 4;
                        new_circle.style.width = baseSize / 4 + 'px';
                        new_circle.style.height = baseSize / 4 + 'px';
                        break;
                    case '2':
                        new_circle.classList.add('matrix_2');
                        new_circle.dataset.symbol = 2;
                        new_circle.style.width = baseSize / 2 + 'px';
                        new_circle.style.height = baseSize / 2 + 'px';
                        break;
                    case '1.5':
                        new_circle.classList.add('matrix_1.5');
                        new_circle.dataset.symbol = 1.5;
                        new_circle.style.width = Math.floor(baseSize / 1.33) + 'px';
                        new_circle.style.height = Math.floor(baseSize / 1.33) + 'px';
                        break;
                    case '1':
                        new_circle.classList.add('matrix_1');
                        new_circle.dataset.symbol = 1;
                        new_circle.style.width = baseSize / 1 + 'px';
                        new_circle.style.height = baseSize / 1 + 'px';
                        break;
                }

                new_circle.dataset.outIndx = outIndx + 1;
                new_circle.addEventListener('click', (e) => {
                    let leftTargerPosition = e.target.style.left;
                    create_and_append_active_elem(e.target, activeElemLayer, leftTargerPosition, 'click');
                });
                containMatrix.append(new_circle);
            }

            newOutIndMatrix[leftPosition] = String(outIndx + 1);
            leftPosition = leftPosition + (baseSize / 16);

        }
        return [containMatrix, activeElemLayer];
    }
}

console.log(newOutIndMatrix);

// функция удаления активных элементов внутри более большого активного блока
let delElemInBigElem = function (elem, eventType) {
    let activeContainLayer = document.querySelector('.activeElemLayer');
    let all_active_elem = activeContainLayer.querySelectorAll('.active ');
    for (inp_elem of all_active_elem) {
        let leftSideItem = Number(inp_elem.style.left.replace('px', ''));
        let rightSideItem = leftSideItem + Number(inp_elem.style.width.replace('px', ''))
        let leftSideHero = Number(elem.style.left.replace('px', ''));
        let widthHero = Number(elem.style.width.replace('px', ''));
        let rightSideHero = leftSideHero + widthHero;
        if (leftSideItem >= leftSideHero
            && leftSideItem < leftSideHero + widthHero
            && rightSideItem <= rightSideHero
            && !elem.classList.contains('active')
            && eventType == 'click'
        ) {
            inp_elem.remove();
        }
    }
}

// функция изменения соседних блоков при наложении границ
let borderCollapsResize = function (elem) {
    let previousElement = elem.previousElementSibling;
    let nxtElPosition;
    let prElPositionR;
    let heroElPositionL;
    let heroElPositionR;


    let resizePreviousElement = function () {
        let heroElemLeftSide = Number(elem.style.left.replace('px', '')); // лев сторона центрального
        let leftSidePrevElem = Number(previousElement.style.left.replace('px', '')); // лев сторона левого блока
        let widthPrevElem = Number(previousElement.style.width.replace('px', '')); // ширина пред блока
        let rightSidePrevElem = leftSidePrevElem + widthPrevElem; // правая сторона пред блока
        let summLeftCollaps = rightSidePrevElem - heroElemLeftSide; // вычисление накладки
        console.log();
        let resultNewWidth = widthPrevElem - summLeftCollaps;
        if (rightSidePrevElem > heroElemLeftSide) {
            // previousElement.style.width = () + 'px';
            hameleon(previousElement, sizeIdentif[resultNewWidth], newOutIndMatrix[leftSidePrevElem], resultNewWidth);
        }
    }
    if (previousElement) {
        resizePreviousElement();
        prElPositionR = Number(previousElement.style.left.replace('px', '')) + Number(previousElement.style.width.replace('px', ''));
    }

    let nextElement = elem.nextElementSibling;
    let resizeNextElement = function () {
        let heroElemRightSide = Number(elem.style.left.replace('px', '')) + Number(elem.style.width.replace('px', ''));
        let leftSideNextElem = Number(nextElement.style.left.replace('px', ''));
        let widthNextElem = Number(nextElement.style.width.replace('px', ''));
        let summCollaps = heroElemRightSide - leftSideNextElem;
        let resultNewWidth = widthNextElem - summCollaps;
        if (heroElemRightSide > leftSideNextElem) {
            hameleon(
                nextElement,
                sizeIdentif[resultNewWidth],
                newOutIndMatrix[heroElemRightSide],
                resultNewWidth,
                heroElemRightSide);
        }
    }
    if (nextElement) {
        resizeNextElement();
        nxtElPosition = Number(nextElement.style.left.replace('px', ''));
    }

    if (previousElement && nextElement) {
        let handle = elem.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
        let handleNext = nextElement.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
    }


    heroElPositionL = Number(elem.style.left.replace('px', ''));
    heroElPositionR = Number(elem.style.left.replace('px', '')) + Number(elem.style.width.replace('px', ''));
    if (prElPositionR == heroElPositionL) {
        let handle = elem.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
    }
    if (heroElPositionR == nxtElPosition) {
        let handle = nextElement.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
    }
    if (previousElement && previousElement.classList.contains('sixteenthNote_16') && elem.classList.contains('sixteenthNote_16')) {
        let handle = elem.querySelector('.left_double_arrow');
        handle.classList.add('display_none');
    }
}

let insertSortedDiv = function (container, newDiv) {
    container.appendChild(newDiv); // Вставляем новый div в конец контейнера
    const childrenArray = Array.from(container.children); // Преобразуем коллекцию дочерних элементов в массив
    childrenArray.sort((a, b) => a.offsetLeft - b.offsetLeft); // Сортируем дочерние элементы по offSetLeft
    childrenArray.forEach(child => container.appendChild(child)); // Вставляем отсортированные элементы обратно в контейнер
}



let create_and_append_active_elem = function (clickElem, activeElemLayer, leftPosition, eventType, is_pause) {

    let activeBlock;
    let sizeElemForGenerate = Number(clickElem.style.width.replace('px', ''));

    // if (e.offsetY > Number(e.target.style.height.replace('px', '')) / 2) {
    // console.log('Нижняя часть => ' + e.offsetY);

    if (is_pause == true) {
        activeBlock = sizeIdentif[sizeElemForGenerate].createDivTag(clickElem.dataset.outIndx, baseSize, true);
        activeBlock.style.left = leftPosition;
        activeBlock.classList.add('pause');
    } else {
        activeBlock = sizeIdentif[sizeElemForGenerate].createDivTag(clickElem.dataset.outIndx, baseSize);
        activeBlock.style.left = leftPosition;

    }

    activeBlock.classList.add('active');

    // activeBlock.style.left = clickElem.style.left;
    delElemInBigElem(clickElem, eventType);
    insertSortedDiv(activeElemLayer, activeBlock); // Вызываем функцию вставки и сортировки

    // есть ли граничащий блок с левой стороны ???
    let heroLeftSide = Number(activeBlock.style.left.replace('px', ''));
    let heroWidth = Number(activeBlock.style.width.replace('px', ''));
    let previousActiveBlock = activeBlock.previousElementSibling ? activeBlock.previousElementSibling : undefined;
    let previousActiveBlockLeftSide = previousActiveBlock ? Number(previousActiveBlock.style.left.replace('px', '')) : undefined;
    let previousActiveBlockWidth = previousActiveBlock ? Number(previousActiveBlock.style.width.replace('px', '')) : undefined;
    let nextActiveBlock = activeBlock.nextElementSibling ? activeBlock.nextElementSibling : undefined;
    let nextActiveBlockLeftSide = nextActiveBlock ? Number(nextActiveBlock.style.left.replace('px', '')) : undefined;
    let nextActiveBlockWidth = nextActiveBlock ? Number(nextActiveBlock.style.width.replace('px', '')) : undefined;


    if (nextActiveBlock && nextActiveBlockLeftSide == heroLeftSide + heroWidth) {
        let handle = nextActiveBlock.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
    }
    if (previousActiveBlock && previousActiveBlockLeftSide + previousActiveBlockWidth == heroLeftSide) {
        let handle = activeBlock.querySelector('.left_double_arrow');
        handle.classList.remove('display_none');
    }

    if (nextActiveBlock && activeBlock.classList.contains('sixteenthNote_16') && nextActiveBlock.classList.contains('sixteenthNote_16')) {

        let handle = nextActiveBlock.querySelector('.left_double_arrow');
        console.log(handle);
        handle.classList.add('display_none');
    }

    // console.log(activeBlock);
    // console.log(previousActiveBlock);



    borderCollapsResize(activeBlock);

    activeBlock.addEventListener('contextmenu', (event) => {
        event.preventDefault(true);
        if (event.target.classList.contains('active')) {
            event.target.remove();
            if (nextActiveBlock) {
                let handle = nextActiveBlock.querySelector('.left_double_arrow');
                handle.classList.add('display_none');
            }
            if (nextActiveBlock && previousActiveBlock) {
                let handle = nextActiveBlock.querySelector('.left_double_arrow');
                handle.classList.add('display_none');
            }
        }
    });

    activeBlock.addEventListener('mousedown', (event) => {
        if (event.button == 0) {
            let evTargetWidth = Number(event.target.style.width.replace('px', ''));
            if (!activeBlock.classList.contains('pause')) {
                activeBlock.classList.add('pause');
                hameleon(activeBlock, sizeIdentif[evTargetWidth], evTargetWidth, true);
            } else {
                activeBlock.classList.remove('pause');
                hameleon(activeBlock, sizeIdentif[evTargetWidth], evTargetWidth,);
            }
        }
    })
}

let app = document.querySelector('.app');
let allLayer = backgroundMatrix.createBackground(backgroundMatrix.matrix_4x4, 0);
// console.log(allLayer);
app.append(allLayer[0]);
app.append(allLayer[1]);