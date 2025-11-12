import { allNotes, noteDisplayMap } from './music_theory.js';

// Создает HTML для всех <option> в одном <select>
function createSelectOptions() {
    const noteOptions = [
        { value: 'C', text: 'C' }, { value: 'Db', text: 'C# / Db' },
        { value: 'D', text: 'D' }, { value: 'Eb', text: 'D# / Eb' },
        { value: 'E', text: 'E' }, { value: 'F', text: 'F' },
        { value: 'Gb', text: 'F# / Gb' }, { value: 'G', text: 'G' },
        { value: 'Ab', text: 'G# / Ab' }, { value: 'A', text: 'A' },
        { value: 'Bb', text: 'A# / Bb' }, { value: 'B', text: 'B' },
    ];
    return noteOptions.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join('');
}

/**
 * Создает HTML-структуру для одного упражнения.
 * @param {object} exercise - Объект упражнения.
 * @param {number} index - Индекс упражнения.
 * @param {Array} degrees - Массив объектов ступеней ({key, label}).
 * @returns {string} HTML-строка.
 */
function createExerciseColumn(exercise, index, degrees) {
    const { given_degree, given_note } = exercise;

    const cellsHTML = degrees.map(degreeInfo => {
        const displayNote = noteDisplayMap[given_note] || given_note;

        if (degreeInfo.key === given_degree) {
            return `<div class="exercise-cell given-cell" data-degree="${degreeInfo.key}" data-label="${degreeInfo.label}">${displayNote}</div>`;
        } else {
            return `
                <div class="exercise-cell input-cell" data-degree="${degreeInfo.key}" data-label="${degreeInfo.label}">
                    <select data-degree="${degreeInfo.key}" data-exercise-id="${index}">
                        <option value="">--</option>
                        ${createSelectOptions()}
                    </select>
                </div>
            `;
        }
    }).join('');

    return `<div class="exercise-column" data-exercise-id="${index}">${cellsHTML}</div>`;
}

// Основная функция отрисовки
export function renderApp(appElement, exercises, degrees) {
    if (!appElement) {
        console.error('Элемент приложения не найден!');
        return;
    }

    // Создаем "липкий" заголовочный столбец для десктопной версии
    const headerHTML = `
        <div class="exercise-column header-column">
            ${degrees.map(d => `<div class="exercise-cell header-cell">${d.label}</div>`).join('')}
        </div>
    `;

    const exercisesHTML = exercises.map((exercise, index) => createExerciseColumn(exercise, index, degrees)).join('');

    appElement.innerHTML = headerHTML + exercisesHTML;
}
