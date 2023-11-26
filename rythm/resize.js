// Query the element --- Запрос элемента
const ele = document.getElementById('resizeMe');

// The current position of mouse --- Текущее положение мыши
let x = 0;
let y = 0;

// The dimension of the element --- Размер элемента
let w = 0;
let h = 0;

// Handle the mousedown event --- Обработка события mousedown
// that's triggered when user drags the resizer 
// это срабатывает, когда пользователь перетаскивает инструмент изменения размера
const mouseDownHandler = function (e) {
    // Get the current mouse position --- Получить текущую позицию мыши
    x = e.clientX;
    y = e.clientY;

    // Calculate the dimension of element --- Вычислить размер элемента
    const styles = window.getComputedStyle(ele);
    w = parseInt(styles.width, 10);
    h = parseInt(styles.height, 10);

    // Attach the listeners to `document` --- Прикрепите слушателей к `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved --- Как далеко была перемещена мышь
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Adjust the dimension of element --- Отрегулируйте размер элемента
    ele.style.width = `${w + dx}px`;
    ele.style.height = `${h + dy}px`;
};

const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    // Удалите обработчики mousemove и mouseup.
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};



// Query all resizers --- Запросить все средства изменения размеров
const resizers = ele.querySelectorAll('.resizer');

// Loop over them --- Прокрутите их
[].forEach.call(resizers, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler);
});