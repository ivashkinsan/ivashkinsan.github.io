import { chordDatasets } from './chord_datasets.js';
import { renderApp } from './ui.js';
import { calculateChord, intervalMaps } from './music_theory.js';

// --- DOM-элементы ---
const appElement = document.querySelector('.app');
const resetButton = document.getElementById('reset-progress-btn');
const progressBar = document.getElementById('progress-bar');
const chordTypeSelect = document.getElementById('chord-type-select');
const tableTitle = document.getElementById('table-title');
// Модальное окно завершения
const completionModal = document.getElementById('completion-modal');
const completionTimeElement = document.getElementById('completion-time-element');
const timeSpentElement = document.getElementById('time-spent-element');
const modalResetButton = document.getElementById('modal-reset-btn');
const totalAttemptsElement = document.getElementById('total-attempts-element');
const failedAttemptsElement = document.getElementById('failed-attempts-element');
const qualityElement = document.getElementById('quality-element');
// Модальное окно истории
const historyButton = document.getElementById('history-btn');
const historyModal = document.getElementById('history-modal');
const historyListContainer = document.getElementById('history-list-container');
const historyCloseButton = document.getElementById('history-close-btn');
const historyTitle = document.getElementById('history-title');
// Модальное окно общей статистики
const overallStatsBtn = document.getElementById('overall-stats-btn');
const overallStatsModal = document.getElementById('overall-stats-modal');
const overallStatsContent = document.getElementById('overall-stats-content');
const overallStatsCloseBtn = document.getElementById('overall-stats-close-btn');


// --- Глобальные переменные ---
let state = {};
let currentChordKey = '';
let currentExercises = [];
let currentIntervalMap = {};
let TOTAL_TASKS = 0;
let STORAGE_KEY = '';
let HISTORY_STORAGE_KEY = '';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadExercises() {
    currentChordKey = chordTypeSelect.value;
    const dataset = chordDatasets[currentChordKey];

    tableTitle.textContent = dataset.name;
    currentIntervalMap = intervalMaps[currentChordKey];
    currentExercises = shuffle([...dataset.exercises]);
    TOTAL_TASKS = currentExercises.length;
    STORAGE_KEY = `seventh_chords_state_${currentChordKey}`;
    HISTORY_STORAGE_KEY = `seventh_chords_history_${currentChordKey}`;

    resetStateForNewChordType();
    renderApp(appElement, currentExercises, dataset.degrees);
    loadState();
}

function populateChordSelector() {
    for (const key in chordDatasets) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = chordDatasets[key].name;
        chordTypeSelect.appendChild(option);
    }
}

// --- Управление состоянием ---

function resetStateForNewChordType() {
    state = {
        solvedAnswers: [],
        startTime: new Date().getTime(),
        completionTime: null,
        totalAttempts: 0,
        failedAttempts: 0,
        isCompleted: false,
    };
}

function loadState() {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedState) {
        state = { ...state, ...savedState };
    } else {
        state.startTime = new Date().getTime();
    }
    
    currentExercises.forEach((exercise, index) => {
        if (state.solvedAnswers.includes(exercise.id)) {
            const correctAnswer = calculateChord(exercise.given_note, exercise.given_degree, currentIntervalMap);
            const exerciseCol = appElement.querySelector(`.exercise-column[data-exercise-id="${index}"]`);
            if (exerciseCol) {
                const selects = exerciseCol.querySelectorAll('select');
                selects.forEach(select => {
                    const degree = select.dataset.degree;
                    select.value = correctAnswer[degree];
                    select.disabled = true;
                    select.classList.add('answer_green');
                });
            }
        }
    });

    updateProgress();
    if (state.completionTime) {
        showCompletionModal();
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetCurrentProgress() {
    if (confirm('Вы уверены, что хотите сбросить прогресс для этого типа аккордов?')) {
        localStorage.removeItem(STORAGE_KEY);
        completionModal.style.display = 'none';
        loadExercises();
    }
}

function saveResultToHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    const sessionResult = {
        completionTime: state.completionTime,
        timeSpent: state.completionTime - state.startTime,
        totalAttempts: state.totalAttempts,
        failedAttempts: state.failedAttempts,
    };
    history.unshift(sessionResult);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
}

// --- UI Функции ---

function formatTime(ms) {
    if (ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} мин ${seconds} сек`;
}

function updateProgress() {
    const percentage = TOTAL_TASKS > 0 ? (state.solvedAnswers.length / TOTAL_TASKS) * 100 : 0;
    progressBar.style.width = `${percentage}%`;
}

function showCompletionModal() {
    const completionDate = new Date(state.completionTime).toLocaleString('ru-RU');
    const timeSpent = formatTime(state.completionTime - state.startTime);
    const quality = state.totalAttempts > 0 ? (((state.totalAttempts - state.failedAttempts) / state.totalAttempts) * 100).toFixed(1) : 100;

    completionTimeElement.textContent = completionDate;
    timeSpentElement.textContent = timeSpent;
    totalAttemptsElement.textContent = state.totalAttempts;
    failedAttemptsElement.textContent = state.failedAttempts;
    qualityElement.textContent = `${quality}%`;
    
    completionModal.style.display = 'flex';
}

function showHistoryModal() {
    historyTitle.textContent = `История: ${chordDatasets[currentChordKey].name}`;
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    if (history.length === 0) {
        historyListContainer.innerHTML = '<p>История пуста.</p>';
    } else {
        historyListContainer.innerHTML = history.map(item => {
            const quality = item.totalAttempts > 0 ? (((item.totalAttempts - item.failedAttempts) / item.totalAttempts) * 100).toFixed(1) : 100;
            return `
                <div class="history-item">
                    <p><strong>Дата:</strong> ${new Date(item.completionTime).toLocaleString('ru-RU')}</p>
                    <p><strong>Время:</strong> ${formatTime(item.timeSpent)}</p>
                    <p><strong>Попыток:</strong> ${item.totalAttempts} | <strong>Ошибок:</strong> ${item.failedAttempts}</p>
                    <p><strong>Качество:</strong> ${quality}%</p>
                </div>
            `;
        }).join('');
    }
    historyModal.style.display = 'flex';
}

function calculateAndShowOverallStats() {
    let totalSolved = 0;
    let totalPossible = 0;
    let statsHTML = '<ul>';

    for (const key in chordDatasets) {
        const dataset = chordDatasets[key];
        const storageKey = `seventh_chords_state_${key}`;
        const savedState = JSON.parse(localStorage.getItem(storageKey));
        
        const solvedCount = savedState ? savedState.solvedAnswers.length : 0;
        const possibleCount = dataset.exercises.length;
        
        totalSolved += solvedCount;
        totalPossible += possibleCount;
        
        const percentage = possibleCount > 0 ? ((solvedCount / possibleCount) * 100).toFixed(1) : 0;
        
        statsHTML += `<li><strong>${dataset.name}:</strong> ${solvedCount} / ${possibleCount} (${percentage}%)</li>`;
    }

    const overallPercentage = totalPossible > 0 ? ((totalSolved / totalPossible) * 100).toFixed(1) : 0;
    statsHTML += `</ul><hr><p><strong>Всего решено: ${totalSolved} / ${totalPossible} (${overallPercentage}%)</strong></p>`;

    overallStatsContent.innerHTML = statsHTML;
    overallStatsModal.style.display = 'flex';
}


// --- Обработчики событий ---

appElement.addEventListener('change', (event) => {
    const target = event.target;
    if (target.tagName !== 'SELECT' || target.disabled) return;

    const exerciseId = parseInt(target.dataset.exerciseId, 10);
    const exerciseCol = appElement.querySelector(`.exercise-column[data-exercise-id="${exerciseId}"]`);
    const selects = exerciseCol.querySelectorAll('select');

    const allFilled = [...selects].every(s => s.value !== '');
    if (!allFilled) return;

    state.totalAttempts++;

    const exercise = currentExercises[exerciseId];
    const correctAnswer = calculateChord(exercise.given_note, exercise.given_degree, currentIntervalMap);
    
    let isCorrect = true;
    selects.forEach(s => {
        if (s.value !== correctAnswer[s.dataset.degree]) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        selects.forEach(s => {
            s.disabled = true;
            s.classList.add('answer_green');
        });
        if (!state.solvedAnswers.includes(exercise.id)) {
            state.solvedAnswers.push(exercise.id);
        }
        updateProgress();
        if (state.solvedAnswers.length === TOTAL_TASKS && !state.isCompleted) {
            state.completionTime = new Date().getTime();
            state.isCompleted = true;
            saveResultToHistory();
            showCompletionModal();
        }
    } else {
        state.failedAttempts++;
        exerciseCol.classList.add('answer_red');
        setTimeout(() => exerciseCol.classList.remove('answer_red'), 500);
    }
    
    saveState();
});

chordTypeSelect.addEventListener('change', loadExercises);
resetButton.addEventListener('click', resetCurrentProgress);
modalResetButton.addEventListener('click', resetCurrentProgress);
historyButton.addEventListener('click', showHistoryModal);
historyCloseButton.addEventListener('click', () => historyModal.style.display = 'none');
overallStatsBtn.addEventListener('click', calculateAndShowOverallStats);
overallStatsCloseBtn.addEventListener('click', () => overallStatsModal.style.display = 'none');

// Закрытие модальных окон по клику на оверлей
[completionModal, historyModal, overallStatsModal].forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) modal.style.display = 'none';
    });
});

// --- Инициализация ---
populateChordSelector();
loadExercises();

// --- Чит-код ---
const CHEAT_CODE = 'seventh';
let keySequence = '';

function activateCheat() {
    if (state.isCompleted) return;
    console.log('Чит-код активирован!');

    state.completionTime = new Date().getTime();
    state.isCompleted = true;
    
    state.solvedAnswers = currentExercises.map(ex => ex.id);

    saveResultToHistory();
    saveState();
    showCompletionModal();
}

document.addEventListener('keydown', (event) => {
    keySequence += event.key.toLowerCase();
    if (keySequence.length > CHEAT_CODE.length) {
        keySequence = keySequence.slice(-CHEAT_CODE.length);
    }
    if (keySequence === CHEAT_CODE) {
        activateCheat();
    }
});