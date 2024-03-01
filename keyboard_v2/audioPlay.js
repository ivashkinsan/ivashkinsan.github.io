// предоставить зависимости
function provide(map) {
    this.addEventListener('inject', event => {
        if (
            event.target !== this &&
            map.has(event.detail.token)
        ) {
            event.stopPropagation();
            event.detail.provider = map.get(event.detail.token);
        }
    });
};
// запросить зависимость
function inject(token) {
    const event = new CustomEvent('inject', {
        detail: {
            token
        },
        bubbles: true,
        cancelable: true,
    });
    this.dispatchEvent(event);
    return event.detail.provider;
}

// что бы создавать кастомные элементы с механизмами выше
// эмиксид
export const InjectorElement = element => {
    class extends element {
        provide(map) {
            // 
        }
        provide(map) {
            // 
        }
    }
}

export class WCAudioContext
    extends InjectorElement(HTMLElement) {
    connectedCallback() {
        this.provide(new Map([
            [
                AudioContext, new AudioContext()
            ]
        ]));
    }
}

export class WCMediaElementAudioSource extends InjectorElement(HTMLAudioElement) {
    connectedCallback() {
        this.provide(
            new Map([
                [
                    AudioNode,
                    new MediaElementAudioSourceNode(this.inject(AudioContext), {
                        mediaElement: this
                    },),
                ]
            ])
        )
    }
}

export class WCGain extends InjectorElement(HTMLAudioElement) {
    #node = new GainNode(this.inject(AudioContext));
    connectedCallback() {
        this.provide(
            new Map([
                [
                    AudioNode,
                    this.#node,
                ]
            ])
        )
    }

    attributeChangedCallback(name, _, value) {
        this.#node[name].value = parseFloat(value)
    }

    static get observedAttributes() {
        return ['gain']
    }
}

// 12-24
// https://youtu.be/EsG2YAzUcT4?si=sg9uiFm0XJOfxKDB

// web audio API
// https://web.dev/articles/audio-scheduling?hl=ru