const solfedjio = {
    'takadimi': {
        '1': ['Ta'],
        '2': ['Ta', 'Ka'],
        '3': ['Ta', 'Ki', 'Ta'],
        '4': ['Ta', 'Ka', 'Di', 'Mi'],
        '5': ['Ta', 'Din', 'Gi', 'Na', 'Thom'],
        '2_3': ['Ta', 'Ka', 'Ta', 'Ki', 'Ta'],
        '3_2': ['Ta', 'Ki', 'Ta', 'Ta', 'Ka'],
        '3_3': ['Ta', 'Ki', 'Ta', 'Ta', 'Ki', 'Ta'],
        '4_2': ['Ta', 'Ka', 'Di', 'Mi', 'Ta', 'Ka'],
        '2_4': ['Ta', 'Ka', 'Ta', 'Ka', 'Di', 'Mi'],
        '4_3': ['Ta', 'Ka', 'Di', 'Mi', 'Ta', 'Ki', 'Ta'],
        '3_4': ['Ta', 'Ki', 'Ta', 'Ta', 'Ka', 'Di', 'Mi'],
        '8': ['Ta', 'Ka', 'Di', 'Mi', 'Ta', 'Ka', 'Ju', 'Nu'],
    }
}



class solfedjioLabel {
    constructor() {
        this.paragraph = null;
        this._textContent = 'ex';
    }
    createDiv() {
        this.paragraph = document.createElement('p');
        this.paragraph.classList.add('mtrxCircle_label');
        this.paragraph.textContent = this._textContent;
    }
    /**
     * @param {any} value
     */
    set textContent(value) {
        this._textContent = value;
        this.paragraph.textContent = this._textContent;
    }
}
