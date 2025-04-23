import {settings} from "./settings";
import {Ship} from "./Ship";
import {Animation} from "../framework25/Animation";
import {GameController} from "./GameController";
import {GameStatus} from "./GameStatus";
import {Asteroid} from "./Asteroid";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private readonly animation: Animation;
    private readonly gameController: GameController;
    private readonly gameStatus: GameStatus;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.gameStatus = new GameStatus();
        this.gameController = new GameController(this.gameStatus, this.removeText.bind(this));
        this.animation = new Animation(this.canvas, this.ctx);
        this.ship = new Ship(this.ctx, this.canvas, this.gameController, this.animation);
        this.animation.registeriAnimatable(this.ship);
        this.initAsteroids()
        this.animation.start();
        this.addEventListeners();
    }

    private resizeCanvas() {
        const minWidthHeight = Math.min(window.innerWidth, window.innerHeight);
        this.canvas.width = minWidthHeight;
        this.canvas.height = minWidthHeight;
    }

    private addEventListeners() {
        window.addEventListener('resize', this.resizeCanvas.bind(this));

    }

    private removeText() {
        document.querySelector(settings.h1.selector).classList.add(settings.h1.hideClass)
    }

    private initAsteroids() {
        for (let i = 0; i < settings.asteroid.initialCount; i++) {
            this.animation.registeriAnimatable(new Asteroid(this.ctx, this.canvas));
        }
    }
}