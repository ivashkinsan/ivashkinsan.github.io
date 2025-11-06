
import { answers, stages } from './data.js';
import { renderApp } from './ui.js';

const STORAGE_KEY = 'solvedAnswers';

// --- State Management ---

/**
 * Загружает решенные ответы из localStorage и применяет их к UI.
 */
function loadState() {
    const solvedAnswers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (solvedAnswers.length === 0) return;

    solvedAnswers.forEach(id => {
        const selectElement = document.querySelector(`select[data-id="${id}"]`);
        if (selectElement) {
            const correctAnswer = selectElement.dataset.correctAnswer;
            selectElement.value = correctAnswer; // Устанавливаем правильное значение
            selectElement.disabled = true;
            selectElement.classList.add('answer_green');
        }
    });
}

/**
 * Сохраняет ID решенного ответа в localStorage.
 * @param {string} id - Уникальный ID ответа (напр. "C-5").
 */
function saveState(id) {
    const solvedAnswers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!solvedAnswers.includes(id)) {
        solvedAnswers.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(solvedAnswers));
    }
}


// --- Initialization and Event Handling ---

// Находим DOM-элементы
const appElement = document.querySelector('.app');
const resetButton = document.getElementById('reset-progress-btn');

// Отрисовываем все приложение
renderApp(appElement, answers, stages);

// Загружаем сохраненное состояние
loadState();

// Добавляем один обработчик событий на весь контейнер (делегирование событий)
appElement.addEventListener('change', (event) => {
    const target = event.target;

    // Убеждаемся, что событие произошло на элементе <select>
    if (target.tagName !== 'SELECT') {
        return;
    }

    const selectedValue = target.value;
    const correctAnswer = target.dataset.correctAnswer;

    // Проверяем, правильный ли ответ
    if (selectedValue === correctAnswer) {
        target.disabled = true;
        target.classList.add('answer_green');
        
        // Сохраняем состояние
        saveState(target.dataset.id);
    } 
});

// Обработчик для кнопки сброса
resetButton.addEventListener('click', () => {
    // Запрашиваем подтверждение у пользователя
    const isConfirmed = confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.');
    
    if (isConfirmed) {
        // Удаляем данные из localStorage
        localStorage.removeItem(STORAGE_KEY);
        // Перезагружаем страницу, чтобы сбросить UI
        location.reload();
    }
});
