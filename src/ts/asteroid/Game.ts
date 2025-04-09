import {settings} from "./settings";
import {Ship} from "./Ship";

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private ship: Ship;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.resizeCanvas();
        this.ship = new Ship(this.ctx, this.canvas);
        window.addEventListener('resize', this.resizeCanvas.bind(this));
        this.ship.draw();
    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerWidth, window.innerHeight);
        this.canvas.height = Math.min(window.innerWidth, window.innerHeight);

    }
}