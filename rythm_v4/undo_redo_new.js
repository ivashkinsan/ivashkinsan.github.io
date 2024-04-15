const treeContainer = document.querySelector('.activeElemLayer');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
let undoStack = [];
let redoStack = [];

// Функция для сохранения текущего состояния DOM-дерева
function saveState() {
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

let returnAddEventListener = function(){
    let activeElemLayer = document.querySelector('.activeElemLayer');
    let all_active_elem = activeElemLayer.querySelectorAll('.active ');
    for (let item of all_active_elem) {
        item.addEventListener('mousedown', (event) => {
            clickForActiveElem(event);
        })
        item.addEventListener('contextmenu', (event) => {
            event.preventDefault(true);
            onContextClickForDelActiveElem(event);
        });
       for(let child of item.childNodes){
        switch(child.classList[1]){
            case 'left-handle':
                child.addEventListener('mousedown',function(elem){
                    startResizing(elem, 'left');
                })
                break;
            case 'right-handle':
                child.addEventListener('mousedown',function(elem){
                    startResizing(elem, 'right');
                })
                break;
            case 'left_double_arrow':
                child.addEventListener('mousedown',function(elem){
                    startResizing(elem, 'left_right');
                })
                break;
        }
       }
    }
}

