class Note_v2 {
    constructor(obj) {
        this.name = obj.name;
        this.class = obj.class;
        this.indxPosition = null;
        this.width = obj.width;
        this.height = obj.height;
        this.leftSide = obj.left;
        // this.rightSide = null;
        this.notesSymbol = obj.notesSymbol;
        this.pausesSymbol = obj.pausesSymbol;
        this.previousElem = null;
        this.previousElemWidth = null;
        this.previousElemLeftSide = null;
        this.previousElemRightSide = null;
        this.nextElem = null;
        this.nextElemWidth = null;
        this.nextElemLeftSide = null;
        this.nextElemRightSide = null;
        this.newNote = null;
        this.leftHandle = null;
        this.rightHandle = null;
        this.leftRightHandle = null;
    }

    createHandle(){
        // left
        let leftHandle = document.createElement('div');
        leftHandle.classList.add('handle', 'left-handle');
        leftHandle.addEventListener('mousedown', (event) => {
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left');
        });
        leftHandle.addEventListener('touchmove', (event) => {
            // event.preventDefault();
            // event.stopPropagation();
            // startResizing(event, 'left');
        });
        this.leftHandle = leftHandle;
        // right
        let righttHandle = document.createElement('div');
        righttHandle.classList.add('handle', 'right-handle');
        righttHandle.addEventListener('mousedown', (event) => {
                // event.preventDefault();
                // event.stopPropagation();
                // startResizing(event, 'right');
        });
        righttHandle.addEventListener('touchmove', (event) => {
                // console.log('touchstart Right Handle');
                // event.preventDefault();
                // event.stopPropagation();
                // startResizing(event, 'right');
        });
        this.rightHandle = righttHandle;
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
        this.leftRightHandle = left_double_arrow;
    }

    get rightSide(){
        return parseInt(this.leftSide) + parseInt(this.width);
    }

    findPrevNextElemsAndFindParam(){
        if(newNote.nextElementSibling){
            this.nextElem = newNote.nextElementSibling;
            this.nextElemWidth = Number(this.nextElem.style.width.replace('px', ''));
            this.nextElemLeftSide = Number(this.nextElem.style.left.replace('px', ''));
            this.nextElemRightSide = nextElemLeftSide + nextElemWidth;
        }
        if(newNote.previousElementSibling){
            this.previousElem = newNote.previousElementSibling;
            this.previousElemWidth = Number(this.previousElem.style.width.replace('px', ''));
            this.previousElemLeftSide = Number(this.previousElem.style.left.replace('px', ''));
            this.previousElemRightSide = previousElemLeftSide + previousElemWidth;
        }
    }
}


const sixteenthNote_16_new = new Note_v2(
{
    'name':'sixteenthNote_16',
    'class':'sixteenthNote_16',
    'indxPosition': 1,
    'width': '16px',
    'height': '16px',
    'left': '420px',
    'right': '420px',
    'notesSymbol':  {
        'default': uncSbl.n16
    },
    'pausesSymbol':   {
        'default': uncSbl.p16
    },
}
);
console.log(sixteenthNote_16_new);
// console.log(sixteenthNote_16_new.leftHandle());

sixteenthNote_16_new.createHandle();
console.log(sixteenthNote_16_new.leftHandle);
console.log(sixteenthNote_16_new.rightHandle);
console.log(sixteenthNote_16_new.leftRightHandle);





