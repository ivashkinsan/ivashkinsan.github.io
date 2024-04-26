class Note {
    constructor(obj, size, leftPosition, indxPosition) {
        this.name = obj.class;
        this._class = obj.class;
        this.id = null;
        this.indxPosition = indxPosition;
        this._width = size;
        this._height = size;
        this._leftSidePosition = leftPosition;
        this.newLeftPosition = null;
        this.startWidth = null;
        this._rightSidePosition = null;
        this.notesSymbol = obj.notesSymbol;
        this.pausesSymbol = obj.pausesSymbol;
        this._label = null;
        // this.previousElem = null; //??????????
        this.previousElemId = null;
        // this._previousElemWidth = null;//??????????
        // this.previousElemStartWidth = null;//??????????
        // this.previousElemLeftSide = null;//??????????
        // this.previousElemRightSide = null;//??????????
        // this.nextElem = null;//??????????
        this.nextElemId = null;
        // this.nextElemWidth = null;//??????????
        // this.nextElemLeftSide = null;//??????????
        // this.nextElemRightSide = null;//??????????
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
        leftHandle.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'left',);
        });

        this.handle.leftHandle = leftHandle;
        console.log(this.div);
        this.div.append(this.handle.leftHandle);

        // right
        let righttHandle = document.createElement('div');
        righttHandle.classList.add('handle', 'right-handle');
        righttHandle.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'right',);
        });

        this.handle.rightHandle = righttHandle;
        this.div.append(this.handle.rightHandle);

        // left-right
        let left_double_arrow = document.createElement('div');
        left_double_arrow.classList.add('handle');
        left_double_arrow.classList.add('left_double_arrow');
        left_double_arrow.classList.add('display_block');
        // left_double_arrow.classList.add('display_none');
        left_double_arrow.addEventListener('mousedown', (eventMSD) => {
            eventMSD.preventDefault();
            eventMSD.stopPropagation();
            this.startResizing(eventMSD, 'left_right',);
            // console.log(this.previousElemWidth);
        });

        this.handle.leftRightHandle = left_double_arrow;
        this.div.append(this.handle.leftRightHandle);
    }
    handleBehavior(sms){
        if(sms == 'show' && this._leftSidePosition == this.previousElemRightSide){
            this.handle.leftRightHandle.style.display = 'block';
            this.handle.leftRightHandle.classList.remove('display_none');
            console.log([this._leftSidePosition, " == ", this.previousElemRightSide]);
        } else {
            this.handle.leftRightHandle.style.display = 'none';
            this.handle.leftRightHandle.classList.add('display_none');
        }
        
    }
    findPrevNextElemsAndFindParam() {
        console.log(bgMatrix.idStack);
        if (this.div.nextElementSibling) {
            // this.nextElem = this.div.nextElementSibling;
            this.nextElemId = this.div.nextElementSibling.dataset.id;
            this.nextElem = this.div.nextElementSibling
            // this.nextElemWidth = Number(this.nextElem.style.width.replace('px',''));
            // this.nextElemLeftSide = Number(this.nextElem.style.left.replace('px',''));
            // this.nextElemRightSide = this.nextElemLeftSide + this.nextElemWidth;
            // bgMatrix.idStack[this.nextElemId].handleBehavior('show');
        } else {
            // this.nextElem = null;
            this.nextElemId = null;
            this.nextElem = null;
            // this.nextElemWidth = null;
            // this.nextElemLeftSide = null;
            // this.nextElemRightSide = null;
        }
        if (this.div.previousElementSibling) {
            // this.previousElem = this.div.previousElementSibling;
            this.previousElemId = this.div.previousElementSibling.dataset.id;
            this.previousElem = this.div.previousElementSibling;
            // this._previousElemWidth = Number(this.previousElem.style.width.replace('px',''));
            // this.previousElemLeftSide = Number(this.previousElem.style.left.replace('px',''));
            // this.previousElemRightSide = this.previousElemLeftSide + this.previousElemWidth;
            // this.previousElemStartWidth = this.previousElemLeftSide + this.previousElemWidth;
            // this.handleBehavior('show');
        } else {
            // this.previousElem = null;
            this.previousElemId = null;
            this.previousElem = null;
            // this._previousElemWidth = null;
            // this.previousElemLeftSide = null;
            // this.previousElemRightSide = null;
            // this.previousElemStartWidth = null;
        }
    }
    createLabel(is_pause) {
        let p_label = document.createElement('p');
        if (is_pause) {
            p_label.textContent = this.pausesSymbol.default;
        } else {
            p_label.textContent = this.notesSymbol.default;
        }
        this._label = p_label;
        this.div.append(this._label);
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
    addEventListenerForPauseTransform() {
        this.div.addEventListener('mousedown', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.button == 0) {
                if (!this.div.classList.contains('pause') && !this.div.classList.contains('handle')) {
                    this.div.classList.add('pause');
                    this._label.textContent = this.pausesSymbol.default;
                } else {
                    this.div.classList.remove('pause');
                    this._label.textContent = this.notesSymbol.default;
                }
            }
        })
    }
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
        if (this.previousElemRightSide > this._leftSidePosition) {
            this.previousElemWidth = this._previousElemWidth - (this.previousElemRightSide - this._leftSidePosition);
            bgMatrix.idStack[this.previousElemId].width = this._previousElemWidth;
            bgMatrix.idStack[this.previousElemId].hameleon();
            bgMatrix.researchAllNextPrevElem();
        }
        if(this._rightSidePosition > this.nextElemLeftSide && this.nextElemRightSide > this._rightSidePosition){
            let diff = this._rightSidePosition - this.nextElemLeftSide;
            let newWidth = this.nextElemWidth - diff;
            let newLeftSidePosition = this.nextElemLeftSide + diff;
            let newIndxPosition = bgMatrix.newOutIndMatrix[newLeftSidePosition];
            bgMatrix.idStack[this.nextElemId].width = newWidth;
            bgMatrix.idStack[this.nextElemId].leftSidePosition = newLeftSidePosition;
            bgMatrix.idStack[this.nextElemId].indxPosition = newIndxPosition;
            bgMatrix.idStack[this.nextElemId].hameleon();
            console.log();
            // this.nextElemLeftSide = this.nextElemLeftSide + diff;
        }
    }
    startResizing(eventMSD, direction) {
        const startX = eventMSD.clientX;
        this.startX = startX;
        this.startWidth = this._width;
        this.startLeft = this._leftSidePosition;
        // console.log({
        //     'this.startWidth': parseFloat(this._width),
        //     'this.startLeft': parseFloat(this._leftSidePosition)
        // });
        this.direction = direction;
        // this.previousElemStartWidth = this.previousElemWidth;
        if(bgMatrix.idStack[this.previousElemId]){
            console.log(bgMatrix.idStack[this.previousElemId]);
            bgMatrix.idStack[this.previousElemId].startWidth = bgMatrix.idStack[this.previousElemId].width;
            console.log(bgMatrix.idStack[this.previousElemId].startWidth);
        }
        
        document.documentElement.addEventListener('mousemove', this.resize);
        document.documentElement.addEventListener('mouseup', this.stopResizing);


    }
    resize(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.direction === 'right') {
            let newWidth = Math.min(Math.max(this.startWidth + event.clientX - this.startX, bgMatrix.minWidth), bgMatrix.maxWidth);
            console.log(bgMatrix.idStack[this.nextElemId]);
            if (bgMatrix.idStack[this.nextElemId]) {
                if (event.x < bgMatrix.idStack[this.nextElemId]._leftSidePosition + bgMatrix.app.offsetLeft) {
                    this.width = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
                    this.hameleon();
                }
            } else if (event.x < bgMatrix.rightAppSide) {
                this.width = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
                this.hameleon();
            }

        } else if (this.direction === 'left') {
            this.diff = this.startX - event.clientX;
            let newWidth = Math.min(Math.max(this.startWidth + this.diff, bgMatrix.minWidth), bgMatrix.maxWidth);
            const newLeft = this.startLeft - (newWidth - this.startWidth);
            const newWidthRoundet = Math.round(newWidth / bgMatrix.step) * bgMatrix.step;
            this.newLeftPosition = Math.round(newLeft / bgMatrix.step) * bgMatrix.step;
            if (bgMatrix.idStack[this.previousElemId]) {
                if (event.x - bgMatrix.leftAppSide > bgMatrix.idStack[this.previousElemId]._leftSidePosition + bgMatrix.idStack[this.previousElemId]._width) {
                    this.width = newWidthRoundet;
                    this.leftSidePosition = this.newLeftPosition;
                    this.indxPosition = bgMatrix.newOutIndMatrix[this._leftSidePosition];
                    this.hameleon();
                }
            } else if (event.x > bgMatrix.leftAppSide) {
                this.width = newWidthRoundet;
                this.leftSidePosition = this.newLeftPosition;
                this.indxPosition = bgMatrix.newOutIndMatrix[this._leftSidePosition];
                this.hameleon();
            }
        } else if (this.direction === 'left_right') {
            console.log(bgMatrix.idStack[this.previousElemId].startWidth);
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

                    bgMatrix.idStack[this.previousElemId]._width = bgMatrix.idStack[this.previousElemId].startWidth - difference;
                    bgMatrix.idStack[this.previousElemId].width = this._previousElemWidth;
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

    set rightSidePosition(value){
        this._rightSidePosition = value;
    }
    get rightSidePosition() {
        return this._leftSidePosition + this._width;
    }

    /**
     * @param {string} value
     */
    get width(){
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
    set class(value){
    // console.log(this._class);
    this.div.classList.remove(this._class);
    this._class = value;
    this.div.classList.add(this._class);
    }
    // get previousElemWidth() {
    //     return this._previousElemWidth;
    // }
    // set previousElemWidth(value) {
    //     // console.log([value, this._previousElemWidth,this.previousElem.style.width]);
    //     this._previousElemWidth = value;
    //     this.previousElem.style.width = this._previousElemWidth + 'px';
    //     this.previousElem.style.height = this._previousElemWidth + 'px';
    // }

    /**
     * @param {{ textContent: any; }} value
     */
    set label(value){
        if(value.notesSymbol[this.indxPosition]){
            if(this.div.classList.contains('pause')){
                this._label.textContent = value.pausesSymbol[this.indxPosition];
            } else {
                this._label.textContent = value.notesSymbol[this.indxPosition];
            }
           
        } else {
            if(this.div.classList.contains('pause')){
                this._label.textContent = value.pausesSymbol['default'];
            }else {
                this._label.textContent = value.notesSymbol['default'];
            }
            
        }
       
// this.label = value;

    }
}