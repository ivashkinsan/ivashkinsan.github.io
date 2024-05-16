
const randomBtnSection = new Object({
    'containerRandomButton': null,
    'clearButton': null,
    'undoButton': null,
    'redoButton': null,
    createContainerRandom(){
        this.containerRandomButton = document.createElement('div');
        this.containerRandomButton.classList.add('containerRandomButton');
        return this.containerRandomButton;
    },
    createClearButton(){
        this.clearButton = document.createElement('button');
        this.clearButton.classList.add('clearButton');
        this.clearButton.textContent = 'clear';
        return this.clearButton;
    },
    createUndoButton(){
        this.undoButton = document.createElement('button');
        this.undoButton.classList.add('undoButton');
        this.undoButton.textContent = 'undo';
        return this.undoButton;
    },
    createRedoButton(){
        this.redoButton = document.createElement('button');
        this.redoButton.classList.add('redoButton');
        this.redoButton.textContent ='redo';
        return this.redoButton;
    },
    initialize(){
        this.createContainerRandom();
        this.containerRandomButton.append(this.createClearButton());
        this.containerRandomButton.append(this.createUndoButton());
        this.containerRandomButton.append(this.createRedoButton());
        // this.containerForAppend.append(this.containerRandomButton);
    }
});
randomBtnSection.initialize();
// console.log(randomBtnSection);

const btnPulseContainer = new Object({
    'label': null,
    '_state': null,
    'matrxValue': null,
    'container': null,
    'allButtons': [],
    'containerForAppend': document.querySelector('.app'),
    createContainer(){
        let changeForBtnContains = new Event('change', {
            bubbles: true,
            cancelable: true
        });
        this.container = document.createElement('div');
        this.container.classList.add('contain_btn_pulse');
        this.container.classList.add('elem_footer');
        this.label = document.createElement('p');
        this.label.textContent = 'пульс';
        this.container.append(this.label);

        this.container.addEventListener('click', (event) => {
            this.state = event.target.dataset.value;
            if(event.target.classList.contains('btn_pulse') 
                && event.target.dataset.value !='value_NO'){
                
                this.matrxValue = event.target.dataset.mtrx;
                this.container.dataset.value = this._state;
                this.container.dispatchEvent(changeForBtnContains);
                akcents.delElements();
            if (this._state != 'value_NO') {
                akcents.createElem();
                akcents.containerForAppend.append(akcents.container);
            }
            metronome.contain_btn_pulse = this.container;
            metronome.containBtnPulse = this.container;
            } else if(this._state == 'value_NO'){
                akcents.delElements();
            }
       });
       this.containerForAppend.before(this.container);
       

    },
    changeForContainer(){
        this.container.addEventListener('change', (event)=> {
            metronome.clear_all_elem();
            switch (event.target.dataset.value) {
                case 'value_NO':
                    metronome.tempo = 50;
                    tempo.textContent = metronome.tempo;
                    break;
                case 'value_2':
                    metronome.tempo = 25;
                    tempo.textContent = metronome.tempo;
                    metronome.currentBeatInBar = 0;
                    metronome.schet_for_led = 0;
                    metronome.beatsPerBar = metronome.allNotes.matrix_2.length;
                    break;
                case 'value_4':
                    metronome.tempo = 50;
                    tempo.textContent = metronome.tempo;
                    metronome.currentBeatInBar = 0;
                    metronome.schet_for_led = 0;
                    metronome.beatsPerBar = metronome.allNotes.matrix_4.length;
                    break;
                case 'value_8':
                    metronome.tempo = 100;
                    tempo.textContent = metronome.tempo;
                    metronome.currentBeatInBar = 0;
                    metronome.schet_for_led = 0;
                    metronome.beatsPerBar = metronome.allNotes.matrix_8.length;
                    break;
                case 'value_16':
                    metronome.tempo = 200;
                    tempo.textContent = metronome.tempo;
                    metronome.currentBeatInBar = 0;
                    metronome.schet_for_led = 0;
                    metronome.beatsPerBar = metronome.allNotes.matrix_16.length;
                    break;
            }
        })
    },
    createButtons(){
        let dataValue = ['value_NO','value_2','value_4','value_8','value_16'];
        let datasetMtrx = ['value_NO','matrix_2','matrix_4','matrix_8','matrix_16']
        let btnLabel = ['\u2717','h','q','e','x'];
        for(let i = 0; i < btnLabel.length; i++){
            let button = document.createElement('div');
            i == 0 ? button.classList.add('btn_active') : undefined;
            button.classList.add('btn_pulse');
            button.textContent = btnLabel[i];
            button.dataset.value = dataValue[i];
            button.dataset.mtrx = datasetMtrx[i];
            this.allButtons.push(button);
            this.container.append(button);
        }
    },
    initialize(){
        this.createContainer();
        this.createButtons();
        this.changeForContainer();
    },
    /**
     * @param {any} value
     */
    set state(value){
      if(value != undefined){
        this._state = value;
        this.allButtons.forEach(btn => {
            if(btn.dataset.value == value){
                btn.classList.add('btn_active');
            } else {
                btn.classList.remove('btn_active');
            }
        }); 
      }
    }
});
btnPulseContainer.initialize();

const akcents = new Object({
    'defaultIntervals': 4,
    'allElems': [],
    'containerForAppend': document.querySelector('.metronome_container'),
    'inputMtrxValue': null,
    'container': null,
    'noteElemLength': null,
    'pattern': [],
    // 'proxy_start_stop_metr': new Proxy(metronome, {
    //     get(target, prop) {
    //         if(prop == 'isRunning'){
    //             console.log('isRunning');
    //         }
    //         console.log(`Getting prop ${prop}`);
    //         console.log("isRunning " + target.isRunning);
    //         return target[prop];
    //     },
    //     set(target, prop, value) {
    //         if (prop in target) {
    //             target[prop] = value
    //         } else {
    //             throw new Error(`No ${prop} field in target`)
    //         }
    //     },
    //     has(target, prop) {
    //         return ['isRunning'].includes(prop)
    //     },
    //     deleteProperty(target, prop) {
    //         console.log(`Deleting... ${prop}`);
    //         delete target[prop]
    //     }
    // }),
    createContainer() {
        let container = document.createElement('div');
        container.classList.add('akcent_container');

        this.container = container;
    },
    createElem() {
        this.allElems = [];
        // console.log(this.pressButton);
        // console.log(metronome.allNotes);
        let findLengthMtrx = metronome.allNotes[btnPulseContainer.matrxValue].length;
        for (let i = 0; i < findLengthMtrx; i++) {
            let circleAkcentElem = document.createElement('div');
            circleAkcentElem.classList.add('circle_akcent_elem');
            let circleAkcentElem_p = document.createElement('p');
            circleAkcentElem_p.classList.add('circleAkcentElem_p');
            circleAkcentElem_p.textContent = i + 1;
            circleAkcentElem.append(circleAkcentElem_p);
            this.allElems.push(circleAkcentElem);
            this.container.append(circleAkcentElem);
            if ((i % this.defaultIntervals) == 0) {
                circleAkcentElem.classList.add('circle_akcent_elem_active');
            }
            this.findAllAkcents();
            metronome.akcents = this.pattern;

            // console.log(metronome.akcents);
            circleAkcentElem.addEventListener('click', () => {
                circleAkcentElem.classList.toggle('circle_akcent_elem_active');
                this.findAllAkcents();
                console.log(this.pattern);
            })
        }
        this.container.append(akcents.createEraser());
        // let patterns = akcents.createPattern();
        // patterns.map(elem =>{
        //     this.container.append(elem);
        // })
    },
    createEraser() {
        let eraser = document.createElement('div');
        eraser.classList.add('eraser');
        eraser.textContent = `del`;
        eraser.addEventListener('click', () => {
            for (let item of this.allElems) {
                item.classList.remove('circle_akcent_elem_active');
            }
            this.findAllAkcents();
        })
        return eraser;
    },
    // createPattern() {
    //     let btnArr = ['1','2', '3', '4','del'];
    //     let allBtn = [];
    //     for (let item of btnArr) {
    //         let btn = document.createElement('div');
    //         btn.classList.add(`akcentsBtnPattern`);
    //         btn.classList.add(`btnPattern_${item}`);
    //         btn.textContent = item;
    //         allBtn.push(btn);
    //     }
    //     return allBtn;
    // },
    findAllAkcents() {
        this.pattern = [];
        for (let item of this.allElems) {
            if (item.classList.contains('circle_akcent_elem_active')) {
                this.pattern.push(1);
            } else {
                this.pattern.push(0);
            }
        }
        metronome.akcents = this.pattern;
    },
    delElements() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    },
    ledOn(index) {
        this.ledOff();
        this.allElems[index].classList.add('circle_akcent_elem_metr_on_active');
    },
    ledOff() {
        this.allElems.forEach((elem) => elem.classList.remove('circle_akcent_elem_metr_on_active'));
    }


});

akcents.createContainer();
akcents.proxy_start_stop_metr;

// console.log(akcents.proxy_start_stop_metr.isRunning);


// BUTTON корзина для очистки активных элементов
// let clearActiveElem = function () {// функция очистки подсветки всех активных элементов
//     for (let key in bgMatrix.idStack) {
//         bgMatrix.idStack[key].deleteNote(bgMatrix.idStack[key].id);
//     }
// }
// let clearButton = document.querySelector('.clear');
// clearButton.addEventListener('click', clearActiveElem); // очистка подсветки


// bgMatrix.undoButton.addEventListener('click', (e) => {
//     bgMatrix.undo();
// });
// bgMatrix.redoButton.addEventListener('click', (e) => {
//     bgMatrix.redo();
// });