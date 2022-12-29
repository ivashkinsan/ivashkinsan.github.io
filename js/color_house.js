//запрещает нажатие правой кнопки мыши на сайте
document.oncontextmenu = cmenu;

function cmenu() {
    return false;
};

const container_dom = document.querySelector('.house_container');
const dom_item = document.querySelectorAll('.levels_elem');
const audioAll = document.querySelectorAll('audio');

// let scaleButton = document.querySelector('.scale');

// container_dom.insertBefore(dom_item[0],dom_item[1]);

// scaleButton.addEventListener('click', function () {
//     container_dom.classList.toggle('scale_transform');
//     console.log(container_dom);
// });

//присвоение дата атрибутов объектам дома
let j = 25;
for (let i = dom_item.length - 1; i >= 0; i--) {
    dom_item[i].setAttribute('data-key', audioAll[j].dataset.key);
    console.log(dom_item[i]);
    j += 1;
}

//озвучка клавиатуры событием касания и клика
let audio = new Audio();
for (let i = 0; i < dom_item.length; i++) {
    dom_item[i].addEventListener('click', function () {
        for (let jj = 0; jj < audioAll.length; jj++) {
            if (audioAll[jj].dataset.key == dom_item[i].dataset.key) {
                audio.src = audioAll[jj].src;
                audio.load();
                audio.play();
            }
        }
    });
};