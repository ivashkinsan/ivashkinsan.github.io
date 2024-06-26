let contains = document.querySelector('.contains');
let note_str = '- C D E F G A B C# D# E# F# G# A# B# Cb Db Eb Fb Gb Ab Bb';
let note_opt_arr = [];
note_opt_arr = note_str.split(' ');
let chord_position_IIm7 = ['8', '6', '4', '2'];
let chord_position_V7 = ['7', '5', '4', '2'];
let chord_position_Imaj = ['7', '5', '3', '1'];
let label_II_V_I = ['IIm7', 'V7', 'I^'];

let all_answer = {
    'C dur': {
        '1': 'C',
        'b2': 'Db',
        '2': 'D',
        'b3': 'Eb',
        '3': 'E',
        '4': 'F',
        'b5': 'Gb',
        '5': 'G',
        'b6': 'Ab',
        '6': 'A',
        'b7': 'Bb',
        '7': 'B',
        '8': 'C',
    },
    'Db dur': {
        '1': 'Db',
        'b2': 'Ebb',
        '2': 'Eb',
        'b3': 'Fb',
        '3': 'F',
        '4': 'Gb',
        'b5': 'G',
        '5': 'Ab',
        'b6': 'A',
        '6': 'Bb',
        'b7': 'Cb',
        '7': 'C',
        '8': 'Db',
    },
    'D dur': {
        '1': 'D',
        'b2': 'Eb',
        '2': 'E',
        'b3': 'F',
        '3': 'F#',
        '4': 'G',
        'b5': 'Ab',
        '5': 'A',
        'b6': 'Bb',
        '6': 'B',
        'b7': 'C',
        '7': 'C#',
        '8': 'D',
    },
    'Eb dur': {
        '1': 'Eb',
        'b2': 'Fb',
        '2': 'F',
        'b3': 'Gb',
        '3': 'G',
        '4': 'Ab',
        'b5': 'Bbb',
        '5': 'Bb',
        'b6': 'Cb',
        '6': 'C',
        'b7': 'Db',
        '7': 'D',
        '8': 'Eb',
    },
    'E dur': {
        '1': 'E',
        'b2': 'F',
        '2': 'F#',
        'b3': 'G',
        '3': 'G#',
        '4': 'A',
        'b5': 'Bb',
        '5': 'B',
        'b6': 'C',
        '6': 'C#',
        'b7': 'D',
        '7': 'D#',
        '8': 'E',
    },
    'F dur': {
        '1': 'F',
        'b2': 'Gb',
        '2': 'G',
        'b3': 'Ab',
        '3': 'A',
        '4': 'Bb',
        'b5': 'B',
        '5': 'C',
        'b6': 'Db',
        '6': 'D',
        'b7': 'Eb',
        '7': 'E',
        '8': 'F',
    },
    'Gb dur': {
        '1': 'Gb',
        'b2': 'Abb',
        '2': 'Ab',
        'b3': 'Bbb',
        '3': 'Bb',
        '4': 'Cb',
        'b5': 'C',
        '5': 'Db',
        'b6': 'Ebb',
        '6': 'Eb',
        'b7': 'Fb',
        '7': 'F',
        '8': 'Gb',
    },
    'G dur': {
        '1': 'G',
        'b2': 'Ab',
        '2': 'A',
        'b3': 'Bb',
        '3': 'B',
        '4': 'C',
        'b5': 'Db',
        '5': 'D',
        'b6': 'Eb',
        '6': 'E',
        'b7': 'F',
        '7': 'F#',
        '8': 'G',
    },
    'Ab dur': {
        '1': 'Ab',
        'b2': 'Bbb',
        '2': 'Bb',
        'b3': 'Cb',
        '3': 'C',
        '4': 'Db',
        'b5': 'Ebb',
        '5': 'Eb',
        'b6': 'Fb',
        '6': 'F',
        'b7': 'Gb',
        '7': 'G',
        '8': 'Ab',
    },
    'A dur': {
        '1': 'A',
        'b2': 'Bb',
        '2': 'B',
        'b3': 'C',
        '3': 'C#',
        '4': 'D',
        'b5': 'Eb',
        '5': 'E',
        'b6': 'F',
        '6': 'F#',
        'b7': 'G',
        '7': 'G#',
        '8': 'A',
    },
    'Bb dur': {
        '1': 'Bb',
        'b2': 'Cb',
        '2': 'C',
        'b3': 'Db',
        '3': 'D',
        '4': 'Eb',
        'b5': 'Fb',
        '5': 'F',
        'b6': 'Gb',
        '6': 'G',
        'b7': 'Ab',
        '7': 'A',
        '8': 'Bb',
    },
    'B dur': {
        '1': 'B',
        'b2': 'C',
        '2': 'C#',
        'b3': 'D',
        '3': 'D#',
        '4': 'E',
        'b5': 'F',
        '5': 'F#',
        'b6': 'G',
        '6': 'G#',
        'b7': 'A',
        '7': 'A#',
        '8': 'B',
    },
}
// console.log(all_answer['C dur']);






// создаем селект вариантами нот
let create_select = function (matrix, user_answer_arr, chord_position, indx) {
    let select_contain = document.createElement('select');
    for (let i = 0; i < note_opt_arr.length; i++) {
        let select_contain_elem = document.createElement('option');
        select_contain.classList.add('option_elem');
        select_contain_elem.textContent = note_opt_arr[i];
        select_contain.append(select_contain_elem);
    }
    // установка прослушки выбора ноты
    select_contain.addEventListener('change', (e) => {
        // console.log(answer_arr);
        // console.log(e.target.value);

        // console.log(e.target.parentNode);
        user_answer_arr[indx] = e.target.value;
        console.log(user_answer_arr);
        if (e.target.parentNode.dataset.name == user_answer_arr.join(' ')) {
            console.log('WICTORY');
            let in_4_select = e.target.parentNode.querySelectorAll('select');
            console.log(in_4_select);
            e.target.parentNode.classList.add('victory');
            for (let elem of in_4_select) {
                console.log(elem);
                elem.disabled = true;
            }
        }
        // console.log(indx);

    })
    select_contain.dataset.indx = chord_position;
    // console.log(chord_position);
    // console.log(matrix);
    // console.log(user_answer_arr);
    select_contain.dataset.name = matrix[select_contain.dataset.indx];
    return select_contain;
}

//создание h2
let create_h2 = function (arr_item) {
    let h2_label = document.createElement('div');
    h2_label.textContent = arr_item;
    h2_label.classList.add('h2_label');
    return h2_label;
}
//создание h3
let create_h3 = function (arr_item) {
    let h3_label = document.createElement('div');
    h3_label.textContent = arr_item;
    h3_label.classList.add('h3_label');
    return h3_label;
}

//создание лейблов для строк
let create_label_for_row = function (textContent) {
    let label_for_row = document.createElement('div');
    label_for_row.textContent = textContent;
    label_for_row.classList.add('label_for_row')
    return label_for_row;
}

// создаем колонку с 4 строками из селектов
let create_column_in_select = function (matrix, chord_position, label_text, position_text, box_column_answer_arr) {
    let column = document.createElement('div');
    let user_answer_arr = ['', '', '', ''];
    box_column_answer_arr = ['', '', '', ''];
    column.append(create_h2(label_text));
    column.append(create_h3(position_text));
    let data_answer = [];
    for (let i = 0; i < 4; i++) {
        column.classList.add('column');
        indx = i;
        column.append(create_label_for_row(chord_position[i]));
        column.append(create_select(matrix, user_answer_arr, chord_position[i], indx));

        // column.dataset.answer = chord_position[i];
        data_answer.push(matrix[chord_position[i]]);
        // console.log('data_answer' + data_answer);
        column.dataset.name = data_answer.join(' ');
    }

    return column;
}

// большой контейнер с тональностью
let create_big_tonality_contain = function (label, matrix) {
    let big_tonality_contain = document.createElement('div');
    big_tonality_contain.textContent = label;
    big_tonality_contain.classList.add('big_tonality_contain');



    big_tonality_contain.append(create_column_in_select(matrix, chord_position_IIm7, 'IIm7', 'root'));
    big_tonality_contain.append(create_column_in_select(matrix, chord_position_V7, 'V7', '5st'));
    big_tonality_contain.append(create_column_in_select(matrix, chord_position_Imaj, 'I^', 'root'));

    return big_tonality_contain;
}

contains.append(create_big_tonality_contain('C dur', all_answer['C dur']));
contains.append(create_big_tonality_contain('Db dur', all_answer['Db dur']));
contains.append(create_big_tonality_contain('D dur', all_answer['D dur']));
contains.append(create_big_tonality_contain('Eb dur', all_answer['Eb dur']));
contains.append(create_big_tonality_contain('E dur', all_answer['E dur']));
contains.append(create_big_tonality_contain('F dur', all_answer['F dur']));
contains.append(create_big_tonality_contain('Gb dur', all_answer['Gb dur']));
contains.append(create_big_tonality_contain('G dur', all_answer['G dur']));
contains.append(create_big_tonality_contain('Ab dur', all_answer['Ab dur']));
contains.append(create_big_tonality_contain('A dur', all_answer['A dur']));
contains.append(create_big_tonality_contain('Bb dur', all_answer['Bb dur']));
contains.append(create_big_tonality_contain('B dur', all_answer['B dur']));


window.addEventListener('storage', (e) => {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('My obj');
})



localStorage.setItem('Data', 5);
console.log(localStorage.getItem('Data'));

const a = ['a', 'b', 'c', 'd', 'e'];
localStorage.setItem('My let', JSON.stringify(a));
let b = localStorage.getItem('My let');
b = JSON.parse(b);
console.log(b);
console.log(typeof b);
console.log(b[0]);



const c = {
    hello: 5,
    k: 2,
    4: 'HI'
};
localStorage.setItem('My obj', JSON.stringify(c));
let d = localStorage.getItem('My obj');
d = JSON.parse(d);
console.log(d);
console.log(typeof d);


