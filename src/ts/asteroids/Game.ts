import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly animation: Animate;
    private readonly ship: Ship;
    private readonly keyControl: KeyController;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.resizeCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.keyControl = new KeyController();
        this.ship = new Ship(this.ctx, this.canvas, this.keyControl);
        this.animation = new Animate();
        this.animation.registerForAnimation(this.ship);
        this.ship.draw();
        this.animation.start();

    }

    resizeCanvas() {
        // Set the canvas size to the window size to make a square
        if (window.innerWidth < window.innerHeight) {
            this.canvas.height = window.innerWidth;
            this.canvas.width = window.innerWidth;
        } else {
            this.canvas.height = window.innerHeight;
            this.canvas.width = window.innerHeight;
        }
    }


}