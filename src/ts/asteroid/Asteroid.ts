import {settings} from "./settings";
import {Ship} from "./Ship";

export class Asteroid {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.ship = new Ship(this.ctx, this.canvas);
        this.addEventListeners();
        this.ship.draw();
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