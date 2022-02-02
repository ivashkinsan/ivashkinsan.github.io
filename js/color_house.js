const container_dom = document.querySelector('.container_dom');
const dom_item = document.querySelectorAll('svg');
const audioAll = document.querySelectorAll('audio');

container_dom.insertBefore(dom_item[0],dom_item[1]);

//присвоение дата атрибутов SVG объектам
let j = 21;
for(let i = dom_item.length-1; i > 0; i--){
    dom_item[i].setAttribute('data-key',audioAll[j].dataset.key);
    // console.log(dom_item[i]);
    j +=1;
}

//озвучка клавиатуры событием касания и клика
let audio = new Audio();
for (let i = 0; i < dom_item.length; i++){
    dom_item[i].addEventListener('mousedown', function () {
        for(let jj = 0; jj < audioAll.length; jj++){
            if(audioAll[jj].dataset.key == dom_item[i].dataset.key){
                audio.src = audioAll[jj].src;
                audio.load();
                audio.play();
            }
        }
    });  
};




