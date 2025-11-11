import { answers, stages } from './data.js';
import { renderApp } from './ui.js';

const STORAGE_KEY = 'stage1_b2_2_b3_state';
const TOTAL_TASKS = 144; // 12 тональностей * 12 нот

// --- DOM-элементы ---
const appElement = document.querySelector('.app');
const resetButton = document.getElementById('reset-progress-btn');
const progressBar = document.getElementById('progress-bar');
const completionModal = document.getElementById('completion-modal');
const completionTimeElement = document.getElementById('completion-time-element');
const timeSpentElement = document.getElementById('time-spent-element');
const modalResetButton = document.getElementById('modal-reset-btn');
// Элементы для новой статистики
const totalAttemptsElement = document.getElementById('total-attempts-element');
const failedAttemptsElement = document.getElementById('failed-attempts-element');
const qualityElement = document.getElementById('quality-element');


// --- State Management ---

let state = {
    solvedAnswers: [],
    startTime: null,
    completionTime: null,
    totalAttempts: 0,
    failedAttempts: 0,
};

/**
 * Форматирует время из миллисекунд в строку "X мин Y сек".
 */
function formatTime(ms) {
    if (ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} мин ${seconds} сек`;
}

/**
 * Загружает состояние из localStorage.
 */
function loadState() {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    // Сливаем сохраненное состояние с начальным, чтобы обеспечить наличие всех полей
    if (savedState) {
        state = { ...state, ...savedState };
    }

    if (!state.startTime) {
        state.startTime = new Date().getTime();
        saveState();
    }

    state.solvedAnswers.forEach(id => {
        const selectElement = document.querySelector(`select[data-id="${id}"]`);
        if (selectElement) {
            selectElement.value = selectElement.dataset.correctAnswer;
            selectElement.disabled = true;
            selectElement.classList.add('answer_green');
        }
    });

    updateProgress();

    if (state.completionTime) {
        showCompletionModal();
    }
}

/**
 * Сохраняет текущее состояние в localStorage.
 */
function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/**
 * Сбрасывает состояние и перезагружает страницу.
 */
function resetState() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
}

// --- UI Functions ---

/**
 * Обновляет ширину прогресс-бара.
 */
function updateProgress() {
    const percentage = (state.solvedAnswers.length / TOTAL_TASKS) * 100;
    progressBar.style.width = `${percentage}%`;
}

/**
 * Показывает модальное окно с результатами.
 */
function showCompletionModal() {
    const completionDate = new Date(state.completionTime).toLocaleString('ru-RU');
    const timeSpent = formatTime(state.completionTime - state.startTime);
    
    // Расчет качества. Избегаем деления на ноль.
    const quality = state.totalAttempts > 0 
        ? ((TOTAL_TASKS / state.totalAttempts) * 100).toFixed(1)
        : 100;

    completionTimeElement.textContent = completionDate;
    timeSpentElement.textContent = timeSpent;
    totalAttemptsElement.textContent = state.totalAttempts;
    failedAttemptsElement.textContent = state.failedAttempts;
    qualityElement.textContent = `${quality}%`;
    
    completionModal.style.display = 'flex';
}

// --- Initialization and Event Handling ---

renderApp(appElement, answers, stages);
loadState();

appElement.addEventListener('change', (event) => {
    const target = event.target;

    if (target.tagName !== 'SELECT' || target.disabled) {
        return;
    }

    // Каждое изменение <select> считается попыткой
    state.totalAttempts++;

    if (target.value === target.dataset.correctAnswer) {
        target.disabled = true;
        target.classList.add('answer_green');
        
        if (!state.solvedAnswers.includes(target.dataset.id)) {
            state.solvedAnswers.push(target.dataset.id);
        }

        updateProgress();

        if (state.solvedAnswers.length === TOTAL_TASKS && !state.completionTime) {
            state.completionTime = new Date().getTime();
            showCompletionModal();
        }
    } else {
        // Если ответ неверный
        state.failedAttempts++;
    }
    
    // Сохраняем состояние после каждой попытки
    saveState();
});

resetButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
        resetState();
    }
});

modalResetButton.addEventListener('click', resetState);

// --- Чит-код ---
const CHEAT_CODE = 'stage';
let keySequence = '';

function activateCheat() {
    if (state.completionTime) return;

    console.log('Чит-код активирован!');

    const allAnswerIds = [];
    Object.keys(answers).forEach(tonality => {
        for (let i = 0; i < 12; i++) {
            allAnswerIds.push(`${tonality}-${i}`);
        }
    });

    state.solvedAnswers = allAnswerIds;
    state.completionTime = new Date().getTime();
    // Устанавливаем "идеальную" статистику для чита
    state.totalAttempts = TOTAL_TASKS;
    state.failedAttempts = 0;
    
    saveState();
    location.reload();
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