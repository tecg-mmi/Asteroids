export class KeyController {
    public currentKeys: string[] = [];
    private allowedKeys: string[];

    constructor(allowedKeys: string[]) {
        this.allowedKeys = allowedKeys
        window.addEventListener('keydown', (evt) => {
            this.keyDown(evt);
        });
        window.addEventListener('keyup', (evt) => {
            this.keyUp(evt);
        });
    }

    private keyDown(evt: KeyboardEvent) {
        if (this.allowedKeys.includes(evt.key)) {
            if (this.currentKeys.indexOf(evt.key) === -1) {
                this.currentKeys.push(evt.key);
            }
        }
    }

    private keyUp(evt: KeyboardEvent) {
        if (this.allowedKeys.includes(evt.key)) {
            this.currentKeys.splice(this.currentKeys.indexOf(evt.key), 1)
        }
    }
}