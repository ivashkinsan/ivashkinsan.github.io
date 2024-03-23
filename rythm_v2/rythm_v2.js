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
                        break;
                    case '8':
                        new_circle.classList.add('matrix_8');
                        new_circle.dataset.symbol = 8;
                        break;
                    case '4':
                        new_circle.classList.add('matrix_4');
                        new_circle.dataset.symbol = 4;
                        break;
                    case '2':
                        new_circle.classList.add('matrix_2');
                        new_circle.dataset.symbol = 2;
                        break;
                    case '1':
                        new_circle.classList.add('matrix_1');
                        new_circle.dataset.symbol = 1;
                        break;
                }
                new_circle.draggable = true;
                new_circle.dataset.outIndx = outIndx+1;
                new_circle.classList.add('droppable');
                new_circle.addEventListener('click', listenAndCreateActivElem);
                containMatrix.append(new_circle);
            } // ***************** внутренний цикл
            leftPosition = leftPosition + 26.25;
        }

        // containMatrix.addEventListener('dragstart', function (evt) {
        //     evt.target.classList.add(`selected`);
        //     // evt.preventDefault();
        //     // console.log(evt);
        // })
        // containMatrix.addEventListener('dragend', function (evt) {
        //     evt.target.classList.remove(`selected`);
        //     // console.log(evt);
        // })
        
        // containMatrix.addEventListener('dragover', function (evt) {
        //     evt.preventDefault();
        //     console.log(evt);
        // })


        return containMatrix;
    }
}

// функция проверки активных блоков, их создания методом createDivTag и удаление remove()
let listenAndCreateActivElem = function(elem){
    elem.preventDefault();
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
    // console.log(elem.target.parentNode);
    if (allNotes[elem.target.dataset.symbol]) {
        let activeBlock = allNotes[elem.target.dataset.symbol].createDivTag(elem.target.dataset.outIndx);
        activeBlock.addEventListener('dragenter', dragoverFunction)
        
        elem.target.append(activeBlock);
        // resizeBlocksFunction();
        // elem.stopPropagation();
    } else {
        elem.target.remove();
    }
}

let dragoverFunction = function(el){

// let mtrxCircles = document.querySelectorAll('.mtrxCircle');
// console.log(mtrxCircles);
// for (item of mtrxCircles){
//     console.log( item.classList);
//     item.classList.remove('droppable');
// }

// let findIdenticalElements = document.querySelectorAll(`.${el.target.dataset.matrix}`);
// for (item of findIdenticalElements){

// if(item.children.length == 0){
//     item.classList.add('droppable');
// } else {
//     el.target.classList.add('draggable');
// }
// }

// const draggables = document.querySelectorAll('.draggable');
let droppables = document.querySelectorAll('.droppable');

droppables.forEach(droppable => {
    droppable.addEventListener('dragenter', function(e) {
        e.preventDefault();
        droppable.classList.add('highlight');
    });

    droppable.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    droppable.addEventListener('dragleave', function() {
        droppable.classList.remove('highlight');
    });

    droppable.addEventListener('drop', function() {
        droppable.classList.remove('highlight');
    });
});



// draggables.forEach(draggable => {
//     console.log(draggable);
//     draggable.addEventListener('dragstart', function() {
//         draggable.classList.add('dragging');
//         console.log('startDragging');
//     });

//     draggable.addEventListener('dragend', function() {
//         draggable.classList.remove('dragging');
//         for (item of findIdenticalElements){
//                 item.classList.remove('droppable');
//                 item.classList.remove('draggable');
//             }
//     });
// }
// );
}


let app = document.querySelector('.app');
app.append(backgroundMatrix.createBackground(backgroundMatrix.matrix_4x4, 40));





// растягивание элемента за края
// let resizeBlocksFunction = function(){
//     const resizableBlocks = document.querySelectorAll('.resizable');
// let isResizing = false;
// let lastX;

// resizableBlocks.forEach(block => {
//     block.addEventListener('mousedown', function(e) {
//         isResizing = true;
//         lastX = e.clientX;
//     });
// });

// document.addEventListener('mousemove', function(e) {
//     if(isResizing) {
//         resizableBlocks.forEach(block => {
//             const diffX = e.clientX - lastX;
//             block.style.width = (block.offsetWidth + diffX) + 'px';
//             lastX = e.clientX;
//         });
//     }
// });

// document.addEventListener('mouseup', function() {
//     isResizing = false;
// });
// }
