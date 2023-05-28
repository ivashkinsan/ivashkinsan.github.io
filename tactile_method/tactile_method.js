let container_table = document.querySelector('.container_table');
let all_circle = document.querySelectorAll('.key_elem');
let dataset_for_circle = 'C Db D Eb E F Gb G Ab A Bb B C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2 C3';
let create_arr_of_circle = dataset_for_circle.split(' ');
for (let item of all_circle) {
    item.dataset.note = create_arr_of_circle.shift();
}

let tactile_table = [
    'м2 wB Bw wB Bw ww wB Bw wB Bw wB Bw ww',
    'Б2 ww BB ww Bw wB ww BB ww BB ww Bw wB',
    'м3 wB Bw ww BB ww wB Bw wB Bw ww BB ww',
    'Б3 ww Bw wB Bw wB ww BB ww Bw wB Bw wB',
    'ч4 ww BB ww BB ww wB Bw ww BB ww BB ww',
    '3Т wB Bw wB Bw wB ww Bw wB Bw wB Bw ww',
    'ч5 ww BB ww BB ww ww BB ww BB ww Bw wB',
    'м6 wB Bw wB Bw ww wB Bw wB Bw ww BB ww',
    'Б6 ww BB ww Bw wB ww BB ww Bw wB Bw wB',
    'м7 wB Bw ww BB ww wB Bw ww BB ww BB ww',
    'Б7 ww Bw wB Bw wB ww Bw wB Bw wB Bw wB'
]

let dataset_note = [
    ['C Db', 'Db D', 'D Eb', 'Eb E', 'E F', 'F Gb', 'Gb G', 'G Ab', 'Ab A', 'A Bb', 'Bb B', 'B C2'],
    ['C D', 'Db Eb', 'D E', 'Eb F', 'E Gb', 'F G', 'Gb Ab', 'G A', 'Ab Bb', 'A B', 'Bb C2', 'B Db2'],
    ['C Eb', 'Db E', 'D F', 'Eb Gb', 'E G', 'F Ab', 'Gb A', 'G Bb', 'Ab B', 'A C2', 'Bb Db2', 'B D2'],
    ['C E', 'Db F', 'D Gb', 'Eb G', 'E Ab', 'F A', 'Gb Bb', 'G B', 'Ab C2', 'A Db2', 'Bb D2', 'B Eb2'],
    ['C F', 'Db Gb', 'D G', 'Eb Ab', 'E A', 'F Bb', 'Gb B', 'G C2', 'Ab Db2', 'A D2', 'Bb Eb2', 'B E2'],
    ['C Gb', 'Db G', 'D AB', 'Eb A', 'E Bb', 'F B', 'Gb C2', 'G Db2', 'Ab D2', 'A Eb2', 'Bb E2', 'B F2'],
    ['C G', 'Db Ab', 'D A', 'Eb Bb', 'E B', 'F C2', 'Gb Db2', 'G D2', 'Ab Eb2', 'A E2', 'Bb F2', 'B Gb2'],
    ['C Ab', 'Db A', 'D Bb', 'Eb B', 'E C2', 'F Db2', 'Gb D2', 'G Eb2', 'Ab E2', 'A F2', 'Bb Gb2', 'B G2'],
    ['C A', 'Db Bb', 'D B', 'Eb C2', 'E Db2', 'F D2', 'Gb Eb2', 'G E2', 'Ab F2', 'A Gb2', 'Bb G2', 'B Ab2'],
    ['C Bb', 'Db B', 'D C2', 'Eb Db2', 'E D2', 'F Eb2', 'Gb E2', 'G F2', 'Ab Gb2', 'A G2', 'Bb Ab2', 'B A2'],
    ['C B', 'Db C2', 'D Db2', 'Eb D2', 'E Eb2', 'F E2', 'Gb F2', 'G Gb2', 'Ab G2', 'A Ab2', 'Bb A2', 'B Bb2'],
]

let create_table = function (inp_arr) {
    for (let item_in_arr of inp_arr) {
        let arr_in_stroke = item_in_arr.split(' ');
        for (let item_in_stroke of arr_in_stroke) {
            let new_item = document.createElement('div');
            let new_item_children = document.createElement('div');


            if (item_in_stroke == arr_in_stroke[0]) {
                new_item.textContent = item_in_stroke;
                // new_item.classList.add('translateY')
            } else {
                new_item.classList.add('table_item');
            }
            switch (item_in_stroke) {
                case 'wB':
                    new_item_children.classList.add('line', 'line_wB');
                    break;
                case 'Bw':
                    new_item_children.classList.add('line', 'line_Bw');
                    break;
                case 'BB':
                    new_item_children.classList.add('line', 'line_BB');
                    break;
                case 'ww':
                    new_item_children.classList.add('line', 'line_ww');
                    break;
            }

            new_item.append(new_item_children);
            container_table.append(new_item);
        }
    }
}
create_table(tactile_table);


let all_table_item = document.querySelectorAll('.table_item');
let indXXX = 0;
let in12 = 0;
for (let i = 0; i < all_table_item.length; i++) {
    if (in12 > 11) {
        in12 = 0;
    }
    if (in12 % 12 == 0 && i > 0) {
        indXXX++;
    }

    let new_split = dataset_note[indXXX][in12].split(' ');
    all_table_item[i].dataset.start_note = new_split[0];
    all_table_item[i].dataset.end_note = new_split[1];

    in12++;
    console.log(indXXX, in12)

}

container_table.addEventListener('mousemove', function (event) {
    // console.log(event.target);
    if (event.target.classList.contains('table_item')) {
        event.target.classList.add('mousemove');
    }
    for (let item of all_circle) {
        if (item.dataset.note == event.target.dataset.start_note) {
            item.classList.add('yellow');
        }
        if (item.dataset.note == event.target.dataset.end_note) {
            item.classList.add('yellow');
        }
    }
});

let clear_all = function () {
    let all_mouse_move = document.querySelectorAll('.mousemove');
    let all_yellow = document.querySelectorAll('.yellow');
    for (let item of all_mouse_move) {
        item.classList.remove('mousemove');
    }
    for (let item of all_yellow) {
        item.classList.remove('yellow');
    }
}

container_table.addEventListener('mouseout', function (event) {
    clear_all();
});
