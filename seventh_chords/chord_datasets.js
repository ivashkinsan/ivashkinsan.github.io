// Единая база данных для всех типов аккордов

const maj7Exercises = [
    { "given_degree": 7, "given_note": "Ab" }, { "given_degree": 7, "given_note": "С" },
    { "given_degree": 7, "given_note": "Eb" }, { "given_degree": 7, "given_note": "Gb" },
    { "given_degree": 7, "given_note": "A" }, { "given_degree": 7, "given_note": "B" },
    { "given_degree": 7, "given_note": "G" }, { "given_degree": 7, "given_note": "Db" },
    { "given_degree": 7, "given_note": "D" }, { "given_degree": 7, "given_note": "F" },
    { "given_degree": 7, "given_note": "Bb" }, { "given_degree": 7, "given_note": "E" },
    { "given_degree": 5, "given_note": "С" }, { "given_degree": 5, "given_note": "D" },
    { "given_degree": 5, "given_note": "E" }, { "given_degree": 5, "given_note": "Db" },
    { "given_degree": 5, "given_note": "F" }, { "given_degree": 5, "given_note": "Gb" },
    { "given_degree": 5, "given_note": "Ab" }, { "given_degree": 5, "given_note": "Bb" },
    { "given_degree": 5, "given_note": "Eb" }, { "given_degree": 5, "given_note": "G" },
    { "given_degree": 5, "given_note": "A" }, { "given_degree": 5, "given_note": "B" },
    { "given_degree": 3, "given_note": "Db" }, { "given_degree": 3, "given_note": "F" },
    { "given_degree": 3, "given_note": "С" }, { "given_degree": 3, "given_note": "E" },
    { "given_degree": 3, "given_note": "A" }, { "given_degree": 3, "given_note": "G" },
    { "given_degree": 3, "given_note": "Gb" }, { "given_degree": 3, "given_note": "Eb" },
    { "given_degree": 3, "given_note": "D" }, { "given_degree": 3, "given_note": "B" },
    { "given_degree": 3, "given_note": "Bb" }, { "given_degree": 3, "given_note": "Ab" }
];

// Добавляем стабильные ID
maj7Exercises.forEach(ex => {
  ex.id = `maj7_${ex.given_degree}_${ex.given_note.replace('С', 'C')}`;
});


// --- Генерация данных для доминантсептаккорда (X7) ---
const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const degreesKeys = [1, 3, 5, 7]; // Числовые ключи ступеней

const dom7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => {
        dom7Exercises.push({
            id: `dom7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});

// --- Генерация данных для малого минорного септаккорда (Xm7) ---
const min7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => { // Используем те же числовые ключи ступеней
        min7Exercises.push({
            id: `min7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});

// --- Генерация данных для полууменьшенного септаккорда (Xm7b5) ---
const halfDim7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => {
        halfDim7Exercises.push({
            id: `halfDim7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});

// --- Генерация данных для уменьшенного септаккорда (Xo) ---
const dim7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => {
        dim7Exercises.push({
            id: `dim7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});

// --- Генерация данных для большого минорного септаккорда (Xm^) ---
const minMaj7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => {
        minMaj7Exercises.push({
            id: `minMaj7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});

// --- Генерация данных для увеличенного мажорного септаккорда (X^#5) ---
const augMaj7Exercises = [];
notes.forEach(note => {
    degreesKeys.forEach(degree => {
        augMaj7Exercises.push({
            id: `augMaj7_${degree}_${note}`, // Стабильный ID
            "given_degree": degree,
            "given_note": note
        });
    });
});


// --- Экспорт всех наборов данных ---
export const chordDatasets = {
  'maj7': {
    name: 'Большой мажорный септаккорд (мэйдж) - X^7',
    degrees: [
        { key: 7, label: '7' },
        { key: 5, label: '5' },
        { key: 3, label: '3' },
        { key: 1, label: '1' }
    ],
    exercises: maj7Exercises
  },
  'dom7': {
    name: 'Малый мажорный септаккорд (септ) - X7',
    degrees: [
        { key: 7, label: 'b7' },
        { key: 5, label: '5' },
        { key: 3, label: '3' },
        { key: 1, label: '1' }
    ],
    exercises: dom7Exercises
  },
  'min7': {
    name: 'Малый минорный септаккорд (минорный септ) - Xm7',
    degrees: [
        { key: 7, label: 'b7' },
        { key: 5, label: '5' },
        { key: 3, label: 'b3' },
        { key: 1, label: '1' }
    ],
    exercises: min7Exercises
  },
  'halfDim7': {
    name: 'Полууменьшенный септаккорд - Xm7b5',
    degrees: [
        { key: 7, label: 'b7' },
        { key: 5, label: 'b5' },
        { key: 3, label: 'b3' },
        { key: 1, label: '1' }
    ],
    exercises: halfDim7Exercises
  },
  'dim7': {
    name: 'Уменьшенный септаккорд - Xo',
    degrees: [
        { key: 7, label: '6(bb7)' }, // Специальная метка для уменьшенной септимы
        { key: 5, label: 'b5' },
        { key: 3, label: 'b3' },
        { key: 1, label: '1' }
    ],
    exercises: dim7Exercises
  },
  'minMaj7': {
    name: 'Большой минорный септаккорд (минорный мэйдж) - Xm^',
    degrees: [
        { key: 7, label: '7' },
        { key: 5, label: '5' },
        { key: 3, label: 'b3' },
        { key: 1, label: '1' }
    ],
    exercises: minMaj7Exercises
  },
  'augMaj7': {
    name: 'Большой мажорный с повышенной 5-ой (увеличенный мэйдж) - X^#5',
    degrees: [
        { key: 7, label: '7' },
        { key: 5, label: '#5' },
        { key: 3, label: '3' },
        { key: 1, label: '1' }
    ],
    exercises: augMaj7Exercises
  }
};
