let big_container = document.querySelector('.big_container');
big_container.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.classList.toggle('active_box');
})


let stage_arr;
let stage_arr_create = function () {
    stage_arr = '1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 1';
};
stage_arr_create();

let pattern_for_sphere = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2',
    'm3 0 0 m3 0 0 m3 0 0 m3 0 0',
    'TTT 0 0 TTT 0 0 TTT 0 0 0 0 0',
    'B6 0 0 B6 0 0 0 0 0 0 0 0',
    'ch8 0 0 0 0 0 0 0 0 0 0 0'
]

let symmetry_2 = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2', // 12
    'B2 0 B2 0 B2 0 B2 0 B2 0 B2', // 11
    '0 0 0 0 0 0 0 0 0 0', // 10
    'B3 0 0 0 B3 0 0 0 B3', // 9
    '0 0 0 0 0 0 0 0', // 8
    '0 0 0 0 0 0 0', // 7
    '0 0 0 0 0 0', // 6
    'm6 0 0 0 m6', // 5
    '0 0 0 0', // 4
    '0 0 0', // 3
    '0 0', // 2
    'h8' // 1
]
let big_pattern = [
    'm2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2 m2',
    'B2 B2 B2 B2 B2 B2 B2 B2 B2 B2 B2',
    'm3 m3 m3 m3 m3 m3 m3 m3 m3 m3',
    'B3 B3 B3 B3 B3 B3 B3 B3 B3',
    'h4 h4 h4 h4 h4 h4 h4 h4',
    'T3 T3 T3 T3 T3 T3 T3',
    'h5 h5 h5 h5 h5 h5',
    'm6 m6 m6 m6 m6',
    'B6 B6 B6 B6',
    'm7 m7 m7',
    'B7 B7',
    'h8'
]
let string_to_arr = function (input) {
    let new_arr = [];
    for (let item of input) {
        new_arr.push(item.split(' '));
    }
    return new_arr;
}
// console.log(string_to_arr(big_pattern));

let big_pattern_arr = string_to_arr(big_pattern);
let big_pattern_symmetry_2 = string_to_arr(symmetry_2);


// let create_sphere = function (pattern) {
//     for (let i = 0; i < pattern.length; i++) {
//         let new_arr = pattern[i].split(' ');
//         let new_layer = document.createElement('div');
//         new_layer.classList.add('new_layer');
//         for (let item_item of new_arr) {
//             console.log(new_arr);
//             let new_circle_elem = document.createElement('div');
//             let new_stage_vertiical_line;
//             if (i == 0) {
//                 new_stage_vertiical_line = document.createElement('div');
//                 new_stage_vertiical_line.classList.add('new_stage_vertiical_line');
//             }

//             switch (item_item) {
//                 case 'm2':
//                     new_circle_elem.classList.add('m2');
//                     break;
//                 case 'm3':
//                     new_circle_elem.classList.add('m3');
//                     break;
//                 case 'TTT':
//                     new_circle_elem.classList.add('TTT');
//                     break;
//             }
//             if (i == 0) {
//                 new_layer.append(new_stage_vertiical_line);
//             }
//             new_layer.append(new_circle_elem);
//         }
//         big_container.append(new_layer);
//     }
// }

let create_sphere = function (pattern) {
    console.log(pattern);
    for (let i = 0; i < 12; i++) {
        let new_div_column = document.createElement('div');
        new_div_column.classList.add('new_div_column');

        let new_stage_vertiical_line = document.createElement('div');
        new_stage_vertiical_line.classList.add('new_stage_vertiical_line');
        new_div_column.append(new_stage_vertiical_line);

        for (let j = 0; j < pattern[i].length; j++) {
            let new_circle = document.createElement('div');
            if (!pattern[j][i] == 0) {
                new_circle.classList.add(pattern[j][i]);
                new_div_column.append(new_circle);
            }

        }
        big_container.append(new_div_column);
    }
}

create_sphere(big_pattern_symmetry_2);
create_sphere(big_pattern_arr);
stage_arr_create();