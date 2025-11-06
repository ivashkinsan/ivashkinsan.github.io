import { notes, scales, chords } from './music-data.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Keyboard Workout App Initialized');

    // --- Audio Context ---
    let audioContext;
    const audioBuffers = {};

    function initAudio() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const resumeAudio = () => {
                if (audioContext.state === 'suspended') audioContext.resume();
                document.body.removeEventListener('click', resumeAudio);
            };
            document.body.addEventListener('click', resumeAudio);
        } catch (e) {
            console.error('Web Audio API is not supported');
        }
    }

    async function loadSound(note, octave) {
        if (!audioContext) return;
        const fullNoteName = `${note}${octave}`;
        if (audioBuffers[fullNoteName]) return; // Already loaded
        const fileNameNote = note.replace('#', 'b');
        const url = `../media/${octave}${fileNameNote}.mp3`;
        try {
            const response = await fetch(url);
            if (!response.ok) return;
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            audioBuffers[fullNoteName] = audioBuffer;
        } catch (e) {}
    }

    function playSound(noteName) {
        if (audioContext?.state === 'suspended') audioContext.resume();
        if (!audioContext || !audioBuffers[noteName]) return;
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffers[noteName];
        source.connect(audioContext.destination);
        source.start(0);
    }

    // --- DOM Elements ---
    const keyboardContainer = document.getElementById('keyboard-container');
    const rootNoteSelect = document.getElementById('root-note-select');
    const scaleSelect = document.getElementById('scale-select');
    const chordSelect = document.getElementById('chord-select');
    const infoDisplay = document.getElementById('info-display');
    const startOctaveInput = document.getElementById('start-octave-input');
    const numOctavesInput = document.getElementById('num-octaves-input');
    const notesInfo = document.getElementById('notes-info');

    const playAllBtn = document.getElementById('play_all');
    const playDownBtn = document.getElementById('play_down');
    const playUpBtn = document.getElementById('play_up');
    const playRandomBtn = document.getElementById('play_random');

    let allKeyElements = {};

    // --- Keyboard Generation ---
    function createKeyboard(startOctave, numOctaves) {
        keyboardContainer.innerHTML = ''; // Clear previous keyboard
        allKeyElements = {};

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const whiteKeyWidth = 60;
        const whiteKeyHeight = 240;
        const blackKeyWidth = 36;
        const blackKeyHeight = 150;

        const keyOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        
        const totalWhiteKeys = numOctaves * 7;
        const totalWidth = totalWhiteKeys * whiteKeyWidth;
        svg.setAttribute('viewBox', `0 0 ${totalWidth} ${whiteKeyHeight}`);
        svg.style.width = `${totalWidth}px`;

        const keyGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svg.appendChild(keyGroup);

        let whiteKeyIndex = 0;
        for (let oct = startOctave; oct < startOctave + numOctaves; oct++) {
            whiteNotes.forEach(noteName => {
                const fullNoteName = `${noteName}${oct}`;
                const keyElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                keyElement.setAttribute('class', 'key');
                keyElement.setAttribute('data-note', fullNoteName);
                keyElement.addEventListener('click', () => playSound(fullNoteName));

                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('class', 'key-text');
                text.textContent = noteName;

                const x = whiteKeyIndex * whiteKeyWidth;
                rect.setAttribute('x', x);
                rect.setAttribute('class', 'white-key');
                rect.setAttribute('width', whiteKeyWidth);
                rect.setAttribute('height', whiteKeyHeight);
                text.setAttribute('x', x + whiteKeyWidth / 2);
                text.setAttribute('y', whiteKeyHeight - 20);
                whiteKeyIndex++;
                
                keyElement.appendChild(rect);
                keyElement.appendChild(text);
                keyGroup.appendChild(keyElement);
                allKeyElements[fullNoteName] = keyElement;
            });
        }

        whiteKeyIndex = 0;
        for (let oct = startOctave; oct < startOctave + numOctaves; oct++) {
            let localWhiteKeyIndex = 0;
            keyOrder.forEach(noteName => {
                const isWhite = whiteNotes.includes(noteName);
                if(isWhite) {
                    localWhiteKeyIndex++;
                    return;
                }

                const fullNoteName = `${noteName}${oct}`;
                const keyElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                keyElement.setAttribute('class', 'key');
                keyElement.setAttribute('data-note', fullNoteName);
                keyElement.addEventListener('click', () => playSound(fullNoteName));

                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('class', 'key-text');
                text.textContent = noteName;

                const x = (whiteKeyIndex + localWhiteKeyIndex - 1) * whiteKeyWidth + (whiteKeyWidth - blackKeyWidth / 2);
                rect.setAttribute('x', x);
                rect.setAttribute('class', 'black-key');
                rect.setAttribute('width', blackKeyWidth);
                rect.setAttribute('height', blackKeyHeight);
                text.setAttribute('x', x + blackKeyWidth / 2);
                text.setAttribute('y', blackKeyHeight - 30);
                text.classList.add('black-key-text');

                keyElement.appendChild(rect);
                keyElement.appendChild(text);
                keyGroup.appendChild(keyElement);
                allKeyElements[fullNoteName] = keyElement;
            });
            whiteKeyIndex += localWhiteKeyIndex;
        }
        
        keyboardContainer.appendChild(svg);
    }

    function populateControls() {
        notes.forEach(note => rootNoteSelect.add(new Option(note, note)));
        scaleSelect.add(new Option('None', 'none'));
        chordSelect.add(new Option('None', 'none'));
        Object.keys(scales).forEach(key => scaleSelect.add(new Option(scales[key].name, key)));
        Object.keys(chords).forEach(key => chordSelect.add(new Option(chords[key].name, key)));
    }

    function updateDisplay() {
        Object.values(allKeyElements).forEach(el => el.classList.remove('key-active'));
        if (notesInfo) {
            notesInfo.innerHTML = '';
        }

        const rootNote = rootNoteSelect.value;
        const scaleKey = scaleSelect.value;
        const chordKey = chordSelect.value;

        let intervals = [], structureName = '', degreeNames = [];

        if (scaleKey !== 'none') {
            const scale = scales[scaleKey];
            intervals = scale.intervals; structureName = scale.name;
            degreeNames = ['R', '2', '3', '4', '5', '6', '7'];
            if (chordSelect.value !== 'none') chordSelect.value = 'none';
        } else if (chordKey !== 'none') {
            const chord = chords[chordKey];
            intervals = chord.intervals; structureName = chord.name;
            degreeNames = ['R', '3', '5', '7', '9', '11', '13'];
        }

        if (intervals.length === 0) return;

        const rootIndex = notes.indexOf(rootNote);
        const notesInStructure = intervals.map(interval => notes[(rootIndex + interval) % 12]);

        Object.values(allKeyElements).forEach(keyEl => {
            const keyNote = keyEl.dataset.note.slice(0, -1);
            if (notesInStructure.includes(keyNote)) {
                keyEl.classList.add('key-active');
            }
        });
        
        let infoHTML = `<h2>${rootNote} ${structureName}</h2><div class="info-grid">`;
        notesInStructure.forEach((note, index) => {
            infoHTML += `<div class="info-item"><span>${degreeNames[index]}</span><span>${note}</span></div>`;
        });
        infoHTML += '</div>';
        if(notesInfo) notesInfo.innerHTML = infoHTML;
    }

    function getActiveNotes() {
        const activeKeys = document.querySelectorAll('.key-active');
        const activeNotes = Array.from(activeKeys).map(key => key.dataset.note);
        return activeNotes;
    }

    function noteToMidi(noteName) {
        const keyOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const octave = parseInt(noteName.slice(-1));
        const note = noteName.slice(0, -1);
        const noteIndex = keyOrder.indexOf(note);
        return 12 * (octave + 1) + noteIndex;
    }

    function playNotesSequentially(notes, delay) {
        notes.forEach((note, index) => {
            setTimeout(() => {
                playSound(note);
            }, index * delay);
        });
    }

    playAllBtn.addEventListener('click', () => {
        const activeNotes = getActiveNotes();
        activeNotes.forEach(note => playSound(note));
    });

    playDownBtn.addEventListener('click', () => {
        const activeNotes = getActiveNotes().sort((a, b) => noteToMidi(a) - noteToMidi(b));
        playNotesSequentially(activeNotes, 300);
    });

    playUpBtn.addEventListener('click', () => {
        const activeNotes = getActiveNotes().sort((a, b) => noteToMidi(b) - noteToMidi(a));
        playNotesSequentially(activeNotes, 300);
    });

    playRandomBtn.addEventListener('click', () => {
        const activeNotes = getActiveNotes();
        for (let i = activeNotes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [activeNotes[i], activeNotes[j]] = [activeNotes[j], activeNotes[i]];
        }
        playNotesSequentially(activeNotes, 300);
    });

    async function regenerateKeyboard() {
        const startOctave = parseInt(startOctaveInput.value, 10);
        const numOctaves = parseInt(numOctavesInput.value, 10);

        createKeyboard(startOctave, numOctaves);

        const loadPromises = [];
        for (let oct = startOctave; oct < startOctave + numOctaves; oct++) {
            notes.forEach(note => {
                loadPromises.push(loadSound(note, oct));
            });
        }
        await Promise.all(loadPromises);
        console.log('Sounds for new keyboard layout are loaded');

        updateDisplay();
    }

    async function main() {
        initAudio();
        populateControls();
        await regenerateKeyboard();

        rootNoteSelect.addEventListener('change', updateDisplay);
        scaleSelect.addEventListener('change', updateDisplay);
        chordSelect.addEventListener('change', updateDisplay);
        startOctaveInput.addEventListener('change', regenerateKeyboard);
        numOctavesInput.addEventListener('change', regenerateKeyboard);
    }

    main();
});