import {settings} from "./settings";

export class KeyController {
    public activeKeys: String[];

    constructor() {
        this.activeKeys = [];
        document.addEventListener('keydown', (e) => {
            if (Object.keys(settings.keys).includes(e.key) && !this.activeKeys.includes(e.key)) {
                this.activeKeys.push(e.key);
            }
        })
        document.addEventListener('keyup', (e) => {
            if (this.activeKeys.includes(e.key)) {
                const i = this.activeKeys.indexOf(e.key);
                this.activeKeys.splice(i, 1);
            }
        })
    }
}