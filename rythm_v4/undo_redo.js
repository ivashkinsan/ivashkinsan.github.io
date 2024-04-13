const treeContainer = document.querySelector('.activeElemLayer');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
let undoStack = [];
let redoStack = [];

// Функция для сохранения текущего состояния DOM-дерева
function saveState() {
    undoStack.push(treeContainer.innerHTML);
    undoButton.disabled = false;
    redoButton.disabled = true;
    console.log(getEventListeners());
}

// Функция для отмены последнего изменения
function undo() {
    redoStack.push(treeContainer.innerHTML);
    treeContainer.innerHTML = undoStack.pop();
    redoButton.disabled = false;
    if (undoStack.length === 0) {
        undoButton.disabled = true;
    }
}

// Функция для повтора последнего изменения
function redo() {
    undoStack.push(treeContainer.innerHTML);
    treeContainer.innerHTML = redoStack.pop();
    undoButton.disabled = false;
    if (redoStack.length === 0) {
        redoButton.disabled = true;
    }
}

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);

// Сохраняем начальное состояние DOM-дерева
saveState();