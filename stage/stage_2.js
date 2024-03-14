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
    let obj_key_to_array = Object.keys(answers);
    let obj_values_to_array = Object.values(answers);
    console.log(obj_key_to_array);
    console.log(obj_values_to_array);
    for (let item of obj_key_to_array) {
        console.log(answers[item]);
        let row_contain = document.createElement('div');
        let label_root_ton = document.createElement('div');
        label_root_ton.textContent = item;


        row_contain.append(label_root_ton);
        document.querySelector('.app').append(row_contain);
    }
    // answers.forEach(function (value, index, array) {
    // let options_container = document.createElement('select');
    // 
    // label_options_container.textContent = Object.keys(value);
    // console.log(Object.keys(answers));
    // console.log(answers[item]);
    // for (let item_2 in answers[item]) {
    //     let new_options = document.createElement('option');
    //     new_options.value = answers[item][item_2];
    //     new_options.textContent = answers[item].value;

    //     options_container.append(new_options)
    // }
    // document.querySelector('.app').append(label_options_container);
    // 
    // })
}

create_select_box(create_answer());