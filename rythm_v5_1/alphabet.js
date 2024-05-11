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

const alphabet_2 = {
    'A': '1111 - - -',
    'B': '0 111 - -',
    'C': '00 - 11 -',
    'D': '000 - - 1',
    'E': '1 111 - -',
    'F': '0 1 11 -',
    'G': '00 - 1 1',
    'H': '111 - - 1',
    'I': '11 - 11 -',
    'J': '0 11 - 1',
    'K': '1 1 11 -',
    'L': '0 1 1 1',
    'M': '11 - 1 1',
    'N': '1 11 - 1',
    'O': '1 1 1 1',
    'P': '0000 - - -',
    'Q': '111 - -',
    'R': '0 11 -',
    'S': '0 0 1',
    'T': '1 11 -',
    'U': '0 1 1',
    'V': '11 - 1',
    'W': '1 1 1',
    'X': '000 -',
    'a': '1 0',
    'b': '0 1',
    'c': '1 1',
    'd': '00 -',
}

const alphabet_3 = {
    'A': 'T k d m',
    'B': 't K d m',
    'C': 't k D m',
    'D': 't k d M',
    'E': 'T K d m',
    'F': 't K D m',
    'G': 't k D M',
    'H': 'T k d M',
    'I': 'T k D m',
    'J': 't K d M',
    'K': 'T K D m',
    'L': 't K D M',
    'M': 'T k D M',
    'N': 'T K d M',
    'O': 'T K D M',
    'P': 't k d m',
    'Q': 'T k t',
    'R': 't K t',
    'S': 't k T',
    'T': 'T K t',
    'U': 't K T',
    'V': 'T k T',
    'W': 'T K T',
    'X': 't k t',
    'a': 'T k',
    'b': 't K',
    'c': 'T K',
    'd': 't k',
}

const createMenuInTopBar = function () {
    const menuInTopBar = document.createElement('div');
    menuInTopBar.classList.add('menuInTopBar');
    const nameElem = ['АЛГОРИТМЫ', 'АЛГОРИТМЫ+', 'АКЦЕНТЫ'];
    const tabNumber = ['tab_1', 'tab_2', 'tab_3']
    let allMenuElem = [];
    for (let item of nameElem) {
        const menuElem = document.createElement('div');
        allMenuElem.push(menuElem);
        menuElem.classList.add('menuInTopBar__menuElem');
        menuElem.textContent = item;
        menuElem.dataset.table = tabNumber.shift();
        menuInTopBar.appendChild(menuElem);
        if (menuElem.textContent == 'АЛГОРИТМЫ') {
            menuElem.classList.add('alg_active');
        }
        menuElem.addEventListener('click', function (event) {
            allMenuElem.map(function (elem) {
                elem.classList.remove('alg_active');
            })
            menuElem.classList.add('alg_active');
            switch (event.target.dataset.table) {
                case 'tab_1':
                    document.querySelector('.tab_1').classList.remove('display_none');
                    document.querySelector('.tab_2').classList.add('display_none');
                    document.querySelector('.tab_3').classList.add('display_none');
                    break;
                case 'tab_2':
                    document.querySelector('.tab_1').classList.add('display_none');
                    document.querySelector('.tab_2').classList.remove('display_none');
                    document.querySelector('.tab_3').classList.add('display_none');
                    break;
                case 'tab_3':
                    document.querySelector('.tab_1').classList.add('display_none');
                    document.querySelector('.tab_2').classList.add('display_none');
                    document.querySelector('.tab_3').classList.remove('display_none');
                    break;
            }
        })
    }
    return menuInTopBar;
}

const createCircle = (elem) => {
    const cardAlphabetCardCircle = document.createElement('div');
    cardAlphabetCardCircle.classList.add(`grid_el`);
    switch (elem) {
        case '0': cardAlphabetCardCircle.classList.add('card_circle_fill_0');
            break;
        case '1': cardAlphabetCardCircle.classList.add('card_circle_fill_1');
            break;
        case '1111': cardAlphabetCardCircle.classList.add('card_circle_fill_1111');
            break;
        case '111': cardAlphabetCardCircle.classList.add('card_circle_fill_111');
            break;
        case '11': cardAlphabetCardCircle.classList.add('card_circle_fill_11');
            break;
        case '00': cardAlphabetCardCircle.classList.add('card_circle_fill_00');
            break;
        case '000': cardAlphabetCardCircle.classList.add('card_circle_fill_000');
            break;
        case '0000': cardAlphabetCardCircle.classList.add('card_circle_fill_0000');
            break;
    }
    switch (elem) {
        case 't':
        case 'T':
            cardAlphabetCardCircle.textContent = 'Ta';
            break;
        case 'k':
        case 'K':
            cardAlphabetCardCircle.textContent = 'Ka';
            break;
        case 'd':
        case 'D':
            cardAlphabetCardCircle.textContent = 'Di';
            break;
        case 'm':
        case 'M':
            cardAlphabetCardCircle.textContent = 'Mi';
            break;
    }
    if (isUpperCase(elem)) {
        cardAlphabetCardCircle.classList.add('akcent');
    }
    if (elem != '-') {
        return cardAlphabetCardCircle;
    } else {
        return 'undefined';
    }

}
function isUpperCase(letter) {
    return letter === letter.toUpperCase() && letter !== letter.toLowerCase();
}

const createBtnOpenAndCloseCardAlphabet = function () {
    let btn = document.createElement('div');
    btn.classList.add('btn_open_and_close_card_alphabet','inBody');
    btn.addEventListener('click', function () {
        const cardAlphabetContain = document.querySelector('.cardAlphabetContain');
        cardAlphabetContain.classList.toggle('hidden_cardAlphabetContain');
        btn.classList.toggle('inBody');
    })
    return btn;
}


const createTab_1 = () => {
    // TAB_1
    const tab_1 = document.createElement('div');
    tab_1.classList.add('tab');
    tab_1.classList.add('tab_1');
    tab_1.dataset.table = 'tab_1';
    const tab_1_docFragment = document.createDocumentFragment();
    Object.entries(alphabet).forEach(([item, value], index) => {
        const cardAlphabetCard = document.createElement('div');
        cardAlphabetCard.classList.add('cardAlphabet_card');
        switch (true) {
            case index <= 15: cardAlphabetCard.classList.add('four');
                break;
            case index <= 23: cardAlphabetCard.classList.add('three');
                break;
            case index <= 28: cardAlphabetCard.classList.add('two');
                break;
        }

        value.split(' ').map(
            createCircle
        ).forEach(circle => {
            cardAlphabetCard.classList.add(`grid_el_${index}`);
            cardAlphabetCard.dataset.data = value;
            cardAlphabetCard.draggable = true;
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
    tab_2.dataset.table = 'tab_2';
    tab_2.classList.add('display_none');
    const tab_2_docFragment = document.createDocumentFragment();
    Object.entries(alphabet_2).forEach(([item, value], index) => {
        const cardAlphabetCard = document.createElement('div');
        cardAlphabetCard.classList.add('cardAlphabet_card');
        // let newArrForLength = alphabet[item].split(' ');
        switch (true) {
            case index <= 15: cardAlphabetCard.classList.add('four');
                break;
            case index <= 23: cardAlphabetCard.classList.add('three');
                break;
            case index <= 28: cardAlphabetCard.classList.add('two');
                break;
        }
        cardAlphabetCard.classList.add(`grid_el_${index}`);
        cardAlphabetCard.dataset.data = value;
        cardAlphabetCard.draggable = true;
        value.split(' ')
            .map(createCircle)
            .forEach(circle => {
                if (circle != 'undefined') {
                    cardAlphabetCard.appendChild(circle);
                }
            });
        cardAlphabetCard.addEventListener('dragstart', dragstart, false);
        cardAlphabetCard.addEventListener('dragend', dragend, false);
        tab_2_docFragment.appendChild(cardAlphabetCard);
    });
    //    console.log(tab_2_docFragment);
    tab_2.appendChild(tab_2_docFragment);
    return tab_2;
}

const createTab_3 = () => {
    // TAB_1
    const tab_3 = document.createElement('div');
    tab_3.classList.add('tab');
    tab_3.classList.add('tab_3');
    tab_3.dataset.table = 'tab_3';
    tab_3.classList.add('display_none');
    const tab_3_docFragment = document.createDocumentFragment();
    Object.entries(alphabet_3).forEach(([item, value], index) => {
        const cardAlphabetCard = document.createElement('div');
        cardAlphabetCard.classList.add('cardAlphabet_card');
        switch (true) {
            case index <= 15: cardAlphabetCard.classList.add('four');
                break;
            case index <= 23: cardAlphabetCard.classList.add('three');
                break;
            case index <= 28: cardAlphabetCard.classList.add('two');
                break;
        }
        cardAlphabetCard.classList.add(`grid_el_${index}`);
        cardAlphabetCard.dataset.data = value;
        cardAlphabetCard.draggable = true;
        value.split(' ').map(createCircle).forEach(circle => {
            cardAlphabetCard.appendChild(circle);
        });
        cardAlphabetCard.addEventListener('dragstart', dragstart, false);
        cardAlphabetCard.addEventListener('dragend', dragend, false);
        tab_3_docFragment.appendChild(cardAlphabetCard);
    });
    tab_3.appendChild(tab_3_docFragment);
    return tab_3;
}

const appForInsertCardAlphabet = document.querySelector('.cardAlphabetContain');
appForInsertCardAlphabet.appendChild(createBtnOpenAndCloseCardAlphabet());
appForInsertCardAlphabet.appendChild(createMenuInTopBar());
appForInsertCardAlphabet.append(createTab_1());
appForInsertCardAlphabet.append(createTab_2());
appForInsertCardAlphabet.append(createTab_3());


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

    // for (let item of allActiveForDelete) {
    //     let itemLeft = Number(item.style.left.replace('px', ''));
    //     if (itemLeft >= dropElemPosition.left && itemLeft < dropElemPosition.right) {
    //         console.log('delete in createNoteAfterDrop');
    //         bgMatrix.idStack[item.dataset.id].deleteNote(item.dataset.id);
    //     }
    // }
    // for (let item of allActiveForDelete) {
    //     let itemLeft = Number(item.style.left.replace('px', ''));
    //     if (itemLeft >= dropElemPosition.left && itemLeft < dropElemPosition.right) {
    //         item.remove();
    //     }
    // }

    dropElem.classList.remove('drop_insert_border_on');

    let customData = event.dataTransfer.getData('customData').split(' ');
    let interval;
    let isPause;

    // let constInterval = interval;
    let targetLeftPosition = dropElemPosition.left;

    for (let i = 0; i < customData.length; i++) {
        switch (customData[i]) {
            case '1':
                interval = dropElemPosition.width / customData.length;
                isPause = false;
                break;
            case '0':
                interval = dropElemPosition.width / customData.length;
                isPause = true;
                break;
            case '11':
                interval = (dropElemPosition.width / customData.length) * 2;
                isPause = false;
                break;
            case '111':
                interval = (dropElemPosition.width / customData.length) * 3;
                isPause = false;
                break;
            case '1111':
                interval = (dropElemPosition.width / customData.length) * 4;
                isPause = false;
                break;
            case '00':
                interval = (dropElemPosition.width / customData.length) * 2;
                isPause = true;
                break;
            case '000':
                interval = (dropElemPosition.width / customData.length) * 3;
                isPause = true;
                break;
            case '0000':
                interval = (dropElemPosition.width / customData.length) * 4;
                isPause = true;
                break;
        }


        if (customData[i] != '-') {

            bgMatrix.create_note(
                bgMatrix.sizeIdentif[interval],
                interval,
                targetLeftPosition,
                bgMatrix.newOutIndMatrix[targetLeftPosition],
                isPause);
            targetLeftPosition += interval;
        }
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