const step = 26.25; // Шаг изменения блока
const minWidth = 26.25;
const maxWidth = 420;

function startResizing(e, direction) {
    e.preventDefault();

    const target = e.target.parentNode;
    const startX = e.clientX;
    const startWidth = parseFloat(getComputedStyle(target).width);
    const startLeft = parseFloat(getComputedStyle(target).left);

    document.documentElement.addEventListener('mousemove', resize);
    document.documentElement.addEventListener('mouseup', stopResizing);

    function resize(e) {
        if (direction === 'right') {
            const newWidth = Math.min(Math.max(startWidth + e.clientX - startX, minWidth), maxWidth);
            target.style.width = Math.round(newWidth / step) * step + 'px';
            target.style.height = Math.round(newWidth / step) * step + 'px';
            
            let replaseSumm = target.style.height;
            replaseSumm = replaseSumm.replace('px','');
            hameleon(target,sizeIdentif[replaseSumm]); 

        } else if (direction === 'left') {
            const diff = startX - e.clientX;
            let newWidth = Math.min(Math.max(startWidth + diff, minWidth), maxWidth);
            const newLeft = startLeft - (newWidth - startWidth);
            const newWidthRounded = Math.round(newWidth / step) * step;
            target.style.width = newWidthRounded + 'px';
            target.style.height = newWidthRounded + 'px';
            target.style.left = Math.round(newLeft / step) * step + 'px';

            let replaseSumm = target.style.height;
            replaseSumm = replaseSumm.replace('px','');
            hameleon(target,sizeIdentif[replaseSumm]);
            
            let previousElement = target.previousElementSibling;
            
            console.log(previousElement.offsetLeft + previousElement.offsetWidth > target.offsetLeft);
            if(previousElement.offsetLeft + previousElement.offsetWidth){
                // previousElement
                let targetLeftPosition = Number(target.style.left.replace('px',''));
                let previousElementLeftPosition = Number(previousElement.style.left.replace('px',''));
                let difference = targetLeftPosition-previousElementLeftPosition;
                console.log(targetLeftPosition);
                console.log(previousElementLeftPosition);
console.log(difference);
                hameleon(previousElement,sizeIdentif[difference],difference);
            }
        }
    }

    function stopResizing() {
        // target.parentNode.replaceChild(sizeIdentif[replaseSumm].createDivTag('',baseSize), target);
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResizing);
    }
}

let hameleon = function(inputElem, noteObj, width){
    inputElem.classList.replace(inputElem.classList[0], noteObj.class);
    inputElem.classList.add(noteObj.class);
    inputElem.dataset.data = noteObj.nameEng;
    inputElem.querySelector('p').textContent = noteObj.fontSymbol;
    inputElem.style.width = width + 'px';
    inputElem.style.height = width + 'px';
}


    

