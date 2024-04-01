import {Ship} from "./drawables/Ship";
import {Rectangle} from "../framework/shapes/Rectangle";
import {Rgb} from "../framework/colors/Rgb";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private ship: Ship;

    constructor() {
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.resizeCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.ship = new Ship(this.ctx, this.canvas);
        this.ship.draw();
    }

    resizeCanvas() {
        // Set the canvas size to the window size to make a square
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerHeight;


    }
}