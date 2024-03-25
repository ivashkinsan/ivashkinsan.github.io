const step = 26.25; // Шаг изменения блока
const minWidth = 26.25;
const maxWidth = 500;

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
        }
    }

    function stopResizing() {
        // target.parentNode.replaceChild(sizeIdentif[replaseSumm].createDivTag('',baseSize), target);
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResizing);
    }
}

let hameleon = function(inputElem, noteObj){
    // let classes = inputElem.getAttribute('class');
    // classes = classes.split(' ');
    // console.log(classes);
    inputElem.classList.remove(classes[0]);
    inputElem.classList.add(noteObj.class);
    inputElem.dataset.data = noteObj.nameEng;
    inputElem.textContent = noteObj.fontSymbol;
}


    

