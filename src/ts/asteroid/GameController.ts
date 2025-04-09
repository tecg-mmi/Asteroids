import {settings} from "./settings";
import {GameStatus} from "./GameStatus";

export class GameController {
    public readonly currentKeys: string[] = [];
    private readonly gameStatus: GameStatus;
    private readonly runWhenStarted: () => void;


    constructor(gameStatus: GameStatus, runWhenStarted: () => void) {
        this.gameStatus = gameStatus;
        this.runWhenStarted = runWhenStarted;
        window.addEventListener('keydown', (evt) => {
            this.keyDown(evt);
        });

        window.addEventListener('keyup', (evt) => {
            this.keyUp(evt);
        });
    }

    private keyDown(evt: KeyboardEvent) {
        if (settings.keys.includes(evt.key)) {
            if (!this.gameStatus.isStarted) {
                this.gameStatus.isStarted = true;
                this.runWhenStarted();
            }

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