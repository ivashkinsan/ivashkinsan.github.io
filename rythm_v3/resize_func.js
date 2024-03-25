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
            // console.log(replaseSumm);
            // console.log(target);
            console.log(sizeIdentif[replaseSumm].createDivTag('',baseSize));
            // target.parentNode.replaceChild(sizeIdentif[replaseSumm].createDivTag('',baseSize), target);
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
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResizing);
    }
}


    

