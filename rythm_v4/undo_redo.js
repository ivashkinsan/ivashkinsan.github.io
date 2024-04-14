const treeContainer = document.querySelector('.activeElemLayer');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
let undoStack = [];
let redoStack = [];

// Функция для сохранения текущего состояния DOM-дерева
function saveState(arrModifiedBlock) {
    if(arrModifiedBlock){
    console.log('input' + arrModifiedBlock);
    let stackParam = [];
    for (let i = 0; i < arrModifiedBlock.length; i++) {
        let param = {
            'width': Number(arrModifiedBlock[i].style.width.replace('px','')),
            'leftPosition': Number(arrModifiedBlock[i].style.left.replace('px','')),
            'outIndx': arrModifiedBlock[i].dataset.outIndx,
            'isPause': ''
        }
        stackParam.push(param);
    }
    undoStack.push(stackParam);
    undoButton.disabled = false;
    redoButton.disabled = true;
    console.log(undoStack);
}
}

// Функция для отмены последнего изменения
function undo() {
    let lastElemUndoStack = undoStack.pop();
    let layerActive = document.querySelector('.activeElemLayer')
    let allElemInActiveElemLayer = layerActive.querySelectorAll('.active');
    for(let item of allElemInActiveElemLayer){
        console.log(item.dataset.outIndx);
        lastElemUndoStack.forEach(function(element){ 
          if(item.dataset.outIndx == element.outIndx){
console.log(item);
item.remove();
        }
    }
    )

        // console.log(item.dataset.outIndx);
        // console.log(lastElemUndoStack.outIndx);
        // if(items.dataset.outIndx == lastElemUndoStack.outIndx){

        // }
    }
 

    // redoStack.push(treeContainer.innerHTML);
    // treeContainer.innerHTML = undoStack.pop();
    // redoButton.disabled = false;
    // if (undoStack.length === 0) {
    //     undoButton.disabled = true;
    // }
    redoStack.push(lastElemUndoStack);
}

// Функция для повтора последнего изменения
function redo() {
    let lastElemRedoStack = redoStack.pop();
    let layerActive = document.querySelector('.activeElemLayer');
    let allElemInActiveElemLayer = layerActive.querySelectorAll('.active');
    lastElemRedoStack.forEach(function(elem){

    })


    // undoStack.push(treeContainer.innerHTML);
    // treeContainer.innerHTML = redoStack.pop();
    // undoButton.disabled = false;
    // if (redoStack.length === 0) {
    //     redoButton.disabled = true;
    // }
}

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);

// Сохраняем начальное состояние DOM-дерева
saveState();