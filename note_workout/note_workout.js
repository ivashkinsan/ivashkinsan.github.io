let all_line = document.querySelectorAll('.line');
let all_keyb_elem = document.querySelectorAll('.keyb_elem');
let black_keys = document.querySelectorAll('.black_key');
let white_keys = document.querySelectorAll('.white_key');
// let all_keyb_elem = document.querySelectorAll('.keyb_elem');
let counter_winner_box = document.querySelector('.counter_winner label');
let counter_winner_numb = 0;
let new_note_func = function () {
    let new_elem = document.createElement('div');
    new_elem.classList.add('note');
    return new_elem;
}

let arr_game = [];
let arr_game_answer = [];

// генерация матрицы нот
let generate_note_frame = function (obj_of_notes) {
    for (const [key, value] of Object.entries(obj_of_notes)) {
        let left_line_start = 14;
        let new_arr_of_string = value.split(' ');
        for (let i = 0; i < new_arr_of_string.length; i++) {
            all_line.forEach(function (elem) {
                if (elem.dataset.note == new_arr_of_string[i]) {
                    let new_el = new_note_func();
                    new_el.dataset.note = elem.dataset.note;
                    new_el.dataset.name = elem.dataset.name;
                    new_el.style.left = left_line_start + 'vh';
                    left_line_start += 8;
                    elem.append(new_el);
                }
            })
            if (new_arr_of_string[i] === '0') {
                left_line_start += 8;
            }
        }
    }
}
generate_note_frame(obj_matrix);

let clear_matrix = function () {
    for (let item of all_line) {
        item.innerHTML = '';
    }
}
// clear_matrix();

let value_of_add_ledon_class = 'none';
let box_123 = 'C1 D1 E1 C2 D2 E2 C3 D3 E3 C4 D4 E4'
let box_1234 = 'F1 G1 A1 B1 F2 G2 A2 B2 F3 G3 A3 B3 F4 G4 A4 B4'

// 3 режима отображения клавиш клавиатуры
let add_ledon_class = function (value) {
    document.querySelector('.container_with_keyboard').classList.remove('dspl_none');
    switch (value) {
        case 'none':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
            }
            value_of_add_ledon_class = 'white';
            break;
        case 'white':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
                switch (item.dataset.note) {
                    case 'G1':
                    case 'B1':
                    case 'D2':
                    case 'F2':
                    case 'A2':

                    case 'E3':
                    case 'G3':
                    case 'B3':
                    case 'D4':
                    case 'F4':
                        item.classList.add('led_on');
                        break;
                }
            }
            value_of_add_ledon_class = '10_line';
            break;

        case '10_line':
            for (let item of all_keyb_elem) {
                item.classList.remove('led_on');
                item.classList.remove('led_on_orange');
                if ((box_123.indexOf(item.dataset.note)) >= 0) {
                    item.classList.add('led_on_orange');
                } else if ((box_1234.indexOf(item.dataset.note)) >= 0) {
                    item.classList.add('led_on');
                }
            }
            value_of_add_ledon_class = '3+4';
            break;

        case '3+4':
            document.querySelector('.container_with_keyboard').classList.toggle('dspl_none');
            value_of_add_ledon_class = 'none';
            break;
    }

    if (Array.isArray(value)) {
        console.log('privet')
        for (let item of all_keyb_elem) {
            if (value.includes(item.dataset.note)) {
                item.classList.add('led_on');
            }
        }
    }
}
add_ledon_class(value_of_add_ledon_class);

// добавить название нот на старте
let add_label = function () {
    let all_note = document.querySelectorAll('.note');
    for (let item of all_note) {
        item.innerHTML = item.dataset.name;
    }
}
add_label();

// добавить название нот на старте
let add_label_background = function () {
    let all_note = document.querySelectorAll('.note');
    for (let item of all_note) {
        item.classList.toggle('note_background_text_color')
    }
}

// подписать активные ноты
let label_on_off = 'off';
let add_label_of_note = function () {
    let all_active_note = document.querySelectorAll('.active_note');
    for (let item of all_active_note) {
        item.classList.remove('text_show');
    }
    if (label_on_off == 'off') {
        for (let item of all_active_note) {
            item.classList.add('text_show');
        }
        label_on_off = 'on'
    } else {
        for (let item of all_active_note) {
            item.classList.remove('text_show');
        }
        label_on_off = 'off'
    }

}

// узнать длинну строки
function toArray(obj) {
    var array = [];
    // iterate backwards ensuring that length is an UInt32
    for (var i = obj.length >>> 0; i--;) {
        array[i] = obj[i];
    }
    return array;
}

let return_active_notes = () => {
    arr_game_answer = [];
    let game_active = document.querySelectorAll('.active_note');
    for (let item of game_active) {
        arr_game_answer.push(item.dataset.note);
    }
    return game_active;
}

let return_keys_led_on = () => {
    let keys_led_on = document.querySelectorAll('.led_on');
    return keys_led_on;
}

let count_add = () => {
    counter_winner_numb++;
    counter_winner_box.textContent = counter_winner_numb;
}

let led_on_in_right_answer = (item) => {
    item.classList.toggle('led_on');
    item.classList.toggle('led_right_answer');
}

let hover_function = function (item) {

    item.addEventListener('mouseenter', function () {
        // console.log(item);
        // console.log(item.children[0]);

        // if (!item.children[0]) {
        //     item.insertAdjacentHTML('beforeend', '<div class="sharp_button font_opus_std">#</div>');
        //     item.insertAdjacentHTML('beforeend', '<div class="flat_button font_opus_std">b</div>');
        // }

        // item.classList.toggle('led_on');
    });
    // item.addEventListener('mouseleave', function () {
    //     if (item.children[0]) {
    //         item.children[0].remove();
    //         item.children[0].remove();
    //         // item.children[1].remove();
    //     }
    // });
}

function clear_el(e, e_par) {
    e.remove();
    e_par.removeAttribute('data-sign');
    console.log(e_par);
}

// активировать элемент на нотном стане
document.querySelector('.container_with_line_background').addEventListener('click', (event) => {
    let all_note = document.querySelectorAll('.note');
    if (event.target.classList.contains('note') && !event.target.classList.contains('active_note')) {
        event.target.classList.add('active_note');

        if (['C1', 'E1', 'C3', 'A4', 'C5'].includes(event.target.dataset.note) > 0) {
            console.log("==C3");
            // let new_line_for_C3 = document.createElement('div');
            event.target.classList.add('new_line_for_C3');
        }


        event.target.draggable = true;
        let clnt_strtY = 0;
        let clnt_endY = 0;
        let clnt_strtX = 0;
        let clnt_endX = 0;
        event.target.addEventListener('dragstart', function (event) {
            // console.log('dragstart');
            clnt_strtY = event.clientY;
            clnt_strtX = event.clientX;
            console.log(event.clientY);
        });
        event.target.addEventListener('dragend', function (event) {
            clnt_endY = event.clientY;
            clnt_endX = event.clientX;
            console.log(clnt_strtX, clnt_endX);
            if (clnt_strtY < clnt_endY && clnt_endY - clnt_strtY > 50) {
                console.log('движение вниз');
                if (!event.target.children[0]) {
                    event.target.insertAdjacentHTML('beforeend', '<div class="flat_button font_opus_std" onclick="clear_el(this, this.parentNode)">b</div>');
                    event.target.dataset.sign = 'flat';
                }
            }
            if (clnt_strtY > clnt_endY && clnt_strtY - clnt_endY > 50) {
                console.log('движение вверх');
                if (!event.target.children[0]) {
                    event.target.insertAdjacentHTML('beforeend', '<div class="sharp_button font_opus_std" onclick="clear_el(this, this.parentNode)">#</div>');
                    event.target.dataset.sign = 'sharp';
                }
            }
            if (clnt_strtX < clnt_endX && clnt_endX - clnt_strtX > 50) {
                console.log('движение вправо');
                if (!event.target.children[0]) {
                    event.target.insertAdjacentHTML('beforeend', '<div class="sharp_button font_opus_std" onclick="clear_el(this, this.parentNode)">&sect</div>');
                    event.target.dataset.sign = 'natural ';
                }
            }
        });


        // вывод текста на ноте
        if (!event.target.classList.contains('text_show') && label_on_off == 'on') {
            event.target.classList.add('text_show');
        } else {
            event.target.classList.remove('text_show');
        }
        let copy = event.target;
        hover_function(copy);
    } else if (event.target.classList.contains('note')) {
        event.target.removeAttribute('draggable');
        event.target.classList.remove('active_note');
        event.target.classList.remove('text_show');
        event.target.removeAttribute('data-sign');
        event.target.children[0] ? event.target.children[0].remove() : null;
        event.target.classList.remove('new_line_for_C3');
    }



    if (start_game_true) {
        for (let item of return_keys_led_on()) {
            for (let active_note of return_active_notes()) {
                if (item.dataset.note == active_note.dataset.note) {
                    led_on_in_right_answer(item);
                    if (arr_game.length == arr_game_answer.length) {
                        compare(arr_game, arr_game_answer)
                        setTimeout(game_end, 1000);
                        setTimeout(() => {
                            start_game(training_var_obj[proba.shift()])
                        }, 1000);
                    }
                }
            }
        }
    }
    // console.log(return_active_notes().length);
    // console.log(return_keys_led_on().length);
    who_is_construct(); // функция подсказки, что за активированный элемент на нотном стане
})





// добавление длинного фона
let long_keyboard_background = function () {
    let long_keyboard_background = document.querySelector('.container_with_keyboard');
    // black_keys = document.querySelectorAll('.black_key');
    // white_keys = document.querySelectorAll('.white_key');
    // all_keyb_elem = document.querySelectorAll('.keyb_elem');
    if (long_keyboard_background.classList.contains('dspl_none')) {
        long_keyboard_background.classList.remove('dspl_none');
    }
    for (let item of black_keys) {
        item.classList.toggle('black_keys_short');
    }
    for (let item of white_keys) {
        if (item.dataset.note == '') {

        }
    }
    for (let item of all_keyb_elem) {
        item.classList.toggle('no_border');
    }

    long_keyboard_background.classList.toggle('long_keyboard_background');
    for (let item of all_line) {
        item.classList.toggle('black_line');
    }
    let dashed_lines = document.querySelectorAll('.dashed');
    for (let item of dashed_lines) {
        item.classList.toggle('dashed_black');
    }
}

// сброс активных нот
let add_reset_active_note = function () {
    let all_notes = document.querySelectorAll('.note');
    for (let item of all_notes) {
        if (item.classList.contains('active_note')) {
            if (item.children[0]) {
                item.children[0].remove();
            }
            item.classList.remove('active_note');
            item.classList.remove('text_show');
            item.classList.remove('new_line_for_C3');
        }
    }
}

// перемещать клавиатуру как линейку
let keyb_container = document.querySelector('.container_with_keyboard');
let range_input = document.querySelector('.range_width');
let right_left_keyb = function () {
    keyb_container.style.left = range_input.value + 'vw';
}

// повернуть клавиатуру
let add_rotate_style = function () {
    document.querySelector('.container_with_keyboard').classList.toggle('add_rotate_style');
    document.querySelector('.container_with_line_background').classList.toggle('add_bottom_margin');
    document.querySelector('.container_with_keyboard_2').classList.toggle('add_keyb2_margin');
    range_input.value = 20;

    let all_keyb_label = document.querySelectorAll('.keyb_label');
    for (let item of all_keyb_label) {
        item.classList.toggle('rotate_180');
    }
}

// тренировка
// let game_pattern = ['A1', 'B1', 'C2', 'A3', 'B3', 'C3'];
let start_game_true = false;

let start_game = function (pattern) {
    value_of_add_ledon_class = 'none';
    add_ledon_class(value_of_add_ledon_class);
    add_ledon_class(pattern);
    arr_game = pattern;
    start_game_true = true;
}


let training_button = document.querySelector('.training');
training_button.addEventListener('click', () => {
    counter_winner_numb = 0;
    counter_winner_box.textContent = counter_winner_numb;
    create_full_arr_training();
    game_end();
    start_game(training_var_obj[proba.shift()]);
});

let clear_led_right_answer = function () {
    let all_active_led_right_answer = document.querySelectorAll('.led_right_answer');
    for (let item of all_active_led_right_answer) {
        item.classList.remove('led_right_answer');
    };
};


let compare = function (one_arr, two_arr) {
    let arr1 = one_arr;
    let arr2 = two_arr;
    for (let item of arr1) {
        for (let i = 0; i < two_arr.length; i++) {
            if (item == two_arr[i]) {
                two_arr.splice(i, 1);
            }
        }
    }
    if (two_arr.length == 0 && one_arr.length == two_arr.length) {
        return true;
    }
    console.log("one_arr");
    console.log(one_arr);
    console.log("two_arr");
    console.log(two_arr);
    console.log("arr2");
    console.log(arr2);
};

// сброс активных элементов в конце тренировки
let game_end = function () {
    add_reset_active_note();
    clear_led_right_answer();
    arr_game_answer = [];
}



let addLabel = function (item) {
    return `
        <div class="keyb_label">${item.dataset.name}</div>
        `
}
let add_note_name_for_keyb = function () {
    for (let item of all_keyb_elem) {
        if (item.dataset.name && !item.classList.contains('hide')) {
            item.insertAdjacentHTML('afterbegin', addLabel(item));
        }
    }
}
add_note_name_for_keyb();

let who_is_construct = function () {
    let delete_elem = document.querySelector('.who_is');
    if (delete_elem) {
        delete_elem.remove();
    }

    let all_note_elem = document.querySelectorAll('.active_note');
    let arr_of_note = [...all_note_elem];
    let dataset_of_note = arr_of_note.map(function (elem) {
        return elem.dataset.note;
    });
    dataset_of_note.reverse()
    console.log(dataset_of_note.toString());
    // console.log(arr_of_note[arr_of_note.length - 1]);
    // console.log(arr_of_note.length);

    if (arr_of_note.length > 0 && label_for_who_is_construct[dataset_of_note.toString()]) {
        arr_of_note[arr_of_note.length - 1].insertAdjacentHTML('beforeend', label_for_who_is_construct[dataset_of_note.toString()]);
    }
}
who_is_construct();

let label_for_who_is_construct = {
    'C3,D3,E3,F3': `<div class="who_is">мажорный тетрахорд Т+Т+пТ=ч4</div>`,
    'C3,D3,E3,F3,G3,A3,B3': `<div class="who_is">мажорная гамма ионийский лад</div>`,

    'C3,C3': `<div class="who_is">чистая прима Ч1</div>`,
    'C3,D3': `<div class="who_is">большая секунда Б2</div>`,
    'C3,E3': `<div class="who_is">большая терция Б3</div>`,
    'C3,F3': `<div class="who_is">чистая кварта Ч4</div>`,
    'C3,G3': `<div class="who_is">чистая квинта Ч5</div>`,
    'C3,A3': `<div class="who_is">большая секста Б6</div>`,
    'C3,B3': `<div class="who_is">большая септима Б7</div>`,
    'C3,C4': `<div class="who_is">чистая октава Ч8</div>`,
    'C3,E3,G3': `<div class="who_is">мажорное трезвучие T53</div>`,
    'C3,E3,G3,B3': `<div class="who_is">большой мажорный септ аккорд С^</div>`,

    'D3,D3': `<div class="who_is">чистая прима Ч1</div>`,
    'D3,E3': `<div class="who_is">большая секунда Б2</div>`,
    'D3,F3': `<div class="who_is">малая терция м3</div>`,
    'D3,G3': `<div class="who_is">чистая кварта ч4</div>`,
    'D3,A3': `<div class="who_is">чистая квинта ч5</div>`,
    'D3,B3': `<div class="who_is">большая секста Б6</div>`,
    'D3,C4': `<div class="who_is">большая септима Б7</div>`,
    'D3,D4': `<div class="who_is">чистая октава Ч8</div>`
}