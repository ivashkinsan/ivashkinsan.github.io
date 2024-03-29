// число-делитель для масштабирования
let constNumber = 5;



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
                // new_circle.draggable = true;
                
                new_circle.dataset.outIndx = outIndx+1;
                new_circle.classList.add('droppable');
                new_circle.addEventListener('click', listenAndCreateActivElem);
                containMatrix.append(new_circle);

              
                
                new_circle.addEventListener('dragenter', function(e) {
                    e.preventDefault();
                    new_circle.classList.add('highlight');
                    // startDragElem = e.target;
                    // console.log(droppable.clientHeight);
                });
            
                new_circle.addEventListener('dragover', function(e) {
                    e.preventDefault();
                });
            
                new_circle.addEventListener('dragleave', function() {
                    new_circle.classList.remove('highlight');
                });
            
                new_circle.addEventListener('drop', function(e) {
                    // delElemInBigElem(startDragElem);
                    new_circle.classList.remove('highlight');
                    e.preventDefault();
                    console.log(startDragElem);
                    let widthElemNumb = Number(startDragElem.style.width.replace('px',''));
                    let droppableElemWidth = Number(new_circle.style.width.replace('px',''));
                    let newWidthElem = widthElemNumb + droppableElemWidth;
                   
                    startDragElem.style.width = newWidthElem + 'px';
                    startDragElem.style.height = newWidthElem + 'px';
                  
                    console.log(baseSize + ' / ' + newWidthElem);
                    console.log('baseSize % newWidthElem');
                    console.log(baseSize % newWidthElem);
                    switch('true'){
case (baseSize % 8 == 0):
    console.log('деление без остатка');
    break;
                    }
                });

            } // ***************** внутренний цикл
            leftPosition = leftPosition + 26.25;
        }
        return containMatrix;
    }
}

// функция удаления активных элементов внутри более большого активного блока
let delElemInBigElem = function(elem){
    let all_active_elem = document.querySelectorAll('.active ');
        for(item of all_active_elem){
        // console.log("elem.target.offsetLeft " + elem.target.offsetLeft + ">=" + item.parentNode.offsetLeft + "item.parentNode.offsetLeft");
        if(item.parentNode.offsetLeft >= elem.target.offsetLeft && 
            item.parentNode.offsetLeft < elem.target.offsetLeft + elem.target.offsetWidth - 1 &&
            !elem.target.classList.contains('active')
            ){
            item.remove();
        }
    }
}

// функция проверки активных блоков, их создания методом createDivTag и удаление remove()
let listenAndCreateActivElem = function(elem){
    delElemInBigElem(elem);

    if (allNotes[elem.target.dataset.symbol]) {
        let activeBlock = allNotes[elem.target.dataset.symbol].createDivTag(elem.target.dataset.outIndx,baseSize);
        activeBlock.addEventListener('dragstart', function(e) {
            activeBlock.classList.add('dragging');
            
            startDragElem = e.target;
        });
        activeBlock.addEventListener('dragend', function() {
            activeBlock.classList.remove('dragging');            
        });
        
console.log(activeBlock);
        elem.target.append(activeBlock);
    } else {
        elem.target.remove();
    }
}


let app = document.querySelector('.app');
app.append(backgroundMatrix.createBackground(backgroundMatrix.matrix_4x4, 40));
