// Single Responsiblility Principle - Принцип единой ответственности
// другое поведение выносится в отдельный класс

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
        <div class = "news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
        <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
        </news>
        `
    }
}

const news = new News('Путин', 'Новая конституция');

const printer = new NewsPrinter(
    new News('Путин', 'Новая конституция')
)

// console.log(printer.html());
// console.log(printer.xml());
// console.log(printer.json());

// console.log(news);
// console.log(news.toHTML());
// console.log(news.toJSON());

class Keyb {
    constructor(className, color, margin, number, name_en, name_ru, label) {
        this.className = className
        this.color = color
        this.margin = margin
        this.number = number
        this.name_en = name_en
        this.name_ru = name_ru
        this.label = label
    }

    newLabel(text) {
        this.label = text
    }

    createKey() {
        return `
        <div class="${this.className}">${this.label}</div>
        <div class="${this.className}">${this.label}</div>
        <div class="${this.className}">${this.label}</div>
        <div class="${this.className}">${this.label}</div>
        <div class="${this.className}">${this.label}</div>
        `
    }
}

const key = new Keyb('keyb_el', 'white', '-15px', 'C0', 'C', 'До', 'Б2');
// console.log(key.label);

// console.log(key.label);

let root = document.querySelector('.root');
root.insertAdjacentHTML("afterbegin", key.createKey());

let btn = document.createElement('button');
btn.type = 'button';
btn.textContent = 'Кнопка';
root.append(btn);
btn.addEventListener('click', (e) => {
    // console.log('click');
    key.newLabel('Х---------Х');
    // console.log(key);
    root.insertAdjacentHTML("afterbegin", key.createKey());
}, {
    once: false
})


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [50, 60, 70, 80, 90];
const [one, two, three, ...other] = [...arr, ...arr2];
// console.log(one, two, three, other);

const obj = {
    name: 'max',
    age: 40,
    prof: 'Музыкант',
    game: {
        play: 'fast',
        love: 'jazz'
    }
}

const obj2 = {
    city: 'Липецк'
}



const {
    city,
    man
} = {
    ...obj
};
// console.log({
//     ...obj,
//     ...obj2
// });

const allDivs = document.querySelectorAll('div');

const nodes = [...allDivs];

function nodeList_in_Obj() {
    const all_nodes = nodes.map((elem, ind, array) => (this));
    // console.log(all_nodes);
}

nodeList_in_Obj();

// console.log(allDivs, Array.isArray(allDivs));
// console.log(nodes, Array.isArray(nodes));

class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('Гав гав гав')
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

class Cat extends Animal {
    static type = "CAT"
    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am cat!!!');
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})