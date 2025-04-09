import {settings} from "./settings";
import {Ship} from "./Ship";
import {Animation} from "../framework25/Animation";
import {GameController} from "./GameController";

export class Asteroid {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private readonly animation: Animation;
    private readonly gameController: GameController;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.gameController = new GameController;
        this.animation = new Animation(this.canvas, this.ctx);
        this.ship = new Ship(this.ctx, this.canvas);
        this.animation.registeriAnimatable(this.ship);
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
}