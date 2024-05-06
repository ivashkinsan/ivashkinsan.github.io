let buttonsPulse = document.querySelectorAll('.btn_pulse');
let buttonsGrp = document.querySelectorAll('.btn_grp');
let btnSelectOptions;
let changeForBtnContains = new Event('change', {
    bubbles: true,
    cancelable: true
});
let containBtnPulse = document.querySelector('.contain_btn_pulse');
let containBtnGroup = document.querySelector('.contain_btn_group');

buttonsPulse.forEach(button => {
    button.addEventListener('click', () => {
        buttonsPulse.forEach(btn => {
            btn.classList.remove('btn_active');
        });
        button.classList.add('btn_active');
        button.parentNode.dataset.value = button.dataset.value;

        akcents.pressButton = button;

        akcents.delElements();
        akcents.createElem();
        akcents.containerForAppend.append(akcents.container);

        // btnSelectOptions = button.dataset.value;
        // console.log(btnSelectOptions);
        // Вызов события change на btnContains
        containBtnPulse.dispatchEvent(changeForBtnContains);
    });
});

buttonsGrp.forEach(button => {
    button.addEventListener('click', () => {
        buttonsGrp.forEach(btn => {
            btn.classList.remove('btn_active');
        });
        button.classList.add('btn_active');
        button.parentNode.dataset.value = button.dataset.value;

        // btnSelectOptions = button.dataset.value;
        // console.log(btnSelectOptions);
        // Вызов события change на btnContains
        containBtnGroup.dispatchEvent(changeForBtnContains);
    });
});

const akcents = new Object({
    'intervals': 4,
    'containerForAppend': document.querySelector('.contain_btn_pulse'),
    'pressButton': null,
    'container': null,
    'noteElemLength': null,
    createContainer() {
        let container = document.createElement('div');
        container.classList.add('akcent_container');
        this.container = container;
    },
    createElem() {
        let findLengthMtrx = metronome.allNotes[this.pressButton.dataset.mtrx].length;
        for (let i = 0; i < findLengthMtrx; i++) {
            let circleAkcentElem = document.createElement('div');
            circleAkcentElem.classList.add('circle_akcent_elem');
            this.container.append(circleAkcentElem);
            if ((i % this.intervals) == 0) {
                circleAkcentElem.classList.add('circle_akcent_elem_active');
            }
            circleAkcentElem.addEventListener('click', () => {
                circleAkcentElem.classList.toggle('circle_akcent_elem_active');
            })
        }
    },
    delElements() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

});

akcents.createContainer();