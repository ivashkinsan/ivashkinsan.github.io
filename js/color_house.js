//запрещает нажатие правой кнопки мыши на сайте
document.oncontextmenu = cmenu;

function cmenu() {
    return false;
};

const container_dom = document.querySelector('.house_container');
const dom_item = document.querySelectorAll('.levels_elem');
const audioAll = document.querySelectorAll('audio');
let label_All = document.querySelectorAll('.label');
let forma;
// let scaleButton = document.querySelector('.scale');

// container_dom.insertBefore(dom_item[0],dom_item[1]);

// scaleButton.addEventListener('click', function () {
//     container_dom.classList.toggle('scale_transform');
//     console.log(container_dom);
// });

//присвоение дата атрибутов объектам дома
let add_tonality = function (start) {
    let j = start;
    for (let i = dom_item.length - 1; i >= 0; i--) {
        dom_item[i].setAttribute('data-key', audioAll[j].dataset.key);
        // console.log(dom_item[i]);
        j += 1;
    }
};
add_tonality(18);

//озвучка клавиатуры событием касания и клика
let audio = new Audio();
for (let i = 0; i < dom_item.length; i++) {
    dom_item[i].addEventListener('click', function () {
        for (let jj = 0; jj < audioAll.length; jj++) {
            if (audioAll[jj].dataset.key == dom_item[i].dataset.key) {
                audio.src = audioAll[jj].src;
                audio.load();
                audio.play();
            }
        }
    });
};

const all_src_svg_image = {
    YO_2: '/image/Levels/YO_2.svg',
    TI_2: '/image/Levels/TI_2.svg',
    TU_2: '/image/Levels/TU_2.svg',
    RA_2: '/image/Levels/RA_2.svg',
    RU_2: '/image/Levels/RU_2.svg',
    ZO_2: '/image/Levels/ZO_2.svg',
    NI: '/image/Levels/NI.svg',
    NA: '/image/Levels/NA.svg',
    WI: '/image/Levels/WI.svg',
    WU: '/image/Levels/WU.svg',
    LE: '/image/Levels/LE.svg',
    LU: '/image/Levels/LU.svg',
    YO: '/image/Levels/YO.svg',
    TI: '/image/Levels/TI.svg',
    TU: '/image/Levels/TU.svg',
    RA: '/image/Levels/RA.svg',
    RU: '/image/Levels/RU.svg',
    ZO: '/image/Levels/ZO.svg',
    NI_0: '/image/Levels/NI_0.svg',
    NA_0: '/image/Levels/NA_0.svg',
    WI_0: '/image/Levels/WI_0.svg',
    WU_0: '/image/Levels/WU_0.svg',
    LE_0: '/image/Levels/LE_0.svg',
    LU_0: '/image/Levels/LU_0.svg',
    YO_0: '/image/Levels/YO_0.svg',
    WHITE_down: '/image/Levels/WHITE_down.svg',
    WHITE_up: '/image/Levels/WHITE_up.svg',
    ZO_YO_white: '/image/Levels/ZO_YO_white.svg'
}
let all_keys_of_image = Object.keys(all_src_svg_image);

const all_src_svg_image_PIGS = {
    YO_2: '/image/Levels/PIGS_YO.svg',
    TI_2: '/image/Levels/PIGS_TI.svg',
    TU_2: '/image/Levels/PIGS_TU.svg',
    RA_2: '/image/Levels/PIGS_RA.svg',
    RU_2: '/image/Levels/PIGS_RU.svg',
    ZO_2: '/image/Levels/PIGS_ZO.svg',
    NI: '/image/Levels/PIGS_NI.svg',
    NA: '/image/Levels/PIGS_NA.svg',
    WI: '/image/Levels/PIGS_WI.svg',
    WU: '/image/Levels/PIGS_WU.svg',
    LE: '/image/Levels/PIGS_LE.svg',
    LU: '/image/Levels/PIGS_LU.svg',
    YO: '/image/Levels/PIGS_YO.svg',
    TI: '/image/Levels/PIGS_TI.svg',
    TU: '/image/Levels/PIGS_TU.svg',
    RA: '/image/Levels/PIGS_RA.svg',
    RU: '/image/Levels/PIGS_RU.svg',
    ZO: '/image/Levels/PIGS_ZO.svg',
    NI_0: '/image/Levels/PIGS_NI.svg',
    NA_0: '/image/Levels/PIGS_NA.svg',
    WI_0: '/image/Levels/PIGS_WI.svg',
    WU_0: '/image/Levels/PIGS_WU.svg',
    LE_0: '/image/Levels/PIGS_LE.svg',
    LU_0: '/image/Levels/PIGS_LU.svg',
    YO_0: '/image/Levels/PIGS_YO.svg',
    WHITE_down: '/image/Levels/PIGS_white.svg',
    WHITE_up: '/image/Levels/PIGS_white.svg',
    ZO_YO_white: '/image/Levels/PIGS_white.svg'
}
let all_keys_of_image_PIGS = Object.keys(all_src_svg_image_PIGS);

let lydian_keys_of_image = [
    'YO_2',
    'TI_2',
    'WHITE_down',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'NI',
    'WHITE_down',
    'WI',
    'WHITE_down',
    'LE',
    'WHITE_down',
    'YO',
    'TI',
    'WHITE_down',
    'RA',
    'WHITE_down',
    'ZO',
    'NI_0',
    'WHITE_down',
    'WI_0',
    'WHITE_down',
    'LE_0',
    'WHITE_down',
    'YO_0'
];

let major_keys_of_image = [
    'YO_2',
    'TI_2',
    'WHITE_down',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WI',
    'WHITE_down',
    'LE',
    'WHITE_down',
    'YO',
    'TI',
    'WHITE_down',
    'RA',
    'WHITE_down',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WI_0',
    'WHITE_down',
    'LE_0',
    'WHITE_down',
    'YO_0'
];

let mixolydian_keys_of_image = [
    'YO_2',
    'WHITE_up',
    'TU_2',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WI',
    'WHITE_down',
    'LE',
    'WHITE_down',
    'YO',
    'WHITE_up',
    'TU',
    'RA',
    'WHITE_down',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WI_0',
    'WHITE_down',
    'LE_0',
    'WHITE_down',
    'YO_0'
];
let dorian_keys_of_image = [
    'YO_2',
    'WHITE_up',
    'TU_2',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'LE',
    'WHITE_down',
    'YO',
    'WHITE_up',
    'TU',
    'RA',
    'WHITE_down',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'LE_0',
    'WHITE_down',
    'YO_0'
];
let eolian_keys_of_image = [
    'YO_2',
    'WHITE_up',
    'TU_2',
    'WHITE_up',
    'RU_2',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'LE',
    'WHITE_down',
    'YO',
    'WHITE_up',
    'TU',
    'WHITE_up',
    'RU',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'LE_0',
    'WHITE_down',
    'YO_0'
];
let frigian_keys_of_image = [
    'YO_2',
    'WHITE_up',
    'TU_2',
    'WHITE_up',
    'RU_2',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'WHITE_up',
    'LU',
    'YO',
    'WHITE_up',
    'TU',
    'WHITE_up',
    'RU',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'WHITE_up',
    'LU_0',
    'YO_0'
];
let locrian_keys_of_image = [
    'YO_2',
    'WHITE_up',
    'TU_2',
    'WHITE_up',
    'RU_2',
    'ZO_YO_white',
    'NI',
    'NA',
    'WHITE_up',
    'WU',
    'WHITE_up',
    'LU',
    'YO',
    'WHITE_up',
    'TU',
    'WHITE_up',
    'RU',
    'ZO_YO_white',
    'NI_0',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'WHITE_up',
    'LU_0',
    'YO_0'
];

let harmonian_keys_of_image = [
    'YO_2',
    'TI_2',
    'WHITE_down',
    'WHITE_up',
    'RU_2',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'LE',
    'WHITE_down',
    'YO',
    'TI',
    'WHITE_down',
    'WHITE_up',
    'RU',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'LE_0',
    'WHITE_down',
    'YO_0'
];
let melodyan_keys_of_image = [
    'YO_2',
    'TI_2',
    'WHITE_down',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'LE',
    'WHITE_down',
    'YO',
    'TI',
    'WHITE_down',
    'RA',
    'WHITE_down',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'LE_0',
    'WHITE_down',
    'YO_0'
];
let PIGS_keys_of_image = [
    'YO_2',
    'TI_2',
    'WHITE_down',
    'RA_2',
    'WHITE_down',
    'ZO_2',
    'WHITE_up',
    'NA',
    'WHITE_up',
    'WU',
    'LE',
    'WHITE_down',
    'YO',
    'TI',
    'WHITE_down',
    'RA',
    'WHITE_down',
    'ZO',
    'WHITE_up',
    'NA_0',
    'WHITE_up',
    'WU_0',
    'LE_0',
    'WHITE_down',
    'YO_0'
];


const all_levels_elem = document.querySelectorAll('.levels_elem');
// функция с запуском цветого дома
let go_formula_home = function (all, home) {
    let indx = 0;
    for (let item of all) {
        item.children[0].src = all_src_svg_image[home[indx]];
        indx++;
    }
}
go_formula_home(all_levels_elem, major_keys_of_image);

// функция с запуском пуговиц
let go_formula_home_PIGS = function (all, home) {
    let indx = 0;
    for (let item of all) {
        item.children[0].src = all_src_svg_image_PIGS[home[indx]];
        indx++;
    }
}

// console.log(Object.keys(all_src_svg_image));
// сбор все скрытых объектов
let display_none_elem_ALL = document.querySelectorAll('.display_none');

// массив с номерами скрытых объектов в шапке
let add_elem_up = [4, 3, 2, 1, 0, 0, 1, 2, 3, 4];
let add_elem_up_reload = () => {
    if (add_elem_up.length == 0) {
        add_elem_up = [4, 3, 2, 1, 0, 0, 1, 2, 3, 4];
        document.querySelector('.plus_up').classList.remove('display_none');
        document.querySelector('.minus_up').classList.add('display_none');
    }
    if (add_elem_up.length == 5) {
        document.querySelector('.plus_up').classList.add('display_none');
        document.querySelector('.minus_up').classList.remove('display_none');
    }
}

// массив с номерами скрытых объектов в подвале
let add_elem_down = [5, 6, 7, 8, 9, 10, 11, 11, 10, 9, 8, 7, 6, 5];
let add_elem_down_reload = () => {
    if (add_elem_down.length == 0) {
        add_elem_down = [5, 6, 7, 8, 9, 10, 11, 11, 10, 9, 8, 7, 6, 5];
        document.querySelector('.plus_down').classList.remove('display_none');
        document.querySelector('.minus_down').classList.add('display_none');
    }
    if (add_elem_down.length == 7) {
        document.querySelector('.plus_down').classList.add('display_none');
        document.querySelector('.minus_down').classList.remove('display_none');
    }
}

document.querySelector('.button_container').onclick = (e) => {
    switch (true) {
        case e.target.classList.contains('plus_up'):
            display_none_elem_ALL[add_elem_up.shift()].classList.toggle('display_none');
            add_elem_up_reload();
            break;
        case e.target.classList.contains('minus_up'):
            display_none_elem_ALL[add_elem_up.shift()].classList.toggle('display_none');
            add_elem_up_reload();
            break;
        case e.target.classList.contains('plus_down'):
            display_none_elem_ALL[add_elem_down.shift()].classList.toggle('display_none');
            add_elem_down_reload();
            break;
        case e.target.classList.contains('minus_down'):
            display_none_elem_ALL[add_elem_down.shift()].classList.toggle('display_none');
            add_elem_down_reload();
            break;
    }
}

// выбор вариантов отображения дома
document.querySelector('.select_variation').addEventListener('change', function (elem) {
    switch (this.value) {
        case 'lydian':
            go_formula_home(all_levels_elem, lydian_keys_of_image);
            break;
        case 'ionian':
            go_formula_home(all_levels_elem, major_keys_of_image);
            break;
        case 'mixolydian':
            go_formula_home(all_levels_elem, mixolydian_keys_of_image);
            break;
        case 'dorian':
            go_formula_home(all_levels_elem, dorian_keys_of_image);
            break;
        case 'eolian':
            go_formula_home(all_levels_elem, eolian_keys_of_image);
            break;
        case 'frigian':
            go_formula_home(all_levels_elem, frigian_keys_of_image);
            break;
        case 'locrian':
            go_formula_home(all_levels_elem, locrian_keys_of_image);
            break;
        case 'undefined':
            clear_p();
            break;
        case 'harmonian':
            go_formula_home(all_levels_elem, harmonian_keys_of_image);
            break;
        case 'melodyan':
            go_formula_home(all_levels_elem, melodyan_keys_of_image);
            break;
        case 'PIGS':
            go_formula_home_PIGS(all_levels_elem, major_keys_of_image);
            break;
    }
}
);


// функция генерации подписей элементов
let slogi = ['Ё', 'ТИ', 'ТУ', 'РА', 'РУ', 'ЗО', 'НИ', 'НА', 'ВИ', 'ВУ', 'ЛЕ', 'ЛУ'];
let numbers = ['1', '7', '&#9837;7', '6', '&#9837;6', '5', '&#9839;4', '4', '3', '&#9837;3', '2', '&#9837;2'];
let numbers_rim = ['I', 'VII', '&#9837;VII', 'VI', '&#9837;VI', 'V', '&#9839;IV', 'IV', 'III', '&#9837;III', 'II', '&#9837;II'];
let display_none = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let go_new_label = function (e) {
    let i = 0;
    e.map(function (item) { e.push(item); }) // удвоение массива
    e.push(e[0]);
    for (let item of label_All) {
        item.innerHTML = e[i];
        i++;
    }
}
// go_new_label(slogi);
// let double_arr = slogi.map(function (item) { return item; });
// slogi.map(function (item) { double_arr.push(item); })

// выбор вариантов подписи элементов
document.querySelector('.select_variation_label').addEventListener('change', function (elem) {
    switch (this.value) {
        case 'display_none':
            go_new_label(display_none);
            add_color_back_for_label(false);
            break;
        case 'slogi':
            go_new_label(slogi);
            add_color_back_for_label(true);
            break;
        case 'numbers':
            go_new_label(numbers);
            add_color_back_for_label(true);
            break;
        case 'numbers_rim':
            go_new_label(numbers_rim);
            add_color_back_for_label(true);
            break;
    }
}
);

let add_color_back_for_label = function(yes){

        for (let item of label_All) {
            if(yes){
                item.classList.add('color_for_label');
            } else {
                item.classList.remove('color_for_label'); 
            }
            

        }
   
}

// поведение при использовании кнопки rotate
document.querySelector('.rotate_button').onclick = () => {
    document.querySelector('.house_container').classList.toggle('transform_horizont');
    

    label_All = document.querySelectorAll('.label');
    // поворот внутренних label елементов
    for (let item of label_All) {
        item.classList.toggle('transform_minus_90_deg');
    }

    let flex_direction_go = function () {
        document.querySelector('.button_container').classList.toggle('flex_direction');
        document.querySelector('.container_with_keyboard').classList.toggle('transform_horizont');
        let rotate_box = document.querySelector('.rotate_box');
        // переворот кнопок для правильного восприятия сторон Л ПР и + -
        rotate_box.classList.toggle('rotate_180_deg');
        rotate_box.children[0].classList.toggle('transform_90_deg');
        rotate_box.children[1].classList.toggle('transform_90_deg');
    }

    // добавление анимации
    let remove_opacity_animation_class = function () {
        document.querySelector('.button_container').classList.remove('opacity_animation');
        document.querySelector('.container_with_keyboard').classList.toggle('opacity_animation');
    }
    document.querySelector('.button_container').classList.toggle('opacity_animation');
    document.querySelector('.container_with_keyboard').classList.toggle('opacity_animation');

    // добавление временного интервала для анимации
    setTimeout(flex_direction_go, 1000);
    setTimeout(remove_opacity_animation_class, 2000);
};

document.querySelector('.label_button').onclick = () => {
    let label_All = document.querySelectorAll('.label');
    for (let item of label_All) {
        item.classList.toggle('display_none');
    }
};


document.querySelector('.select_variation_skin').addEventListener('change', function (elem) {
    switch (this.value) {
        case 'house':
            remove_piano()
            hide_of_house('false');
            break;
        case 'piano':
            hide_of_house('true');
            create_piano(tonality.value);
            break;
        case 'piano_circle':
            hide_of_house('true');
            create_piano(tonality.value,'circle');
            break;
        case 'piano_circle_opacity':
            hide_of_house('true');
            create_piano(tonality.value,'piano_circle_opacity');
            break;
    }
    
});


// выбор тональности
let tonality = document.querySelector('.select_variation_tonality');
tonality.addEventListener('change', function (elem) {
    switch (this.value) {
        case 'ton_C':
            add_tonality(12);
            create_piano(this.value,forma);
            break;
        case 'ton_Db':
            add_tonality(13);
            create_piano(this.value,forma);
            break;
        case 'ton_D':
            add_tonality(14);
            create_piano(this.value,forma);
            break;
        case 'ton_Eb':
            add_tonality(15);
            create_piano(this.value,forma);
            break;
        case 'ton_E':
            add_tonality(16);
            create_piano(this.value,forma);
            break;
        case 'ton_F':
            add_tonality(17);
            create_piano(this.value,forma);
            break;
        case 'ton_Gb':
            add_tonality(18);
            create_piano(this.value,forma);
            break;
        case 'ton_G':
            add_tonality(19);
            create_piano(this.value,forma);
            break;
        case 'ton_Ab':
            add_tonality(20);
            create_piano(this.value,forma);
            break;
        case 'ton_A':
            add_tonality(21);
            create_piano(this.value,forma);
            break;
        case 'ton_Bb':
            add_tonality(22);
            create_piano(this.value,forma);
            break;
        case 'ton_B':
            add_tonality(23);
            create_piano(this.value,forma);
            break;
    }
}
);

let tonika = {
    c_dur: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
}


let arr_for_black_white_pattern = {
    'ton_C': 'C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C',
    'ton_Db': 'Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db',
    'ton_D': 'D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D',
    'ton_Eb': 'Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb',
    'ton_E': 'E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E',
    'ton_F': 'F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F',
    'ton_Gb': 'Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb',
    'ton_G': 'G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G',
    'ton_Ab': 'Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab',
    'ton_A': 'A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A',
    'ton_Bb': 'Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb',
    'ton_B': 'B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B'
}


let hide_of_house = function(yes){
 // скрытие img элементов

 for (let item of all_levels_elem) {
    if(yes == 'true'){
        item.children[0].classList.add('display_none');
        item.children[1].classList.add('margin_none');    
    } else {
        item.children[0].classList.remove('display_none');
        item.children[1].classList.remove('margin_none'); 
    } 
}
}

let all_piano_elem;
let remove_piano = function(){
    all_piano_elem = document.querySelectorAll('.piano_elem');
    for(let item of all_piano_elem)[
        item.remove()
    ]
}



//создание клавиатуры фортепиано
let create_piano = function (ton,input) {
    let all_levels_elem = document.querySelectorAll('.levels_elem');
    remove_piano();
   

    //создание новых элементов для клавиатуры
    let index_for_all_levels_elem = 0;
    for (let item of all_levels_elem) {
        let new_div = document.createElement('div');
        new_div.classList.add('click_elem', 'piano_elem');
        item.appendChild(new_div);
        index_for_all_levels_elem++;
        if(input == 'circle' || input == 'piano_circle_opacity'){
            new_div.classList.add('circle_elem');
            forma = 'circle';
        } else {
            forma = '';
        }
    }

let all_piano_elems = document.querySelectorAll('.piano_elem');
let arr_of_w_b = arr_for_black_white_pattern[ton].split(' ');
arr_of_w_b.reverse();


    for(let i = 0; i < all_piano_elems.length; i++ ){
        if(arr_of_w_b[i] == 'Db' || arr_of_w_b[i] == 'Eb'|| arr_of_w_b[i] == 'Gb'|| arr_of_w_b[i] == 'Ab'|| arr_of_w_b[i] == 'Bb'){
            all_piano_elems[i].classList.add('black_key');
        } else {
            all_piano_elems[i].classList.add('white_key');
        }

        if(input == 'piano_circle_opacity'){
            all_piano_elems[i].classList.add('piano_circle_opacity');
        }
        all_piano_elems[i].dataset.name = arr_of_w_b[i];

    }
    console.log(arr_for_black_white_pattern[ton]);
    console.log(arr_of_w_b);
}
// create_piano(tonality.value);