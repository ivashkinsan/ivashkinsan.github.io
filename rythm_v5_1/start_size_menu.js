// выбор размеров матрицы
//  2х4     3х4     4х4     5х4     6х4     7х4     8х4
//                          2+3     2+4     3+4
//                          3+2     3+3     4+3
//                                  4+2
//  6х8     9х8     12х8

const sizeMenu = new Object({
    'div': null,
    'element': [],
    createMenu(){
        let newMenu = document.createElement('div');
        newMenu.classList.add('sizeMenu');
        this.div = newMenu;
    },
    createElement(){
        let newElement = document.createElement('div');
        newElement.classList.add('element');
        this.element.push(newElement);
        this.div.append(newElement);
    },
    generateAllButton(){
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].textContent = this.element[i].dataset.number;
        }
    }
})
sizeMenu.createMenu();

sizeMenu.createElement();
sizeMenu.createElement();
sizeMenu.createElement();
console.log(sizeMenu);