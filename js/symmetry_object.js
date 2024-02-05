let full_answer_obj = {}
let two_note_obj = {
    'symmetry_2': true,
    'symmetry_3': true,
    'symmetry_4': true,
    'symmetry_6': true,

    'TTT__maj': true,
    'maj__maj': true,
    'maj__min': true,
    'min__min': true,
    'min__frig': true,
    'frig__frig': true,
    'frig__TTT': true,

    'iscustv_melodic_minor': true,
    'iscustv_minor_harmony': true,
    'iscustv_major_harmony': true,
    'iscustv_major_melodic': true,
    'iscustv_2_major_harmony': true,

    'min__maj': true,
    'frig__min': true,
    'TTTT__maj': true,
    'TTT__min': true,
    'maj__frig': true,
    'min__TTT': true,
    'frig__TTTT': true,

    'B2_in_2': 2,
    'B3_in_2': 4,
    'TTT_in_2': 6,
    'm6_in_2': 8,
    'm7_in_2': 10,
    'ch8_in_2': 12,
    'B9_in_2': 14,

    'м3_in_3': 3,
    'ТТТ_in_3': 6,
    'B6_in_3': 9,
    'ch8_in_3': 12
}
let full_answer = function (ti, keys_ledOn) {



    full_answer_obj = {
        // СИММЕТРИИ
        'symmetry_2': [(ti + 1), (ti + 7), (ti + 13)],
        'symmetry_3': [(ti + 1), (ti + 5), (ti + 9), (ti + 13)],
        'symmetry_4': [(ti + 1), (ti + 4), (ti + 7), (ti + 10), (ti + 13)],
        'symmetry_6': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 11), (ti + 13)],
        // КОМБИНАЦИИ ЦЕЛОТОНОВЫХ ГАММ
        'melodic_minor': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12)],
        'ionian': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 12)],
        'lydian': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 12)],
        'lydian_aug': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 10), (ti + 12)],
        'WH': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 10), (ti + 12)],
        // ТЕТРАХОРДЫ
        'maj_tetrachord': [(ti + 1), (ti + 3), (ti + 5), (ti + 6)],
        'min_tetrachord': [(ti + 1), (ti + 3), (ti + 4), (ti + 6)],
        'frig_tetrachord': [(ti + 1), (ti + 2), (ti + 4), (ti + 6)],
        'harm_tetrachord': [(ti + 1), (ti + 2), (ti + 5), (ti + 6)],
        'whole_tetrachord': [(ti + 1), (ti + 3), (ti + 5), (ti + 7)],
        // ТРЕЗВУЧИЯ
        'aug_triads': [(ti + 1), (ti + 5), (ti + 9)],
        'maj_triads': [(ti + 1), (ti + 5), (ti + 8)],
        'min_triads': [(ti + 1), (ti + 4), (ti + 8)],
        'dim_triads': [(ti + 1), (ti + 4), (ti + 7)],
        'maj_add6_triads': [(ti + 1), (ti + 5), (ti + 8), (ti + 10)],
        'min_add6_triads': [(ti + 1), (ti + 4), (ti + 8), (ti + 10)],
        'sus2_triads': [(ti + 1), (ti + 3), (ti + 8)],
        'sus4_triads': [(ti + 1), (ti + 6), (ti + 8)],
        'maj_add2_triads': [(ti + 1), (ti + 3), (ti + 5), (ti + 8)],
        'min_add2_triads': [(ti + 1), (ti + 3), (ti + 4), (ti + 8)],
        'maj_add4_triads': [(ti + 1), (ti + 5), (ti + 6), (ti + 8)],
        'min_add4_triads': [(ti + 1), (ti + 4), (ti + 6), (ti + 8)],
        //ИНТЕРВАЛЫ
        'm2': [(ti + 1), (ti + 2)],
        'B2': [(ti + 1), (ti + 3)],
        'm3': [(ti + 1), (ti + 4)],
        'B3': [(ti + 1), (ti + 5)],
        'ch4': [(ti + 1), (ti + 6)],
        'TTT': [(ti + 1), (ti + 7)],
        'ch5': [(ti + 1), (ti + 8)],
        'm6': [(ti + 1), (ti + 9)],
        'B6': [(ti + 1), (ti + 10)],
        'm7': [(ti + 1), (ti + 11)],
        'B7': [(ti + 1), (ti + 12)],

        // диатоника мажора
        'TTT__maj': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 12), (ti + 13)],
        'maj__maj': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)],
        'maj__min': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)],
        'min__min': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)],
        'min__frig': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)],
        'frig__frig': [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)],
        'frig__TTT': [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 11), (ti + 13)],

        // диатоника мелодического минора
        'min__maj': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)],
        'frig__min': [(ti + 1), (ti + 2), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 11), (ti + 13)],
        'TTTT__maj': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 9), (ti + 10), (ti + 12), (ti + 13)],
        'TTT__min': [(ti + 1), (ti + 3), (ti + 5), (ti + 7), (ti + 8), (ti + 10), (ti + 11), (ti + 13)],
        'maj__frig': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)],
        'min__TTT': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 7), (ti + 9), (ti + 11), (ti + 13)],
        'frig__TTTT': [(ti + 1), (ti + 2), (ti + 4), (ti + 5), (ti + 7), (ti + 9), (ti + 11), (ti + 13)],

        // искусственные лады
        'iscustv_melodic_minor': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 10), (ti + 12), (ti + 13)],
        'iscustv_minor_harmony': [(ti + 1), (ti + 3), (ti + 4), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)],
        'iscustv_major_harmony': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)],
        'iscustv_major_melodic': [(ti + 1), (ti + 3), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 11), (ti + 13)],
        'iscustv_2_major_harmony': [(ti + 1), (ti + 2), (ti + 5), (ti + 6), (ti + 8), (ti + 9), (ti + 12), (ti + 13)],

        // септ-аккорды
        'maj_aug_chord': [(ti + 1), (ti + 5), (ti + 9), (ti + 12)],
        'maj_original_chord': [(ti + 1), (ti + 5), (ti + 8), (ti + 12)],
        'seventh_chord': [(ti + 1), (ti + 5), (ti + 8), (ti + 11)],
        'minor_maj_chord': [(ti + 1), (ti + 4), (ti + 8), (ti + 12)],
        'minor_seventh_chord': [(ti + 1), (ti + 4), (ti + 8), (ti + 11)],
        'half_diminished_chord': [(ti + 1), (ti + 4), (ti + 7), (ti + 11)],
        'diminished_chord': [(ti + 1), (ti + 4), (ti + 7), (ti + 10)],
        // деление на 2
        'B2_in_2': [(ti + 1), (ti + 2), (ti + 3)],
        'B3_in_2': [(ti + 1), (ti + 3), (ti + 5)],
        'TTT_in_2': [(ti + 1), (ti + 4), (ti + 7)],
        'm6_in_2': [(ti + 1), (ti + 5), (ti + 9)],
        'm7_in_2': [(ti + 1), (ti + 6), (ti + 11)],
        'ch8_in_2': [(ti + 1), (ti + 7), (ti + 13)],
        'B9_in_2': [(ti + 1), (ti + 8), (ti + 15)],
        // деление на 3
        'м3_in_3': [(ti + 1), (ti + 2), (ti + 3), (ti + 4)],
        'ТТТ_in_3': [(ti + 1), (ti + 3), (ti + 5), (ti + 7)],
        'B6_in_3': [(ti + 1), (ti + 4), (ti + 7), (ti + 10)],
        'ch8_in_3': [(ti + 1), (ti + 5), (ti + 9), (ti + 13)],
    }
    // console.log(full_answer_obj);
}

