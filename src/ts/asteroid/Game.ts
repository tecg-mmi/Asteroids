import {settings} from "./settings";
import {Ship} from "./Ship";
import {Animation} from "../framework25/Animation";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private readonly animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.resizeCanvas();
        this.animation = new Animation(this.canvas, this.ctx);
        this.ship = new Ship(this.ctx, this.canvas);
        window.addEventListener('resize', this.resizeCanvas.bind(this));
        this.animation.registeriAnimatable(this.ship);
        this.animation.start();

    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerWidth, window.innerHeight);
        this.canvas.height = Math.min(window.innerWidth, window.innerHeight);

    }
}