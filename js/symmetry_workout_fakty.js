const faktyAllObj = {

    'symmetry2': [
        `Разделив октаву на 2 части, можно быстро получить два интервала - ` +
        `</br>` + `ТТТ + ТТТ`,
        `Черные октавы всегда делит белая клавиша`,
        `Октаву Фа-Фа делит пополам нота Си и наоборот`,
        `Пять белых октав кроме Си и Фа делит черная клавиша`
    ],

    'symmetry3': [
        `Разделив октаву на 3 части, можно быстро получить три интервала - ` +
        `</br>` + `Б3 + Б3 + Б3 ( большие терции )`,
        `Симметрия трех строится по целотоновым гаммам`,
        `В симметрии трех можно найти две малых сексты ( м6 )`,
        `В симметрии трех можно построить два увеличенных трезвучия ( ув53 )`
    ],

    'symmetry4': [
        `Разделив октаву на 4 части, можно быстро получить четыре интервала - ` +
        `</br>` + `м3 + м3 + м3 + м3`,
        `Симметрия четырех строится алгоритмом: ` +
        `</br>` + `деление октавы на два тритона, после каждый ТТТ на две терции`,
        `В симметрии четырех можно найти три тритона`,
        `В симметрии четырех можно найти две больших сексты ( Б6 )`,
        `В симметрии четырех можно найти три уменьшенных трезвучия ( ум53 )`,
        `В симметрии четырех можно найти два уменьшенных септ аккорда ( Xo )`
    ],

    'symmetry6': [
        `Разделив октаву на 6 частей, можно быстро получить` +
        `</br>` + `шесть Б2 Б2 Б2 Б2 Б2 Б2 (большие секунды)` +
        `</br>` + `шесть T T T T T T (целых тонов)`,

        `Симметрия шести - это обращение одной из двух целотоновых гамм.`,

        `Состав одной целотоновой гаммы от первой ноты - ` +
        `</br>` + `Б2 Б3 ТТТ м6 м7`,

        `В симметрии шести можно найти` +
        `</br>` + `Б2 Б2 Б2 Б2 Б2 Б2` +
        `</br>` + `Б3 Б3 Б3 Б3 Б3` +
        `</br>` + `3Т 3Т 3Т 3Т` +
        `</br>` + `м6 м6 м6` +
        `</br>` + `м7 м7`,

        `состав одной целотоновой гаммы от шести нот - ` +
        `</br>` + `` +
        `</br>` + `Б2 Б2 Б2 Б2 Б2 Б2` +
        `</br>` + `Б3 Б3 Б3 Б3 Б3 Б3` +
        `</br>` + `3Т 3Т 3Т 3Т 3Т 3Т` +
        `</br>` + `м6 м6 м6 м6 м6 м6` +
        `</br>` + `м7 м7 м7 м7 м7 м7`
    ],

    'maj_tetrachord': [
        `Состав мажорного тетрахорда` +
        `</br>` +
        `Б2 + Б2 + м2 = ч4` +
        `</br>` +
        `или` +
        `</br>` + `Т + Т + пТ = 2,5 тона (5 пт)`,

        `мажорный тетрахорд это` +
        `</br>` +
        `1 _ 2 _ 3 _ 4 ступени мажорной гаммы` +
        `</br>` +
        `( ноты C D E F на белых / в до мажоре )` +
        `</br>` +
        `или` +
        `</br>` +
        `5 _ 6 _ 7 _ 8 ступени мажорной гаммы` +
        `</br>` +
        `( ноты G A B C на белых / в до мажоре )`,

        `Мажорные тетрахорды одинаковые/парные по цвету/отпечатку строятся от нот: ` +
        `</br>` + `до - соль` +
        `</br>` + `реb - ляb` +
        `</br>` + `ре - ля` +
        `</br>` + `миb - сиb` +
        `</br>` + `ми - си`,

        `b3 _ 4 _ 5 _ b6` +
        `или` +
        `</br>` +
        `b7 _ 1 _ 2 _ b3 ступени натурального минора`,

        `5 _ 6 _ 7 _ 8` +
        `</br>` +
        `ступени мелодического минора`
    ],

    'min_tetrachord': [
        `Состав минорного тетрахорда` +
        `</br>` +
        `Б2 + м2 + Б2 = ч4` +
        `</br>` +
        `или` +
        `</br>` + `Т + пТ + Т = 2,5 тона (5 пт)`,

        `минорный тетрахорд это` + `</br>` +
        `2 _ 3 _ 4 _ 5 ступени мажорной гаммы` +
        '</br>' +
        `( ноты D E F G на белых / в до мажоре )` +
        `</br>` +
        `или` +
        `</br>` +
        `6 _ 7 _ 8 _ 1 ступени мажорной гаммы` +
        `</br>` +
        `( ноты A B C D на белых / в до мажоре )`,

        `минорные тетрахорды одинаковые/парные по цвету/отпечатку строятся от нот: ` +
        `</br>` + `до - соль` +
        `</br>` + `реb - ляb` +
        `</br>` + `ре - ля` +
        `</br>` + `миb - сиb` +
        `</br>` + `ми - си`,

        `1 _ 2 _ b3 _ 4` +
        `</br>` +
        `или` +
        `</br>` +
        `4 _ 5 _ b6 _ b7` +
        `</br>` +
        `ступени натурального минора`,

        `1 _ 2 _ b3 _ 4` +
        `</br>` +
        `или` +
        `</br>` +
        `6 _ 7 _ 1 _ 2` +
        `</br>` +
        `ступени мелодического минора`
    ],

    'frig_tetrachord': [
        `Состав фригийского тетрахорда` +
        `</br>` +
        `м2 + Б2 + Б2 = ч4` +
        `</br>` +
        `или` +
        `</br>` + `пТ + Т + Т = 2,5 тона (5 пт)`,

        `минорный тетрахорд это` + `</br>` +
        `3 _ 4 _ 5 _ 6 ступени мажорной гаммы` +
        '</br>' +
        `( ноты E F G A на белых / в до мажоре )` +
        `</br>` +
        `или` +
        `</br>` +
        `7 _ 8 _ 1 _ 2 ступени мажорной гаммы` +
        `</br>` +
        `( ноты B C D E на белых / в до мажоре )`,

        `фригийские тетрахорды одинаковые/парные по цвету/отпечатку строятся от нот: ` +
        `</br>` + `до - соль` +
        `</br>` + `реb - ляb` +
        `</br>` + `ре - ля` +
        `</br>` + `миb - сиb` +
        `</br>` + `ми - си`,

        `2 _ b3 _ 4 _ 5` +
        `</br>` +
        `или` +
        `</br>` +
        `5 _ b6 _ b7 _ 1` +
        `</br>` +
        `ступени натурального минора`,

        `2 _ b3 _ 4 _ 5` +
        `</br>` +
        `ступени мелодического минора`
    ],


    'harm_tetrachord': [
        `Состав гармонического тетрахорда` +
        `</br>` +
        `м2 + м3 + м2 = ч4` +
        `</br>` +
        `или` +
        `</br>` + `пТ + 1,5Т + пТ = 2,5 тона (5 пт)`,

        `гармонический тетрахорд это` + `</br>` +
        `5 _ b6 _ 7 _ 1 ступени гармонического минора` +
        '</br>' +
        `( ноты G Ab B C / в до гармоническом миноре )`,

        `гармонические тетрахорды одинаковые/парные по цвету/отпечатку строятся от нот: ` +
        `</br>` + `до - соль` +
        `</br>` + `реb - ляb` +
        `</br>` + `ре - ля` +
        `</br>` + `миb - сиb` +
        `</br>` + `ми - си`,
    ],

    'whole_tetrachord': [
        `Состав целотонового тетрахорда` +
        `</br>` +
        `Б2 + Б2 + Б2 = ТТТ ( ув4 / ум5 )` +
        `</br>` +
        `или` +
        `</br>` + `Т + Т + Т = 3 тона (6 пт)`,

        `целотоновый тетрахорд это` + `</br>` +
        `4 _ 5 _ 6 _ 7 ступени мажорной гаммы` +
        '</br>' +
        `( ноты F G A B на белых / в до мажоре )`,

        `целотоновые тетрахорды одинаковые/парные по цвету/отпечатку строятся от нот: ` +
        `</br>` + `до - соль` +
        `</br>` + `реb - ляb` +
        `</br>` + `ре - ля` +
        `</br>` + `миb - сиb`,
    ],

    'm2': [
        `малые секунды ( м2 )` +
        `</br>` +
        ` - это два звука с расстоянием в один полутон ( пТ )`,

        `малые секунды ( м2 )` +
        `</br>` +
        ` - это две соседних клавиши в хроматической гамме`,

        `малые секунды ( м2 )` +
        `</br>` +
        ` - это ( 3 + 4 ) и ( 7 + 1 ) ступени в натуральном мажоре`,

        `малые секунды ( м2 )` +
        `</br>` +
        ` - это ( 2 + b3 ) и ( 5 + b6 ) ступени в натуральном миноре`,

        `малые секунды ( м2 )` +
        `</br>` +
        ` - строятся тактильно от до` +
        '</br>' +
        `A A _ A A A _`,

        `малых секунд всего:` +
        `</br>` +
        `белых - 2 шт` +
        `</br>` +
        `черных - 0 шт` +
        `</br>` +
        `черно - белых - 5 шт` +
        `</br>` +
        `бело - черных - 5 шт` +
        `</br>`

    ],

    'B2': [
        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это два звука с расстоянием в один тон ( Т )` +
        `</br>` +
        ` или с расстоянием в два полутона ( пТ )`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это две клавиши через одну в хроматической гамме`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это любые два соседних звука в целотоновой гамме`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это пример м2 + м2 = Б2` +
        `</br>` +
        `или` +
        `</br>` +
        ` пТ + пТ = Т`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это` +
        `</br>` +
        `1+2 , 2+3, 4+5, 5+6, 6+7` +
        `</br>` +
        ` ступени в натуральном мажоре`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - это` +
        `</br>` +
        `1+2 , b3+4 , 4+5, b6+b7, b7+1` +
        `</br>` +
        `ступени в натуральном миноре`,

        `Большие секунды ( Б2 )` +
        `</br>` +
        ` - строятся тактильно от до` +
        '</br>' +
        `_ - _ х _ - _ - _ х`,

        `Больших секунд всего:` +
        `</br>` +
        `белых - 5 шт` +
        `</br>` +
        `черных - 3 шт` +
        `</br>` +
        `черно - белых - 2 шт` +
        `</br>` +
        `бело - черных - 2 шт` +
        `</br>`

    ]

}

const faktyArr = [
    `
            Разделив октаву на 2 части, можно быстро получить два интервала - ` +
    ` < /br>` + `ТТТ (тритоны)`,

    `Разделив октаву на 3 части, можно быстро получить три интервала - ` +
    `</br>` + ` Б3 (большие терции)`,

    `Разделив октаву на 4 части, можно быстро получить четыре интервала - ` +
    `</br>` + `м3 (малые терции)`,

    `Разделив октаву на 6 частей, можно быстро получить шесть интервалов - ` +
    `</br>` + `Б2 (большие секунды)`,

    `состав одной целотоновой гаммы от одной ноты - ` +
    `</br>` + `Б2 Б3 ТТТ м6 м7`,

    `состав одной целотоновой гаммы от шести нот - ` +
    `</br>` + `` +
    `</br>` + `Б2 Б2 Б2 Б2 Б2 Б2` +
    `</br>` + `Б3 Б3 Б3 Б3 Б3 Б3` +
    `</br>` + `3Т 3Т 3Т 3Т 3Т 3Т` +
    `</br>` + `м6 м6 м6 м6 м6 м6` +
    `</br>` + `м7 м7 м7 м7 м7 м7`,

    `секунды мажорной гаммы - ` +
    `</br>` + `Б Б м Б Б Б м`,

    `терции мажорной гаммы - ` +
    `</br>` + `Б м м Б Б м м`,

    `кварты мажорной гаммы - ` +
    `</br>` + `ч ч ч ув ч ч ч`,

    `квинты мажорной гаммы - ` +
    `</br>` + `ч ч ч ч ч ч ум`,

    `сексты мажорной гаммы - ` +
    `</br>` + `Б Б м Б Б м м`,

    `септимы мажорной гаммы - ` +
    `</br>` + `Б м м Б м м м`,

    `состав одной мажорной гаммы - ` +
    `</br>` + `` +
    `</br>` + `секунды - Б Б м Б Б Б м` +
    `</br>` + `терции - Б м м Б Б м м` +
    `</br>` + `кварты - ч ч ч 3Т ч ч ч` +
    `</br>` + `квинты - ч ч ч ч ч ч 3Т` +
    `</br>` + `сексты - Б Б м Б Б м м` +
    `</br>` + `септимы - Б м м Б м м м`,

    `симметричный состав октавы` +
    `</br>` + `` +
    `</br>` + `ТТТ + ТТТ` +
    `</br>` + `Б3 + Б3 + Б3` +
    `</br>` + `м3 + м3 + м3 + м3` +
    `</br>` + `Б2 + Б2 + Б2 + Б2 + Б2 + Б2`,

    `интервалов всего:` +
    `</br>` + `` +
    `</br>` + `м2=12 Б2=12` +
    `</br>` + `м3=12 Б3=12` +
    `</br>` + `ч4=12 ТТТ=12 ч5=12` +
    `</br>` + `м6=12 Б6=12` +
    `</br>` + `м7=12 Б7=12` +
    `</br>` + `11 интервалов * 12 нот = 132 ед.`,


    //МАЖОРНЫЕ ТРЕЗВУЧИЯ
    `алгоритмы построения мажорного трезвучия:` +
    `</br>` + `` +
    `</br>` + `Б3 + м3 = ч5` +
    `</br>` + `ч5 с начинкой Б3 от нижнего звука` +
    `</br>` + `ч5 с начинкой м3 вниз от верхнего звука`,
    `алгоритмы построения мажорного трезвучия:` +
    `</br>` + `Aug(увеличенное) трезвучие с понижением верхнего звука на ПолуТон` +
    `</br>` + `Dim(уменьшенное) трезвучие с понижением нижнего звука на ПолуТон` +
    `</br>` + `Dim(уменьшенное) трезвучие с повышением всей верхней терции на ПолуТон`,
    `алгоритмы построения мажорного трезвучия:` +
    `</br>` + `Мажорный секст (T6, S6, D6) аккорд с переносом верхнего звука на октаву вниз` +
    `</br>` + `Мажорный кварт-секст (T64, S64, D64) аккорд с переносом нижнего звука на октаву вверх`,
    `алгоритм построения мажорного трезвучия:` +
    `</br>` + `1-3-5 ступени мажора (так же 4-6-1(8), 5-7-2(9))` +
    `</br>` + `Первые три звука септаккорда (X7) и мейдж (X^) аккорда` +
    `</br>` + `2-ой, 3-ий, 4-ый звуки минорного септ-аккорда (Xm7)`,

    //МИНОРНЫЕ ТРЕЗВУЧИЯ
    `алгоритм построения минорного трезвучия:` +
    `</br>` + `` +
    `</br>` + `м3 + Б3 = ч5` +
    `</br>` + `ч5 с начинкой м3 от нижнего звука` +
    `</br>` + `ч5 с начинкой Б3 от верхнего звука`,
    `алгоритм построения минорного трезвучия:` +
    `</br>` + `Aug(увеличенное) трезвучие с повышением на ПолуТон нижнего звука` +
    `</br>` + `Aug(увеличенное) трезвучие с понижением всей верхней терции на ПолуТон` +
    `</br>` + `Dim(уменьшенное) трезвучие с повышением верхнего звука на ПолуТон`,
    `алгоритм построения минорного трезвучия:` +
    `</br>` + `минорный секст (t6, s6) аккорд с переносом верхнего звука на октаву вниз` +
    `</br>` + `минорный кварт-секст (t64, s64) аккорд с переносом нижнего звука на октаву вверх`,

    //УВЕЛИЧЕННОЕ ТРЕЗВУЧИЕ
    `алгоритмы построения увеличенного трезвучия:` +
    `</br>` + `` +
    `</br>` + `Б3 + Б3 = м6` +
    `</br>` + `м6 с начинкой Б3 от нижнего звука` +
    `</br>` + `м6 с начинкой Б3 вниз от верхнего звука`,
    `алгоритмы построения увеличенного трезвучия:` +
    `</br>` + `Maj(мажорное) трезвучие с повышением верхнего звука на ПолуТон` +
    `</br>` + `Min(минорное) трезвучие с понижением нижнего звука на ПолуТон` +
    `</br>` + `Dim(уменьшенное) трезвучие с понижением 1-ой и повышением 5-ой на ПолуТон`,
    `алгоритмы построения увеличенного трезвучия:` +
    `</br>` + `1-2-3 и 2-3-4 звук октавы разделенной на 3 равных части`,
    `алгоритм построения увеличенного трезвучия:` +
    `</br>` + `1-3-5, 2-4-6, 3-5-1, 4-6-2, 5-1-3, 6-2-4 ступени в двух целотоновых гаммах` +
    `</br>` + `1-3-#5 ступени увеличенного мейдж аккорда (C^#5)` +
    `</br>` + `b3-5-7 ступени минорного мейдж аккорда (Cm^)`,

    //УМЕНЬШЕННОЕ ТРЕЗВУЧИЕ
    `алгоритмы построения уменьшённого трезвучия:` +
    `</br>` + `` +
    `</br>` + `м3 + м3 = ТТТ` +
    `</br>` + `ТТТ с начинкой м3 от нижнего звука` +
    `</br>` + `ТТТ с начинкой м3 вниз от верхнего звука` +
    `</br>` + `ТТТ визуально пополам`,
    `алгоритмы построения уменьшённого трезвучия:` +
    `</br>` + `Maj(мажорное) трезвучие с повышением нижнего звука на ПолуТон` +
    `</br>` + `Maj(мажорное) трезвучие с понижением всей верхней терции на ПолуТон` +
    `</br>` + `Min(минорное) трезвучие с понижением верхнего звука на ПолуТон`,
    `алгоритмы построения уменьшённого трезвучия:` +
    `</br>` + `1-2-3 и 2-3-4 и 3-4-5 звук октавы разделенной на 4 равных части`,
    `алгоритм построения уменьшённого трезвучия:` +
    `</br>` + `7-2-4 ступени мажора, 2-4-6 ступени минора`,


    //ИНТЕРВАЛЫ
    `алгоритмы построения малой секунды (м2)- ` +
    `</br>` + `` +
    `</br>` + `две соседних клавиши вхроматической гамме` +
    `</br>` + `обращение большой септимы (Б7)`,

    `алгоритмы построения большой секунды (Б2)- ` +
    `</br>` + `` +
    `</br>` + `два соседних звука из цело-тоновых гамм` +
    `</br>` + `Пт + Пт = Б2` +
    `</br>` + `м2 + м2 = Б2` +
    `</br>` + `Пт * 2 = Б2` +
    `</br>` + `обращение малой септимы (м7)`,

    `алгоритмы построения малой терции (м3)- ` +
    `</br>` + `` +
    `</br>` + `два соседних звука из симметрии 4-х` +
    `</br>` + `Т + Пт = м3` +
    `</br>` + `Б2 + м2 = м3` +
    `</br>` + `Пт * 3 = м3` +
    `</br>` + `обращение большой сексты (Б6)`,

    `алгоритмы построения большой терции (Б3)- ` +
    `</br>` + `` +
    `</br>` + `два соседних звука из симметрии 3-х` +
    `</br>` + `Б2 + Б2 = Б3 ` +
    `</br>` + `ч4 – м2 = Б3` +
    `</br>` + `ТТТ – Б2 = Б3` +
    `</br>` + `Пт * 4 = Б3` +
    `</br>` + `обращение малой сексты (м6)`,

    `алгоритмы построения чистой кварты (ч4)- ` +
    `</br>` + `` +
    `</br>` + `2 белые клавиши через 2 белые от До Ре Ми * Соль Ля Си` +
    `</br>` + `общая картина от ноты до 3 1 3` +
    `</br>` + `3-белых *БЧ 3-белых` +
    `</br>` + `2 чёрные клавиши через 1 чёрную от Реb Миb * Ляb Сиb` +
    `</br>` + `общая картина от ноты до# 2 1 2` +
    `</br>` + `2-чёрных *ЧБ 2-чёрных` +
    `</br>` + `Б3 + м2 = Ч4` +
    `</br>` + `м3 + Б2 = Ч4` +
    `</br>` + `ТТТ – м2 = Ч4` +
    `</br>` + `обращение ч5`,

    `алгоритмы построения тритона (ТТТ, ув4, ум5)- ` +
    `</br>` + `` +
    `</br>` + `два соседних звука из симметрии 2-х` +
    `</br>` + `м3 + м3 = ТТТ` +
    `</br>` + `ч4 + м2 = ТТТ` +
    `</br>` + `ч5 – м2 = ТТТ` +
    `</br>` + `обращение ТТТ` +
    `</br>` + `Т + Т + Т = ТТТ` +
    `</br>` + `Пт * 6 = ТТТ`,

    `алгоритмы построения чистой квинты (ч5)- ` +
    `</br>` + `` +
    `</br>` + `2 белые клавиши через 3 белые от До Ре Ми Фа Соль Ля *` +
    `</br>` + `общая картина от ноты до 6 1` +
    `</br>` + `6-белых *БЧ` +
    `</br>` + `2 чёрные клавиши через 2 чёрные от Реb Миb Сольb Ляb *` +
    `</br>` + `общая картина от ноты до# 4 1` +
    `</br>` + `4-чёрных *ЧБ` +
    `</br>` + `ч4 + Б2 = Ч5` +
    `</br>` + `Б3 + м3 = Ч5` +
    `</br>` + `ТТТ + м2 = Ч5` +
    `</br>` + `Пт * 7 = ч5` +
    `</br>` + `обращение ч4`,

    `алгоритмы построения малой сексты (м6)- ` +
    `</br>` + `` +
    `</br>` + `1 и 3 или 2 и 4 звуки симметрии 3-х` +
    `</br>` + `ч8 - Б3 = м6` +
    `</br>` + `Б3 + Б3 = м6` +
    `</br>` + `ТТТ + Б2 = м6` +
    `</br>` + `ч5 + м2 = м6` +
    `</br>` + `Т * 4 = м6` +
    `</br>` + `Пт * 8 = м6` +
    `</br>` + `обращение большой терции (Б3)`,

    `алгоритмы построения большой сексты (Б6)- ` +
    `</br>` + `` +
    `</br>` + `1 и 4 или 2 и 5 звуки симметрии 4-х` +
    `</br>` + `ч5 + Б2 = Б6` +
    `</br>` + `ТТТ + м3 = Б6` +
    `</br>` + `ТТТ + Б2 = м6` +
    `</br>` + `Пт * 9 = Б6` +
    `</br>` + `обращение малой терции (м3)`,

    `алгоритмы построения малой септимы (м7)- ` +
    `</br>` + `` +
    `</br>` + `1 и 6 звуки симметрии 6-ти` +
    `</br>` + `1 и 6 звуки целотоновой гаммы` +
    `</br>` + `Ч8 – Б2 = м7` +
    `</br>` + `ТТТ + Б3 = м7` +
    `</br>` + `ч5 + м3 = м7` +
    `</br>` + `Б3 + ТТТ = м7` +
    `</br>` + `м3 + ч5 = м7` +
    `</br>` + `Т * 5 = м7` +
    `</br>` + `ПТ * 10 = м7` +
    `</br>` + `обращение большой секунды (Б2)`,

    `алгоритмы построения большой септимы (Б7)- ` +
    `</br>` + `` +
    `</br>` + `Ч8 – м2 = Б7` +
    `</br>` + `ч5 + Б3 = м7` +
    `</br>` + `Б3 + ч5 = м7` +
    `</br>` + `м3 + ув53 = м7` +
    `</br>` + `обращение малой секунды (м2)`,
];