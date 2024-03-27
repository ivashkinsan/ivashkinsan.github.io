// число-делитель для масштабирования
let constNumber = 5;

let createNumberMatrix = function(){
    let allPoint = [];
    let onePoint = 0;
    for(let i = 0; i < 16; i++){
        allPoint.push(onePoint);
        onePoint += 26.25;
    }
    console.log(allPoint);
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

// console.log(420*16);
// console.log(wholeNote.measure);
const root = document.querySelector(':root');
let baseSize = getComputedStyle(root).getPropertyValue('--const');
// console.log(Number(baseSize.replace('px','')));
baseSize = Number(baseSize.replace('px',''))
let startDragElem;

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
        '2 4 8 16',     //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '4 8 16',       //5
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
        let containMatrix = document.createElement('div');
        containMatrix.classList.add('containMatrix');

        let activeElemLayer = document.createElement('div');
        activeElemLayer.classList.add('activeElemLayer');
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
                    case '1':
                        new_circle.classList.add('matrix_1');
                        new_circle.dataset.symbol = 1;
                        new_circle.style.width = baseSize / 1 + 'px';
                        new_circle.style.height = baseSize / 1 + 'px';
                        break;
                }

                new_circle.dataset.outIndx = outIndx+1;
                new_circle.addEventListener('click', (e)=>{

                        if (allNotes[e.target.dataset.symbol]) {
                            let activeBlock = allNotes[e.target.dataset.symbol].createDivTag(e.target.dataset.outIndx,baseSize);
                            activeBlock.classList.add('active');
                            activeBlock.style.left = e.target.style.left;
                            // activeElemLayer.append(activeBlock);
                            delElemInBigElem(e.target);
                            

                            function insertSortedDiv(container, newDiv) {
                                container.appendChild(newDiv); // Вставляем новый div в конец контейнера
                                const childrenArray = Array.from(container.children); // Преобразуем коллекцию дочерних элементов в массив
                                childrenArray.sort((a, b) => a.offsetLeft - b.offsetLeft); // Сортируем дочерние элементы по offSetLeft
                                childrenArray.forEach(child => container.appendChild(child)); // Вставляем отсортированные элементы обратно в контейнер
                            }
                            insertSortedDiv(activeElemLayer, activeBlock); // Вызываем функцию вставки и сортировки
                            
                            if(activeBlock.previousElementSibling){
                                console.log('previousElementSibling');
                                let left_double_arrow = document.createElement('div');
                                left_double_arrow.classList.add('handle');
                                left_double_arrow.classList.add('left_double_arrow');
                                activeBlock.append(left_double_arrow);
                                left_double_arrow.addEventListener('mousedown', (elem)=>{
                                    startResizing(elem, 'left_right');
                                });
                            }
                            if(activeBlock.nextElementSibling){
                                console.log('nextElementSibling');
                                let right_double_arrow = document.createElement('div');
                                right_double_arrow.classList.add('handle');
                                right_double_arrow.classList.add('right_double_arrow');
                                activeBlock.append(right_double_arrow);
                                right_double_arrow.addEventListener('mousedown', (elem)=>{
                                    startResizing(elem, 'left_right');
                                });
                            }

                            borderCollapsResize(activeBlock);
                            
                            activeBlock.addEventListener('dblclick', (e)=>{
                                // console.log("doubleClick" + e.target);
                                if(e.target.classList.contains('active')){
                                    e.target.remove();
                                }
                            });
                        }                    

                });
                // dblclick contextmenu
               
                containMatrix.append(new_circle);
                // activeElemLayer.append(new_circle);

            } // ***************** внутренний цикл

            let numbLabel = document.createElement('div');
            let numb = createNumberMatrix();
            numbLabel.classList.add('numbMatrx');
            numbLabel.textContent = numb[outIndx];
            numbLabel.style.left = leftPosition + 'px';
            containMatrix.append(numbLabel)
            leftPosition = leftPosition + 26.25;
        }
        return [containMatrix,activeElemLayer];
    }
}

// функция удаления активных элементов внутри более большого активного блока
let delElemInBigElem = function(elem){
    let activeContainLayer = document.querySelector('.activeElemLayer');
    let all_active_elem = activeContainLayer.querySelectorAll('.active ');
        for(inp_elem of all_active_elem){
let leftSideItem = Number(inp_elem.style.left.replace('px',''));
let rightSideItem = leftSideItem + Number(inp_elem.style.width.replace('px',''))
let leftSideHero = Number(elem.style.left.replace('px',''));
let widthHero = Number(elem.style.width.replace('px',''));
let rightSideHero = leftSideHero + widthHero;
        if(leftSideItem >= leftSideHero 
            && leftSideItem < leftSideHero + widthHero
            && rightSideItem <= rightSideHero 
            && !elem.classList.contains('active')
            ){
                inp_elem.remove();
        }
    }
}

// функция изменения соседних блоков при наложении границ
let borderCollapsResize = function(elem){
    let previousElement = elem.previousElementSibling;
    if(previousElement){
        let heroElemLeftSide = Number(elem.style.left.replace('px',''));
        let leftSidePrevElem = Number(previousElement.style.left.replace('px',''));
        let widthPrevElem = Number(previousElement.style.width.replace('px',''));
        let rightSidePrevElem = leftSidePrevElem + widthPrevElem;
        let summLeftCollaps = rightSidePrevElem - heroElemLeftSide;
        let resultNewWidth = widthPrevElem - summLeftCollaps;
        if(rightSidePrevElem > heroElemLeftSide){
            // previousElement.style.width = () + 'px';
            hameleon(previousElement,sizeIdentif[resultNewWidth], resultNewWidth);
        }
    }

    let nextElement = elem.nextElementSibling;
    if(nextElement){
        let heroElemRightSide = Number(elem.style.left.replace('px','')) + Number(elem.style.width.replace('px',''));
        let leftSideNextElem = Number(nextElement.style.left.replace('px',''));
        let widthNextElem = Number(nextElement.style.width.replace('px',''));
 
        let summCollaps = heroElemRightSide - leftSideNextElem;
        let resultNewWidth = widthNextElem - summCollaps;
        if(heroElemRightSide > leftSideNextElem){
            // previousElement.style.width = () + 'px';
            hameleon(nextElement,sizeIdentif[resultNewWidth], resultNewWidth, heroElemRightSide);
        }
    }
}

// функция проверки активных блоков, их создания методом createDivTag и удаление remove()
// let listenAndCreateActivElem = function(elem){
//     delElemInBigElem(elem);
//     if (allNotes[elem.dataset.symbol]) {
//         let activeBlock = allNotes[elem.dataset.symbol].createDivTag(elem.dataset.outIndx,baseSize);
//         activeBlock.classList.add('active');
//         elem.append(activeBlock);
//     } 
// }

let app = document.querySelector('.app');
let allLayer = backgroundMatrix.createBackground(backgroundMatrix.matrix_4x4, 0);
// console.log(allLayer);
app.append(allLayer[0]);
app.append(allLayer[1]);



