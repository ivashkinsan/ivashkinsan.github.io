document.oncontextmenu = cmenu;

function cmenu() {
    return false;
};



//SLIDER ZONE
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/* Set Current Slide */
let currSlide = 0;

/* define max length */
const maxSlide = slides.length;

/* Function to go to slide based on index number provided as argument  */
const goToSlide = function (slide = 1) {
    slides.forEach((s, i) => {
        s.style.transform = `translatex(${100 * (i - slide)}%)`;
    });
};

const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
        currSlide = 0;
    } else {
        currSlide++;
    }

    goToSlide(currSlide);
};

const prevSlide = function () {
    if (currSlide === 0) {
        currSlide = maxSlide - 1;
    } else {
        currSlide--;
    }
    goToSlide(currSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
// goToSlide(2);

const init = function () {
    goToSlide(0);
};

init();

// стартовое распределение цвета клавиш большой клваиатуры
let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1', '3', '5', '6', '8', '10', '12', '13', '15', '17', '18', '20', '22', '24', '25', '27', '29', '30', '32', '34', '36', '37'];
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


// добавление лейблов на клавиатуру
let add_label_for_keyboards = function () {
    for (let item of keyboard_elements) {
        item.children[0].textContent = '1';
    }
}
// add_label_for_keyboards();

// секция работы с кнопками
let ton_select_value_numb = 0;
let ton_select_btn = document.querySelector('.ton_select');
ton_select_btn.addEventListener('change', function () {
    // console.log(ton_select_btn.value.split(' ')[0]);
    stop_all_note();
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
    for (let i = 0; i <= 24; i++) {
        keyboard_elements[start_i].dataset.stage = array_from_stage[i];
        // console.log(keyboard_elements[i])
        start_i++;
    }
    ton_select_value_numb = start_key - 1;
}

let stage_checkbox = document.querySelector('.stage_checkbox');
stage_checkbox.addEventListener('click', function () {
    console.log(stage_checkbox.checked);
})
let play_checkbox = document.querySelector('.play_checkbox');
play_checkbox.addEventListener('click', function () {
    console.log(play_checkbox.checked);
    stop_all_note();
})

let label_select = document.querySelector('.label_select');
label_select.addEventListener('change', function () {
    console.log(label_select.value)
})

let label = {
    label: {
        name_header: 'НАЗВАНИЕ ЛАДА &#9660;',
        chord_header: 'АККОРД',
        chord_formula_header: 'АКК СТУПЕНИ',
        formula_header: 'СТУПЕНИ',
        tetrachord_header: 'ТЕТРАХОРДЫ',
        alteration_header: ['АЛЬТЕРАЦИИ']
    },
}

let major_diatonic = {
    ionian: {
        name: ['ИОНИЙСКИЙ / нат МАЖОР', 'IONIAN'],
        chord: 'X^',
        chord_formula: ['1', '3', '5', '7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '5', '6', '7', '8'],
        tetrachord: ['MAJ', 'MAJ'],
        alteration: ['нет']
    },
    dorian: {
        name: ['ДОРИЙСКИЙ', 'DORIAN'],
        chord: 'Xm7 (dor)',
        chord_formula: ['1', 'b3', '5', 'b7', '9', '11', '13'],
        formula: ['1', '2', 'b3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['MIN', 'MIN'],
        alteration: ['b3', 'b7']
    },
    frigian: {
        name: ['ФРИГИЙСКИЙ', 'PHRYGIAN'],
        chord: 'Xm7 (frig)',
        chord_formula: ['1', 'b3', '5', 'b7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG', 'FRIG'],
        alteration: ['b2', 'b3', 'b6', 'b7']
    },
    lydian: {
        name: ['ЛИДИЙСКИЙ', 'LYDIAN'],
        chord: 'X^ (#11)',
        chord_formula: ['1', '3', '5', '7', '9', '#11', '13'],
        formula: ['1', '2', '3', '#4', '5', '6', '7', '8'],
        tetrachord: ['TTT', 'MAJ'],
        alteration: ['#4']
    },
    mixolydian: {
        name: ['МИКСОЛИДИЙСКИЙ', 'MIXOLYDIAN'],
        chord: 'X7',
        chord_formula: ['1', '3', '5', 'b7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['MAJ', 'MIN'],
        alteration: ['b7']
    },
    aeolian: {
        name: ['ЭОЛИЙСКИЙ / нат МИНОР', 'AEOLIAN'],
        chord: 'Xm7 (aeol)',
        chord_formula: ['1', 'b3', '5', 'b7', '9', '11', 'b13'],
        formula: ['1', '2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['MIN', 'FRIG'],
        alteration: ['b3', 'b6', 'b7']
    },
    locrian: {
        name: ['ЛОКРИЙСКИЙ', 'LOCRIAN'],
        chord: 'Xm7(b5)',
        chord_formula: ['1', 'b3', 'b5', 'b7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG', 'TTT'],
        alteration: ['b2', 'b3', 'b5', 'b6', 'b7']
    },
}

let major_diatonic_sort = {
    lydian: {
        name: ['ЛИДИЙСКИЙ', 'LYDIAN'],
        chord: 'X^ (#11)',
        chord_formula: ['1', '3', '5', '7', '9', '#11', '13'],
        formula: ['1', '2', '3', '#4', '5', '6', '7', '8'],
        tetrachord: ['TTT', 'MAJ'],
        alteration: ['#4']
    },
    ionian: {
        name: ['ИОНИЙСКИЙ / нат МАЖОР', 'IONIAN'],
        chord: 'X^',
        chord_formula: ['1', '3', '5', '7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '5', '6', '7', '8'],
        tetrachord: ['MAJ', 'MAJ'],
        alteration: ['нет']
    },
    mixolydian: {
        name: ['МИКСОЛИДИЙСКИЙ', 'MIXOLYDIAN'],
        chord: 'X7',
        chord_formula: ['1', '3', '5', 'b7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['MAJ', 'MIN'],
        alteration: ['b7']
    },
    dorian: {
        name: ['ДОРИЙСКИЙ', 'DORIAN'],
        chord: 'Xm7 (dor)',
        chord_formula: ['1', 'b3', '5', 'b7', '9', '11', '13'],
        formula: ['1', '2', 'b3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['MIN', 'MIN'],
        alteration: ['b3', 'b7']
    },
    aeolian: {
        name: ['ЭОЛИЙСКИЙ / нат МИНОР', 'AEOLIAN'],
        chord: 'Xm7 (aeol)',
        chord_formula: ['1', 'b3', '5', 'b7', '9', '11', 'b13'],
        formula: ['1', '2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['MIN', 'FRIG'],
        alteration: ['b3', 'b6', 'b7']
    },
    frigian: {
        name: ['ФРИГИЙСКИЙ', 'PHRYGIAN'],
        chord: 'Xm7 (frig)',
        chord_formula: ['1', 'b3', '5', 'b7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', 'b3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG', 'FRIG'],
        alteration: ['b2', 'b3', 'b6', 'b7']
    },
    locrian: {
        name: ['ЛОКРИЙСКИЙ', 'LOCRIAN'],
        chord: 'Xm7(b5)',
        chord_formula: ['1', 'b3', 'b5', 'b7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG', 'TTT'],
        alteration: ['b2', 'b3', 'b5', 'b6', 'b7']
    },
}

let other_modes = {
    harmonic_minor: {
        name: ['ГАРМОНИЧЕСКИЙ МИНОР', 'HARMONIC MINOR'],
        chord: 'Xm^',
        chord_formula: ['1', 'b3', '5', '7', '9', '11', 'b13'],
        formula: ['1', '2', 'b3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['MIN', 'HARM'],
        alteration: ['b3', 'b6']
    },

    melodic_minor: {
        name: ['МЕЛОДИЧЕСКИЙ МИНОР', 'MELODIC MINOR'],
        chord: 'Xm^',
        chord_formula: ['1', 'b3', '5', '7', '9', '11', '13'],
        formula: ['1', '2', 'b3', '4', '5', '6', '7', '8'],
        tetrachord: ['MIN', 'MAJ'],
        alteration: ['b3']
    },

    harmonic_major: {
        name: ['ГАРМОНИЧЕСКИЙ МАЖОР', 'HARMONIC MAJOR'],
        chord: 'X^',
        chord_formula: ['1', 'b3', '5', '7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['MAJ', 'HARM'],
        alteration: ['b6']
    },

    melodic_major: {
        name: ['МЕЛОДИЧЕСКИЙ МАЖОР', 'MELODIC MAJOR'],
        chord: 'X7(b13)',
        chord_formula: ['1', '3', '5', 'b7', '9', '11', 'b13'],
        formula: ['1', '2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['MAJ', 'FRIG'],
        alteration: ['b6', 'b7']
    },

    harmonic_2x_major: {
        name: ['ДВАЖДЫ ГАРМОНИЧЕСКИЙ МАЖОР', 'DOUBLE HARMONIC MAJOR'],
        chord: 'X^',
        chord_formula: ['1', '3', '5', '7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['HARM', 'HARM'],
        alteration: ['b2', 'b6']
    },
}

let mel_minor_diatonic = {
    melodic_minor: {
        name: ['МЕЛОДИЧЕСКИЙ МИНОР', 'MELODIC MINOR'],
        chord: 'Xm^',
        chord_formula: ['1', 'b3', '5', '7', '9', '11', '13'],
        formula: ['1', '2', 'b3', '4', '5', '6', '7', '8'],
        tetrachord: ['MIN', 'MAJ'],
        alteration: ['b3']
    },
    javanese: {
        name: ['ДОРИЙСКИЙ b2 / ФРИГИЙСКИЙ #6', 'DORIAN b2 / PHRYGIAN #6'],
        chord: 'Xm7(b9,13)',
        chord_formula: ['1', 'b3', '5', 'b7', 'b9', '11', '13'],
        formula: ['1', 'b2', 'b3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['FRIG', 'MIN'],
        alteration: ['b2', 'b3', 'b7']
    },
    lydian_aug: {
        name: ['ЛИДИЙСКИЙ #5', 'LYDIAN #5'],
        chord: 'X^(#5)',
        chord_formula: ['1', '3', '#5', '7', '9', '#11', '13'],
        formula: ['1', '2', '3', '#4', '#5', '6', '7', '8'],
        tetrachord: ['ТТТ', 'MAJ(#5)'],
        alteration: ['#4', '#5']
    },
    lydian_dom: {
        name: ['МИКСОЛИДИЙСКИЙ #4 / ЛИДИЙСКИЙ b7', 'MIXOLYDIAN #4 / LYDIAN b7'],
        chord: 'X7(#11)',
        chord_formula: ['1', '3', '5', 'b7', '9', '#11', '13'],
        formula: ['1', '2', '3', '#4', '5', '6', 'b7', '8'],
        tetrachord: ['ТТТ', 'MIN'],
        alteration: ['#4', 'b7']
    },
    hindu: {
        name: ['МИКСОЛИДИЙСКИЙ b6', 'MIXOLYDIAN b6'],
        chord: 'X7(b13)',
        chord_formula: ['1', '3', '5', 'b7', '9', '11', 'b13'],
        formula: ['1', '2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['MAJ', 'FRIG'],
        alteration: ['b6', 'b7']
    },
    locrian_nat_2: {
        name: ['ЛОКРИЙСКИЙ нат 2 / ЭОЛИЙСКИЙ b5', 'LOCRIAN nat 2 / AEOLIAN b5'],
        chord: 'Xm7(b5,9)',
        chord_formula: ['1', 'b3', 'b5', 'b7', '9', '11', 'b13'],
        formula: ['1', '2', 'b3', '4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['MIN', 'TTT'],
        alteration: ['b3', 'b5', 'b6', 'b7']
    },
    alt: {
        name: ['АЛЬТЕРИРОВАННЫЙ / ЛОКРИЙСКИЙ b4', 'ALTERETED / LOCRIAN b4'],
        chord: 'X7alt',
        chord_formula: ['1', 'b3', 'b5', 'b7', 'b9', 'b11', 'b13'],
        formula: ['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG(b4)', 'TTT'],
        alteration: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
    },
}

let harm_minor_diatonic = {
    harm_minor: {
        name: ['ГАРМОНИЧЕСКИЙ МИНОР', 'HARMONIC MINOR'],
        chord: 'X^(b13)',
        chord_formula: ['1', 'b3', '5', '7', '9', '11', 'b13'],
        formula: ['1', '2', 'b3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['MIN', 'HARM'],
        alteration: ['b3', 'b6']
    },
    locrian_nat_6: {
        name: ['ЛОКРИЙСКИЙ нат 6', 'LOCRIAN nat 6'],
        chord: 'Xm7(b5/b9/13)',
        chord_formula: ['1', 'b3', 'b5', 'b7', 'b9', '11', '13'],
        formula: ['1', 'b2', 'b3', '4', 'b5', '6', 'b7', '8'],
        tetrachord: ['FRIG', 'TTT(n6)'],
        alteration: ['b2', 'b3', 'b5', 'b7']
    },
    ionian_aug: {
        name: ['ИОНИЙСКИЙ #5', 'IONIAN #5'],
        chord: 'X^(#5)',
        chord_formula: ['1', '3', '#5', '7', '9', '11', '13'],
        formula: ['1', '2', '3', '4', '#5', '6', '7', '8'],
        tetrachord: ['MAJ', 'MAJ(#5)'],
        alteration: ['#5']
    },
    romanian: {
        name: ['ДОРИЙСКИЙ #4', 'DORIAN #4'],
        chord: 'Xm7(#11)',
        chord_formula: ['1', 'b3', '5', 'b7', '9', '#11', '13'],
        formula: ['1', '2', 'b3', '#4', '5', '6', 'b7', '8'],
        tetrachord: ['MIN(#4)', 'MIN'],
        alteration: ['b3', '#4', 'b7']
    },
    mixo_b2_b7: {
        name: ['МИКСОЛИДИЙСКИЙ b2 b6', 'MIXOLYDIAN b2 b6'],
        chord: 'X7(b9|b13)',
        chord_formula: ['1', '3', '5', 'b7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', '3', '4', '5', 'b6', 'b7', '8'],
        tetrachord: ['HARM', 'FRIG'],
        alteration: ['b2', 'b6', 'b7']
    },
    lydian_up_2: {
        name: ['ЛИДИЙСКИЙ #2', 'LYDIAN #2'],
        chord: 'X^(#9|#11)',
        chord_formula: ['1', '3', '5', '7', '#9', '#11', '13'],
        formula: ['1', '#2', '3', '#4', '5', '6', '7', '8'],
        tetrachord: ['TTT(#2)', 'MAJ'],
        alteration: ['#2', '#4']
    },
    ultra_locrian: {
        name: ['ум ГАРМ МИНОР (+пт) / СУПЕР АЛЬТ', 'DIM HARM MINOR (+H) / SUPER ALT'],
        chord: 'Xo(b5|b9|b11)',
        chord_formula: ['1', 'b3', 'b5', 'bb7', 'b9', 'b11', 'b13'],
        formula: ['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7', '8'],
        tetrachord: ['FRIG(b4)', 'TTT(bb7)'],
        alteration: ['b2', 'b3', 'b4', 'b5', 'b6', 'bb7']
    },
}

let harm_major_diatonic = {
    harm_major: {
        name: ['ГАРМОНИЧЕСКИЙ МАЖОР', 'HARMONIC MAJOR'],
        chord: 'X^(b13)',
        chord_formula: ['1', '3', '5', '7', '9', '11', 'b13'],
        formula: ['1', '2', '3', '4', '5', 'b6', '7', '8'],
        tetrachord: ['MAJ', 'HARM'],
        alteration: ['b6']
    },
    dorian_b5: {
        name: ['ЛОКРИЙСКИЙ нат 2,6 / ДОРИЙСКИЙ b5', 'LOCRIAN nat 2,6 / DORIAN b5'],
        chord: 'Xm7(b5|9|11|13)',
        chord_formula: ['1', 'b3', 'b5', 'b7', '9', '11', '13'],
        formula: ['1', '2', 'b3', '4', 'b5', '6', 'b7', '8'],
        tetrachord: ['MIN', 'MIN(b5)'],
        alteration: ['b3', 'b5', 'b7']
    },
    alt_nat_5: {
        name: ['ФРИГ b4 / МИКС b2 #2 b6 / АЛЬТ нат 5', 'FRIG b4 / MIX b2 #2 b6 / ALT nat 5'],
        chord: 'Xm7(b9|b11|b13)',
        chord_formula: ['1', 'b3', '5', 'b7', 'b9', 'b11', 'b13'],
        formula: ['1', 'b2', 'b3', 'b4', '5', 'b6', 'b7', '8'],
        tetrachord: ['FRIG(b4)', 'FRIG'],
        alteration: ['b2', 'b3', 'b4', 'b6', 'b7']
    },
    melodic_min_up_4: {
        name: ['МЕЛ МИНОР #4 / ЛИДИЙСКИЙ b3', 'MELODIC MINOR #4 / LYDIAN b3'],
        chord: 'Xm^(9|#11|13)',
        chord_formula: ['1', 'b3', '5', '7', '9', '#11', '13'],
        formula: ['1', '2', 'b3', '#4', '5', '6', '7', '8'],
        tetrachord: ['MIN(#4)', 'MAJ'],
        alteration: ['b3', '#4']
    },
    mixolydian_b2: {
        name: ['МИКСОЛИДИЙСКИЙ b2', 'MIXOLYDIAN b2'],
        chord: 'X7(b9|11|13)',
        chord_formula: ['1', '3', '5', 'b7', 'b9', '11', '13'],
        formula: ['1', 'b2', '3', '4', '5', '6', 'b7', '8'],
        tetrachord: ['HARM', 'MIN'],
        alteration: ['b2', 'b7']
    },
    lydian_up2_up5: {
        name: ['ЛИДИЙСКИЙ #2 #5', 'LYDIAN #2 #5'],
        chord: 'X^(#9|#11|13)',
        chord_formula: ['1', '3', '#5', '7', '#9', '#11', '13'],
        formula: ['1', '#2', '3', '#4', '#5', '6', '7', '8'],
        tetrachord: ['TTT(#2)', 'MAJ(#5)'],
        alteration: ['#2', '#4', '#5']
    },
    dim_harm_major: {
        name: ['ум ГАРМ МАЖОР (+пт) / ЛОКР bb7', 'DIM HARMONIC MAJOR (+H)/ LOCRIAN bb7'],
        chord: 'Xo(b9|11|b13)',
        chord_formula: ['1', 'b3', 'b5', 'bb7', 'b9', '11', 'b13'],
        formula: ['1', 'b2', 'b3', '4', 'b5', 'b6', 'bb7', '8'],
        tetrachord: ['FRIG', 'TTT(bb7)'],
        alteration: ['b2', 'b3', '4', 'b5', 'b6', 'bb7']
    },
}
let symmetric_modes = {
    hromatic: {
        name: ['ХРОМАТИЧЕСКАЯ]', 'HROMATIC'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8']
    },
    wholetone: {
        name: ['ЦЕЛОТОНОВАЯ', 'WHOLETONE'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', '2', '3', '#4', '#5', 'b7', '8']
    },
    diminished_1_05: {
        name: ['ТОН ПОЛУТОН', 'DIMINISHED WH'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', '2', 'b3', '4', 'b5', 'b6', '6', '7', '8']
    },
    diminished_05_1: {
        name: ['ПОЛУТОН ТОН', 'DIMINISHED HW'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', 'b2', 'b3', '3', '#4', '5', '6', 'b7', '8']
    },
    augmented_05_15: {
        name: ['УВЕЛИЧЕННАЯ 0.5-1.5', 'AUGMENTED 0.5-1.5'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', 'b2', '3', '4', '#5', '6', '8'],
    },
    augmented_15_05: {
        name: ['УВЕЛИЧЕННАЯ 1.5-0.5', 'AUGMENTED 1.5-0.5'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', '#2', '3', '5', 'b6', '7', '8'],
    },
    messian_HHW: {
        name: ['МЕССИАНСКАЯ ПТ-ПТ-Т', 'MESSIAN HHW'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', 'b2', '2', '3', '4', '#4', '#5', '6', 'b7', '8'],
    },
    messian_HWH: {
        name: ['МЕССИАНСКАЯ ПТ-Т-ПТ', 'MESSIAN HWH'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', 'b2', 'b3', '3', '4', '5', 'b6', '6', '7', '8'],
    },
    messian_WHH: {
        name: ['МЕССИАНСКАЯ Т-ПТ-ПТ', 'MESSIAN WHH'],
        chord: '-',
        chord_formula: ['-'],
        formula: ['1', '2', 'b3', '3', '#4', '5', 'b6', 'b7', '7', '8'],
    },
}

// функция наполнение-генерация таблицы
let table_containers = document.querySelectorAll('.table_container');
let generate_table = function (inp_obj, append_obj) {
    for (let [key, value] of Object.entries(inp_obj)) {
        for (let [kkk, vvv] of Object.entries(inp_obj[key])) {

            let new_item = document.createElement('div');
            new_item.classList.add('table_item');
            new_item.classList.add(kkk);

            if (typeof (inp_obj[key][kkk]) == 'object') {

                for (let i = 0; i < inp_obj[key][kkk].length; i++) {
                    let new_children_of_card = document.createElement('div');
                    new_children_of_card.classList.add('table_item_child');
                    if (kkk == 'formula' || kkk == 'alteration') {
                        new_children_of_card.classList.add('font_opus_std');
                    }
                    if (inp_obj[key][kkk].length > 6) {
                        new_children_of_card.classList.add('stage_' + [i + 1]);
                        new_children_of_card.classList.add('play_elem');
                        // new_children_of_card.dataset.sound = i;
                    }
                    new_item.dataset.algorythm = inp_obj[key].formula;
                    new_item.dataset.chord_formula = inp_obj[key].chord_formula;
                    new_children_of_card.innerHTML = inp_obj[key][kkk][i];
                    new_item.append(new_children_of_card);
                }
                append_obj.appendChild(new_item);
            } else {
                new_item.innerHTML = inp_obj[key][kkk];
                append_obj.appendChild(new_item);
            }
            //добавить блок для разрыва колонок
            // if (kkk == 'chord-formula' || kkk == 'formula') {
            //     let new_gap = document.createElement('div');
            //     new_gap.classList.add('gap_column');
            //     append_obj.append(new_gap);
            // }
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
create_label_table('ДИАТОНИКА МАЖОРА', table_containers[0])
generate_table(label, table_containers[0]);
generate_table(major_diatonic, table_containers[0]);

create_label_table('ИСКУССТВЕННЫЕ ЛАДЫ', table_containers[1])
generate_table(label, table_containers[1]);
generate_table(other_modes, table_containers[1]);

create_label_table('ДИАТОНИКА МЕЛОДИЧЕСКОГО МИНОРА', table_containers[2]);
generate_table(label, table_containers[2]);
generate_table(mel_minor_diatonic, table_containers[2]);

create_label_table('ДИАТОНИКА ГАРМОНИЧЕСКОГО МИНОРА', table_containers[3]);
generate_table(label, table_containers[3]);
generate_table(harm_minor_diatonic, table_containers[3]);

create_label_table('ДИАТОНИКА ГАРМОНИЧЕСКОГО МАЖОРА', table_containers[4]);
generate_table(label, table_containers[4]);
generate_table(harm_major_diatonic, table_containers[4]);

create_label_table('СИММЕТРИЧНЫЕ ГАММЫ', table_containers[5]);
// generate_table(label, table_containers[5]);
generate_table(symmetric_modes, table_containers[5]);


// работа с курсором мыши
let body = document.querySelector('body');
body.addEventListener('mousemove', function (event) {
    // console.log('mousemove');

    // поведение активных ступеней
    if (event.target.classList.contains('table_item_child') && event.target.parentNode.classList.contains('chord_formula') && !event.target.parentNode.classList.contains('mousemove')) {
        console.log('поведение chord_formula');
        event.target.parentNode.classList.add('mousemove');
        if (stage_checkbox.checked) {
            event.target.classList.add('mousemove_yellow');
        }

        // console.log(event.target.parentNode.dataset.algorythm)
        add_color_keyboard(event.target.parentNode.dataset.chord_formula, 'blue');
        if (stage_checkbox.checked) {
            add_color_keyboard(event.target.textContent, 'yellow');
        }
    }

    // поведение активных ступеней
    if (event.target.classList.contains('table_item_child') && event.target.parentNode.classList.contains('formula') && !event.target.parentNode.classList.contains('mousemove')) {
        console.log('поведение formula');
        event.target.parentNode.classList.add('mousemove');
        if (stage_checkbox.checked) {
            event.target.classList.add('mousemove_yellow');
        }

        // console.log(event.target.parentNode.dataset.algorythm)
        add_color_keyboard(event.target.parentNode.dataset.algorythm, 'blue');
        if (stage_checkbox.checked) {
            add_color_keyboard(event.target.textContent, 'yellow');
        }
    }

    // поведение активных тетрахордов
    if (event.target.classList.contains('table_item_child') && event.target.parentNode.classList.contains('tetrachord') && !event.target.parentNode.classList.contains('mousemove')) {
        // console.log('tetrachord');
        event.target.parentNode.classList.add('mousemove');
        event.target.classList.add('mousemove_yellow');
        add_color_keyboard(event.target.parentNode.dataset.algorythm, 'blue');
        if (event.target == event.target.parentNode.children[0]) {
            // console.log('child_0');
            add_color_keyboard(event.target.parentNode.dataset.algorythm, 'mix_1');
        }
        if (event.target == event.target.parentNode.children[1]) {
            // console.log('child_1');
            add_color_keyboard(event.target.parentNode.dataset.algorythm, 'mix_2');
        }

    }

})


body.addEventListener('mouseout', function () {
    event.target.parentNode.classList.remove('mousemove');
    event.target.classList.remove('mousemove_yellow');
    remove_color_keyboard('led_on_yellow');
    remove_color_keyboard('led_on_blue');
})

// воспроизведение звука по клику
let song_notes = [];
let obj_in_out = {
    '1': '1',
    'b2': '2',
    '2': '3',
    '#2': '4',
    'b3': '4',
    '3': '5',
    'b4': '5',
    '4': '6',
    '#4': '7',
    'b5': '7',
    '5': '8',
    '#5': '9',
    'b6': '9',
    '6': '10',
    'bb7': '10',
    'b7': '11',
    '7': '12',
    '8': '13',
    'b9': '14',
    '9': '15',
    '#9': '16',
    'b10': '16',
    '10': '17',
    'b11': '17',
    '11': '18',
    '#11': '19',
    '12': '20',
    'b13': '21',
    '13': '22',
    'b14': '23',
    '14': '24'
}


let sort_btn = 'no_sort';
body.addEventListener('click', function (event) {

    // console.log(event.target);
    // поведение активных ступеней

    if (event.target.classList.contains('play_elem') && play_checkbox.checked) {
        // event.target.parentNode.classList.add('mousemove');
        if (event.target.classList.contains('click_play_elem')) {
            stop_play(obj_in_out[event.target.textContent]);
            event.target.classList.remove('click_play_elem');

            add_color_keyboard(event.target.textContent, 'click_play_elem');

        } else {
            // console.log(obj_in_out[event.target.textContent]);
            play(obj_in_out[event.target.textContent]);
            event.target.classList.add('click_play_elem');
            // add_color_keyboard(event.target.textContent, 'yellow');
            song_notes.push(obj_in_out[event.target.textContent]);


            add_color_keyboard(event.target.textContent, 'click_play_elem');
            console.log(event.target.textContent);
        }

    }

    //сортировка диатоник
    if (event.target.classList.contains('name_header')) {
        if (sort_btn == 'no_sort') {
            table_containers[0].replaceChildren();
            create_label_table('ДИАТОНИКА МАЖОРА (по яркости)', table_containers[0]);
            generate_table(label, table_containers[0]);
            generate_table(major_diatonic_sort, table_containers[0]);
            sort_btn = 'sort';
        } else {
            table_containers[0].replaceChildren();
            create_label_table('ДИАТОНИКА МАЖОРА', table_containers[0])
            generate_table(label, table_containers[0]);
            generate_table(major_diatonic, table_containers[0]);
            sort_btn = 'no_sort';
        }
    }

});


let up_down_play = 'up';
// воспроизведение ступеней по очереди
body.addEventListener('contextmenu', function (event) {
    console.log('contextmenu');
    if (event.target.classList.contains('play_elem')) {
        let int = 0;
        let play_elem_parent;
        let play_keyb_algorythm;
        let play_array;
        let label_table_elem_play = [];
        if (event.target.parentElement.classList.contains('chord_formula')) {
            play_elem_parent = event.target.parentNode;
            play_keyb_algorythm = play_elem_parent.dataset.chord_formula.split(',');
            play_array = play_elem_parent.dataset.chord_formula.split(',');
        }
        if (event.target.parentElement.classList.contains('formula')) {
            play_elem_parent = event.target.parentNode;
            play_keyb_algorythm = play_elem_parent.dataset.algorythm.split(',');
            play_array = play_elem_parent.dataset.algorythm.split(',');
        }
        if (up_down_play == 'down') {
            play_keyb_algorythm.reverse();
            play_array.reverse();
        }

        for (let item in play_elem_parent) {
            label_table_elem_play.push(item);
            console.log(item);
        }


        for (let i = 0; i < play_array.length; i++) {
            setTimeout(function () {
                add_color_keyboard((play_keyb_algorythm.shift()), 'click_play_elem');
                play(obj_in_out[play_array[i]]);
                if (up_down_play == 'down') {
                    play_elem_parent.children[i].classList.add('sound_on');
                } else {
                    play_elem_parent.children[play_array.length - 1 - i].classList.add('sound_on');
                }

            }, int * 300);
            int += 1;
            setTimeout(function () {
                stop_play(obj_in_out[play_array[i]]);
                if (up_down_play == 'down') {
                    play_elem_parent.children[i].classList.remove('sound_on');
                } else {
                    play_elem_parent.children[play_array.length - 1 - i].classList.remove('sound_on');
                }
                remove_color_keyboard('click_play_elem');
            }, int * 300);
        }
        (up_down_play == 'up') ? up_down_play = 'down': up_down_play = 'up';
        console.log(up_down_play);
    }
});



let all_formula_elem = document.querySelectorAll('.formula');
let add_color_keyboard = function (dataset_algorythm, color) {
    let new_arr = dataset_algorythm.split(',');
    let new_arr_for_label = dataset_algorythm.split(',');
    new_arr.forEach(function (currentValue, index) {
        new_arr[index] = bag_fix(currentValue);
    });
    let arr_mix_1 = [new_arr[0], new_arr[1], new_arr[2], new_arr[3]]
    let arr_mix_2 = [new_arr[4], new_arr[5], new_arr[6], new_arr[7]]
    if (color == 'blue') {
        let ind = 0;
        for (let item of keyboard_elements) {
            // item.children[0].classList.remove('opus_text');
            item.classList.remove('led_on_blue');
            if (new_arr.includes(item.dataset.stage)) {
                item.classList.add('led_on_blue');

                let new_p_label_stage = document.createElement('p');
                let new_p_label_note = document.createElement('p');

                let add_stage_label_function = function () {
                    // item.children[0].textContent = new_arr_for_label[ind];
                    // item.children[0].classList.add('opus_text');

                    new_p_label_stage.innerHTML = new_arr_for_label[ind];
                    new_p_label_stage.classList.add('opus_text');
                    new_p_label_stage.classList.add('new_p_label');
                    item.append(new_p_label_stage);
                }

                let add_note_label_function = function () {
                    let symbol = label_for_key[ton_select_btn.value.split(' ')[1]][new_arr_for_label[ind]];
                    switch (symbol[1] + symbol[2]) {
                        case 'bb':
                            symbol = symbol.replace('bb', '&#9837&#9837');
                            break;
                        case '##':
                            symbol = symbol.replace('##', '&#9839&#9839');
                            break;
                    }

                    switch (symbol[1]) {
                        case '0':
                            symbol = symbol.replace('0', '&#9838');
                            // symbol = symbol + '&#9838';
                            break;
                        case 'b':
                            symbol = symbol.replace('b', '&#9837');
                            // symbol = symbol + '&#9837';
                            break;
                        case '#':
                            symbol = symbol.replace('#', '&#9839');
                            // symbol = symbol + '&#9839';
                            break;

                    }
                    // item.children[0].innerHTML = symbol;
                    new_p_label_note.innerHTML = symbol;
                    // new_p_label.classList.add('opus_text');
                    new_p_label_note.classList.add('new_p_label');
                    item.append(new_p_label_note);
                }

                // активировать подписи ступенями
                if (label_select.value == 'stage') {
                    add_stage_label_function();
                }
                // активировать нотные подписи
                if (label_select.value == 'note' && label_for_key[ton_select_btn.value.split(' ')[1]]) {
                    add_note_label_function();
                }
                if (label_select.value == 'stage_and_note') {
                    add_stage_label_function();
                    add_note_label_function();
                }
                ind++;
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
    if (color == 'mix_1') {
        for (let item of keyboard_elements) {
            item.classList.remove('led_on_yellow');
            if (arr_mix_1.includes(item.dataset.stage)) {
                item.classList.add('led_on_yellow');
            }
        }
    }
    if (color == 'mix_2') {
        for (let item of keyboard_elements) {
            item.classList.remove('led_on_yellow');
            if (arr_mix_2.includes(item.dataset.stage)) {
                item.classList.add('led_on_yellow');
            }
        }
    }
    if (color == 'click_play_elem') {
        console.log('color == click_play_elem');
        for (let item of keyboard_elements) {
            // item.classList.remove('click_play_elem');
            if (new_arr.includes(item.dataset.stage)) {

                item.classList.toggle('click_play_elem');

            }
        }
    }

}





let remove_color_keyboard = function (color) {

    for (let item of keyboard_elements) {

        item.classList.remove(color);
        // item.children[0].textContent = '';
        item.replaceChildren();
    }
}

// исправление отсутствующих ступеней в keyboard elem dataset
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
        case '#9':
            return 'b10';
        case 'bb7':
            return '6';
        case 'b11':
            return '10';
        default:
            return input;
    }
}

// модуль синтезатора ===============================================================

let C = new AudioContext(); // audio context
let A = []; // active sounds
let I = 1; // instrument type

// instrument select
// [...`∿🎻🎷🎹`].map(
//     (
//         i,
//         j // instrument icons
//     ) =>
//     (K.innerHTML +=
//         i + // icon
//         `<input type=radio name=I checked onclick=I=${
//         // radio input
//         3 - j
//         }> &nbsp;`)
// ); 

// instrument select

// piano keys
// for (
//     i = 0;
//     i < 36;
//     i++ // 3 x 12 keys
// )
//     document.body.innerHTML +=
//         `${i % 12 ? `` : `<br>` // new row
//         }<div id=K${
//         // create key
//         (k = 24 + (i % 12) - ((i / 12) | 0) * 12) // reorder keys
//         } style='display:inline-block;outline:3px solid #000;background:${
//         // style
//         (w = `02579`.indexOf((i % 12) - 1) < 0) // b or w?
//             ? `#fff;color:#000;width:60px;height:140px` // white
//             : `#000;position:absolute;margin-left:-15px;width:29px;height:79px` // black
//         }'onmouseover=event.buttons&&P(${k // mouse over
//         }) onmousedown=P(${k // mouse down
//         }) onmouseup=X(${k // mouse up
//         }) onmouseout=X(${k // mouse out
//         })>` +
//         (w ? `<br>` : ``) + // lower white keys
//         `ZSXDCVGBHNJMQ2W3ER5T6Y7UI9O0P[=]    `[k]; // show key

///////////////////////////////////////////////////////////////////////////////
// sound
let frequency_note = {
    // первая октава
    '1': '261.63',
    '2': '277.18',
    '3': '293.66',
    '4': '311.13',
    '5': '329.63',
    '6': '349.23',
    '7': '369.99',
    '8': '392.00',
    '9': '415.30',
    '10': '440.00',
    '11': '466.16',
    '12': '493.88',
    // вторая октава
    '13': '523.25',
    '14': '554.36',
    '15': '587.32',
    '16': '622.26',
    '17': '659.26',
    '18': '698.46',
    '19': '739.98',
    '20': '784.00',
    '21': '830.60',
    '22': '880.00',
    '23': '932.32',
    '24': '987.75',
    // третья октава
    '25': '1046.50',
    '26': '1108.70',
    '27': '1174.60',
    '28': '1244.50',
    '29': '1318.50',
    '30': '1396.90',
    '31': '1480.00',
    '32': '1568.00',
    '33': '1661.20',
    '34': '1720.00',
    '35': '1864.60',
    '36': '1975.50',
    '37': '2093.00'
}

let synth_type = 'sine';
let sound_select = document.querySelector('.sound_select');
sound_select.addEventListener('change', function () {
    synth_type = sound_select.value;
    console.log(synth_type);
})


// play note
let play = (i) => (Number(i) + ton_select_value_numb) < 0 || A[(Number(i) + ton_select_value_numb)] || (
    i = (Number(i) + ton_select_value_numb),
    (A[i] = [
        [...`1248`],
        [...`3579`],
        [...`123`],
        [...`4`]
    ][I].map((j) => (
            (o = C.createOscillator(), o.type = synth_type),

            o.connect((o.g = C.createGain((o.frequency.value = frequency_note[i])))).connect(C.destination),
            // console.log(o.frequency.value),
            (o.g.gain.value = 0.1 / (1 + Math.log2(j))), o.start(), o) // return sound
    )));

// cancel note
let stop_play = (i) => A[(Number(i) + ton_select_value_numb)] && (
    i = (Number(i) + ton_select_value_numb),
    A[i].map((o) => setTimeout((e) => o.stop(), 350, // stop sound after delay
        o.g.gain.linearRampToValueAtTime(o.g.gain.value, C.currentTime),
        o.g.gain.linearRampToValueAtTime((A[i] = 0), C.currentTime + 0.3))));

// stop all sounds if focus lost
// let stop_all_note = (e) => A.map((e, i) => stop_play(i));

let stop_all_note = function () {
    console.log('stop_all_note');
    let all_clicks = document.querySelectorAll('.click_play_elem');
    for (let item of all_clicks) {
        stop_play(obj_in_out[item.textContent]);
        item.classList.remove('click_play_elem');
    }
    for (let item of song_notes) {
        stop_play(obj_in_out[item]);
    }
}


// keyboard key to piano key
T = (i) => (
    (k = `ZSXDCVGBHNJM,L.;/Q2W3ER5T6Y7UI9O0P[=]` // map key to note
        .indexOf(i.key.toUpperCase())), // find key in string
    k - 5 * (k > 16)
);

// play note on key down
// onkeydown = (i) => P(T(i));

// release note on key up
// onkeyup = (i) => X(T(i));



// P(10);