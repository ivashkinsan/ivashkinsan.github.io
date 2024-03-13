let page_number = 0;
let container_notes = document.querySelector('.container_notes');
let monitor_for_text = document.querySelector('.monitor_for_text');
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
let row_for_start_table = ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'NA', 'ZO_up', 'RA_up', 'TI_up', 'YO_up'];
let header_for_table = ['ЗО', 'РА', 'ТИ', 'Ё', 'ЛЕ', 'ВИ', 'НА', 'ЗО', 'РА', 'ТИ', 'Ё'];
let matrix_for_table = [
    [0],
    ['ZO', 'YO'],
    ['ZO', 'RA', 'YO'],
    ['ZO', 'TI', 'YO'],
    ['ZO', 'RA', 'TI', 'YO'],
    ['ZO', 'YO', 'LE'],
    ['ZO', 'RA', 'YO', 'LE'],
    ['ZO', 'RA', 'TI', 'YO', 'LE'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI'],
    ['ZO', 'YO', 'LE', 'WI', 'ZO_up'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'NA'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'ZO_up'],
    ['ZO', 'RA', 'TI', 'YO', 'WI', 'ZO_up'],
    ['YO', 'LE', 'WI'],
    ['YO', 'LE', 'WI', 'NA'],
    ['YO', 'ZO_up'],
    ['ZO', 'YO', 'WI', 'ZO_up'],
    ['YO', 'LE', 'WI', 'NA', 'ZO_up'],
    ['YO', 'LE', 'WI', 'NA', 'ZO_up', 'RA_up'],
    ['ZO', 'RA', 'YO', 'LE', 'WI', 'NA', 'ZO_up'],
    ['ZO', 'TI', 'YO', 'LE', 'WI'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'NA'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'NA', 'ZO_up'],
    ['RA', 'TI', 'YO', 'LE', 'WI', 'NA', 'ZO_up', 'RA_up'],
    ['YO', 'LE', 'WI', 'NA', 'ZO_up', 'RA_up', 'TI_up', 'YO_up'],
    ['ZO', 'RA', 'TI', 'YO', 'LE', 'WI', 'NA', 'ZO_up', 'RA_up', 'TI_up', 'YO_up']

]

function start_create_table() {
    for (i = 0; i < matrix_for_table.length; i++) {
        let new_row_for_start_table = document.createElement('div');
        new_row_for_start_table.classList.add('new_row_for_start_table');

        for (j = 0; j < 12; j++) {
            let new_item_for_row_start_table = document.createElement('div');
            new_item_for_row_start_table.classList.add('new_item_for_row_start_table');
            new_item_for_row_start_table.dataset.name = row_for_start_table[j];
            // console.log(matrix_for_table[i].indexOf(new_item_for_row_start_table.dataset.name))
            if (i > 0 && matrix_for_table[i].indexOf(new_item_for_row_start_table.dataset.name) >= 0) {
                new_item_for_row_start_table.style.backgroundImage = "url(PIGS/" + row_for_start_table[j] + ".svg)"
            }

            if (i == 0) {
                new_item_for_row_start_table.textContent = header_for_table.shift();
            }
            if (j == 11) {

                new_item_for_row_start_table.dataset.matrix = matrix_for_table[i];
                for (let item of full_menu) {
                    let new_song = document.createElement('div');
                    if (item.matrix && new_item_for_row_start_table.dataset.matrix == item.matrix.toString()) {
                        console.log(item.matrix.toString());

                        // new_song.classList.add('new_song');
                        new_song.textContent = item.name;
                        new_song.classList.add('start_buttons');
                        new_song.dataSrc = item.arr;
                        new_item_for_row_start_table.append(new_song);
                    }

                }
            }
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
        // NewGridStartMenuElements.className = "start_buttons";
        // buttonsBlock.append(NewGridStartMenuElements);
    };
}

//запуск стартового меню
NewGridStartMenuGO(full_menu);

//слушаем события на start_buttons
let start_buttons = document.querySelectorAll('.start_buttons');
start_buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        for (i = 0; i < start_buttons.length; i++) {
            start_buttons[i].classList.remove('active_btn');
        }
        btn.classList.toggle('active_btn');
        startVariable = btn.dataSrc;
    });
});

// функция для кнопки старт
document.querySelector('.startBtn').addEventListener('click', function () {
    document.querySelector('.welcome').style.display = 'none';
    show();
    reverse_item = startVariable[0].all;
    console.log(reverse_item);
    start_game(startVariable);
});

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
                    }
                }

                audio.load();
                audio.play();

                if (stop == 0 && reverse_item > 0) {
                    page_number++;
                    start_game(startVariable);
                }
                if (stop == 0 && reverse_item == 0) {
                    document.querySelector('.winner_image').style.display = 'block';
                }
            });

        };
    }
    find_all_page_pigs();
}

//старт игры
start_game = function (game) {
    length_song = game.length - 1;
    start(game[page_number]);

}
let length_song = 0;

//Сброс счетчиков
let reset = function () {
    stop = 0;
    reverse_item = 0;
    page_number = 0;
    length_song = 0;
}

//кнопка МЕНЮ
document.querySelector('.button_menu').addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        document.querySelector('.welcome').style.display = 'block';
    }
    show();
});

//кнопка Left
document.querySelector('.button_left').addEventListener('click', function () {
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
document.querySelector('.button_right').addEventListener('click', function () {
    if (page_number < length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        page_number++;
        start_game(startVariable);
    }
});

//картинка успешного окончания песенки
document.querySelector('.winner_image').addEventListener('click', function () {
    reset();
    if (page_number <= length_song) {
        let note_delete = document.querySelectorAll('.note');
        for (let item of note_delete) {
            item.remove();
        }
        console.log(this);
        this.style.display = 'none';
        document.querySelector('.welcome').style.display = 'block';
    }
    show();
});

// скрытие показ нотного стана, кнопок, текста
let moni_for_text = document.querySelector('.monitor_for_text');
// let contain_clief = document.querySelector('.contain_clief');
let contain_staff = document.querySelector('.container_staff');
let contain_button = document.querySelector('.container_button');
let show = function () {
    moni_for_text.classList.toggle('hide');
    contain_staff.classList.toggle('hide');
    contain_button.classList.toggle('hide');
}
// show();