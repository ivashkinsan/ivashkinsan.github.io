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
                new_circle.addEventListener('click', function (elem) {
                    console.log(elem.target.parentNode);

                    if (allNotes[elem.target.dataset.symbol]) {
                        elem.target.append(allNotes[elem.target.dataset.symbol].createDivTag());
                        // elem.stopPropagation();
                    } else {
                        elem.target.remove();
                    }

                    let all_active_elem = document.querySelectorAll('.active ');

                })
                containMatrix.append(new_circle);
            } // ***************** внутренний цикл


            leftPosition = leftPosition + 26.25;
        }
        return containMatrix;
    }
}

let app = document.querySelector('.app');
app.append(backgroundMatrix.createBackground(backgroundMatrix.matrix_4x4, 40));