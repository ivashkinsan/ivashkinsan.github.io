let label_fow_btn_line = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', 'b7', '7']
let all_slider_button = document.querySelectorAll('.section_button');
let create_buttons_background = function (input) {

    let containerBtn = document.createElement('div');
    containerBtn.classList.add('containerBtn');
    containerBtn.classList.add('button');
    containerBtn.dataset.number = input.name;
    let row = document.createElement('div');
    row.classList.add('row');

    let length_row = input.containerBtn.split(' ');
    console.log(length_row);

    if (input.pre_line_elem) {
        let pre_line_elem = document.createElement('div');
        pre_line_elem.classList.add('pre_line_elem');
        pre_line_elem.textContent = input.pre_line_elem;
        row.append(pre_line_elem);
    }



    for (let i = 0; i < length_row.length; i++) {
        let square_elem = document.createElement('div');
        square_elem.classList.add('square_elem');
        square_elem.dataset.text = label_fow_btn_line[i];
        let square_p = document.createElement('p');
        square_p.classList.add('square_p');
        square_p.textContent = square_elem.dataset.text;

        switch (length_row[i]) {
            case 'g':
                square_elem.classList.add('gold_square');
                square_elem.append(square_p);
                break;
            case 't':
                square_elem.classList.add('transparent');
                break;
            case '+o':
                let square_plus_1 = document.createElement('div');
                let square_circle_1 = document.createElement('div');
                square_plus_1.classList.add('square_plus')
                square_plus_1.textContent = '+';
                square_circle_1.classList.add('square_circle')
                square_elem.classList.add('gold_square');
                square_elem.append(square_plus_1);
                square_elem.append(square_circle_1);
                break;
            case 'o+':
                let square_plus_2 = document.createElement('div');
                let square_circle_2 = document.createElement('div');
                square_plus_2.classList.add('square_plus')
                square_plus_2.textContent = '+';
                square_circle_2.classList.add('square_circle')
                square_elem.classList.add('gold_square');
                square_elem.append(square_circle_2);
                square_elem.append(square_plus_2);
                break;
            case 'yw':
                square_elem.classList.add('active_mini_circle_maj');
                square_elem.append(square_p);
                break;
            case 'bl':
                square_elem.classList.add('active_mini_circle_min');
                square_elem.append(square_p);
                break;
            case 'vi':
                square_elem.classList.add('active_mini_circle_frig');
                square_elem.append(square_p);
                break;
            case 'pi':
                square_elem.classList.add('active_mini_circle_harm');
                square_elem.append(square_p);
                break;
            case 'or':
                square_elem.classList.add('active_mini_circle_TTT');
                square_elem.append(square_p);
                break;
            default:
                square_elem.classList.add('white_black_square');
                break;
        }

        // if (length_row[i] == 'g') {
        //     square_elem.classList.add('gold_square');
        //     let square_p = document.createElement('p');
        //     square_p.classList.add('square_p');
        //     square_p.textContent = square_elem.dataset.text;
        //     square_elem.append(square_p);
        // } else if (length_row[i] == 't') {
        //     square_elem.classList.add('transparent');
        // } else {
        //     square_elem.classList.add('white_square');
        // }
        row.append(square_elem);
    }

    if (input.post_line_elem) {
        let post_line_elem = document.createElement('div');
        post_line_elem.classList.add('post_line_elem');
        post_line_elem.textContent = input.post_line_elem;
        row.append(post_line_elem);
    }

    containerBtn.append(row);
    return containerBtn;
}


// симметрии
let symmetry_2 = {
    name: 'symmetry_2',
    pre_line_elem: 'sym 2',
    containerBtn: 'g w w w w w g w w w w w g',
    post_line_elem: '3Т 3Т',
    circle_token: ''
}
let symmetry_3 = {
    name: 'symmetry_3',
    pre_line_elem: 'sym 3',
    containerBtn: 'g w w w g w w w g w w w g',
    post_line_elem: 'Б3 Б3 Б3',
    circle_token: ''
}
let symmetry_4 = {
    name: 'symmetry_4',
    pre_line_elem: 'sym 4',
    containerBtn: 'g w w g w w g w w g w w g',
    post_line_elem: 'м3 м3 м3 м3',
    circle_token: ''
}
let symmetry_6 = {
    name: 'symmetry_6',
    pre_line_elem: 'sym 6',
    containerBtn: 'g w g w g w g w g w g w g',
    post_line_elem: 'Б2 Б2 Б2 Б2 Б2 Б2',
    circle_token: ''
}


// интервалы
let m2 = {
    name: 'm2',
    pre_line_elem: 'м2',
    containerBtn: 'g g w w w w w w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let B2 = {
    name: 'B2',
    pre_line_elem: 'Б2',
    containerBtn: 'g w g w t w t w t w t w t',
    post_line_elem: null,
    circle_token: ''
}
let m3 = {
    name: 'm3',
    pre_line_elem: 'м3',
    containerBtn: 'g w w g w w t w w t w w t',
    post_line_elem: null,
    circle_token: ''
}
let B3 = {
    name: 'B3',
    pre_line_elem: 'Б3',
    containerBtn: 'g w w w g w w w t w w w t',
    post_line_elem: null,
    circle_token: ''
}
let ch4 = {
    name: 'ch4',
    pre_line_elem: 'ч4',
    containerBtn: 'g w w w w g t w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let TTT = {
    name: 'TTT',
    pre_line_elem: 'ТТТ',
    containerBtn: 'g w w w w w g w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let ch5 = {
    name: 'ch5',
    pre_line_elem: 'ч5',
    containerBtn: 'g w w w w w t g w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let m6 = {
    name: 'm6',
    pre_line_elem: 'м6',
    containerBtn: 'g w w w t w w w g w w w t',
    post_line_elem: null,
    circle_token: ''
}
let B6 = {
    name: 'B6',
    pre_line_elem: 'Б6',
    containerBtn: 'g w w t w w t w w g w w t',
    post_line_elem: null,
    circle_token: ''
}
let m7 = {
    name: 'm7',
    pre_line_elem: 'м7',
    containerBtn: 'g w t w t w t w t w g w t',
    post_line_elem: null,
    circle_token: ''
}
let B7 = {
    name: 'B7',
    pre_line_elem: 'Б7',
    containerBtn: 'g w w w w w w w w w w g t',
    post_line_elem: null,
    circle_token: ''
}



// комбинации целотонов
let melodic_minor = {
    name: 'melodic_minor',
    pre_line_elem: '2 + 5',
    containerBtn: '+o w +o o+ w o+ w o+ w o+ w o+ t',
    post_line_elem: 'Т пт ТТТТ',
    circle_token: ''
}
let ionian = {
    name: 'ionian',
    pre_line_elem: '3 + 4',
    containerBtn: '+o w +o w +o o+ w o+ w o+ w o+ t',
    post_line_elem: 'ТТ пт ТТТ',
    circle_token: ''
}
let lydian = {
    name: 'lydian',
    pre_line_elem: '4 + 3',
    containerBtn: '+o w +o w +o w +o o+ w o+ w o+ t',
    post_line_elem: 'ТТТ пт ТТ',
    circle_token: ''
}
let lydian_aug = {
    name: 'lydian_aug',
    pre_line_elem: '5 + 2',
    containerBtn: '+o w +o w +o w +o w +o o+ w o+ t',
    post_line_elem: 'ТТТТ пт Т',
    circle_token: ''
}
let WH = {
    name: 'WH',
    pre_line_elem: '2 + 2 + 2 + 2',
    containerBtn: '+o w +o o+ w o+ +o w +o o+ w o+ t',
    post_line_elem: 'Т пт Т пт Т пт Т',
    circle_token: ''
}


// тетрахорды
let maj_tetrachord = {
    name: 'maj_tetrachord',
    pre_line_elem: 'маж.',
    containerBtn: 'yw w yw w yw yw w w w w w w t',
    post_line_elem: 'Т Т пт',
    circle_token: ''
}
let min_tetrachord = {
    name: 'min_tetrachord',
    pre_line_elem: 'мин.',
    containerBtn: 'bl w bl bl w bl w w w w w w t',
    post_line_elem: 'Т пт Т',
    circle_token: ''
}
let frig_tetrachord = {
    name: 'frig_tetrachord',
    pre_line_elem: 'фриг.',
    containerBtn: 'vi vi w vi w vi w w w w w w t',
    post_line_elem: 'пт Т Т',
    circle_token: ''
}
let harm_tetrachord = {
    name: 'harm_tetrachord',
    pre_line_elem: 'гарм.',
    containerBtn: 'pi pi w w pi pi w w w w w w t',
    post_line_elem: 'пт м3 пт',
    circle_token: ''
}
let whole_tetrachord = {
    name: 'whole_tetrachord',
    pre_line_elem: 'целот.',
    containerBtn: 'or w or w or w or w w w w w t',
    post_line_elem: 'Т Т Т',
    circle_token: ''
}

// диатоника мажора
let TTT__maj = {
    name: 'TTT__maj',
    pre_line_elem: 'лидийский',
    containerBtn: 'or w or w or w or yw w yw w yw yw',
    post_line_elem: 'ТТТ _ пт _ ТТпт',
    circle_token: ''
}
let maj__maj = {
    name: 'maj__maj',
    pre_line_elem: 'ионийский',
    containerBtn: 'yw w yw w yw yw w yw w yw w yw yw',
    post_line_elem: 'ТТпт _ Т _ ТТпт',
    circle_token: ''
}
let maj__min = {
    name: 'maj__min',
    pre_line_elem: 'миксолидийский',
    containerBtn: 'yw w yw w yw yw w bl w bl bl w bl',
    post_line_elem: 'ТТпт _ Т _ ТптТ',
    circle_token: ''
}
let min__min = {
    name: 'min__min',
    pre_line_elem: 'дорийский',
    containerBtn: 'bl w bl bl w bl w bl w bl bl w bl',
    post_line_elem: 'ТптТ _ Т _ ТптТ',
    circle_token: ''
}
let min__frig = {
    name: 'min__frig',
    pre_line_elem: 'эолийский',
    containerBtn: 'bl w bl bl w bl w vi vi w vi w vi',
    post_line_elem: 'ТптТ _ Т _ птТТ',
    circle_token: ''
}
let frig__frig = {
    name: 'frig__frig',
    pre_line_elem: 'фригийский',
    containerBtn: 'vi vi w vi w vi w vi vi w vi w vi',
    post_line_elem: 'птТТ _ Т _ птТТ',
    circle_token: ''
}
let frig__TTT = {
    name: 'frig__TTT',
    pre_line_elem: 'локрийский',
    containerBtn: 'vi vi w vi w vi or w or w or w or',
    post_line_elem: 'птТТ _ пт _ ТТТ',
    circle_token: ''
}


// трезвучия
let aug_triads = {
    name: 'aug_triads',
    pre_line_elem: 'Xaug',
    containerBtn: 'g w w w g w w w g w w w w',
    post_line_elem: 'Б3 + м3 = м6',
    circle_token: ''
}
let maj_triads = {
    name: 'maj_triads',
    pre_line_elem: 'X',
    containerBtn: 'g w w w g w w g w w w w w',
    post_line_elem: 'Б3 + м3 = ч5',
    circle_token: ''
}
let min_triads = {
    name: 'min_triads',
    pre_line_elem: 'Xm',
    containerBtn: 'g w w g w w w g w w w w w',
    post_line_elem: 'м3 + Б3 = ч5',
    circle_token: ''
}
let dim_triads = {
    name: 'dim_triads',
    pre_line_elem: 'Xdim',
    containerBtn: 'g w w g w w g w w w w w w',
    post_line_elem: 'м3 + м3 = 3Т',
    circle_token: ''
}

let maj_add6_triads = {
    name: 'maj_add6_triads',
    pre_line_elem: 'X6',
    containerBtn: 'g w w w g w w g w g w w w',
    post_line_elem: 'Б3 + м3 + Б2 = Б6',
    circle_token: ''
}
let min_add6_triads = {
    name: 'min_add6_triads',
    pre_line_elem: 'Xm6',
    containerBtn: 'g w w g w w w g w g w w w',
    post_line_elem: 'м3 + Б3 + Б2 = Б6',
    circle_token: ''
}
let sus2_triads = {
    name: 'sus2_triads',
    pre_line_elem: 'Xsus2',
    containerBtn: 'g w g w w w w g w w w w w',
    post_line_elem: 'Б2 + ч4 = ч5',
    circle_token: ''
}
let sus4_triads = {
    name: 'sus4_triads',
    pre_line_elem: 'Xsus4',
    containerBtn: 'g w w w w g w g w w w w w',
    post_line_elem: 'ч4 + Б2 = ч5',
    circle_token: ''
}

let maj_add2_triads = {
    name: 'maj_add2_triads',
    pre_line_elem: 'X add2',
    containerBtn: 'g w g w g w w g w w w w w',
    post_line_elem: 'Б2 + Б2 + м3 = ч5',
    circle_token: ''
}
let min_add2_triads = {
    name: 'min_add2_triads',
    pre_line_elem: 'Xm add2',
    containerBtn: 'g w g g w w w g w w w w w',
    post_line_elem: 'Б2 + м2 + Б3 = ч5',
    circle_token: ''
}
let maj_add4_triads = {
    name: 'maj_add4_triads',
    pre_line_elem: 'X add4',
    containerBtn: 'g w w w g g w g w w w w w',
    post_line_elem: 'Б3 + м2 + Б2 = ч5',
    circle_token: ''
}
let min_add4_triads = {
    name: 'min_add4_triads',
    pre_line_elem: 'Xm add4',
    containerBtn: 'g w w g w g w g w w w w w',
    post_line_elem: 'м3 + Б2 + Б2 = ч5',
    circle_token: ''
}

// искусственные
let iscustv_melodic_minor = {
    name: 'iscustv_melodic_minor',
    pre_line_elem: 'мел. мин.',
    containerBtn: 'bl w bl bl w bl w yw w yw w yw yw',
    post_line_elem: 'ТптТ _ Т _ ТТпт',
    circle_token: ''
}
let iscustv_minor_harmony = {
    name: 'iscustv_minor_harmony',
    pre_line_elem: 'гарм. мин.',
    containerBtn: 'bl w bl bl w bl w pi pi w w pi pi',
    post_line_elem: 'ТптТ _ Т _ пт1,5пт',
    circle_token: ''
}
let iscustv_major_harmony = {
    name: 'iscustv_major_harmony',
    pre_line_elem: 'гарм. маж.',
    containerBtn: 'yw w yw w yw yw w pi pi w w pi pi',
    post_line_elem: 'ТТпт _ Т _ пт1,5пт',
    circle_token: ''
}
let iscustv_major_melodic = {
    name: 'iscustv_major_melodic',
    pre_line_elem: 'мел. маж.',
    containerBtn: 'yw w yw w yw yw w vi vi w vi w vi',
    post_line_elem: 'ТТпт _ Т _ птТТ',
    circle_token: ''
}
let iscustv_2_major_harmony = {
    name: 'iscustv_2_major_harmony',
    pre_line_elem: '2х гарм. маж.',
    containerBtn: 'pi pi w w pi pi w pi pi w w pi pi',
    post_line_elem: 'пт1,5пт _ Т _ пт1,5пт',
    circle_token: ''
}

// септ-аккорды
let maj_aug_chord = {
    name: 'maj_aug_chord',
    pre_line_elem: 'X^aug',
    containerBtn: 'g w w w g w w w g w w g w',
    post_line_elem: 'Б3 + Б3 + м3 = Б7',
    circle_token: ''
}
let maj_original_chord = {
    name: 'maj_original_chord',
    pre_line_elem: 'X^',
    containerBtn: 'g w w w g w w g w w w g w',
    post_line_elem: 'Б3 + м3 + Б3 = Б7',
    circle_token: ''
}
let seventh_chord = {
    name: 'seventh_chord',
    pre_line_elem: 'X7',
    containerBtn: 'g w w w g w w g w w g w w',
    post_line_elem: 'Б3 + Б3 + м3 = м7',
    circle_token: ''
}
let minor_maj_chord = {
    name: 'minor_maj_chord',
    pre_line_elem: 'Xm^',
    containerBtn: 'g w w g w w w g w w w g w',
    post_line_elem: 'м3 + Б3 + Б3 = Б7',
    circle_token: ''
}
let minor_seventh_chord = {
    name: 'minor_seventh_chord',
    pre_line_elem: 'Xm7',
    containerBtn: 'g w w g w w w g w w g w w',
    post_line_elem: 'м3 + Б3 + м3 = м7',
    circle_token: ''
}
let half_diminished_chord = {
    name: 'half_diminished_chord',
    pre_line_elem: 'Xm7b5',
    containerBtn: 'g w w g w w g w w w g w w',
    post_line_elem: 'м3 + м3 + Б3 = м7',
    circle_token: ''
}
let diminished_chord = {
    name: 'diminished_chord',
    pre_line_elem: 'Xo',
    containerBtn: 'g w w g w w g w w g w w w',
    post_line_elem: 'м3 + м3 + м3 = Б6',
    circle_token: ''
}

// диатоника минора
let min__maj = {
    name: 'min__maj',
    pre_line_elem: 'мел. мин.',
    containerBtn: 'bl w bl bl w bl w yw w yw w yw yw',
    post_line_elem: 'ТптТ _ Т _ ТТпт',
    circle_token: ''
}
let frig__min = {
    name: 'frig__min',
    pre_line_elem: 'дор. b2',
    containerBtn: 'vi vi w vi w vi w bl w bl bl w bl',
    post_line_elem: 'птТТ _ Т _ ТптТ',
    circle_token: ''
}
let TTTT__maj = {
    name: 'TTTT__maj',
    pre_line_elem: 'лид. ув.',
    containerBtn: 'or w or w or w or w or yw w yw yw',
    post_line_elem: 'ТТТТ _ пт _ Тпт',
    circle_token: ''
}
let TTT__min = {
    name: 'TTT__min',
    pre_line_elem: 'микс.#4',
    containerBtn: 'or w or w or w or bl w bl bl w bl',
    post_line_elem: 'ТТТ _ пт _ ТптТ',
    circle_token: ''
}
let maj__frig = {
    name: 'maj__frig',
    pre_line_elem: 'мел.маж.',
    containerBtn: 'yw w yw w yw yw w vi vi w vi w vi',
    post_line_elem: 'ТТпт _ Т _ птТТ',
    circle_token: ''
}
let min__TTT = {
    name: 'min__TTT',
    pre_line_elem: 'локр. #2',
    containerBtn: 'bl w bl bl w bl or w or w or w or',
    post_line_elem: 'ТптТ _ пт _ ТТТ',
    circle_token: ''
}
let frig__TTTT = {
    name: 'frig__TTTT',
    pre_line_elem: 'альт.',
    containerBtn: 'vi vi w vi or w or w or w or w or',
    post_line_elem: 'птТ _ пт _ ТТТТ',
    circle_token: ''
}


// деление на 2
let B2_in_2 = {
    name: 'B2_in_2',
    pre_line_elem: 'Б2 / 2',
    containerBtn: 'g g g',
    post_line_elem: null,
    circle_token: ''
}
let B3_in_2 = {
    name: 'B3_in_2',
    pre_line_elem: 'Б3 / 2',
    containerBtn: 'g w g w g',
    post_line_elem: null,
    circle_token: ''
}
let TTT_in_2 = {
    name: 'TTT_in_2',
    pre_line_elem: 'ТТТ / 2',
    containerBtn: 'g w w g w w g',
    post_line_elem: null,
    circle_token: ''
}
let m6_in_2 = {
    name: 'm6_in_2',
    pre_line_elem: 'м6 / 2',
    containerBtn: 'g w w w g w w w g',
    post_line_elem: null,
    circle_token: ''
}
let m7_in_2 = {
    name: 'm7_in_2',
    pre_line_elem: 'м7 / 2',
    containerBtn: 'g w w w w g w w w w g',
    post_line_elem: null,
    circle_token: ''
}
let ch8_in_2 = {
    name: 'ch8_in_2',
    pre_line_elem: 'ч8 / 2',
    containerBtn: 'g w w w w w g w w w w w g',
    post_line_elem: null,
    circle_token: ''
}
let B9_in_2 = {
    name: 'B9_in_2',
    pre_line_elem: 'Б9 / 2',
    containerBtn: 'g w w w w w w g w w w w w w g',
    post_line_elem: null,
    circle_token: ''
}
let м3_in_3 = {
    name: 'м3_in_3',
    pre_line_elem: 'м3 / 3',
    containerBtn: 'g g g g',
    post_line_elem: null,
    circle_token: ''
}
let ТТТ_in_3 = {
    name: 'ТТТ_in_3',
    pre_line_elem: 'ТТТ / 3',
    containerBtn: 'g w g w g w g',
    post_line_elem: null,
    circle_token: ''
}
let B6_in_3 = {
    name: 'B6_in_3',
    pre_line_elem: 'B6 / 3',
    containerBtn: 'g w w g w w g w w g',
    post_line_elem: null,
    circle_token: ''
}
let ch8_in_3 = {
    name: 'ch8_in_3',
    pre_line_elem: 'ч8 / 3',
    containerBtn: 'g w w w g w w w g w w w g',
    post_line_elem: null,
    circle_token: ''
}

let all_slide = [{
        name: 'СИММЕТРИИ',
        row_pattern: [symmetry_2, symmetry_3, symmetry_4, symmetry_6]
    },
    {
        name: 'ИНТЕРВАЛЫ',
        row_pattern: [m2, B2, m3, B3, ch4, TTT, ch5, m6, B6, m7, B7]
    },
    {
        name: 'КОМБИНАЦИИ ЦЕЛОТОНОВ',
        row_pattern: [melodic_minor, ionian, lydian, lydian_aug, WH]
    },
    {
        name: 'ТЕТРАХОРДЫ',
        row_pattern: [maj_tetrachord, min_tetrachord, frig_tetrachord, harm_tetrachord, whole_tetrachord]
    },
    {
        name: 'ДИАТОНИКА МАЖОРА',
        row_pattern: [TTT__maj, maj__maj, maj__min, min__min, min__frig, frig__frig, frig__TTT]
    },
    {
        name: 'ТРЕЗВУЧИЯ',
        row_pattern: [aug_triads, maj_triads, min_triads, dim_triads,
            maj_add6_triads, min_add6_triads, sus2_triads, sus4_triads,
            maj_add2_triads, min_add2_triads, maj_add4_triads, min_add4_triads
        ]
    },
    {
        name: 'ИСКУССТВЕННЫЕ ЛАДЫ',
        row_pattern: [iscustv_melodic_minor, iscustv_minor_harmony, iscustv_major_harmony, iscustv_major_melodic, iscustv_2_major_harmony]
    },
    {
        name: 'СЕПТ АККОРДЫ',
        row_pattern: [maj_aug_chord, maj_original_chord, seventh_chord, minor_maj_chord, minor_seventh_chord, half_diminished_chord, diminished_chord]
    },
    {
        name: 'ДИАТОНИКА МЕЛ.МИНОРА',
        row_pattern: [min__maj, frig__min, TTTT__maj, TTT__min, maj__frig, min__TTT, frig__TTTT]
    },
    {
        name: 'РАЗДЕЛЕНИЕ НА 2',
        row_pattern: [B2_in_2, B3_in_2, TTT_in_2, m6_in_2, m7_in_2, ch8_in_2, B9_in_2]
    },
    {
        name: 'РАЗДЕЛЕНИЕ НА 3',
        row_pattern: [м3_in_3, ТТТ_in_3, B6_in_3, ch8_in_3]
    }
]

let slider_cont = document.querySelector('.slider');
let create_slider = function (data_arr) {
    for (let i = 0; i < data_arr.length; i++) {
        console.log(data_arr[i]);
        let label = document.createElement('div');
        label.classList.add('label_slider');
        label.textContent = data_arr[i].name;

        let new_slide = document.createElement('div');
        new_slide.classList.add('slide');
        let section_button = document.createElement('div');
        section_button.classList.add('section_button');

        section_button.append(label);

        for (j = 0; j < data_arr[i].row_pattern.length; j++) {
            section_button.append(create_buttons_background(data_arr[i].row_pattern[j]))
        }
        new_slide.append(section_button);
        slider_cont.append(new_slide);
    };

};
create_slider(all_slide);