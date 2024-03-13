let contains = document.querySelector('.contains');

// note_opt_arr = note_str.split(' ');
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function create_answer() {
    let note_str_arr = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    let stage_arr = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'];
    let root_ton = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    const new_obj = new Object();
    const new_obj_child = new Object();
    for (let i = 0; i < root_ton.length; i++) {
        let del_el;
        for (let j = 0; j < root_ton.length; j++) {
            new_obj_child[stage_arr[j]] = note_str_arr[j];
        }
        new_obj[root_ton[i]] = Object.assign({}, new_obj_child);
        del_el = note_str_arr.shift();
        note_str_arr = [...note_str_arr, del_el];
    }
    return new_obj;
}

function create_select_box(answers) {
    console.log(answers);
    // 12 options_containers
    // answers.forEach(element => {
    //     console.log(element);
    // });
    for (let item in answers) {
        let options_container = document.createElement('div');
        console.log(answers[item]);
        document.querySelector('.app').append(item);
    }
}

create_select_box(create_answer());