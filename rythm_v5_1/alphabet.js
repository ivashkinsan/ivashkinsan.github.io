const alphabet = {
    'A': '1 0 0 0',
    'B': '0 1 0 0',
    'C': '0 0 1 0',
    'D': '0 0 0 1',
    'E': '1 1 0 0',
    'F': '0 1 1 0',
    'G': '0 0 1 1',
    'H': '1 0 0 1',
    'I': '1 0 1 0',
    'J': '0 1 0 1',
    'K': '1 1 1 0',
    'L': '0 1 1 1',
    'M': '1 0 1 1',
    'N': '1 1 0 1',
    'O': '1 1 1 1',
    'P': '0 0 0 0',
    'Q': '1 0 0',
    'R': '0 1 0',
    'S': '0 0 1',
    'T': '1 1 0',
    'U': '0 1 1',
    'V': '1 0 1',
    'W': '1 1 1',
    'X': '0 0 0',
    'a': '1 0',
    'b': '0 1',
    'c': '1 1',
    'd': '0 0',
}

const alphabetLong = {
    'A': '1111',
    'B': '0 111',
    'C': '00 11',
    'D': '000 1',
    'E': '1 111',
    'F': '0 1 11',
    'G': '00 1 1',
    'H': '111 1',
    'I': '11 11',
    'J': '0 11 1',
    'K': '1 1 11',
    'L': '0 1 1 1',
    'M': '11 1 1',
    'N': '1 11 1',
    'O': '1 1 1 1',
    'P': '0000',
    'Q': '11',
    'R': '0 11',
    'S': '0 0 1',
    'T': '1 11',
    'U': '0 1 1',
    'V': '11 1',
    'W': '1 1 1',
    'X': '0 0 0',
    'a': '1 0',
    'b': '0 1',
    'c': '1 1',
    'd': '0 0',
}

const createMenuInTopBar = function(){
    const menuInTopBar = document.createElement('div');
    menuInTopBar.classList.add('menuInTopBar');
    const nameElem = ['АЛГОРИТМЫ', 'АЛГОРИТМЫ+', 'СЛОГИ'];
    let allMenuElem = [];
    for(let item of nameElem){
        const menuElem = document.createElement('div');
        allMenuElem.push(menuElem);
        menuElem.classList.add('menuInTopBar__menuElem');
        menuElem.textContent = item;
        menuInTopBar.appendChild(menuElem);
        if(menuElem.textContent == 'АЛГОРИТМЫ'){
            menuElem.classList.add('alg_active');
        }
        menuElem.addEventListener('click', function(){
            allMenuElem.map(function(elem){
                elem.classList.remove('alg_active');
            })
            menuElem.classList.add('alg_active');
        })
    }
    
    // menuInTopBar.appendChild();
    return menuInTopBar;
}

const createCircle = (elem) => {
    const cardAlphabetCardCircle = document.createElement('div');
    cardAlphabetCardCircle.classList.add('cardAlphabet_card_circle');
    if (elem == 1) {
        cardAlphabetCardCircle.classList.add('card_circle_on');
    }
    return cardAlphabetCardCircle;
}

const createBtnOpenAndCloseCardAlphabet = function () {
    let btn = document.createElement('div');
    btn.classList.add('btn_open_and_close_card_alphabet');
    btn.addEventListener('click', function () {
        const cardAlphabetContain = document.querySelector('.cardAlphabetContain');
        cardAlphabetContain.classList.toggle('hidden_topBar');
        btn.classList.toggle('inBody');
    })
    return btn;
}


const createTab_1 = () => {
    // TAB_1
    const tab_1 = document.createElement('div');
    tab_1.classList.add('tab');
    tab_1.classList.add('tab_1');
    const tab_1_docFragment = document.createDocumentFragment();
    Object.entries(alphabet).forEach(([item, value], index) => {
        const cardAlphabetCard = document.createElement('div');
        cardAlphabetCard.classList.add('cardAlphabet_card');
        cardAlphabetCard.classList.add(`grid_el_${index}`);
        cardAlphabetCard.dataset.data = value;
        cardAlphabetCard.draggable = true;
        value.split(' ').map(createCircle).forEach(circle => {
            cardAlphabetCard.appendChild(circle);
        });
        cardAlphabetCard.addEventListener('dragstart', dragstart, false);
        cardAlphabetCard.addEventListener('dragend', dragend, false);
        tab_1_docFragment.appendChild(cardAlphabetCard);
    });
    tab_1.appendChild(tab_1_docFragment);
   return tab_1;
}

const createTab_2 = () => {
       // TAB_2
       const tab_2 = document.createElement('div');
       tab_2.classList.add('tab');
       tab_2.classList.add('tab_2');
       const tab_2_docFragment = document.createDocumentFragment();
       Object.entries(alphabet).forEach(([item, value], index) => {
           const cardAlphabetCard = document.createElement('div');
           cardAlphabetCard.classList.add('cardAlphabet_card');
           cardAlphabetCard.classList.add(`grid_el_${index}`);
           cardAlphabetCard.dataset.data = value;
           cardAlphabetCard.draggable = true;
           value.split(' ').map(createCircle).forEach(circle => {
               cardAlphabetCard.appendChild(circle);
           });
           cardAlphabetCard.addEventListener('dragstart', dragstart, false);
           cardAlphabetCard.addEventListener('dragend', dragend, false);
           tab_2_docFragment.appendChild(cardAlphabetCard);
       });
       tab_2.appendChild(tab_2_docFragment);
       return tab_2;
}

const appForInsertCardAlphabet = document.querySelector('.cardAlphabetContain');
appForInsertCardAlphabet.appendChild(createBtnOpenAndCloseCardAlphabet());
appForInsertCardAlphabet.appendChild(createMenuInTopBar());
appForInsertCardAlphabet.append(createTab_1());
// appForInsertCardAlphabet.append(createTab_2());


let add_and_remove_eventListener = function (add) {
    const all_droppable_elem = document.querySelectorAll('.mtrxCircle');
    if (add) {
        for (let item of all_droppable_elem) {
            // item.addEventListener('dragstart', dragstart, false);
            item.addEventListener('dragover', dragover, false);
            item.addEventListener('dragleave', dragLeave, false);
            item.addEventListener('drop', drop, false);
        }
    } else {
        for (let item of all_droppable_elem) {
            item.removeEventListener('dragover', dragover, false);
            item.removeEventListener('dragleave', dragLeave, false);
            item.removeEventListener('drop', drop, false);
        }
    }
}


function dragstart(event) {
    event.stopPropagation();
    event.dataTransfer.setData('elem', event.target);
    event.dataTransfer.setData('customData', event.target.dataset.data);

    this.classList.add('drag_Start_end');

    add_and_remove_eventListener(true);
}

function dragend(event) {
    event.stopPropagation();
    this.classList.remove('drag_Start_end');
    // bgMatrix.saveState();
}

function dragover(event) {
    event.preventDefault();
    event.target.classList.add('drop_insert_border_on');
}

function dragLeave(event) {
    event.preventDefault();
    event.target.classList.remove('drop_insert_border_on');
}

function drop(event) {
    event.preventDefault();
    createNoteAfterDrop(event, event.target);
    add_and_remove_eventListener(false);
}



let createNoteAfterDrop = (event, dropElem) => {
    // const activeElemLayer = ;
    let allActiveForDelete = bgMatrix.activeLayer.querySelectorAll('.active');
    let dropElemPosition = extractPositionData(dropElem.style);

    for (let item of allActiveForDelete) {
        let itemLeft = Number(item.style.left.replace('px', ''));
        if (itemLeft >= dropElemPosition.left && itemLeft < dropElemPosition.right) {
            item.remove();
        }
    }
    dropElem.classList.remove('drop_insert_border_on');

    let customData = event.dataTransfer.getData('customData').split(' ');
    let interval = dropElemPosition.width / customData.length;
    let constInterval = interval;
    let targetLeftPosition = dropElemPosition.left;

    for (let i = 0; i < customData.length; i++) {
        console.log(customData[i]);
        let isPause = customData[i] === '0';
        // if (!isZero) {
        //     createTripletLine(customData.length, newCircle, interval);
        // }



        // let newCircle = sizeIdentif[interval].createDivTag('', interval, isZero);
        // newCircle.style.width = newCircle.style.height = `${interval}px`;
        // newCircle.style.left = targetLeftPosition + 'px';
        // create_and_append_active_elem(newCircle, activeElemLayer, 'drop', isZero);

        // create_note(name, width, leftPosition, indxPosition)
        bgMatrix.create_note(
            bgMatrix.sizeIdentif[interval],
            interval,
            targetLeftPosition,
            undefined,
            isPause);


        // createTripletLine(customData.length, newCircle, interval);
        targetLeftPosition += interval;
        // if(customData[i+1] === '0'){
        //     console.log('уменьшаем');
        //    interval = interval - constInterval;
        //    i++;
        //             }
        // saveState();
    }
}

let extractPositionData = (style) => {
    let position = { "left": 0, "right": 0, "width": 0 };
    position.left = Number(style.left.replace('px', ''));
    position.width = Number(style.width.replace('px', ''));
    position.right = position.left + position.width;
    return position;
}

// let createTripletLine = (count, parentElem, interval) => {
//     if (count === 3) {
//         let newTripletLine = document.createElement('div');
//         newTripletLine.classList.add('newTripletLine');
//         newTripletLine.style.width = `${interval * 3}px`;
//         newTripletLine.style.height = '3px';
//         parentElem.append(newTripletLine);
//     }
// }





const newRootBaseSizeValue = function (param, previousParam) {
    document.documentElement.style.setProperty('--base-size', `${param}px`);
    let root = document.querySelector(':root');

    backgroundMatrix.baseSize = parseFloat(getComputedStyle(root).getPropertyValue('--base-size'));
    backgroundMatrix.baseWidth = backgroundMatrix.baseSize;

    let body = document.querySelector('body');
    // Перезапускаем стили элемента для обновления изменений
    let tempDisplay = body.style.display;
    body.style.display = 'none';
    body.offsetHeight; // Принудительно перерисовываем элемент
    body.style.display = tempDisplay;

    const parentNode = document.querySelector('.containMatrix');
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
    sizeIdentif = createSizeIdentif();
    // let step = backgroundMatrix.step; // Шаг изменения блока
    // let minWidth = backgroundMatrix.minWidth;
    // let maxWidth = backgroundMatrix.maxWidth;

    allLayer = backgroundMatrix.createBackground(stateAppMatrix, 0);
    app.children[0].remove();
    app.children[0].remove();
    app.append(allLayer[0]);
    app.append(allLayer[1]);

    searsh_all_elem(); // для метронома

    let differenceNumb = previousParam / param;
    let allActiveForResize = document.querySelectorAll('.active');
    for (let item of allActiveForResize) {
        console.log(item);
        let itemWidth = parseFloat(window.getComputedStyle(item).width);
        let itemLeft = parseFloat(window.getComputedStyle(item).left);
        hameleon(item, sizeIdentif[(itemWidth / differenceNumb)], item.dataset.outIndx, (itemWidth / differenceNumb), (itemLeft / differenceNumb));
    }
}

// let newRootButton420 = document.querySelector('.newRootBaseSizeValue420');
// let newRootButton840 = document.querySelector('.newRootBaseSizeValue840');

// newRootButton420.addEventListener('click', () => newRootBaseSizeValue(420, backgroundMatrix.baseSize));
// newRootButton840.addEventListener('click', () => newRootBaseSizeValue(840, backgroundMatrix.baseSize));