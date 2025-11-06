export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const scales = {
    major: { name: 'Major', intervals: [0, 2, 4, 5, 7, 9, 11] },
    minor: { name: 'Natural Minor', intervals: [0, 2, 3, 5, 7, 8, 10] },
    harmonicMinor: { name: 'Harmonic Minor', intervals: [0, 2, 3, 5, 7, 8, 11] },
    melodicMinor: { name: 'Melodic Minor', intervals: [0, 2, 3, 5, 7, 9, 11] },
    dorian: { name: 'Dorian', intervals: [0, 2, 3, 5, 7, 9, 10] },
    phrygian: { name: 'Phrygian', intervals: [0, 1, 3, 5, 7, 8, 10] },
    lydian: { name: 'Lydian', intervals: [0, 2, 4, 6, 7, 9, 11] },
    mixolydian: { name: 'Mixolydian', intervals: [0, 2, 4, 5, 7, 9, 10] },
    locrian: { name: 'Locrian', intervals: [0, 1, 3, 5, 6, 8, 10] },
    pentatonicMajor: { name: 'Pentatonic Major', intervals: [0, 2, 4, 7, 9] },
    pentatonicMinor: { name: 'Pentatonic Minor', intervals: [0, 3, 5, 7, 10] },
    blues: { name: 'Blues', intervals: [0, 3, 5, 6, 7, 10] },
};

export const chords = {
    majorTriad: { name: 'Major Triad', intervals: [0, 4, 7] },
    minorTriad: { name: 'Minor Triad', intervals: [0, 3, 7] },
    diminishedTriad: { name: 'Diminished Triad', intervals: [0, 3, 6] },
    augmentedTriad: { name: 'Augmented Triad', intervals: [0, 4, 8] },
    majorSeventh: { name: 'Major Seventh', intervals: [0, 4, 7, 11] },
    dominantSeventh: { name: 'Dominant Seventh', intervals: [0, 4, 7, 10] },
    minorSeventh: { name: 'Minor Seventh', intervals: [0, 3, 7, 10] },
    diminishedSeventh: { name: 'Diminished Seventh', intervals: [0, 3, 6, 9] },
    halfDiminishedSeventh: { name: 'Half-Diminished Seventh', intervals: [0, 3, 6, 10] },
};
