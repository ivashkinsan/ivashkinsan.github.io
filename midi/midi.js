function loadMidiFile() {
    MidiPlayer.load('/midi/Elka.mid', function(data) {
        console.log(data);
    });
}
loadMidiFile();