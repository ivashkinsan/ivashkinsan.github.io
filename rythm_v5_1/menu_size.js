// выбор размеров матрицы
//  2х4     3х4     4х4     5х4     6х4     7х4     8х4
//                          2+3     2+4     3+4
//                          3+2     3+3     4+3
//                                  4+2
//  6х8     9х8     12х8

const sizeMenu = new Object({
    'variants': ['2:4', '3:4', '4:4', '5:4', '6:4', '7:4', '8:4', '6:8', '9:8', '12:8', 'sw'],
    'button': null,
    'contain': null,
    'elementsArr': [],
    createMenu() {
        let menuContain = document.createElement('div');
        menuContain.classList.add('menuContain');
        menuContain.classList.add('menuContainDspNone');
        this.contain = menuContain;
    },
    generateAllButton() {
        for (let i = 0; i < this.variants.length; i++) {
            let newElement = document.createElement('div');
            newElement.classList.add('menuElement');
            this.elementsArr.push(newElement);
            newElement.textContent = this.variants[i];
            this.contain.append(newElement);
            newElement.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.elementsArr.forEach((elem) => {
                    elem.classList.remove('menuElementActive');
                })
                e.target.classList.add('menuElementActive');
                switch (e.target.textContent) {
                    case '2:4':
                        bgMatrix.createBackground(bgMatrix.matrix_2x4, bgMatrix.startleftPosition);
                        break;
                    case '3:4':
                        bgMatrix.createBackground(bgMatrix.matrix_3x4, bgMatrix.startleftPosition);
                        break;
                    case '4:4':
                        bgMatrix.createBackground(bgMatrix.matrix_4x4, bgMatrix.startleftPosition);
                        break;
                    case '5:4':
                        bgMatrix.createBackground(bgMatrix.matrix_5x4, bgMatrix.startleftPosition);
                        break;
                    case '6:4':
                        bgMatrix.createBackground(bgMatrix.matrix_6x4, bgMatrix.startleftPosition);
                        break;
                    case '7:4':
                        bgMatrix.createBackground(bgMatrix.matrix_6x4, bgMatrix.startleftPosition);
                        break;
                    case '8:4':
                        bgMatrix.createBackground(bgMatrix.matrix_8x4, bgMatrix.startleftPosition);
                        break;
                    case '6:8':
                        bgMatrix.createBackground(bgMatrix.matrix_6x8, bgMatrix.startleftPosition);
                        break;
                    case '9:8':
                        bgMatrix.createBackground(bgMatrix.matrix_9x8, bgMatrix.startleftPosition);
                        break;
                    case '12:8':
                        bgMatrix.createBackground(bgMatrix.matrix_12x8, bgMatrix.startleftPosition);
                        break;
                }
                metronome_buttons.metronome.searsh_all_elem();
                bgMatrix.clearActiveElem();
                akcents.delElements();
            })
        }
    },
    createButtonSizeMenu() {
        let sizeMenuButton = document.createElement('div');
        sizeMenuButton.classList.add('sizeMenuBtn');
        sizeMenuButton.textContent = '\u{2630}';
        this.button = sizeMenuButton;
        sizeMenuButton.append(this.contain);
        sizeMenuButton.addEventListener('click', (e) => {
            this.contain.classList.toggle('menuContainDspNone');
        })
    },
})
sizeMenu.createMenu();
sizeMenu.generateAllButton();
sizeMenu.createButtonSizeMenu();

let app = document.querySelector('.app');
app.before(sizeMenu.button);