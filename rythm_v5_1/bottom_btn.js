let buttonsPulse = document.querySelectorAll('.btn_pulse');
let changeForBtnContains = new Event('change', {
    bubbles: true,
    cancelable: true
});
let containBtnPulse = document.querySelector('.contain_btn_pulse');

buttonsPulse.forEach(button => {
    button.addEventListener('click', () => {
        buttonsPulse.forEach(btn => {
            btn.classList.remove('btn_active');
        });
        button.classList.add('btn_active');
        button.parentNode.dataset.value = button.dataset.value;

        akcents.pressButton = button;

        akcents.delElements();
        if (button.dataset.value != 'value_NO') {
            akcents.createElem();
            akcents.containerForAppend.append(akcents.container);
        }
        containBtnPulse.dispatchEvent(changeForBtnContains);
    });
});

const akcents = new Object({
    'defaultIntervals': 4,
    'allElems': [],
    'containerForAppend': document.querySelector('.metronome_container'),
    'pressButton': null,
    'container': null,
    'noteElemLength': null,
    'pattern': [],
    createContainer() {
        let container = document.createElement('div');
        container.classList.add('akcent_container');
        this.container = container;
    },
    createElem() {
        this.allElems = [];
        let findLengthMtrx = metronome.allNotes[this.pressButton.dataset.mtrx].length;
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
                metronome.akcents = this.pattern;
            })
        }
    },
    findAllAkcents() {
        this.pattern = [];
        for (let item of this.allElems) {
            if (item.classList.contains('circle_akcent_elem_active')) {
                this.pattern.push(1);
            } else {
                this.pattern.push(0);
            }
        }
    },
    delElements() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

});

akcents.createContainer();