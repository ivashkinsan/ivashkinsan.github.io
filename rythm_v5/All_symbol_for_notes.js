const uncSbl = {
    'n1': '\uF077',
    'n2': '\uF068',
    'n4': '\uF071',
    'n8': '\uF065',
    'n16': '\uF078',
    'p1': '\uF0EE',
    'p2': '\uF0B7',
    'p4': '\uF0CE',
    'p8': '\uF0E4',
    'p16': '\uF0C5',
    'pnt': '\uF06B',
    'pnt2': '\uF02E',
    'plus': '\uF0F6',
    'plus2': '\uF084',
    'dash': '\uF02D',
    'space': '\uF0CA'
}


const allSymbolForNotes_2_4 = {


    'sixteenthNote_16': {
        'fontSymbolVal': {
            'default': uncSbl.n16
        },
        'pauseSymbolVal':{
            'default': uncSbl.p16
        },
    },


    'eighthNote_8': {
        'fontSymbolVal': {
            'default': uncSbl.n8,
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
            '12': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
            '20': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
            '24': uncSbl.n16 + uncSbl.dash + uncSbl.n16,
            '28': uncSbl.n16 + uncSbl.dash + uncSbl.n16
        },
        'pauseSymbolVal':{
            'default': uncSbl.p8,
        '4': uncSbl.p16 + uncSbl.space + uncSbl.p16,
        '8': uncSbl.p16 + uncSbl.space + uncSbl.p16,
        '12': uncSbl.p16 + uncSbl.space + uncSbl.p16,
        '20': uncSbl.p16 + uncSbl.space + uncSbl.p16,
        '24': uncSbl.p16 + uncSbl.space + uncSbl.p16,
        '28': uncSbl.p16 + uncSbl.space + uncSbl.p16
        },
    },


    'eighthNote_8w16': {
        'fontSymbolVal': {
            'default': uncSbl.n8 + uncSbl.pnt,
            '3': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '11': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '15': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '19': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '23': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
            '27': uncSbl.n8 + uncSbl.dash + uncSbl.n16,
    
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '12': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '16': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '20': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '24': uncSbl.n16 + uncSbl.dash + uncSbl.n8,
            '28': uncSbl.n16 + uncSbl.dash + uncSbl.n8
        },
        'pauseSymbolVal':{
        'default': uncSbl.p8 + uncSbl.pnt,
        '3': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '7': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '11': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '15': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '19': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '23': uncSbl.p8 + uncSbl.space + uncSbl.p16,
        '27': uncSbl.p8 + uncSbl.space + uncSbl.p16,

        '4': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '8': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '12': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '16': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '20': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '24': uncSbl.p16 + uncSbl.space + uncSbl.p8,
        '28': uncSbl.p16 + uncSbl.space + uncSbl.p8
        },
    },


    'quarterNote_4': {
        'fontSymbolVal': {
            'default': uncSbl.n4,
            '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '14': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '18': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '22': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
            '26': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
    
            '3': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '11': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '15': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '19': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '23': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
            '27': uncSbl.n8 + uncSbl.dash + uncSbl.n8,
    
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '12': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '16': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '20': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '24': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '28': uncSbl.n16 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt
        },
        'pauseSymbolVal':{
            'default': uncSbl.p4,
            '2': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
            '6': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
            '10': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
            '18': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
            '22': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
            '26': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
    
            '3': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '7': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '11': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '15': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '19': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '23': uncSbl.p8 + uncSbl.space + uncSbl.p8,
            '27': uncSbl.p8 + uncSbl.space + uncSbl.p8,
    
            '4': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '8': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '12': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '16': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '20': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '24': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '28': uncSbl.p16 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
        },
    },


    'quarterNote_4w16': {
        'fontSymbolVal': {
            'default': uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '14': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '18': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '22': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
        '26': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,

        '3': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '11': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '15': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '19': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '23': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '27': uncSbl.n8 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,

        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '16': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '20': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '24': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        '28': uncSbl.n16 + uncSbl.dash + uncSbl.n4,
        },
        'pauseSymbolVal':{
            'default': uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '2': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '6': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '10': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '14': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '18': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '22': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '26': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
    
            '3': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '7': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '11': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '15': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '19': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '23': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '27': uncSbl.p8 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
    
            '4': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '8': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '12': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '16': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '20': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '24': uncSbl.p16 + uncSbl.space + uncSbl.p4,
            '28': uncSbl.p16 + uncSbl.space + uncSbl.p4,
        },
    },


    'quarterNote_4w8': {
        'fontSymbolVal': {
            'default': uncSbl.n4 + uncSbl.pnt,
            '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '14': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '18': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '22': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '26': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
    
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '12': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '16': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '20': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '24': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
    
            '5': uncSbl.n4 + uncSbl.dash + uncSbl.n8,
            '13': uncSbl.n4 + uncSbl.dash + uncSbl.n8,
            '21': uncSbl.n4 + uncSbl.dash + uncSbl.n8,
    
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4,
            '15': uncSbl.n8 + uncSbl.dash + uncSbl.n4,
            '23': uncSbl.n8 + uncSbl.dash + uncSbl.n4,
        },
        'pauseSymbolVal':{
            'default': uncSbl.p4 + uncSbl.pnt,
            '2': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '6': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '10': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '14': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '18': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '22': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '26': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
    
            '4': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '8': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '12': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '16': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '20': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '24': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
    
            '5': uncSbl.p4 + uncSbl.space + uncSbl.p8,
            '13': uncSbl.p4 + uncSbl.space + uncSbl.p8,
            '21': uncSbl.p4 + uncSbl.space + uncSbl.p8,
    
            '7': uncSbl.p8 + uncSbl.space + uncSbl.p4,
            '15': uncSbl.p8 + uncSbl.space + uncSbl.p4,
            '23': uncSbl.p8 + uncSbl.space + uncSbl.p4,
        },
    },


    'quarterNote_4w8w16': {
        'fontSymbolVal': {
            'default': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '2': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '9': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '10': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '17': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '18': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '25': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,
        '26': uncSbl.n4 + uncSbl.pnt + uncSbl.pnt,

        '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '11': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,
        '19': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n16,

        '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '12': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '16': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '20': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
        '24': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,

        '5': uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '13': uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        '21': uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,

        '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
        '14': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
        '22': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,

        '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '15': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        '23': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
        },
        'pauseSymbolVal':{
            'default': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '2': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '9': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '10': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '17': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '18': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '25': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,
        '26': uncSbl.p4 + uncSbl.pnt + uncSbl.pnt,

        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
        '11': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p16,
        '19': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p16,

        '4': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,
        '8': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,
        '12': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,
        '16': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,
        '20': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,
        '24': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8,

        '5': uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
        '13': uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
        '21': uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,

        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4,
        '14': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4,
        '22': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4,

        '7': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
        '15': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
        '23': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
        },
    },
    

    'halfNote_2': {
        'fontSymbolVal': {
            'default': uncSbl.n2,

            '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '10': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '18': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
    
            '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
            '11': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
            '19': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8,
    
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '12': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '20': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
    
            '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4,
            '13': uncSbl.n4 + uncSbl.dash + uncSbl.n4,
            '21': uncSbl.n4 + uncSbl.dash + uncSbl.n4,
    
            '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '14': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '22': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
    
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
            '15': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
            '23': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
    
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '16': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '24': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2,

            '2': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '10': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '18': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,

            '3': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '11': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p8,
            '19': uncSbl.p4 + uncSbl.pnt + uncSbl.space + uncSbl.p8,

            '4': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '12': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '20': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,

            '5': uncSbl.p4 + uncSbl.space + uncSbl.p4,
            '13': uncSbl.p4 + uncSbl.space + uncSbl.p4,
            '21': uncSbl.p4 + uncSbl.space + uncSbl.p4,

            '6': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '14': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,
            '22': uncSbl.p8 + uncSbl.pnt + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p16,

            '7': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.pnt,
            '15': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.pnt,
            '23': uncSbl.p8 + uncSbl.space + uncSbl.p4 + uncSbl.pnt,

            '8': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '16': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
            '24': uncSbl.p16 + uncSbl.space + uncSbl.p4 + uncSbl.space + uncSbl.p8 + uncSbl.pnt,
    },
    },
    

    'halfNote_2w16': {
        'fontSymbolVal': {
            'default': uncSbl.n2 + uncSbl.dash + uncSbl.n16,
            '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8,
            '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n4,
            '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '8': uncSbl.n16 + uncSbl.dash + uncSbl.n2
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.p16,
        '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8,
        '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p8 + uncSbl.pnt,
        '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p4,
        '5': uncSbl.p4 + uncSbl.p4 + uncSbl.p16,
        '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.pnt,
        '7': uncSbl.p8 + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
        '8': uncSbl.p16 + uncSbl.p2
    },
    },


    'halfNote_2w8': {
        'fontSymbolVal': {
            'default': uncSbl.n2 + uncSbl.dash + uncSbl.n8,
            '2': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '3': uncSbl.n4 + uncSbl.pnt + uncSbl.dash + uncSbl.n4,
            '4': uncSbl.n16 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16,
            '5': uncSbl.n4 + uncSbl.dash + uncSbl.n4 + uncSbl.pnt,
            '6': uncSbl.n8 + uncSbl.pnt + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
            '7': uncSbl.n8 + uncSbl.dash + uncSbl.n2
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.dash + uncSbl.p8,
            '2': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
            '3': uncSbl.p4 + uncSbl.pnt + uncSbl.p4,
            '4': uncSbl.p16 + uncSbl.p4 + uncSbl.p4 + uncSbl.p16,
            '5': uncSbl.p4 + uncSbl.p4 + uncSbl.pnt,
            '6': uncSbl.p8 + uncSbl.pnt + uncSbl.p4 + uncSbl.p8 + uncSbl.pnt,
            '7': uncSbl.p8 + uncSbl.p2
    },
    },


    'halfNote_2w8w16': {
        'fontSymbolVal': {
            'default': uncSbl.n2 + uncSbl.dash + uncSbl.n8 + uncSbl.pnt,
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.p8 + uncSbl.pnt,
    },
    },


    'halfNote_2w4': {
        'fontSymbolVal': {
            'default': uncSbl.n2 + uncSbl.pnt
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.pnt,
        },
    },


    'halfNote_2w4w16': {
        'fontSymbolVal': {
            'default': uncSbl.n2 + uncSbl.dash + uncSbl.n4 + uncSbl.dash + uncSbl.n16
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + '  ' + uncSbl.p4 + '  ' + uncSbl.p16,
        },
    },


    'halfNote_2w4w8': {
        'fontSymbolVal': {
           'default': uncSbl.n2 + uncSbl.pnt + uncSbl.pnt
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.pnt + uncSbl.pnt,
        },
    },


    'halfNote_2w4w8w16': {
        'fontSymbolVal': {
          'default': uncSbl.n2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt
        },
        'pauseSymbolVal':{
            'default': uncSbl.p2 + uncSbl.pnt + uncSbl.pnt + uncSbl.pnt
        },
    },


    'wholeNote_1': {
        'fontSymbolVal': {
            'default': uncSbl.n1
        },
        'pauseSymbolVal':{
            'default': uncSbl.p1
        },
    },
    
}