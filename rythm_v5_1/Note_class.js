class Note {
    constructor(obj, size, leftPosition, indxPosition) {
        this.name = obj.class;
        this._class = obj.class;
        this.id = null;
        this.indxPosition = indxPosition;
        this._isPause = false;
        this._width = size;
        this._height = size;
        this._leftSidePosition = leftPosition;
        this.newLeftPosition = null;
        this.startWidth = null;
        this._rightSidePosition = null;
        this.notesSymbol = obj.notesSymbol;
        this.pausesSymbol = obj.pausesSymbol;
        this._label = null;
        this.previousElemId = null;
        this.nextElemId = null;
        this.div = null;
        this.handle = {};
        this.startResizing = this.startResizing.bind(this);
        this.resize = this.resize.bind(this);
        this.stopResizing = this.stopResizing.bind(this);
        this.direction = null;
        this.startX = null;
        this.diff = null;
    }

    createHandle() {

        // left
        let leftHandle = document.createElement('div');
        leftHandle.classList.add('handle', 'left-handle');
        leftHandle.classList.add('display_none');
        leftHandle.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'left',);
        });

        this.handle.leftHandle = leftHandle;
        // console.log(this.div);
        this.div.append(this.handle.leftHandle);

        // right
        let righttHandle = document.createElement('div');
        righttHandle.classList.add('handle', 'right-handle');
        righttHandle.classList.add('display_none');
        righttHandle.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'right',);
        });

        this.handle.rightHandle = righttHandle;
        this.div.append(this.handle.rightHandle);

        // left-right
        let left_double_arrow = document.createElement('div');
        left_double_arrow.draggable = true;
        // left_double_arrow.classList.add('handle');
        left_double_arrow.classList.add('left_double_arrow');
        left_double_arrow.classList.add('display_none');
        left_double_arrow.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'left_right',);
        });

        this.handle.leftRightHandle = left_double_arrow;
        this.div.append(this.handle.leftRightHandle);
    }
    findPrevNextForShowHandle() {
        if (bgMatrix.idStack[this.previousElemId]
            && bgMatrix.idStack[this.previousElemId]._rightSidePosition == this._leftSidePosition
        ) {
            this.handle.leftRightHandle.classList.remove('display_none');
            if (bgMatrix.idStack[this.previousElemId].div.classList.contains('sixteenthNote_16')
                && this.div.classList.contains('sixteenthNote_16')
            ) {
                this.handle.leftRightHandle.classList.add('display_none');
            }
        } else if (bgMatrix.idStack[this.previousElemId]) {
            this.handle.leftRightHandle.classList.add('display_none');
        }
        if (bgMatrix.idStack[this.nextElemId]
            && bgMatrix.idStack[this.nextElemId]._rightSidePosition == this._leftSidePosition) {
            bgMatrix.idStack[this.nextElemId].handle.leftRightHandle.classList.remove('display_none');
        }
        if (!bgMatrix.idStack[this.previousElemId] && !bgMatrix.idStack[this.nextElemId]) {
            this.handle.leftRightHandle.classList.add('display_none');
        }


    }
    handleBehavior(sms) {
        if (sms == 'show' && this._leftSidePosition == this.previousElemRightSide) {
            this.handle.leftRightHandle.style.display = 'block';
            this.handle.leftRightHandle.classList.remove('display_none');
            console.log([this._leftSidePosition, " == ", this.previousElemRightSide]);
        } else {
            this.handle.leftRightHandle.style.display = 'none';
            this.handle.leftRightHandle.classList.add('display_none');
        }

    }
    findPrevNextElemsAndFindParam() {
        // console.log(bgMatrix.idStack);
        if (this.div.nextElementSibling) {
            this.nextElemId = this.div.nextElementSibling.dataset.id;
            this.nextElem = this.div.nextElementSibling
        } else {
            this.nextElemId = null;
            this.nextElem = null;
        }
        if (this.div.previousElementSibling) {
            this.previousElemId = this.div.previousElementSibling.dataset.id;
            this.previousElem = this.div.previousElementSibling;
        } else {
            this.previousElemId = null;
            this.previousElem = null;
        }
    }
    createLabel() {
        let p_label = document.createElement('p');
        // if (is_pause) {
            // p_label.textContent = this.pausesSymbol.default;
        // } else {
            // p_label.textContent = this.notesSymbol.default;
        // }
        
        this._label = p_label;
        this.div.append(this._label);
        this.isPause = false;
    }
    createNoteDiv() {
        let newNoteDiv = document.createElement('div');
        newNoteDiv.classList.add(this._class);
        newNoteDiv.classList.add('active');
        newNoteDiv.style.width = this._width + 'px';
        newNoteDiv.style.height = this._height + 'px';
        newNoteDiv.style.left = this._leftSidePosition + 'px';

        this.id = this.idGenerator();
        this.div = newNoteDiv;
        this.div.dataset.id = this.id;
        this.rightSidePosition = this._leftSidePosition + this._width;
    }
    findCursorPosition(e){
        let rect = this.getBoundingClientRect();
        let percentForTouchLeftRight = (rect.width / 100 * 20)
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        // console.log(rect);
        // console.log( `rect = ${rect} x = ${x} y = ${y}`);
        if((rect.width - x) < percentForTouchLeftRight || x < percentForTouchLeftRight){
            this.style.cursor = 'url(\'/cursor/left_and_right_40_figma.svg\')16 16, auto';
        } else {
            this.style.cursor = 'url(\'/cursor/note_pause_40_figma.svg\')16 16, auto'; 
        }

        // if (y < rect.height / 2) {
        //     this.style.cursor = "pointer";
        // } else {
        //     this.style.cursor = "default";
        // }
    }
    addEventListenerForPauseTransform() {
        this.div.addEventListener('mousedown', (event) => {
            let rect = this.div.getBoundingClientRect();
        let percentForTouchLeftRight = (rect.width / 100 * 20)
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
            // console.log(event);
            event.preventDefault();
            event.stopPropagation();
           

            if((rect.width - x) < percentForTouchLeftRight){
                this.startResizing(event, 'right',);
            } else if(x < percentForTouchLeftRight){
                this.startResizing(event, 'left',);
            } else {
                if (event.button == 0) {
                    this.isPause = this._isPause === true ? false : true;
                }
            }
        })
        
        this.div.addEventListener('mousemove', this.findCursorPosition);
    }

    addTouchEventForPauseAndResizeTransform(){
        this.div.addEventListener('touchstart', (event) => {

            let touch = event.touches[0];
            let rect = event.target.getBoundingClientRect();
            let touchX_inElem = touch.clientX - rect.left;
            let touchY_inElem = touch.clientY - rect.top;
            let percentForTouchLeftRight = (this.width / 100 * 20);
            // console.log('width','touchX','touchY');
            // console.log([this.width,touchX_inElem,(this.width - touchX_inElem),percentForTouchLeftRight]);
            // console.log(`Touch start relative to element at: ${touchX}, ${touchY}`);
// console.log((this.width - touchX_inElem) < percentForTouchLeftRight);
            if((this.width - touchX_inElem) < percentForTouchLeftRight){
                this.magicNoteOrPause();
                this.startResizing(event, 'right',);
            }
            if(touchX_inElem < percentForTouchLeftRight){
                this.magicNoteOrPause();
                this.startResizing(event, 'left',);
            }
            event.preventDefault();
            event.stopPropagation();
            // if (event.touches[0]) {
            //     this.magicNoteOrPause();
            // }
        })
    }
    // magicNoteOrPause() {
    //     if (!this.div.classList.contains('pause') && !this.div.classList.contains('handle')) {
    //         this.div.classList.add('pause');
    //         this._label.textContent = this.pausesSymbol.default;
    //     } else {
    //         this.div.classList.remove('pause');
    //         this._label.textContent = this.notesSymbol.default;
    //     }
    // }
    deleteNote(id) {
        bgMatrix.idStack[id].div.remove();
        delete bgMatrix.idStack[id];
        bgMatrix.researchAllNextPrevElem();
    }
    delElemInBigElem() {
        for (let key in bgMatrix.idStack) {
            let item = bgMatrix.idStack[key];
            if (item._leftSidePosition >= this._leftSidePosition
                && item._leftSidePosition < this._rightSidePosition
                && item._rightSidePosition <= this._rightSidePosition
            ) {
                item.div.remove();
                bgMatrix.idStack[key] = null;
                delete bgMatrix.idStack[key];
            }
        }
    }
    ifBorderCollapse_resize() {
        if (bgMatrix.idStack[this.previousElemId]) {
            if (bgMatrix.idStack[this.previousElemId]._rightSidePosition > this._leftSidePosition) {
                bgMatrix.idStack[this.previousElemId].width = bgMatrix.idStack[this.previousElemId]._width - (bgMatrix.idStack[this.previousElemId]._rightSidePosition - this._leftSidePosition);
                bgMatrix.idStack[this.previousElemId].hameleon();
                bgMatrix.researchAllNextPrevElem();
            }
        }
        if (bgMatrix.idStack[this.nextElemId]) {
            if (this._rightSidePosition > bgMatrix.idStack[this.nextElemId]._leftSidePosition && bgMatrix.idStack[this.nextElemId]._rightSidePosition > this._rightSidePosition) {
                let diff = this._rightSidePosition - bgMatrix.idStack[this.nextElemId]._leftSidePosition;
                let newWidth = bgMatrix.idStack[this.nextElemId]._width - diff;
                let newLeftSidePosition = bgMatrix.idStack[this.nextElemId]._leftSidePosition + diff;
                let newIndxPosition = bgMatrix.newOutIndMatrix[newLeftSidePosition];
                bgMatrix.idStack[this.nextElemId].width = newWidth;
                bgMatrix.idStack[this.nextElemId].leftSidePosition = newLeftSidePosition;
                bgMatrix.idStack[this.nextElemId].indxPosition = newIndxPosition;
                bgMatrix.idStack[this.nextElemId].hameleon();
                bgMatrix.researchAllNextPrevElem();
            }
        }
    }
    startResizing(eventMSD, direction) {
        let rect = this.div.getBoundingClientRect();
        // let right = rect.right;
        // let left = rect.left;
        // console.log(rect);
        if (eventMSD.touches) {
            
            // this.startX = eventMSD.touches ? eventMSD.touches[0].clientX : undefined;
            if(direction == 'right'){this.startX = rect.right };
            if(direction == 'left'){this.startX = rect.left };
            // console.log([this.startX,left, right]);
          } else {
            
            // this.startX = eventMSD.clientX;
            if(direction == 'right'){this.startX = rect.right };
            if(direction == 'left'){this.startX = rect.left };
            if(direction == 'left_right'){this.startX = rect.left };
          }
        
        this.startWidth = this._width;
        this.startLeft = this._leftSidePosition;
        this.direction = direction;
        if (bgMatrix.idStack[this.previousElemId]) {
            bgMatrix.idStack[this.previousElemId].startWidth = bgMatrix.idStack[this.previousElemId].width;
        }

        if (eventMSD.touches) {
            document.documentElement.addEventListener('touchmove', this.resize);
            document.documentElement.addEventListener('touchend', this.stopResizing);
          } else {
            document.documentElement.addEventListener('mousemove', this.resize);
            document.documentElement.addEventListener('mouseup', this.stopResizing);
          }
    }
    resize(event) {
        // event.preventDefault();
        // event.stopPropagation();
        if (event.touches) {
            event = event.touches[0]; 
          }
        if (this.direction === 'right') {
            let newWidth = Math.min(Math.max(this.startWidth + event.clientX - this.startX, bgMatrix.minWidth), bgMatrix.maxWidth);
            // console.log(bgMatrix.idStack[this.nextElemId]);
            if (bgMatrix.idStack[this.nextElemId]) {
                if (event.clientX < bgMatrix.idStack[this.nextElemId]._leftSidePosition + bgMatrix.app.offsetLeft) {
                    this.width = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
                    this.hameleon();
                }
            } else if (event.clientX < bgMatrix.rightAppSide) {
                this.width = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
                this.hameleon();
            }

        } else if (this.direction === 'left') {
            // корректировка неточности тач события
            this.diff = this.startX - event.clientX;
            let newWidth = Math.min(Math.max(this.startWidth + this.diff, bgMatrix.minWidth), bgMatrix.maxWidth);
            const newLeft = this.startLeft - (newWidth - this.startWidth);
            const newWidthRoundet = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
            this.newLeftPosition = Math.round(newLeft / bgMatrix.step) * bgMatrix.step;
            if (bgMatrix.idStack[this.previousElemId]) {
                if (event.clientX - bgMatrix.leftAppSide > bgMatrix.idStack[this.previousElemId]._leftSidePosition + bgMatrix.idStack[this.previousElemId]._width) {
                    this.width = newWidthRoundet;
                    this.leftSidePosition = this.newLeftPosition;
                    this.indxPosition = bgMatrix.newOutIndMatrix[this._leftSidePosition];
                    this.hameleon();
                }
            } else if (event.clientX > bgMatrix.leftAppSide) {
                this.width = newWidthRoundet;
                this.leftSidePosition = this.newLeftPosition;
                this.indxPosition = bgMatrix.newOutIndMatrix[this._leftSidePosition];
                this.hameleon();
            }
        } else if (this.direction === 'left_right') {
            if (bgMatrix.idStack[this.previousElemId]) {
                this.diff = this.startX - event.clientX;
                let newWidth = Math.min(Math.max(this.startWidth + this.diff, bgMatrix.minWidth), bgMatrix.maxWidth);
                const newLeft = this.startLeft - (newWidth - this.startWidth);
                const newWidthRoundet = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
                let difference = newWidthRoundet - this.startWidth;

                this.newLeftPosition = Math.round(newLeft / bgMatrix.step) * bgMatrix.step;

                if (bgMatrix.idStack[this.previousElemId].startWidth - difference >= bgMatrix.minWidth) {
                    this.width = newWidthRoundet;
                    this.leftSidePosition = this.newLeftPosition;
                    this.indxPosition = bgMatrix.newOutIndMatrix[this._leftSidePosition];
                    this.hameleon();

                    bgMatrix.idStack[this.previousElemId].width = bgMatrix.idStack[this.previousElemId].startWidth - difference;
                    bgMatrix.idStack[this.previousElemId].hameleon();
                }
            }
        }
    }
    stopResizing() {

        bgMatrix.researchAllNextPrevElem();
        this.notesSymbol = allSymbolForNotes_2_4[this.name]['notesSymbol'];
        this.pausesSymbol = allSymbolForNotes_2_4[this.name]['pausesSymbol'];
        document.documentElement.removeEventListener('mousemove', this.resize);
        document.documentElement.removeEventListener('mouseup', this.stopResizing);
        document.documentElement.removeEventListener('touchmove', this.resize);
        document.documentElement.removeEventListener('touchup', this.stopResizing);
    }
    hameleon() {
        // console.log(this._class);
        this.name = bgMatrix.sizeIdentif[this._width];
        this.class = bgMatrix.sizeIdentif[this._width];
        this.label = allSymbolForNotes_2_4[bgMatrix.sizeIdentif[this._width]];
        this._rightSidePosition = this._leftSidePosition + this._width;
    }

    idGenerator() {
        return String(
            Date.now().toString(32) +
            Math.random().toString(16)
        ).replace(/\./g, '')
    }

    set rightSidePosition(value) {
        this._rightSidePosition = value;
    }
    get rightSidePosition() {
        return this._leftSidePosition + this._width;
    }

    /**
     * @param {string} value
     */
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this._height = value;
        this.div.style.width = this._width + 'px';
        this.div.style.height = this._width + 'px';
    }
    /**
    * @param {string} value
    */
    set leftSidePosition(value) {
        this._leftSidePosition = value;
        this.div.style.left = this._leftSidePosition + 'px';
    }
    /**
     * @param {string} value
     */
    set class(value) {
        // console.log(this._class);
        this.div.classList.remove(this._class);
        this._class = value;
        this.div.classList.add(this._class);
    }

    /**
     * @param {{ textContent: any; }} value
     */
    set label(value) {
        if (value.notesSymbol[this.indxPosition]) {
            if (this.div.classList.contains('pause')) {
                this._label.textContent = value.pausesSymbol[this.indxPosition];
            } else {
                this._label.textContent = value.notesSymbol[this.indxPosition];
            }

        } else {
            if (this.div.classList.contains('pause')) {
                this._label.textContent = value.pausesSymbol['default'];
            } else {
                this._label.textContent = value.notesSymbol['default'];
            }

        }
    }
    /**
     * @param {{boolean}} value
     */
    // при установке паузы изменяются: класс, текст внутри label, переменная _isPause 
    set isPause(value){
        if(value === true){
                this.div.classList.add('pause');
                this._label.textContent = this.pausesSymbol.default;
                this._isPause = true;
        } else if(value === false){
            this.div.classList.remove('pause');
            this._label.textContent = this.notesSymbol.default;
            this._isPause = false;
        }
    }
    get isPause(){
        return this._isPause;
    }
}

//   if (!this.div.classList.contains('pause') && !this.div.classList.contains('handle')) {