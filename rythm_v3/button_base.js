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
    // 'Y': '1 1 1 1 1',
    // 'Z': '1 1 1 1 1 1',
}

const cardAlphabet = function(){
    let cardAlphabet = document.createElement('div');
    cardAlphabet.classList.add('cardAlphabet');

    for(let item in alphabet){
        let cardAlphabet_card = document.createElement('div');
        let array = alphabet[item].split(' ');
        cardAlphabet_card.classList.add('cardAlphabet_card');
        cardAlphabet_card.dataset.data = alphabet[item];
        cardAlphabet_card.draggable = true;

        for(let elem of array){
            let cardAlphabet_card_circle = document.createElement('div');
            cardAlphabet_card_circle.classList.add('cardAlphabet_card_circle');
            elem == 1 ? cardAlphabet_card_circle.classList.add('card_circle_on') : undefined;

            cardAlphabet_card.append(cardAlphabet_card_circle);
        }
        cardAlphabet_card.addEventListener('dragstart', drag, false);
        cardAlphabet.append(cardAlphabet_card);
    }
    
    return cardAlphabet;
}
let appForInsertCardAlphabet = document.querySelector('.cardAlphabetContain');
// console.log(appForInsertCardAlphabet);
appForInsertCardAlphabet.append(cardAlphabet());

function drag(event) {
    console.log(event.target);
    event.dataTransfer.setData('text', event.target);
    event.dataTransfer.setData('customData', event.target.dataset.data);
}

function allowDrop(event) {
    event.preventDefault();
    console.log('сработало');
    
    event.target.classList.add('drop_insert_border_on');
}

function dragLeave(event) {
    event.target.classList.remove('drop_insert_border_on');
}
function drop(event) {
    event.preventDefault();
    event.target.classList.remove('drop_insert_border_on');
    console.log('отпустил');
    // event.target.click();
    let customData = event.dataTransfer.getData('customData');
    let customData_array = customData.split(' ');
    let interval = Number(event.target.style.width.replace('px','')) / customData_array.length;
    let target_left_position = Number(event.target.style.left.replace('px',''));
    for(let item of customData_array){
        if(item == '1'){

        }
        console.log(target_left_position + interval);
target_left_position = target_left_position + interval;
console.log(target_left_position);
    }

    // var data = event.dataTransfer.getData('text');
    // var draggedElement = document.getElementById(data);
    // event.target.appendChild(draggedElement);
}

const all_droppable_elem = document.querySelectorAll('.mtrxCircle');
for (let item of all_droppable_elem) {
    item.addEventListener('dragover', allowDrop, false);
    item.addEventListener('dragleave', dragLeave, false);
    item.addEventListener('drop', drop, false);
}