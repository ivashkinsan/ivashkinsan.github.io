const click_items = document.querySelectorAll('.click_item');
const p_numb = document.querySelectorAll('.numb');

let monitoringDIV = document.querySelector('.monitoring');

// console.log(click_items);
let monitoringBaseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let item of click_items) {
    item.addEventListener('click', function add(elem) {
        item.classList.toggle('border_active');
       
        switch (true) {
            case item.classList.contains('whole_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                break;
            case item.classList.contains('half_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 8, 1, 1, 1, 1, 1, 1, 1, 1);
                break;
            case item.classList.contains('quarter_note'):
                monitoringBaseArr.splice(item.dataset.position - 1, 4, 1, 1, 1, 1);
                break;
            case item.classList.contains('eighth'):
                monitoringBaseArr.splice(item.dataset.position - 1, 2, 1, 1);
                break;
            case item.classList.contains('sixteenth'):
                monitoringBaseArr.splice(item.dataset.position - 1, 1, 1);
                break;
                // case item.classList.contains('whole_note') && !item.classList.contains('border_active'):
                //     monitoringBaseArr.splice(item.dataset.position - 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                //     break;
        };


        monitoringStart(0);
        elem.stopPropagation(); // глушим всплывающее событие
        console.log('this children = ' + this.children);
        // for(let newItem of this.childrens){
        //     newItem.stopImmediatePropagation();
        // }
        this.children;
        console.log(this.children);
        // console.log( elem);
    })
}


function addFontNote() {
    for (let item of p_numb) {

        switch (item.dataset.note) {
            case '1':
                item.innerHTML = 'w';
                item.style.fontSize = '66px';
                break;
            case '2':
                item.innerHTML = 'h';
                item.style.fontSize = '56px';
                break;
            case '4':
                item.innerHTML = 'q';
                item.style.fontSize = '36px';
                break;
            case '8':
                item.innerHTML = 'e';
                item.style.fontSize = '21px';
                break;
            case '16':
                item.innerHTML = 's';
                item.style.fontSize = '26px';
                break;

        }
    }
}

addFontNote();

function monitoringStart(all) {

    for (let j = all; j <= monitoringBaseArr.length; j++) {
        // console.log('RUN');
        monitoringDIV.innerHTML = String(monitoringBaseArr);
    };
    console.log(monitoringBaseArr);
}