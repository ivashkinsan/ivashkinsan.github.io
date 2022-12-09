document.oncontextmenu = function () {
    return false;
};
document.onselectstart = function () {
    return false;
}

function clickability(elem) {
    elem.addEventListener('mousedown', function (event) {
        console.log('sssssss');
        console.log(event);
    });
}

