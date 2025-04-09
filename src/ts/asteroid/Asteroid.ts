import {settings} from "./settings";

export class Asteroid {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas()
        this.addEventListeners()
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