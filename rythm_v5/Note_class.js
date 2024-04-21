class Note {
    constructor(obj, size, leftPosition, indxPosition) {
        this.name = obj.class;
        this.class = obj.class;
        this.id = null;
        this.indxPosition = indxPosition;
        this.width = size;
        this.height = size;
        this.leftSidePosition = leftPosition;
        this.rightSidePosition = null;
        this.notesSymbol = obj.notesSymbol;
        this.pausesSymbol = obj.pausesSymbol;
        this.label = null;
        this.previousElem = null;
        this.previousElemWidth = null;
        this.previousElemLeftSide = null;
        this.previousElemRightSide = null;
        this.nextElem = null;
        this.nextElemWidth = null;
        this.nextElemLeftSide = null;
        this.nextElemRightSide = null;
        this.div = null;
        this.handle = {};
        // this.leftHandle = null;
        // this.rightHandle = null;
        // this.leftRightHandle = null;
    }

    createHandle() {
        // left
        let leftHandle = document.createElement('div');
        leftHandle.classList.add('handle', 'left-handle');
        leftHandle.addEventListener('mousedown', (event) => {
            event.preventDefault();
            event.stopPropagation();
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left');
        });
        leftHandle.addEventListener('touchmove', (event) => {
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left');
        });
        this.handle.leftHandle = leftHandle;
        // right
        let righttHandle = document.createElement('div');
        righttHandle.classList.add('handle', 'right-handle');
        righttHandle.addEventListener('mousedown', (event) => {
            event.preventDefault();
            event.stopPropagation();
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'right');
        });
        righttHandle.addEventListener('touchmove', (event) => {
            event.preventDefault();
            event.stopPropagation();
            // console.log('touchstart Right Handle');
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'right');
        });
        this.handle.rightHandle = righttHandle;

        // left-right
        let left_double_arrow = document.createElement('div');
        left_double_arrow.classList.add('handle');
        left_double_arrow.classList.add('left_double_arrow');
        left_double_arrow.classList.add('display_block');
        left_double_arrow.classList.add('display_none');
        left_double_arrow.addEventListener('mousedown', (event) => {
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left_right');
        });
        left_double_arrow.addEventListener('touchmove', (event) => {
            // console.log('touchstart Left-Right Handle');
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left_right');
        });
        this.handle.leftRightHandle = left_double_arrow;
    }
    leftRightHandleShowHide() {
        if(this.leftRightHandle.style.display == 'none'){
            this.leftRightHandle.style.display = 'block';
        }else{
            this.leftRightHandle.style.display = 'none';
        }
    }
    findPrevNextElemsAndFindParam() {
        if (this.div.nextElementSibling) {
            console.log('nextElementSibling');
            this.nextElem = this.div.nextElementSibling;
            this.nextElemWidth = parseInt(this.nextElem.style.width);
            this.nextElemLeftSide = parseInt(this.nextElem.style.left);
            this.nextElemRightSide = this.nextElemLeftSide + this.nextElemWidth;
        }
        if (this.div.previousElementSibling) {
            this.previousElem = this.div.previousElementSibling;
            this.previousElemWidth = parseInt(this.previousElem.style.width);
            this.previousElemLeftSide = parseInt(this.previousElem.style.left);
            this.previousElemRightSide = this.previousElemLeftSide + this.previousElemWidth;
        }
    }
    createLabel(is_pause){
        let p_label = document.createElement('p');
        if (is_pause) {
            p_label.textContent = this.pausesSymbol.default;
        } else {
            p_label.textContent = this.notesSymbol.default;
        }
        this.label = p_label;
    }
    createNoteDiv() {
        let newNoteDiv = document.createElement('div');
        newNoteDiv.classList.add(this.class);
        newNoteDiv.classList.add('active');
        newNoteDiv.style.width = this.width + 'px';
        newNoteDiv.style.height = this.height + 'px';
        newNoteDiv.style.left = this.leftSidePosition + 'px';
        this.div = newNoteDiv;

        this.createHandle();
        this.createLabel();
        this.id = this.idGenerator();
        this.rightSidePosition = this.leftSidePosition + this.width;
        this.div.append(this.handle.leftHandle);
        this.div.append(this.handle.rightHandle);
        this.div.append(this.handle.leftRightHandle);
        this.div.append(this.label);
        this.delElemInBigElem();
        // console.log(this); 
    }
    addEventListenerForPauseTransform(){
        this.div.addEventListener('mousedown', (event)=>{
            event.preventDefault();
            event.stopPropagation();
            if (event.button == 0) {
                if (!this.div.classList.contains('pause') && !this.div.classList.contains('handle')) {
                    this.div.classList.add('pause');
                    this.label.textContent = this.pausesSymbol.default;
                } else {
                    this.div.classList.remove('pause');
                    this.label.textContent = this.notesSymbol.default;
                }
            }
        })
    }
    deleteNote(id){
        backgroundMatrix.activeLayerStack[id].div.remove();
        delete backgroundMatrix.activeLayerStack[id];
    }
    delElemInBigElem(){
        for (let key in backgroundMatrix.activeLayerStack) {
            let item = backgroundMatrix.activeLayerStack[key];
            if (item.leftSidePosition >= this.leftSidePosition
                && item.leftSidePosition < this.rightSidePosition
                && item.rightSidePosition <= this.rightSidePosition
            ) {
                item.div.remove();
                backgroundMatrix.activeLayerStack[key] = null;
                delete backgroundMatrix.activeLayerStack[key];
            }
        }
    }
    idGenerator(){
        return String(
      Date.now().toString(32) +
        Math.random().toString(16)
    ).replace(/\./g, '')}

    get rightSide() {
        return parseInt(this.leftSide) + parseInt(this.width);
    }

}


// const sixteenthNote_16_new = new Note_v2(
//     {
//         'name': 'sixteenthNote_16',
//         'class': 'sixteenthNote_16',
//         'indxPosition': 1,
//         'width': '16px',
//         'height': '16px',
//         'left': '420px',
//         'right': '420px',
//         'notesSymbol': {
//             'default': uncSbl.n16
//         },
//         'pausesSymbol': {
//             'default': uncSbl.p16
//         },
//     }
// );
// console.log(sixteenthNote_16_new);
// // console.log(sixteenthNote_16_new.leftHandle());

// sixteenthNote_16_new.createHandle();
// sixteenthNote_16_new.createNoteDiv();
// console.log(sixteenthNote_16_new.newNote);






