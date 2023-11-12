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
    post_line_elem: null,
    circle_token: ''
}
let symmetry_3 = {
    name: 'symmetry_3',
    pre_line_elem: 'sym 3',
    containerBtn: 'g w w w g w w w g w w w g',
    post_line_elem: null,
    circle_token: ''
}
let symmetry_4 = {
    name: 'symmetry_4',
    pre_line_elem: 'sym 4',
    containerBtn: 'g w w g w w g w w g w w g',
    post_line_elem: null,
    circle_token: ''
}
let symmetry_6 = {
    name: 'symmetry_6',
    pre_line_elem: 'sym 6',
    containerBtn: 'g w g w g w g w g w g w g',
    post_line_elem: null,
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

// комбинации целотонов
let melodic_minor = {
    name: 'melodic_minor',
    pre_line_elem: '2 + 5',
    containerBtn: '+o w +o o+ w o+ w o+ w o+ w o+ t',
    post_line_elem: null,
    circle_token: ''
}
let ionian = {
    name: 'ionian',
    pre_line_elem: '3 + 4',
    containerBtn: '+o w +o w +o o+ w o+ w o+ w o+ t',
    post_line_elem: null,
    circle_token: ''
}
let lydian = {
    name: 'lydian',
    pre_line_elem: '4 + 3',
    containerBtn: '+o w +o w +o w +o o+ w o+ w o+ t',
    post_line_elem: null,
    circle_token: ''
}
let lydian_aug = {
    name: 'lydian_aug',
    pre_line_elem: '5 + 2',
    containerBtn: '+o w +o w +o w +o w +o o+ w o+ t',
    post_line_elem: null,
    circle_token: ''
}
let WH = {
    name: 'WH',
    pre_line_elem: '2 + 2 + 2 + 2',
    containerBtn: '+o w +o o+ w o+ +o w +o o+ w o+ t',
    post_line_elem: null,
    circle_token: ''
}

// тетрахорды
let maj_tetrachord = {
    name: 'maj_tetrachord',
    pre_line_elem: 'маж.',
    containerBtn: 'yw w yw w yw yw w w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let min_tetrachord = {
    name: 'min_tetrachord',
    pre_line_elem: 'мин.',
    containerBtn: 'bl w bl bl w bl w w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let frig_tetrachord = {
    name: 'frig_tetrachord',
    pre_line_elem: 'фриг.',
    containerBtn: 'vi vi w vi w vi w w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let harm_tetrachord = {
    name: 'harm_tetrachord',
    pre_line_elem: 'гарм.',
    containerBtn: 'pi pi w w pi pi w w w w w w t',
    post_line_elem: null,
    circle_token: ''
}
let whole_tetrachord = {
    name: 'whole_tetrachord',
    pre_line_elem: 'целот.',
    containerBtn: 'or w or w or w or w w w w w t',
    post_line_elem: null,
    circle_token: ''
}


// симметрии
let symmetry = 0;
all_slider_button[symmetry].append(create_buttons_background(symmetry_2));
all_slider_button[symmetry].append(create_buttons_background(symmetry_3));
all_slider_button[symmetry].append(create_buttons_background(symmetry_4));
all_slider_button[symmetry].append(create_buttons_background(symmetry_6));

//интервалы
let intervals = 1;
all_slider_button[intervals].append(create_buttons_background(m2));
all_slider_button[intervals].append(create_buttons_background(B2));
all_slider_button[intervals].append(create_buttons_background(m3));
all_slider_button[intervals].append(create_buttons_background(B3));
all_slider_button[intervals].append(create_buttons_background(ch4));
all_slider_button[intervals].append(create_buttons_background(TTT));
all_slider_button[intervals].append(create_buttons_background(ch5));
all_slider_button[intervals].append(create_buttons_background(m6));
all_slider_button[intervals].append(create_buttons_background(B6));
all_slider_button[intervals].append(create_buttons_background(m7));
all_slider_button[intervals].append(create_buttons_background(B7));

// комбинации целотонов
let comb_WH = 2;
all_slider_button[comb_WH].append(create_buttons_background(melodic_minor));
all_slider_button[comb_WH].append(create_buttons_background(ionian));
all_slider_button[comb_WH].append(create_buttons_background(lydian));
all_slider_button[comb_WH].append(create_buttons_background(lydian_aug));
all_slider_button[comb_WH].append(create_buttons_background(WH));

// тетрахорды
let tetrachords = 3;
all_slider_button[tetrachords].append(create_buttons_background(maj_tetrachord));
all_slider_button[tetrachords].append(create_buttons_background(min_tetrachord));
all_slider_button[tetrachords].append(create_buttons_background(frig_tetrachord));
all_slider_button[tetrachords].append(create_buttons_background(harm_tetrachord));
all_slider_button[tetrachords].append(create_buttons_background(whole_tetrachord));

//деление на 2
let separation = 9;
all_slider_button[separation].append(create_buttons_background(B2_in_2));
all_slider_button[separation].append(create_buttons_background(B3_in_2));
all_slider_button[separation].append(create_buttons_background(TTT_in_2));
all_slider_button[separation].append(create_buttons_background(m6_in_2));
all_slider_button[separation].append(create_buttons_background(m7_in_2));
all_slider_button[separation].append(create_buttons_background(ch8_in_2));
all_slider_button[separation].append(create_buttons_background(B9_in_2));