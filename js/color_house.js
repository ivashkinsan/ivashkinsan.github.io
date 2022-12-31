//запрещает нажатие правой кнопки мыши на сайте
document.oncontextmenu = cmenu;

function cmenu() {
    return false;
};

const container_dom = document.querySelector('.house_container');
const dom_item = document.querySelectorAll('.levels_elem');
const audioAll = document.querySelectorAll('audio');

// let scaleButton = document.querySelector('.scale');

// container_dom.insertBefore(dom_item[0],dom_item[1]);

// scaleButton.addEventListener('click', function () {
//     container_dom.classList.toggle('scale_transform');
//     console.log(container_dom);
// });

//присвоение дата атрибутов объектам дома
let j = 18;
for (let i = dom_item.length - 1; i >= 0; i--) {
    dom_item[i].setAttribute('data-key', audioAll[j].dataset.key);
    // console.log(dom_item[i]);
    j += 1;
}

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

// console.log(Object.keys(all_src_svg_image));
// сбор все хскрытых объектов
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
    }
}
);

document.querySelector('.rotate_button').onclick = () => {
    document.querySelector('.house_container').classList.toggle('transform_horizont');
    let label_All = document.querySelectorAll('.label');
    for (let item of label_All) {
        item.classList.toggle('transform_minus_90_deg');
    }
    let flex_direction_go = function () {
        document.querySelector('.button_container').classList.toggle('flex_direction');
        let rotate_box = document.querySelector('.rotate_box');
        rotate_box.classList.toggle('rotate_180_deg');
        rotate_box.children[0].style.transform = 'rotate(90deg)';
        rotate_box.children[1].style.transform = 'rotate(90deg)';
    }
    let remove_opacity_animation_class = function () {
        document.querySelector('.button_container').classList.remove('opacity_animation');
    }
    document.querySelector('.button_container').classList.toggle('opacity_animation');


    setTimeout(flex_direction_go, 1000);
    setTimeout(remove_opacity_animation_class, 2000);
};

document.querySelector('.label_button').onclick = () => {
    let label_All = document.querySelectorAll('.label');
    for (let item of label_All) {
        item.classList.toggle('display_none');
    }
};