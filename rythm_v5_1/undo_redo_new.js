const treeContainer = document.querySelector('.activeLayer');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
let undoStack = [];
let redoStack = [];

// Функция для сохранения текущего состояния DOM-дерева
function saveState() {
    console.log('saveSatate');
    undoStack.push(treeContainer.innerHTML);
    redoStack = [];
    undoButton.disabled = false;
    redoButton.disabled = true;
    console.log(undoStack);
}

// Функция для отмены последнего изменения
function undo() {
    redoStack.push(treeContainer.innerHTML);
    treeContainer.innerHTML = undoStack.pop();
    redoButton.disabled = false;
    if (undoStack.length === 0) {
        undoButton.disabled = true;
    }
    returnAddEventListener();
}

// Функция для повтора последнего изменения
function redo() {
    undoStack.push(treeContainer.innerHTML);
    treeContainer.innerHTML = redoStack.pop();
    undoButton.disabled = false;
    if (redoStack.length === 0) {
        redoButton.disabled = true;
    }
    returnAddEventListener();
}

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);

// Сохраняем начальное состояние DOM-дерева
saveState();



