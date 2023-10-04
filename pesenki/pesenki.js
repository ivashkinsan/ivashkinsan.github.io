

let winner_image = document.querySelector('.winner_image');

let page_number = 0;
let container_notes = document.querySelector('.container_notes');
let monitor_for_text = document.querySelector('.monitor_for_text');
// let nameStage = ['RA_up', 'ZO_up', 'NA', 'WI', 'LE', 'YO', 'TI', 'RA', 'ZO'];
// let nameStage = ['RA_up', 'RU_up', 'ZO_up', 'NI', 'NA', 'WI', 'WU', 'LE', 'LU', 'YO', 'TI', 'TU', 'RA', 'RU', 'ZO'];

let all_page_pigs;
const audioAll = document.querySelectorAll('audio');
let stop = 0;
let reverse_item = 0;

let start_ZO = 5;
//прячем лишние горизонтальные линии
let allLine = document.querySelectorAll('.line');
for (let i = 0; i < allLine.length; i++) {
    // allLine[i].dataset.name = nameStage[i + start_ZO];
    if (i % 2 == 0 || i < 3 || i > 11) {
        allLine[i].classList.add('transparent');
    } else {
        allLine[i].classList.add('white');
    }
}

// Создание массива с координатами горизонтального расположения
// let start_Line_Left = 60;
let grid_X = [];
let interval_x = 50;
let one_Item_Grid_X = 60; // первая нота отступ слева
for (let i = 0; i < 20; i++) {
    grid_X.push(one_Item_Grid_X);
    one_Item_Grid_X += interval_x;
};

//генерируем стартовое меню
let NewGridStartMenuElements;
let buttonsBlock = document.querySelector('.buttons_block');

// создание стартовой таблицы
let start_table = document.querySelector('.start_table');
let row_for_start_table = ['WI_down NA_down ZO RA TI YO LE WI NA ZO RA_up TI_up YO_up LE_up_up'];
let header_for_table = []
function start_create_table() {
    for (let i = 0; i < 10; i++) {
        let new_row_for_start_table = document.createElement('div');
        new_row_for_start_table.classList.add('new_row_for_start_table');
        for (let j = 0; j < 10; j++) {
            let new_item_for_row_start_table = document.createElement('div');
            new_item_for_row_start_table.classList.add('new_item_for_row_start_table');
            new_row_for_start_table.append(new_item_for_row_start_table);
        }
        start_table.append(new_row_for_start_table);
    }
}

start_create_table();
//контейнер для стартовой игры
let startVariable;
//функция создания элементов
let NewGridStartMenuGO = function (allNames) {
    for (let i = 0; i < allNames.length; i++) {
        NewGridStartMenuElements = document.createElement('div');
        NewGridStartMenuElements.textContent = allNames[i].name;
        NewGridStartMenuElements.dataSrc = allNames[i].arr;
        NewGridStartMenuElements.className = "start_buttons";
        buttonsBlock.append(NewGridStartMenuElements);
    };
}

//запуск стартового меню
NewGridStartMenuGO(full_menu);

//слушаем события на start_buttons
let start_buttons = document.querySelectorAll('.start_buttons');
start_buttons.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener('click', function () {
        for (i = 0; i < start_buttons.length; i++) {
            start_buttons[i].classList.remove('active_btn');
        }
        btn.classList.toggle('active_btn');
        startVariable = btn.dataSrc;
    });
});

// функция для кнопки старт
let startBtn = document.querySelector('.startBtn');
let welcome = document.querySelector('.welcome');
startBtn.addEventListener('click', function () {
    welcome.style.display = 'none';

    reverse_item = startVariable[0].all;
    console.log(reverse_item);

    start_game(startVariable);

});
// console.log(startVariable);



// запуск одной страницы
let start = function (pageArr) {
    stop = pageArr.formula.length;

    for (let i = 0; i < pageArr.formula.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('note');
        if (pageArr.formula[i] == 0) {
            newDiv.style.width = '0px';
            stop = stop - 1;
        } else {
            newDiv.style.backgroundImage = "url(PIGS/" + pageArr.formula[i] + ".svg)";
        }
        newDiv.style.left = grid_X[i] + 'px';
        for (let j = allLine.length - 1; j >= 0; j--) {
            if (pageArr.formula[i] == allLine[j].dataset.name || pageArr.formula[i] == allLine[j].dataset.name2) {
                newDiv.dataset.name = pageArr.formula[i];
                // console.log(allLine[j].dataset.name);
                // console.log(pageArr.formula[i]);
                allLine[j].append(newDiv);
            }
        }
    }
    monitor_for_text.innerHTML = pageArr.text;
    //собрать массив с полученными нотами
    let find_all_page_pigs = function () {
        all_page_pigs = document.querySelectorAll('.note');
        let audio = new Audio();
        for (let i = 0; i < all_page_pigs.length; i++) {
            all_page_pigs[i].addEventListener('click', function () {
                for (let jj = 0; jj < audioAll.length; jj++) {

                    if (audioAll[jj].dataset.name == all_page_pigs[i].dataset.name) {
                        audio.src = audioAll[jj].src;
                        reverse_item = reverse_item - 1;
                        all_page_pigs[i].remove();
                        stop = stop - 1;
                        console.log(reverse_item);


                    }
                }
                audio.load();
                audio.play();

                if (stop == 0 && reverse_item > 0) {
                    page_number++;
                    start_game(startVariable);
                }
                if (stop == 0 && reverse_item == 0) {
                    winner_image.style.display = 'block';
                }
            });

        };
    }
    find_all_page_pigs();
    // console.log(all_page_pigs[1].dataset.name);
}




// startVariable = parowoz[0];
// start_new_page(startVariable);

//старт игры
start_game = function (game) {
    length_song = game.length - 1;
    start(game[page_number]);

}

let button_left = document.querySelector('.button_left');
let button_right = document.querySelector('.button_right');
let button_menu = document.querySelector('.button_menu');
let length_song = 0;

//Сброс счетчиков
let reset = function () {
    stop = 0;
    reverse_item = 0;
    page_number = 0;
    length_song = 0;
}


//кнопка МЕНЮ
button_menu.addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        welcome.style.display = 'block';
    }
});

//кнопка Left
button_left.addEventListener('click', function () {
    // length_song = esli.length;
    // console.log('left =' + page_number);
    if (page_number > 0) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        page_number--;
        start_game(startVariable);
    }
});

//кнопки Right
button_right.addEventListener('click', function () {
    // length_song = esli.length;
    // console.log('right =' + page_number);
    if (page_number < length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        page_number++;
        start_game(startVariable);
    }
});



//кнопка на картинке победы
winner_image.addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        winner_image.style.display = 'none';
        welcome.style.display = 'block';
    }
});