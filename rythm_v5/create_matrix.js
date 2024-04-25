const backgroundMatrix = {
    'app': null,
    'containMatrix': null,
    'activeLayer': null,
    'activeLayerStack': {},
    'root': null,
    'newOutIndMatrix': {},
    'sizeIdentif': {},
    
    'step': null,
    'baseSize': null,
    'baseWidth': null,
    'minWidth': null,
    'maxWidth': null,
    'startleftPosition': 0,

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
        
        // this.baseWidth = this.baseSize;
        this.step = backgroundMatrix.baseSize / 16; // Шаг изменения блока
        this.minWidth = backgroundMatrix.baseSize / 16;
        this.maxWidth = backgroundMatrix.baseSize;
    },
    // в бэкграунде на каждый элемент настроен клик
    createBackground(array, startleftPosition) {
        let boundingPosition = this.app.getBoundingClientRect();
        // this.leftAppSide = boundingPosition.left;
        // this.rightAppSide = boundingPosition.right;
        this.baseWidth = this.baseSize / 16 * array.length;
        this.containMatrix.style.width = this.baseWidth + 'px';
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
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 16]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 16];
                        new_circle.style.width = this.baseSize / 16 + 'px';
                        new_circle.style.height = this.baseSize / 16 + 'px';
                        break;
                    case '8':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 8]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 8];
                        new_circle.style.width = this.baseSize / 8 + 'px';
                        new_circle.style.height = this.baseSize / 8 + 'px';
                        break;
                    case '4':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 4]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 4];
                        new_circle.style.width = this.baseSize / 4 + 'px';
                        new_circle.style.height = this.baseSize / 4 + 'px';
                        break;
                    case '2':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 2]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 2];
                        new_circle.style.width = this.baseSize / 2 + 'px';
                        new_circle.style.height = this.baseSize / 2 + 'px';
                        break;
                    case '1':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 1]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 1];
                        new_circle.style.width = this.baseSize / 1 + 'px';
                        new_circle.style.height = this.baseSize / 1 + 'px';
                        break;
                }

                new_circle.dataset.indxPosition = outIndx + 1;
                new_circle.draggable = false;


                new_circle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.create_note(
                        new_circle.dataset.name,
                        Number(new_circle.style.width.replace('px','')),
                        Number(e.target.style.left.replace('px','')),
                        new_circle.dataset.indxPosition
                    );
                    // create_and_append_active_elem(e.target, activeElemLayer, 'click');
                });
                // new_circle.addEventListener('touchstart', (e) => {
                //     e.preventDefault();
                //     e.stopPropagation();
                //     console.log('touchstart');
                //     create_and_append_active_elem(e.target, activeElemLayer, 'click');
                // });

                this.containMatrix.append(new_circle);
                if(outIndx == 0){
                    this.leftAppSide = new_circle.getBoundingClientRect().left;
                }
                if(outIndx == array.length-1){
                    this.rightAppSide = new_circle.getBoundingClientRect().right;
                }
            }

            this.newOutIndMatrix[startleftPosition] = String(outIndx + 1);
            startleftPosition = startleftPosition + (this.baseSize / 16);
        }
    },
    createSizeIdentif() {
        let newSizeIdentif = {
            [(backgroundMatrix.baseSize / 16) * 1]: 'sixteenthNote_16',
            [(backgroundMatrix.baseSize / 16) * 2]: 'eighthNote_8',
            [(backgroundMatrix.baseSize / 16) * 3]: 'eighthNote_8w16',
            [(backgroundMatrix.baseSize / 16) * 4]: 'quarterNote_4',
            [(backgroundMatrix.baseSize / 16) * 5]: 'quarterNote_4w16',
            [(backgroundMatrix.baseSize / 16) * 6]: 'quarterNote_4w8',
            [(backgroundMatrix.baseSize / 16) * 7]: 'quarterNote_4w8w16',
            [(backgroundMatrix.baseSize / 16) * 8]: 'halfNote_2',
            [(backgroundMatrix.baseSize / 16) * 9]: 'halfNote_2w16',
            [(backgroundMatrix.baseSize / 16) * 10]: 'halfNote_2w8',
            [(backgroundMatrix.baseSize / 16) * 11]: 'halfNote_2w8w16',
            [(backgroundMatrix.baseSize / 16) * 12]: 'halfNote_2w4',
            [(backgroundMatrix.baseSize / 16) * 13]: 'halfNote_2w4w16',
            [(backgroundMatrix.baseSize / 16) * 14]: 'halfNote_2w4w8',
            [(backgroundMatrix.baseSize / 16) * 15]: 'halfNote_2w4w8w16',
            [(backgroundMatrix.baseSize / 16) * 16]: 'wholeNote_1',
            // триоли
            [backgroundMatrix.baseSize / 12]: 'eighthNote_8_triple',
            [backgroundMatrix.baseSize / 6]: 'quarterNote_4_triple',
        }
        this.sizeIdentif = newSizeIdentif;
        console.log(newSizeIdentif);
    },
    create_note(name, width, leftPosition, indxPosition){
        let note = new Note(
            allSymbolForNotes_2_4[name], 
            width,
            leftPosition,
            indxPosition
         );
        note.createNoteDiv(); // создать див элемент ноты
        note.createHandle(); // создать внутренние handle
        note.createLabel(); // создать внутренний p для сивола нот и пауз
        note.delElemInBigElem(); // удалить элементы внутри нового блока

        this.activeLayerStack[note.id] = note;
        this.activeLayer.append(note.div); // вставить ноту в активный слой
        this.sortedActiveLayer(this.activeLayer, note.div); // сортировать с лева на право
        this.researchAllNextPrevElem();  // найти и добавить все параметры окружения у активных нот
        note.ifBorderCollapse_resize(); // если новая нота наслаивается на уже имеющуюся - изменить размер старой
        note.addEventListenerForPauseTransform(); // добавить обработчик для ссмены ноты на паузу
        note.div.addEventListener('contextmenu', (event)=>{
            event.preventDefault();
            event.stopPropagation();
            let previousElemId = this.previousElemId ? this.previousElemId : null;
            let nextElemId = this.nextElemId ? this.nextElemId : null;
            note.deleteNote(note.id);
            note = null;
            if(previousElemId){
                console.log(backgroundMatrix.activeLayerStack[previousElemId]);
                backgroundMatrix.activeLayerStack[previousElemId].findPrevNextElemsAndFindParam();
            }
            if(nextElemId){
                console.log(backgroundMatrix.activeLayerStack[nextElemId]);
                backgroundMatrix.activeLayerStack[nextElemId].findPrevNextElemsAndFindParam();
            }
            // console.log(note);
    })
    },
    sortedActiveLayer(container, newDiv) {
        container.appendChild(newDiv); // Вставляем новый div в конец контейнера
        const childrenArray = Array.from(container.children); // Преобразуем коллекцию дочерних элементов в массив
        childrenArray.sort((a, b) => a.offsetLeft - b.offsetLeft); // Сортируем дочерние элементы по offSetLeft
        childrenArray.forEach(child => container.appendChild(child)); // Вставляем отсортированные элементы обратно в контейнер
    },
    researchAllNextPrevElem(){
        for(let key in this.activeLayerStack){
            this.activeLayerStack[key].findPrevNextElemsAndFindParam();
        }
    }
}



backgroundMatrix.addApp();
backgroundMatrix.createContainMatrix();
backgroundMatrix.createActiveLayer();
backgroundMatrix.find_Root_baseSize_baseWidth_step_minWidth_max_width();
backgroundMatrix.createSizeIdentif();
backgroundMatrix.createBackground(backgroundMatrix.matrix_8x4, backgroundMatrix.startleftPosition);
// console.log(backgroundMatrix.newOutIndMatrix);
// console.log(backgroundMatrix.app);
// console.log(backgroundMatrix.containMatrix);
// console.log(backgroundMatrix.activeLayer);

// console.log(backgroundMatrix);