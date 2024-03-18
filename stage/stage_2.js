let contains = document.querySelector('.contains');

// note_opt_arr = note_str.split(' ');
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function create_answer() {
    let note_str_arr = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    let stage_arr = ['1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', 'b6', '6', 'b7', '7'];
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
    // console.log(answers);
    let obj_key_to_array = Object.keys(answers);
    let obj_values_to_array = Object.values(answers);
    let row_index = 0;
    for (let item of obj_key_to_array) {
        let row_contain = document.createElement('div');
        let label_root_ton = document.createElement('div');
        label_root_ton.classList.add('label_for_row');
        label_root_ton.textContent = item;

        row_contain.append(label_root_ton);
        row_contain.append(create_row_selects(obj_values_to_array, 0, row_index));
        row_contain.classList.add('row_contain');
        row_index++;
        document.querySelector('.app').append(row_contain);
    }
}




function create_one_select_elem(input, answer) {
    let select_elem = document.createElement('select');
    let null_elem = document.createElement('option');

    null_elem.textContent = '--';
    select_elem.append(null_elem);
    // console.log(input);
    if (typeof input == 'object') {
        for (elem in input) {

            let select_elem_option = document.createElement('option');
            select_elem_option.textContent = elem;
            select_elem_option.value = input[elem];
            select_elem.append(select_elem_option);
        }

    }
    select_elem.dataset.answer = answer;

    select_elem.addEventListener('change', (e) => {
        // console.log(answer_arr);
        console.log(e.target.value);
        console.log(e.target.value == select_elem.dataset.answer);
        if (e.target.value == select_elem.dataset.answer) {
            select_elem.disabled = true;
            select_elem.classList.add('answer_green');
        }
    })

    return select_elem;
}

function create_row_selects(input, indx, row_index) {
    let one_row = document.createElement('div');
    one_row.classList.add('one_row');
    let input_to_arr = shuffle(Object.values(input[indx]));
    // let row_index = 0;
    for (let i = 0; i < input.length; i++) {
        let one_box_for_row = document.createElement('div');
        one_box_for_row.classList.add('one_box_for_row');


        let label_for_select_elem = document.createElement('div');
        label_for_select_elem.classList.add('label_for_select_elem');
        label_for_select_elem.textContent = input_to_arr[indx];

        one_box_for_row.append(label_for_select_elem);
        one_box_for_row.append(create_one_select_elem(input[row_index], input_to_arr[indx]));
        one_row.append(one_box_for_row);
        indx++;
    }

    console.log(input[row_index]);
    console.log(row_index);

    return one_row;
}

create_select_contains(create_answer());
