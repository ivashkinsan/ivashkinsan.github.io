//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));
dragElement(document.getElementById(("drag_elem_2")));

function dragElement(elmnt) {
    console.log(elmnt);
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    // if (document.getElementById(elmnt.id + "header")) {
    //     /* if present, the header is where you move the DIV from:*/
    //     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    // } else {
    //     /* otherwise, move the DIV from anywhere inside the DIV:*/
    //     elmnt.onmousedown = dragMouseDown;
    // }
    elmnt.onmousedown = dragMouseDown;

    console.log(elmnt.onmousedown);


    function dragMouseDown(e) {
        // console.log(e.clientX);
        // console.log(e.clientY);
        e = e || window.event;
        // получить позицию курсора мыши при запуске:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        // вызывать функцию всякий раз, когда курсор перемещается:
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
        // console.log(document.onmouseup);
        // console.log(document.ontouchend);
        // console.log(document.onmousemove);
        // console.log(document.ontouchmove);
    }

    function elementDrag(e) {
        e = e || window.event;
        // вычислить новую позицию курсора:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // установить новую позицию элемента:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* прекратить движение, когда кнопка мыши отпущена:*/
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}
console.log(document);