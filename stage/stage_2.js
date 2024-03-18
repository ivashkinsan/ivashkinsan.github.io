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

function create_select_contains(answers) {
    console.log(answers);
    let obj_key_to_array = Object.keys(answers);
    let obj_values_to_array = Object.values(answers);
    // console.log(obj_key_to_array);
    // console.log(obj_values_to_array);
    for (let item of obj_key_to_array) {
        // console.log(answers[item]);
        let row_contain = document.createElement('div');
        let label_root_ton = document.createElement('h2');
        label_root_ton.textContent = item;

        row_contain.append(label_root_ton);
        row_contain.append(create_row_selects(obj_values_to_array));
        
        document.querySelector('.app').append(row_contain);
    }

}

create_select_contains(create_answer());

function create_one_select_elem(input){
    let input_to_arr = Object.values(input);
    console.log(input_to_arr);
    // let i = 0;

    let select_elem = document.createElement('select');
    if(typeof input == 'object'){
        for(elem in input){
            // let label_for_select_elem = document.createElement('div');
            // label_for_select_elem.textContent = input_to_arr[i];
            // i++;

            let select_elem_option = document.createElement('option');
            select_elem_option.textContent = elem;
            // select_elem.append(label_for_select_elem);
            select_elem.append(select_elem_option);
        }

    }
      return select_elem;
}

function create_row_selects(input){
let one_row = document.createElement('div');

for(let i = 0; i < input.length; i++){
    let label_for_select_elem = document.createElement('div');
    label_for_select_elem.textContent = input[i];
    one_row.append(label_for_select_elem);
    one_row.append(create_one_select_elem(input[i]));
        
}
return one_row;
}