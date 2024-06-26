const bgMatrix = {
    'app': null,
    'containMatrix': null,
    'activeLayer': null,
    'idStack': {},
    'root': null,
    'newOutIndMatrix': {},
    'sizeIdentif': {},
    'allSolfejioLabel': [],

    'step': null,
    'baseSize': null,
    'baseWidth': null,
    'minWidth': null,
    'maxWidth': null,
    'startleftPosition': 0,

    'leftAppSide': null,
    'rightAppSide': null,

    'notes': {},

    undoStack: [],
    redoStack: [],
    undoButton: document.getElementById('undoButton'),
    redoButton: document.getElementById('redoButton'),

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
        '2w4 2 4 8 16',     //1
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
    'matrix_5x4': [
        '1 2 4 8 16',   //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '1 2 4 8 16',       //5
        '16',           //6
        '8 16',         //7
        '16',           //8
        '2 4 8 16',     //9
        '16',           //10
        '8 16',         //11
        '16',           //12
        '2 4 8 16',       //13
        '16',           //14
        '8 16',         //15
        '16',            //16
        '4 8 16',       //17
        '16',           //18
        '8 16',         //19
        '16'            //20
    ],
    'matrix_6x4': [
        '1 2 4 8 16', //1
        '16',           //2
        '8 16',         //3
        '16',           //4
        '4 8 16',     //5
        '16',           //6
        '8 16',         //7
        '16',           //8
        '1 2 4 8 16',       //9
        '16',           //10
        '8 16',         //11
        '16',           //12
        '4 8 16', //13
        '16',           //14
        '8 16',         //15
        '16',           //16
        '2 4 8 16',     //17
        '16',           //18
        '8 16',         //19
        '16',           //20
        '4 8 16',       //21
        '16',           //22
        '8 16',         //23
        '16',           //24
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
    'experiment': [
        '1 2 4 8 16',   //1
        '1 2 4 8 16',       //2
        '1 2 4 8 16',        //3
        '1 2 4 8 16',       //4
        '1 2 4 8 16',      //5
        '1 2 4 8 16',         //6
        '1 2 4 8 16',        //7
        '1 2 4 8 16',           //8
        '1 2 4 8 16',     //9
        '1 2 4 8 16',          //10
        '1 2 4 8 16',         //11
        '1 2 4 8 16',         //12
        '1 2 4 8 16',       //13
        '1 2 4 8 16',         //14
        '1 2 4 8 16',         //15
        '1 2 4 8 16',          //16

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
    'matrix_6x8': [
        '4w8 8w16 16',   //1
        '16',           //2
        '16',           //3
        '8w16 16',       //4
        '16',           //5
        '16',           //6
    ],
    'matrix_9x8': [
        '2w16 4w8 8w16 16',   //1
        '16',           //2
        '16',           //3
        '4w8 8w16 16',   //4
        '16',           //5
        '16',           //6
        '8w16 16',       //7
        '16',           //8
        '16',           //9
    ],
    'matrix_12x8': [
        '2w4 4w8 8w16 16',     //1
        '16',                       //2
        '16',                       //3
        '8w16 16',         //4
        '16',                       //5
        '16',                       //6
        '4w8 8w16 16',              //7
        '16',                       //8
        '16',                       //9
        '8w16 16',                  //10
        '16',                       //11
        '16',                       //12
    ],
    addApp() {
        let app = document.querySelector('.app');
        this.app = app;
        this.app.addEventListener('mouseup', (event) => {
            this.saveState();
        })
    },
    createContainMatrix() {
        let newContainMatrix = document.createElement('div');
        newContainMatrix.classList.add('containMatrix');
        this.containMatrix = newContainMatrix;
        this.app.append(newContainMatrix);
    },
    createActiveLayer() {
        let newActiveLayer = document.createElement('div');
        newActiveLayer.classList.add('activeLayer');
        this.activeLayer = newActiveLayer;
        this.app.append(newActiveLayer);
    },
    find_Root_baseSize_baseWidth_step_minWidth_max_width() {
        if (baseSettings.screenWidth < 850) {
            document.documentElement.style.setProperty('--base-size', '400px');
        }
        if (baseSettings.screenWidth > 850 || baseSettings.screenWidth < 1366) {
            document.documentElement.style.setProperty('--base-size', '600px');
        }
        if (baseSettings.screenWidth > 1366) {
            document.documentElement.style.setProperty('--base-size', '840px');
        }
        // document.querySelector('body').style.width = baseSettings.screenWidth + 'px';
        // document.querySelector('body').style.height = baseSettings.screenHeight + 'px';
        this.root = document.querySelector(':root');
        this.baseSize = parseFloat(getComputedStyle(this.root).getPropertyValue('--base-size'));
        console.log('baseSettings');
        console.log(baseSettings);
        // this.baseWidth = this.baseSize;
        this.step = bgMatrix.baseSize / 16; // Шаг изменения блока
        this.minWidth = bgMatrix.baseSize / 16;
        this.maxWidth = bgMatrix.baseSize;
    },
    addNotes(input, elem){
        // console.log(input);
        // console.log(elem);
        if (!this.notes.hasOwnProperty(input)) {
            this.notes[input] = [];
          }
        if(this.notes.hasOwnProperty(input)){
            this.notes[input].push(elem);
          }
    },
    // в бэкграунде на каждый элемент настроен клик
    createBackground(array, startleftPosition) {
        this.notes = {};
        this.undoStack = [];
        this.redoStack = [];
        
        while (this.containMatrix.firstChild) {
            this.containMatrix.removeChild(this.containMatrix.firstChild);
        }

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
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_16');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '8':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 8]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 8];
                        new_circle.style.width = this.baseSize / 8 + 'px';
                        new_circle.style.height = this.baseSize / 8 + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_8');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '4':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 4]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 4];
                        new_circle.style.width = this.baseSize / 4 + 'px';
                        new_circle.style.height = this.baseSize / 4 + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_4');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '2':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 2]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 2];
                        new_circle.style.width = this.baseSize / 2 + 'px';
                        new_circle.style.height = this.baseSize / 2 + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_2');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '1':
                        new_circle.classList.add(this.sizeIdentif[this.baseSize / 1]);
                        new_circle.dataset.name = this.sizeIdentif[this.baseSize / 1];
                        new_circle.style.width = this.baseSize / 1 + 'px';
                        new_circle.style.height = this.baseSize / 1 + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_1');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;

                    case '2w4':
                        new_circle.classList.add(this.sizeIdentif[((bgMatrix.baseSize / 16) * 12)]);
                        new_circle.dataset.name = this.sizeIdentif[((bgMatrix.baseSize / 16) * 12)];
                        new_circle.style.width = ((bgMatrix.baseSize / 16) * 12) + 'px';
                        new_circle.style.height = ((bgMatrix.baseSize / 16) * 12) + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_2w4');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '2w16':
                        new_circle.classList.add(this.sizeIdentif[((bgMatrix.baseSize / 16) * 9)]);
                        new_circle.dataset.name = this.sizeIdentif[((bgMatrix.baseSize / 16) * 9)];
                        new_circle.style.width = ((bgMatrix.baseSize / 16) * 9) + 'px';
                        new_circle.style.height = ((bgMatrix.baseSize / 16) * 9) + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_2w4');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '4w8':
                        new_circle.classList.add(this.sizeIdentif[((bgMatrix.baseSize / 16) * 6)]);
                        new_circle.dataset.name = this.sizeIdentif[((bgMatrix.baseSize / 16) * 6)];
                        new_circle.style.width = ((bgMatrix.baseSize / 16) * 6) + 'px';
                        new_circle.style.height = ((bgMatrix.baseSize / 16) * 6) + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_4w8');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;
                    case '8w16':
                        new_circle.classList.add(this.sizeIdentif[((bgMatrix.baseSize / 16) * 3)]);
                        new_circle.dataset.name = this.sizeIdentif[((bgMatrix.baseSize / 16) * 3)];
                        new_circle.style.width = ((bgMatrix.baseSize / 16) * 3) + 'px';
                        new_circle.style.height = ((bgMatrix.baseSize / 16) * 3) + 'px';
                        new_circle.classList.add('mtrxCircle');
                        new_circle.classList.add('matrix_8w16');
                        this.addNotes(new_circle.dataset.name, new_circle);
                        break;

                }

                new_circle.dataset.indxPosition = outIndx + 1;
                new_circle.draggable = false;

                new_circle.append(this.createLabelSolf(new_circle.classList[1]));

                new_circle.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.create_note(
                        new_circle.dataset.name,
                        Number(new_circle.style.width.replace('px', '')),
                        Number(e.target.style.left.replace('px', '')),
                        new_circle.dataset.indxPosition
                    );
                });
                // new_circle.addEventListener('touchstart', (e) => {
                //     e.preventDefault();
                //     e.stopPropagation();
                //     console.log('touchstart');
                //     create_and_append_active_elem(e.target, activeElemLayer, 'click');
                // });

                this.containMatrix.append(new_circle);
                if (outIndx == 0) {
                    this.leftAppSide = new_circle.getBoundingClientRect().left;
                }
                if (outIndx == array.length - 1) {
                    this.rightAppSide = new_circle.getBoundingClientRect().right;
                }
            }

            this.newOutIndMatrix[startleftPosition] = String(outIndx + 1);
            startleftPosition = startleftPosition + (this.baseSize / 16);

        }

        // ================ red marker =====================
        // let boundingPosition = this.app.getBoundingClientRect();
        // console.log(boundingPosition);
        // let marker = document.createElement('div');
        // marker.style = 'position: absolute; width: 3px; height: 50px; background: red; z-index: 2000;'
        // marker.style.left = boundingPosition.left + 'px';
        // marker.style.top = boundingPosition.top + 'px';
        // document.querySelector('body').append(marker);
        // this.leftAppSide = boundingPosition.left;
        // this.rightAppSide = boundingPosition.right;
        bgMatrix.createTripletNotes();
    },
    createTripletNotes(){
        for(let item of bgMatrix.notes.quarterNote_4){
            let startLeftPosition = Number(item.style.left.replace('px',''));
            let itemWidth = Number(item.style.width.replace('px',''));
            let newWidth = itemWidth / 3;
            console.log([startLeftPosition,itemWidth,newWidth]);
            for(let i = 0; i < 3; i++){
                let new_circle = document.createElement('div');
                new_circle.classList.add('mtrxCircle');
                new_circle.style.left = startLeftPosition + 'px';
                new_circle.classList.add(bgMatrix.sizeIdentif[bgMatrix.baseSize / 12]);
                new_circle.dataset.name = bgMatrix.sizeIdentif[bgMatrix.baseSize / 12];
                new_circle.style.width = bgMatrix.baseSize / 12 + 'px';
                new_circle.style.height = bgMatrix.baseSize / 12 + 'px';
                new_circle.classList.add('eighthNote_8_triple');
                new_circle.classList.add('display_none');
                bgMatrix.addNotes(new_circle.dataset.name, new_circle);

                bgMatrix.containMatrix.append(new_circle);
                startLeftPosition += newWidth;
                console.log(startLeftPosition);
                this.addNotes(new_circle.dataset.name, new_circle);
            }
        }
    },
    createLabelSolf(info) {
        let newLabel = new solfedjioLabel();
        // newLabel.createDiv();
        newLabel.textContent = '';
        newLabel.paragraph.dataset.class = info;
        // console.log(newLabel.paragraph);
        this.allSolfejioLabel.push(newLabel.paragraph);
        // console.log(this.allSolfejioLabel);
        return newLabel.paragraph;
    },
    createSizeIdentif() {
        let newSizeIdentif = {
            // основные длительности
            [(bgMatrix.baseSize / 16) * 1]: 'sixteenthNote_16',
            [(bgMatrix.baseSize / 16) * 2]: 'eighthNote_8',
            [(bgMatrix.baseSize / 16) * 3]: 'eighthNote_8w16',
            [(bgMatrix.baseSize / 16) * 4]: 'quarterNote_4',
            [(bgMatrix.baseSize / 16) * 5]: 'quarterNote_4w16',
            [(bgMatrix.baseSize / 16) * 6]: 'quarterNote_4w8',
            [(bgMatrix.baseSize / 16) * 7]: 'quarterNote_4w8w16',
            [(bgMatrix.baseSize / 16) * 8]: 'halfNote_2',
            [(bgMatrix.baseSize / 16) * 9]: 'halfNote_2w16',
            [(bgMatrix.baseSize / 16) * 10]: 'halfNote_2w8',
            [(bgMatrix.baseSize / 16) * 11]: 'halfNote_2w8w16',
            [(bgMatrix.baseSize / 16) * 12]: 'halfNote_2w4',
            [(bgMatrix.baseSize / 16) * 13]: 'halfNote_2w4w16',
            [(bgMatrix.baseSize / 16) * 14]: 'halfNote_2w4w8',
            [(bgMatrix.baseSize / 16) * 15]: 'halfNote_2w4w8w16',
            [(bgMatrix.baseSize / 16) * 16]: 'wholeNote_1',
            // триоли
            [bgMatrix.baseSize / 12]: 'eighthNote_8_triple',
            [bgMatrix.baseSize / 6]: 'quarterNote_4_triple',
        }
        this.sizeIdentif = newSizeIdentif;
        // console.log(newSizeIdentif);
    },
    create_note(name, width, leftPosition, indxPosition, isPause) {
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
        // console.log(this.idStack);
        this.idStack[note.id] = note;
        this.activeLayer.append(note.div); // вставить ноту в активный слой
        this.sortedActiveLayer(); // сортировать с лева на право
        this.researchAllNextPrevElem();  // найти и добавить все параметры окружения у активных нот
        note.ifBorderCollapse_resize(); // если новая нота наслаивается на уже имеющуюся - изменить размер старой
        if (isPause == true) {
            // note.magicNoteOrPause();
            note.isPause = true;
        } else {
            note.isPause = false;
        }

        note.addEventListenerForPauseTransform(); // добавить обработчик для смены ноты на паузу
        note.addTouchEventForPauseAndResizeTransform(); // добавить обработчик touch для смены ноты на паузу
        note.div.addEventListener('contextmenu', (event) => { // обработчик для удаления ноты
            event.preventDefault();
            // event.stopPropagation();
            let previousElemId = this.previousElemId ? this.previousElemId : undefined;
            let nextElemId = this.nextElemId ? this.nextElemId : undefined;
            note.deleteNote(note.id);
            note = null;
            // if (previousElemId) {
            //     console.log(['PreviousEl', bgMatrix.idStack[previousElemId]]);
            //     bgMatrix.idStack[previousElemId].findPrevNextElemsAndFindParam();
            // }
            // if (nextElemId) {
            //     console.log(['NextEl', bgMatrix.idStack[nextElemId]]);
            //     bgMatrix.idStack[nextElemId].findPrevNextElemsAndFindParam();
            // }
            this.researchAllNextPrevElem();
        })
    },
    clearActiveElem() {

        for (let key in this.idStack) {
            this.idStack[key].deleteNote(this.idStack[key].id);
            // this.idStack[key] = null;
            // console.log(this.idStack[key]);
        }
        this.idStack = {};
    },
    sortedActiveLayer(container, newDiv) {
        // container.appendChild(newDiv); // Вставляем новый div в конец контейнера
        const childrenArray = Array.from(this.activeLayer.children); // Преобразуем коллекцию дочерних элементов в массив
        childrenArray.sort((a, b) => a.offsetLeft - b.offsetLeft); // Сортируем дочерние элементы по offSetLeft
        childrenArray.forEach(child => this.activeLayer.appendChild(child)); // Вставляем отсортированные элементы обратно в контейнер
    },
    researchAllNextPrevElem() {
        for (let key in this.idStack) {
            this.idStack[key].findPrevNextElemsAndFindParam();
            this.idStack[key].findPrevNextForShowHandle();
        }
    },
    saveState(start) {
        console.log('bgMatrix.saveState();');
        
        this.redoStack = [];
        // сохранить размер, позицию, качество
        let newStateIdStack = [];
        for (let key in this.idStack) {
            newStateIdStack.push(
                {
                    id: this.idStack[key].id,
                    name: this.idStack[key].name,
                    width: this.idStack[key]._width,
                    leftPosition: this.idStack[key]._leftSidePosition,
                    indxPosition: this.idStack[key].indxPosition,
                    isPause: this.idStack[key].isPause
                }
            );
        }
        this.undoStack.push(newStateIdStack);
        randomBtnSection.undoButton.disabled = false;
        randomBtnSection.redoButton.disabled = true;
        console.log(`undo = ${this.undoStack.length} redo = ${this.redoStack.length}`);
        console.log(this.undoStack);
    },
    undo() {
        // Текущее состояние перезаписать в redoStack
        this.redoStack.push(this.undoStack.pop());
        // Получаем предыдущее состояние
        let previousState = this.undoStack[this.undoStack.length-1];
        // Очищаем активный слой
        bgMatrix.clearActiveElem();
        // активировать redo button
        randomBtnSection.redoButton.disabled = false;
        console.log(`undo = ${this.undoStack.length} redo = ${this.redoStack.length}`);
        // если undoStack пустой 
        if (this.undoStack.length == 0) {
            // деактивировать button
            randomBtnSection.undoButton.disabled = true;
            // оставить стек массивом и выйти из функции
            this.undoStack = [];
            return;
        }
        // Восстанавливаем состояние элементов в activeLayer
        for (let item of previousState) {
            this.create_note(
                item.name,
                item.width,
                item.leftPosition,
                item.indxPosition,
                item.isPause
            )
        }
    },
    redo() {
        // Сохраняем текущее состояние в undoStack
        let nextState = this.redoStack.pop();
        if (nextState == undefined) {
            return;
        };
        this.undoStack.push(nextState);
        randomBtnSection.undoButton.disabled = false;
        // Очищаем активный слой
        bgMatrix.clearActiveElem();
        // Восстанавливаем состояние элементов в activeLayer
        for (let item of nextState) {
            this.create_note(
                item.name,
                item.width,
                item.leftPosition,
                item.indxPosition,
                item.isPause
            )
        }
        console.log(`undo = ${this.undoStack.length} redo = ${this.redoStack.length}`);
        if (this.redoStack.length == 0) {
            randomBtnSection.redoButton.disabled = true;
        }
    }
}




bgMatrix.addApp();
bgMatrix.createContainMatrix();
bgMatrix.createActiveLayer();
bgMatrix.find_Root_baseSize_baseWidth_step_minWidth_max_width();
bgMatrix.createSizeIdentif();
bgMatrix.createBackground(bgMatrix.matrix_8x4, bgMatrix.startleftPosition);


// bgMatrix.saveState('start');
