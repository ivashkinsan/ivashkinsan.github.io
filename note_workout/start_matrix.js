// создание объекта с матрицей нот
let arr_abc = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let new_arr_abc = [];
let arr_width = function () {
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {
            new_arr_abc.push(arr_abc[j] + [i]);
        }
    }
    new_arr_abc.push('C5');
}
arr_width();
let obj_matrix = {};
let create_matrix_obj = function (x, y) {
    for (let i = 0; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
            obj_matrix[i] = new_arr_abc[i] + ' ' + (obj_matrix[i] ? obj_matrix[i] : '');
        }
    }
}
create_matrix_obj(20, 28);