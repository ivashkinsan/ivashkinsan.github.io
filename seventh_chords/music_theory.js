// --- Базовые музыкальные данные ---
const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesFlat =  ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const allNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];

export const noteDisplayMap = {
    'C': 'C', 'C#': 'C# / Db', 'Db': 'C# / Db', 'D': 'D', 'D#': 'D# / Eb', 'Eb': 'D# / Eb',
    'E': 'E', 'F': 'F', 'F#': 'F# / Gb', 'Gb': 'F# / Gb', 'G': 'G', 'G#': 'G# / Ab',
    'Ab': 'G# / Ab', 'A': 'A', 'A#': 'A# / Bb', 'Bb': 'A# / Bb', 'B': 'B', 'С': 'C'
};

function getNoteIndex(note) {
    const normalizedNote = note.replace('С', 'C');
    let index = notesSharp.indexOf(normalizedNote);
    if (index !== -1) return index;
    return notesFlat.indexOf(normalizedNote);
}

function getNoteFromIndex(index) {
    index = index % 12;
    if (index < 0) index += 12;
    if (notesSharp[index].length === 1) return notesSharp[index];
    return notesFlat[index]; // По умолчанию используем бемоли для энгармонизмов
}

// --- Логика аккордов ---

// Карты интервалов для разных типов аккордов (в полутонах от примы)
export const intervalMaps = {
    maj7: { 1: 0, 3: 4, 5: 7, 7: 11 }, // Большой мажорный (X^7)
    dom7: { 1: 0, 3: 4, 5: 7, 7: 10 },  // Доминантсепт (X7)
    min7: { 1: 0, 3: 3, 5: 7, 7: 10 },   // Малый минорный (Xm7)
    halfDim7: { 1: 0, 3: 3, 5: 6, 7: 10 }, // Полууменьшенный (Xm7b5)
    dim7: { 1: 0, 3: 3, 5: 6, 7: 9 },    // Уменьшенный (Xo)
    minMaj7: { 1: 0, 3: 3, 5: 7, 7: 11 }, // Большой минорный (Xm^)
    augMaj7: { 1: 0, 3: 4, 5: 8, 7: 11 } // Большой мажорный с повышенной 5-ой (X^#5)
};

/**
 * Вычисляет все ноты аккорда на основе одной известной ноты, ее ступени и карты интервалов.
 * @param {string} givenNote - Известная нота.
 * @param {number} givenDegree - Ступень известной ноты (1, 3, 5 или 7).
 * @param {object} intervalMap - Объект с интервалами для нужного типа аккорда.
 * @returns {Object|null} Объект с полным аккордом или null в случае ошибки.
 */
export function calculateChord(givenNote, givenDegree, intervalMap) {
    const givenNoteIndex = getNoteIndex(givenNote);
    if (givenNoteIndex === -1) {
        console.error(`Неизвестная нота: ${givenNote}`);
        return null;
    }

    // Находим индекс примы (тоники) аккорда
    const rootNoteIndex = givenNoteIndex - intervalMap[givenDegree];

    // Строим аккорд от найденной примы
    const chord = {};
    for (const degree in intervalMap) {
        chord[degree] = getNoteFromIndex(rootNoteIndex + intervalMap[degree]);
    }

    return chord;
}
