import { answers, stages } from './data.js';
import { renderApp } from './ui.js';

const STORAGE_KEY = 'stage1_b2_2_b3_state';
const HISTORY_STORAGE_KEY = 'stage1_b2_2_b3_history';
const TOTAL_TASKS = 144; // 12 тональностей * 12 нот

// --- DOM-элементы ---
const appElement = document.querySelector('.app');
const resetButton = document.getElementById('reset-progress-btn');
const progressBar = document.getElementById('progress-bar');

// Элементы модального окна завершения
const completionModal = document.getElementById('completion-modal');
const completionTimeElement = document.getElementById('completion-time-element');
const timeSpentElement = document.getElementById('time-spent-element');
const modalResetButton = document.getElementById('modal-reset-btn');
const totalAttemptsElement = document.getElementById('total-attempts-element');
const failedAttemptsElement = document.getElementById('failed-attempts-element');
const qualityElement = document.getElementById('quality-element');

// Элементы истории
const historyButton = document.getElementById('history-btn');
const historyModal = document.getElementById('history-modal');
const historyListContainer = document.getElementById('history-list-container');
const historyCloseButton = document.getElementById('history-close-btn');


// --- State Management ---

let state = {
    solvedAnswers: [],
    startTime: null,
    completionTime: null,
    totalAttempts: 0,
    failedAttempts: 0,
    isCompleted: false, // Флаг, чтобы сохранить результат в историю только один раз
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

/**
 * Сохраняет результат завершенной сессии в историю.
 */
function saveResultToHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    
    const sessionResult = {
        completionTime: state.completionTime,
        timeSpent: state.completionTime - state.startTime,
        totalAttempts: state.totalAttempts,
        failedAttempts: state.failedAttempts,
    };

    history.unshift(sessionResult); // Добавляем в начало
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
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
    
    const quality = state.totalAttempts > 0 
        ? (((state.totalAttempts - state.failedAttempts) / state.totalAttempts) * 100).toFixed(1)
        : 100;

    completionTimeElement.textContent = completionDate;
    timeSpentElement.textContent = timeSpent;
    totalAttemptsElement.textContent = state.totalAttempts;
    failedAttemptsElement.textContent = state.failedAttempts;
    qualityElement.textContent = `${quality}%`;
    
    completionModal.style.display = 'flex';
}

/**
 * Показывает модальное окно с историей.
 */
function showHistoryModal() {
    const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    
    if (history.length === 0) {
        historyListContainer.innerHTML = '<p>История пуста.</p>';
    } else {
        historyListContainer.innerHTML = history.map(item => {
            const quality = item.totalAttempts > 0
                ? (((item.totalAttempts - item.failedAttempts) / item.totalAttempts) * 100).toFixed(1)
                : 100;

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


// --- Initialization and Event Handling ---

renderApp(appElement, answers, stages);
loadState();

appElement.addEventListener('change', (event) => {
    const target = event.target;

    if (target.tagName !== 'SELECT' || target.disabled) {
        return;
    }

    state.totalAttempts++;

    if (target.value === target.dataset.correctAnswer) {
        target.disabled = true;
        target.classList.add('answer_green');
        
        if (!state.solvedAnswers.includes(target.dataset.id)) {
            state.solvedAnswers.push(target.dataset.id);
        }

        updateProgress();

        if (state.solvedAnswers.length === TOTAL_TASKS && !state.isCompleted) {
            state.completionTime = new Date().getTime();
            state.isCompleted = true;
            saveResultToHistory();
            saveState();
            showCompletionModal();
        }
    } else {
        state.failedAttempts++;
        target.classList.add('answer_red');
        setTimeout(() => {
            target.classList.remove('answer_red');
        }, 500);
    }
    
    saveState();
});

resetButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
        resetState();
    }
});

modalResetButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите начать заново?')) {
        resetState();
    }
});

// Слушатели для модального окна истории
historyButton.addEventListener('click', showHistoryModal);
historyCloseButton.addEventListener('click', () => {
    historyModal.style.display = 'none';
});

// Закрытие модальных окон по клику на оверлей
[completionModal, historyModal].forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// --- Чит-код ---
const CHEAT_CODE = 'stage';
let keySequence = '';

function activateCheat() {
    if (state.isCompleted) return;

    console.log('Чит-код активирован!');

    state.completionTime = new Date().getTime();
    state.isCompleted = true;
    saveResultToHistory();
    
    // Заполняем недостающие ответы, чтобы сработал релоад
    const allAnswerIds = [];
    Object.keys(answers).forEach(tonality => {
        for (let i = 0; i < 12; i++) {
            allAnswerIds.push(`${tonality}-${i}`);
        }
    });
    state.solvedAnswers = allAnswerIds;

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