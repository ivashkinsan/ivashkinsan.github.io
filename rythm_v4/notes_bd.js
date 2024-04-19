class Note {
    constructor(obj) {
        this.name = obj.name;
        this.class = obj.class;
        this.indxPosition = obj.indxPosition;
        this.width = obj.width;
        this.height = obj.height;
        this.leftSide = obj.left;
        this.rightSide = obj.right;
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
}