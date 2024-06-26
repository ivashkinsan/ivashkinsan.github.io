const allAudioExample = {
    'first': {
        'name': 'первое упражнение',
        'class': '1 класс',
        'tempo': '120',
        'measureSize': '4x4',
        'pattern': '8_16 16 16 16 16 8 8 16 16 16 8 8_16 16 16 16 16 8 4_8_16',
        'src': '/Example_audio/Example_1.mp3'
    },
    'second': {
        'name': 'второе упражнение',
        'class': '2 класс',
        'tempo': '120',
        'measureSize': '4x4',
        'pattern': '4 8 08 16 16 08 8_16 016 016 16 8 4 2',
        'src': '/Example_audio/Example_2.mp3'
    }
}

// 1 класс упражнений подбор только 16-ых нот как отдельных коротких звуков
// 1 доп класс подбор акцентов на длительностях
// 1 доп класс упражнений подбор мелодических фраз основанных на 16-ых

// 2 класс упражнений подбор длительностей 2 4 8 важна их длина-окончание
// 

// 1    16 шестнадцатая
// 2    8 восьмая 
// 3    8_16 восьмая + шестнадцатая
// 4    4 четверть
// 5    4_16 четверть + шестнадцатая
// 6    4_8 четверть + восьмая
// 7    4_8_16 четверть + восьмая + шестнадцатая
// 8    2 половинная
// 9    2_16 половинная + шестнадцатая
// 10   2_8 половинная + восьмая
// 11   2_8_16 половинная + восьмая + шестнадцатая
// 12   2_4 половинная + четверть
// 13   2_4_16 половинная + четверть + шестнадцатая
// 14   2_4_8 половинная + четверть + восьмая
// 15   2_4_8_16 половинная + четверть + восьмая + шестнадцатая
// 16   1 целая