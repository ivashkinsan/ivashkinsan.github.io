const backgroundMatrix = {
    'app': null,
    'containMatrix': null,
    'activeLayer': null,
    'root': null,
    'newOutIndMatrix': null,
    
    'step': null,
    'baseSize': null,
    'baseWidth': null,
    'minWidth': null,
    'maxWidth': null,

    'leftAppSide': null,
    'rightAppSide': null,
    
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
    'matrix_8x4': [
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
        '16',            //16
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
    addApp(){
        let app = document.querySelector('.app');
        this.app = app;
    },
    createContainMatrix(){
        let newContainMatrix = document.createElement('div');
        newContainMatrix.classList.add('containMatrix');
        this.containMatrix = newContainMatrix;
        this.app.append(newContainMatrix);
    },
    createActiveLayer(){
        let newActiveLayer = document.createElement('div');
        newActiveLayer.classList.add('activeLayer');
        this.activeLayer = newActiveLayer;
        this.app.append(newActiveLayer);
    },
    find_Root_baseSize_baseWidth_step_minWidth_max_width(){
        this.root = document.querySelector(':root');
        this.baseSize = parseFloat(getComputedStyle(this.root).getPropertyValue('--base-size'));
        // this.baseWidth = this.baseSize / 16 * array.length;
        this.step = backgroundMatrix.baseSize / 16; // Шаг изменения блока
        this.minWidth = backgroundMatrix.baseSize / 16;
        this.maxWidth = backgroundMatrix.baseSize;
    },
    createBackground(array, startleftPosition) {
        this.containMatrix.style.width = this.baseWidth + 'px';


        // const root = document.querySelector(':root');
        // this.baseSize = parseFloat(getComputedStyle(root).getPropertyValue('--base-size'));
        // this.baseWidth = this.baseSize / 16 * array.length;

        // const containMatrix = document.createElement('div');
        // containMatrix.classList.add('containMatrix');

        // const activeElemLayer = document.createElement('div');
        // activeElemLayer.classList.add('activeElemLayer');

        // console.log("baseWidth = " + this.baseWidth);
        // baseSize = Number(baseSize.replace('px', ''))


        

        // внешний цикл
        for (let outIndx = 0; outIndx < array.length; outIndx++) {
            let stringToArr = array[outIndx].split(' ');

            // внутренний цикл
            for (let inIndx = 0; inIndx < stringToArr.length; inIndx++) {
                let new_circle = document.createElement('div');
                new_circle.classList.add('mtrxCircle');
                new_circle.style.left = startleftPosition + 'px';
                switch (stringToArr[inIndx]) {
                    case '16':
                        new_circle.classList.add('matrix_16');
                        new_circle.dataset.symbol = 16;
                        new_circle.style.width = this.baseSize / 16 + 'px';
                        new_circle.style.height = this.baseSize / 16 + 'px';
                        break;
                    case '8':
                        new_circle.classList.add('matrix_8');
                        new_circle.dataset.symbol = 8;
                        new_circle.style.width = this.baseSize / 8 + 'px';
                        new_circle.style.height = this.baseSize / 8 + 'px';
                        break;
                    case '4':
                        new_circle.classList.add('matrix_4');
                        new_circle.dataset.symbol = 4;
                        new_circle.style.width = this.baseSize / 4 + 'px';
                        new_circle.style.height = this.baseSize / 4 + 'px';
                        break;
                    case '2':
                        new_circle.classList.add('matrix_2');
                        new_circle.dataset.symbol = 2;
                        new_circle.style.width = this.baseSize / 2 + 'px';
                        new_circle.style.height = this.baseSize / 2 + 'px';
                        break;
                    case '1.5':
                        new_circle.classList.add('matrix_1.5');
                        new_circle.dataset.symbol = 1.5;
                        new_circle.style.width = Math.floor(this.baseSize / 1.33) + 'px';
                        new_circle.style.height = Math.floor(this.baseSize / 1.33) + 'px';
                        break;
                    case '1':
                        new_circle.classList.add('matrix_1');
                        new_circle.dataset.symbol = 1;
                        new_circle.style.width = this.baseSize / 1 + 'px';
                        new_circle.style.height = this.baseSize / 1 + 'px';
                        break;
                }

                new_circle.dataset.outIndx = outIndx + 1;
                new_circle.draggable = false;


                new_circle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('click');
                    create_and_append_active_elem(e.target, activeElemLayer, 'click');
                });
                new_circle.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('touchstart');
                    create_and_append_active_elem(e.target, activeElemLayer, 'click');
                });

                this.containMatrix.append(new_circle);
            }

            newOutIndMatrix[startleftPosition] = String(outIndx + 1);
            startleftPosition = startleftPosition + (this.baseSize / 16);

        }
        return [containMatrix, activeElemLayer];
    }
}


backgroundMatrix.addApp();
backgroundMatrix.createContainMatrix();
backgroundMatrix.createActiveLayer();
backgroundMatrix.find_Root_baseSize_baseWidth_step_minWidth_max_width();

console.log(backgroundMatrix.app);
console.log(backgroundMatrix.containMatrix);
console.log(backgroundMatrix.activeLayer);
console.log(backgroundMatrix);