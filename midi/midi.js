// import MIDI from 'midi.js'

// function loadMidiFile() {
//     MidiPlayer.load('/midi/Elka.mid', function (data) {
//         console.log(data);
//     });
// }
// loadMidiFile();



// http://prgssr.ru/development/vvedenie-v-web-midi.html
if (navigator.requestMIDIAccess) {
    console.log('Browser supports MIDI!');
}