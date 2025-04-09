import {settings} from "./settings";

export class GameController {
    public currentKeys: string[] = [];


    constructor() {
        window.addEventListener('keydown', (evt) => {
            this.keyDown(evt);
            console.log(this.currentKeys);
        });

        window.addEventListener('keyup', (evt) => {
            this.keyUp(evt);
            console.log(this.currentKeys);
        });
    }

    private keyDown(evt: KeyboardEvent) {
        if (settings.keys.includes(evt.key)) {
            if (!this.currentKeys.includes(evt.key)) {
                this.currentKeys.push(evt.key);
            }
        }
    }

    private keyUp(evt: KeyboardEvent) {
        if (settings.keys.includes(evt.key)) {
            this.currentKeys.splice(this.currentKeys.indexOf(evt.key), 1);
        }
    }
}