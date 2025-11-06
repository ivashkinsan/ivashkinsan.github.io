
// Функция для перемешивания массива (алгоритм Фишера-Йейтса)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Создает HTML для всех <option> в одном <select>
function createSelectOptions(stages) {
    return stages.map(stage => `<option value="${stage}">${stage}</option>`).join('');
}

// Создает HTML для одного ряда (одной тональности)
function createRow(tonality, notesInTonality, allStages) {
    // Перемешиваем ноты для случайного порядка в ряду
    const shuffledNotes = shuffle(Object.values(notesInTonality));

    // Для каждой ноты создаем свой блок с <select>
    const selectBoxesHTML = shuffledNotes.map(note => {
        // Находим правильную ступень для текущей ноты
        const correctStage = Object.keys(notesInTonality).find(key => notesInTonality[key] === note);
        
        return `
            <div class="one_box_for_row">
                <div class="label_for_select_elem">${note}</div>
                <select data-correct-answer="${correctStage}" data-id="${tonality}-${correctStage}">
                    <option value="">--</option>
                    ${createSelectOptions(allStages)}
                </select>
            </div>
        `;
    }).join('');

    return `
        <div class="row_contain">
            <div class="label_for_row">${tonality}</div>
            <div class="one_row">
                ${selectBoxesHTML}
            </div>
        </div>
    `;
}

// Основная функция отрисовки, которую будем экспортировать
export function renderApp(appElement, answers, stages) {
    // Генерируем HTML для всех тональностей
    const appHTML = Object.keys(answers).map(tonality => {
        return createRow(tonality, answers[tonality], stages);
    }).join('');

    appElement.innerHTML = appHTML;
}
