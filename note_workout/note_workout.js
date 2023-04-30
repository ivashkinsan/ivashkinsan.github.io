let all_line = document.querySelectorAll('.line');

let new_note_func = function () {
    let new_elem = document.createElement('div');
    new_elem.classList.add('note');
    return new_elem;
}

let arr_matrix_column = {
    'C1': 0,
    'D1': 8,
    'E1': 16,
    'F1': 0,
    'G1': 8,
    'A1': 16,
    'B1': 24,

    'C2': 0,
    'D2': 8,
    'E2': 16,
    'F2': 0,
    'G2': 8,
    'A2': 16,
    'B2': 24,

    'C3': 0,
    'D3': 8,
    'E3': 16,
    'F3': 0,
    'G3': 8,
    'A3': 16,
    'B3': 24,

    'C4': 0,
    'D4': 8,
    'E4': 16,
    'F4': 0,
    'G4': 8,
    'A4': 16,
    'B4': 24,

    'C5': 0
};

// let left_line_start = 38;
// for (let item of all_line) {
//     let new_el = new_note_func();
//     if (arr_matrix_column[item.dataset.note] >= 0) {
//         new_el.style.left = left_line_start + arr_matrix_column[item.dataset.note] + 'vh';
//         console.log(left_line_start + arr_matrix_column[item.dataset.note] + 'vh');
//     } else {
//         new_el.style.left = left_line_start + 'vh';
//     }

//     item.append(new_el);
// }

let generate_note_frame = function (arr_notes) {
    let left_line_start = 38;
    for (let i = 0; i < arr_notes.length; i++) {
        all_line.forEach(function (elem) {
            console.log(elem.dataset.note == arr_notes[i]);
            if (elem.dataset.note == arr_notes[i]) {
                let new_el = new_note_func();
                new_el.style.left = left_line_start + 'vh';
                left_line_start += 8;
                elem.append(new_el);
            }
        })
    }
}

generate_note_frame(['C1', 'D1', 'E1'])
generate_note_frame(['F1', 'G1', 'A1', 'B1'])
generate_note_frame(['C2', 'D2', 'E2'])