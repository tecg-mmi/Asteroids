import {settings} from "./settings";
import {IGameStatus} from "../framework/types/IGameStatus";

export class KeyController {
    public activeKeys: String[];

    constructor(gameStatus: IGameStatus, whenStarted: () => void) {
        this.activeKeys = [];
        document.addEventListener('keydown', (e) => {
            if (settings.keys.includes(e.key) && !this.activeKeys.includes(e.key)) {
                if (!gameStatus.isStarted) {
                    gameStatus.isStarted = true;
                    whenStarted();
                }
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