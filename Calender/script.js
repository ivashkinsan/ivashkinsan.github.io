
let sample = document.getElementById("foobar");

const calendar_2024 = {
    'yanuary': {
        name: 'январь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 31, 1, 2, 3, 4]
        ],
        previous: [
            [],
            [],
            [],
            [],
            [],
            [0, 0, 0, true, true, true, true],
        ]
    },
    'february': {
        name: 'февраль',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [29, 30, 31, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24, 25],
            [26, 27, 28, 29, 1, 2, 3]
        ],
        previous: [
            [],
            [true, true, true],
            [],
            [],
            [],
            [0, 0, 0, 0, true, true, true],
        ]
    },
    'march': {
        name: 'март',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [26, 27, 28, 29, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 31]
        ],
        previous: [
            [],
            [true, true, true, true, 0, 0, 0],
            [],
            [],
            [],
            []
        ]
    },
    'april': {
        name: 'апрель',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 1, 2, 3, 4, 5]
        ],
        previous: [
            [],
            [],
            [],
            [],
            [],
            [0, 0, true, true, true, true, true]
        ]
    },
    'may': {
        name: 'май',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [29, 30, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31, 1, 2]
        ],
        previous: [
            [],
            [true, true],
            [],
            [],
            [],
            [0, 0, 0, 0, 0, true, true]
        ]
    },
    'june': {
        name: 'июнь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [27, 28, 29, 30, 31, 1, 2],
            [3, 4, 5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14, 15, 16],
            [17, 18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29, 30]
        ],
        previous: [
            [],
            [true, true, true, true, true],
            [],
            [],
            [],
            []
        ]
    },
    'jule': {
        name: 'июль',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 31, 1, 2, 3, 4]
        ],
        previous: [
            [],
            [],
            [],
            [],
            [],
            [0, 0, 0, true, true, true, true]
        ]
    },
    'august': {
        name: 'август',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [29, 30, 31, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24, 25],
            [26, 27, 28, 29, 30, 31, 1]
        ],
        previous: [
            [],
            [true, true, true],
            [],
            [],
            [],
            [0, 0, 0, 0, 0, 0, true]
        ]
    },
    'september': {
        name: 'сентябрь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [26, 27, 28, 29, 30, 31, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
            [30, 1, 2, 3, 4, 5, 6]
        ],
        previous: [
            [],
            [true, true, true, true, true, true],
            [],
            [],
            [],
            [],
            [0, true, true, true, true, true, true]
        ]
    },
    'oktober': {
        name: 'октябрь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [30, 1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12, 13],
            [14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27],
            [28, 29, 30, 31, 1, 2, 3],
        ],
        previous: [
            [],
            [true],
            [],
            [],
            [],
            [0, 0, 0, 0, true, true, true]
        ]
    },
    'november': {
        name: 'ноябрь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [28, 29, 30, 31, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 1],
        ],
        previous: [
            [],
            [true, true, true, true],
            [],
            [],
            [],
            [0, 0, 0, 0, 0, 0, true]
        ]
    },
    'december': {
        name: 'декабрь',
        content: [
            ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            [25, 26, 27, 28, 29, 30, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
            [30, 31, 1, 2, 3, 4, 5]
        ],
        previous: [
            [],
            [true, true, true, true, true, true],
            [],
            [],
            [],
            [],
            [0, 0, true, true, true, true, true]
        ]
    }
}

// const label_H1 = ['март', 'апрель'];
const label = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];



const create_month = function () {



    const contains = document.createElement('div');
    contains.classList.add('contains');



    for (let item in calendar_2024) {
        const h1 = document.createElement('h1');
        h1.textContent = calendar_2024[item].name;
        const month = document.createElement('div');
        month.classList.add('month');
        month.appendChild(h1);
        let row;
        let count = 0;
        // console.log(calendar_2024[item]);
        for (let iiitem of calendar_2024[item].content) {

            const new_row = document.createElement('div');
            new_row.classList.add('row');
            for (let i = 0; i < iiitem.length && iiitem; i++) {

                const div = document.createElement('div');
                count == 0 ? div.classList.add('name_day') : div.classList.add('day');
                div.textContent = iiitem[i];
                new_row.appendChild(div);
                if (i == 5 || i == 6) {
                    div.classList.add('weekend')
                }
                if (calendar_2024[item].previous[count][i] == true) {

                    div.classList.add('previous_month')
                }

                new_row.appendChild(div);
            }
            row = new_row;
            month.appendChild(row);
            count = count + 1;
        }

        contains.appendChild(month);
    }

    return contains;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

const body = document.querySelector('.body');
body.appendChild(create_month());






let go = function () {
    let all_day = document.querySelectorAll('.day');
    let time = 0;
    let array = [...all_day];
    array = shuffle(array);

    for (let i = 0; i < array.length; i++) {
        setTimeout(function () {
            array[i].textContent = 8;
            array[i].classList.add('change');

            if (i == array.length - 1) {
                document.querySelector('.pop_up').classList.add('opacity');
            }
        }, time += 140)

    }
}

function pop_up_8() {
    const pop_up = document.createElement('div');
    pop_up.classList.add('pop_up');
    // pop_up.textContent = 8;
    body.appendChild(pop_up);
}
pop_up_8();

let opacity = false;
body.addEventListener('click', function () {
    if (!opacity) {
        go();
        opacity = true;
    } else {
        document.querySelector('.contains').remove();
        document.querySelector('.pop_up').classList.remove('opacity');
        body.appendChild(create_month());
        opacity = false;
    }
});

window.onload = function () {
    sample.play();
}

