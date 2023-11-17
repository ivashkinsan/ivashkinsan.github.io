let symmetry_2_balls = [
    'm2 B2 T3 h8',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2 T3',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2',
    'm2',
    'end'
]
let symmetry_3_balls = [
    'm2 B2 B3 m6 h8',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2 B3 m6',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2 B3',
    'm2',
    'm2 B2',
    'm2',
    'end'
]
let symmetry_4_balls = [
    'm2 m3 T3 h8',
    'm2',
    'm2',
    'm2 m3 T3',
    'm2',
    'm2',
    'm2 m3 T3',
    'm2',
    'm2 ',
    'm2 m3',
    'm2',
    'm2',
    'end'
]
let symmetry_6_balls = [
    'm2 B2 T3 h8',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2 T3',
    'm2',
    'm2 B2',
    'm2',
    'm2 B2',
    'm2',
    'end'
]

let m2_balls = [
    'm2 h8', // 1
    'B7', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let B2_balls = [
    'B2 h8', // 1
    '', // b2
    'm7', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let m3_balls = [
    'm3 h8', // 1
    '', // b2
    '', // 2
    'B6', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let B3_balls = [
    'B3 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    'm6', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let ch4_balls = [
    'h4 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    'h5', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'

]
let TTT_balls = [
    'T3 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    'T3', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let ch5_balls = [
    'h5 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    'h4', // 5
    '', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let m6_balls = [
    'm6 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    'B3', // b6
    '', // 6
    '', // b7
    '', // 7
    'end'
]
let B6_balls = [
    'B6 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    'm3', // 6
    '', // b7
    '', // 7
    'end'
]
let m7_balls = [
    'm7 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    'B2', // b7
    '', // 7
    'end'
]
let B7_balls = [
    'B7 h8', // 1
    '', // b2
    '', // 2
    '', // b3
    '', // 3
    '', // 4
    '', // b5
    '', // 5
    '', // b6
    '', // 6
    '', // b7
    'm2', // 7
    'end'
]

let melodic_minor_balls = [
    'B2 h8',
    '',
    'm2',
    'B2',
    '',
    'B2',
    '',
    'B2',
    '',
    'B2',
    '',
    'm2',
    'end'
]
let ionian_balls = [
    'B2 h8',
    '',
    'B2',
    '',
    'm2',
    'B2',
    '',
    'B2',
    '',
    'B2',
    '',
    'm2',
    'end'
]
let lydian_balls = [
    'B2 h8',
    '',
    'B2',
    '',
    'B2',
    '',
    'm2',
    'B2',
    '',
    'B2',
    '',
    'm2',
    'end'
]
let lydian_aug_balls = [
    'B2 h8',
    '',
    'B2',
    '',
    'B2',
    '',
    'B2',
    '',
    'm2',
    'B2',
    '',
    'm2',
    'end'
]
let WH_balls = [
    'B2 h8',
    '',
    'm2',
    'B2',
    '',
    'm2',
    'B2',
    '',
    'm2',
    'B2',
    '',
    'm2',
    'end'
]

let all_balls_obj = {
    'symmetry_2': symmetry_2_balls,
    'symmetry_3': symmetry_3_balls,
    'symmetry_4': symmetry_4_balls,
    'symmetry_6': symmetry_6_balls,

    'm2': m2_balls,
    'B2': B2_balls,
    'm3': m3_balls,
    'B3': B3_balls,
    'ch4': ch4_balls,
    'TTT': TTT_balls,
    'ch5': ch5_balls,
    'm6': m6_balls,
    'B6': B6_balls,
    'm7': m7_balls,
    'B7': B7_balls,

    'melodic_minor': melodic_minor_balls,
    'ionian': ionian_balls,
    'lydian': lydian_balls,
    'lydian_aug': lydian_aug_balls,
    'WH': WH_balls

}