// стартовое распределение цвета клавиш большой клваиатуры
let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1', '3', '5', '6', '8', '10', '12', '13', '15', '17', '18', '20', '22', '24', '25'];
let big_keyboard_add_color = function () {
    for (let item of keyboard_elements) {
        if (white_key_numb.includes(item.dataset.numb)) {
            item.classList.add('white_elem')
        } else {
            item.classList.add('black_elem')
        }
    }
}
big_keyboard_add_color();


let label = {
    label:
    {
        name: 'НАЗВАНИЕ ЛАДА',
        chord: 'АККОРД',
        formula: 'СТУПЕНИ',
        tetrachord: 'ТЕТРАХОРДЫ',
        alteration: ['АЛЬТЕРАЦИИ']
    },
}

let major_diatonic = {
    ionian:
    {
        name: 'ионийский',
        chord: '',
        formula: ['1', '2', '3', '4', '5', '6', '7', '8'],
        tetrachord: ['maj', 'maj'],
        alteration: ['нет']
    },
    dorian:
    {
        name: 'дорийский',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['min', 'min'],
        alteration: ['b3', 'b7']
    },
    frigian:
    {
        name: 'фригийский',
        chord: '',
        formula: ['1', 'b2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['frig', 'frig'],
        alteration: ['b2', 'b3', 'b6', 'b7']
    },
    lydian:
    {
        name: 'лидийский',
        chord: '',
        formula: ['1', '2', '3', '#4', '5', '6', '7', '8'],
        tetrachord: ['TTT', 'maj'],
        alteration: ['#4']
    },
    mixolydian:
    {
        name: 'миксолидийский',
        chord: '',
        formula: ['1', '2', '3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['maj', 'min'],
        alteration: ['b7']
    },
    aeolian:
    {
        name: 'эолийский',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['min', 'frig'],
        alteration: ['b3', 'b6', 'b7']
    },
    locrian:
    {
        name: 'локрийский',
        chord: '',
        formula: ['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['frig', 'TTT'],
        alteration: ['b2', 'b3', 'b5', 'b6', 'b7']
    },
}

let other_modes = {

    harmonic_minor:
    {
        name: 'гармонический минор',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['min', 'harm'],
        alteration: ['b3', 'b6']
    },

    melodic_minor:
    {
        name: 'мелодический минор',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', '6', '7', '8'],
        tetrachord: ['min', 'maj'],
        alteration: ['b3']
    },

    harmonic_major:
    {
        name: 'гармонический мажор',
        chord: '',
        formula: ['1', '2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['maj', 'harm'],
        alteration: ['b6']
    },

    melodic_major:
    {
        name: 'мелодический мажор',
        chord: '',
        formula: ['1', '2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['maj', 'frig'],
        alteration: ['b6', 'b7']
    },

    harmonic_2x_major:
    {
        name: 'дважды гармонический мажор',
        chord: '',
        formula: ['1', 'b2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['harm', 'harm'],
        alteration: ['b2', 'b6']
    },
}

let mel_minor_diatonic = {
    melodic_minor:
    {
        name: 'мелодический минор',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', '6', '7', '8'],
        tetrachord: ['min', 'maj'],
        alteration: ['b3']
    },
    javanese:
    {
        name: 'дорийский b2 / фригийский нат 6',
        chord: '',
        formula: ['1', 'b2', 'b3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['frig', 'min'],
        alteration: ['b2', 'b3', 'b7']
    },
    lydian_aug:
    {
        name: 'лидийский ув',
        chord: '',
        formula: ['1', '2', '3', '#4', '#5', '6', '7', '8'],
        tetrachord: ['ТТТ', 'maj(#5)'],
        alteration: ['#4', '#5']
    },
    lydian_dom:
    {
        name: 'лидийский доминантовый',
        chord: '',
        formula: ['1', '2', '3', '#4', '5', '6', 'b7', '8'],
        tetrachord: ['ТТТ', 'min'],
        alteration: ['#4', 'b7']
    },
    hindu:
    {
        name: 'мелодический мажор',
        chord: '',
        formula: ['1', '2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['maj', 'frig'],
        alteration: ['b6', 'b7']
    },
    locrian_nat_2:
    {
        name: 'локрийский нат 2',
        chord: '',
        formula: ['1', '2', 'b3', '4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['min', 'TTT'],
        alteration: ['b3', 'b5', 'b6', 'b7']
    },
    alt:
    {
        name: 'супер локрийский / alt',
        chord: '',
        formula: ['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['frig(b4)', 'TTT'],
        alteration: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
    },
}

let harm_minor_diatonic = {
    harm_minor:
    {
        name: 'гармонический минор',
        chord: '',
        formula: ['1', '2', 'b3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['min', 'harm'],
        alteration: ['b3', 'b6']
    },
    locrian_nat_6:
    {
        name: 'локрийский нат 6',
        chord: '',
        formula: ['1', 'b2', 'b3', '4', 'b5', '6', 'b7', '8'],
        tetrachord: ['frig', 'TTT(n6)'],
        alteration: ['b2', 'b3', 'b5', 'b7']
    },
    ionian_aug:
    {
        name: 'ионийский увеличенный',
        chord: '',
        formula: ['1', '2', '3', '4', '#5', '6', '7', '8'],
        tetrachord: ['maj', 'maj(#5)'],
        alteration: ['#5']
    },
    romanian:
    {
        name: 'дорийский #4',
        chord: '',
        formula: ['1', '2', 'b3', '#4', '5', '6', 'b7', '8'],
        tetrachord: ['min(#4)', 'min'],
        alteration: ['b3', '#4', 'b7']
    },
    mixo_b2_b7:
    {
        name: 'миксолидийский b2 b6',
        chord: '',
        formula: ['1', 'b2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['harm', 'frig'],
        alteration: ['b2', 'b6', 'b7']
    },
    lydian_up_2:
    {
        name: 'лидийский #2',
        chord: '',
        formula: ['1', '#2', '3', '#4', '5', '6', '7', '8'],
        tetrachord: ['TTT(#2)', 'maj'],
        alteration: ['#2', '#4']
    },
    ultra_locrian:
    {
        name: 'ульта локрийский',
        chord: '',
        formula: ['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7', '8'],
        tetrachord: ['frig(b4)', 'TTT(bb7)'],
        alteration: ['b2', 'b3', 'b4', 'b5', 'b6', 'bb7']
    },
}

let harm_major_diatonic = {
    harm_major:
    {
        name: 'гармонический мажор',
        chord: '',
        formula: ['1', '2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['maj', 'harm'],
        alteration: ['b6']
    },
    dorian_b5:
    {
        name: 'дорийский b5 / локрийский #2 #6',
        chord: '',
        formula: ['1', '2', 'b3', '4', 'b5', '6', 'b7', '8'],
        tetrachord: ['min', 'min(b5)'],
        alteration: ['b3', 'b5', 'b7']
    },
    alt_nat_5:
    {
        name: 'фригийский b4 / альтерированный нат5',
        chord: '',
        formula: ['1', 'b2', 'b3', 'b4', '5', 'b6', 'b7', '8'],
        tetrachord: ['frig(b4)', 'frig'],
        alteration: ['b2', 'b3', 'b4', 'b6', 'b7']
    },
    melodic_min_up_4:
    {
        name: 'мелодический минор #4',
        chord: '',
        formula: ['1', '2', 'b3', '#4', '5', '6', '7', '8'],
        tetrachord: ['min(#4)', 'maj'],
        alteration: ['b3', '#4']
    },
    mixolydian_b2:
    {
        name: 'миксолидийский b2',
        chord: '',
        formula: ['1', 'b2', '3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['harm', 'min'],
        alteration: ['b2', 'b7']
    },
    lydian_up2_up5:
    {
        name: 'лидийский #2 #5',
        chord: '',
        formula: ['1', '#2', '3', '#4', '#5', '6', '7', '8'],
        tetrachord: ['harm', 'min'],
        alteration: ['#2', '#4', '#5']
    },
    dim_harm_major:
    {
        name: 'локрийский bb7',
        chord: '',
        formula: ['1', 'b2', 'b3', '4', 'b5', 'b6', 'bb7', '8'],
        tetrachord: ['frig', 'TTT(bb7)'],
        alteration: ['b2', 'b3', '4', 'b5', 'b6', 'bb7']
    },
}

// функция наполнение-генерация таблицы
let table_container = document.querySelector('.table_container');
let generate_table = function (inp_obj, append_obj) {
    for (let [key, value] of Object.entries(inp_obj)) {
        // let new_row = document.createElement('div');
        // new_row.classList.add('table_card');

        for (let [kkk, vvv] of Object.entries(inp_obj[key])) {
            // console.log(inp_obj[key][kkk]);
            let new_item = document.createElement('div');
            new_item.classList.add('table_item');
            new_item.classList.add(kkk);
            // console.log(inp_obj[key][kkk])
            // console.log(kkk)

            if (typeof (inp_obj[key][kkk]) == 'object') {

                for (let i = 0; i < inp_obj[key][kkk].length; i++) {
                    let new_children_of_card = document.createElement('div');
                    new_children_of_card.classList.add('table_item_child');

                    if (kkk == 'formula' || kkk == 'alteration') {
                        new_children_of_card.classList.add('font_opus_std');
                    }

                    if (inp_obj[key][kkk].length > 6) {
                        new_children_of_card.classList.add('stage_' + [i + 1]);
                    }
                    new_item.dataset.algorythm = inp_obj[key][kkk];
                    new_children_of_card.textContent = inp_obj[key][kkk][i];
                    new_item.append(new_children_of_card);
                }


                append_obj.appendChild(new_item);
            } else {
                new_item.textContent = inp_obj[key][kkk];
                append_obj.appendChild(new_item);
            }
            //добавить блок для разрыва колонок
            if (kkk == 'chord' || kkk == 'formula') {
                let new_gap = document.createElement('div');
                new_gap.classList.add('gap_column');
                append_obj.append(new_gap);
            }
        }


    }
}

// создание строки label_table
let create_label_table = function (text, append_obj) {
    let new_item = document.createElement('div');
    new_item.classList.add('label_table');
    new_item.textContent = text;
    append_obj.append(new_item);

}


// создание таблицы
create_label_table('ДИАТОНИКА МАЖОРА', table_container)
generate_table(label, table_container);
generate_table(major_diatonic, table_container);
create_label_table('ИСКУССТВЕННЫЕ ЛАДЫ', table_container)
generate_table(other_modes, table_container);
create_label_table('ДИАТОНИКА МЕЛОДИЧЕСКОГО МИНОРА', table_container);
generate_table(mel_minor_diatonic, table_container);
create_label_table('ДИАТОНИКА ГАРМОНИЧЕСКОГО МИНОРА', table_container);
generate_table(harm_minor_diatonic, table_container);
create_label_table('ДИАТОНИКА ГАРМОНИЧЕСКОГО МАЖОРА', table_container);
generate_table(harm_major_diatonic, table_container);

let body = document.querySelector('body');

body.addEventListener('mousemove', function () {
    console.log('mouseenter')
    if (event.target.classList.contains('table_item_child')) {
        event.target.parentNode.classList.add('mousemove');
        event.target.classList.add('mousemove_yellow');
        // console.log(event.target.parentNode.dataset.algorythm)
        add_color_keyboard(event.target.parentNode.dataset.algorythm, 'blue');
        add_color_keyboard(event.target.textContent, 'yellow');
    }

})
body.addEventListener('mouseout', function () {
    event.target.parentNode.classList.remove('mousemove');
    event.target.classList.remove('mousemove_yellow');
})


let all_formula_elem = document.querySelectorAll('.formula');
let add_color_keyboard = function (dataset_algorythm, color) {
    let new_arr = dataset_algorythm.split(',');
    new_arr.forEach(function (currentValue, index) {
        new_arr[index] = bag_fix(currentValue);
    });
    if (color == 'blue') {
        for (let item of keyboard_elements) {
            item.classList.remove('led_on_blue');
            if (new_arr.includes(item.dataset.stage)) {
                item.classList.add('led_on_blue');
                // console.log(new_arr);
            }
        }
    }
    if (color == 'yellow') {
        for (let item of keyboard_elements) {
            item.classList.remove('led_on_yellow');
            if (new_arr.includes(item.dataset.stage)) {
                item.classList.add('led_on_yellow');
                // console.log(new_arr);
            }
        }
    }

}

let bag_fix = function (input) {
    switch (input) {
        case '#4':
            return 'b5';
        case '#5':
            return 'b6';
        case 'b4':
            return '3';
        case '#2':
            return 'b3';
        case 'bb7':
            return '6';
        default:
            return input;
    }
}

let ton_select_btn = document.querySelector('.ton_select');
ton_select_btn.addEventListener('change', function () {
    console.log(ton_select_btn.value.split(' ')[0]);
    ton_select_go(ton_select_btn.value.split(' ')[0]);
})

let array_from_numb = [];
let array_from_stage = [];
for (let item of keyboard_elements) {
    array_from_numb.push(item.dataset.numb)
    array_from_stage.push(item.dataset.stage)
}

let ton_select_go = function (start_key) {
    let start_i = start_key - 1;
    for (let i = 0; i < keyboard_elements.length; i++) {
        keyboard_elements[i].dataset.stage = ' ';
    }
    for (let i = 0; i <= 12; i++) {
        keyboard_elements[start_i].dataset.stage = array_from_stage[i];
        console.log(keyboard_elements[i])
        start_i++;
    }
    // console.log(array_from_numb);
    // console.log(array_from_stage);
}
// ton_select_go(2)