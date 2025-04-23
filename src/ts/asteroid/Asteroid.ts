import {Shape} from "../framework25/shapes/Shape";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {Vector} from "../framework25/Vector";
import {settings} from "./settings";
import {randomInt} from "../framework25/helpers/random";

export class Asteroid extends Shape implements iAnimatable {
    private canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, new Vector({
            x: randomInt(settings.asteroid.size / 2, canvas.width - settings.asteroid.size / 2),
            y: randomInt(settings.asteroid.size / 2, canvas.height - settings.asteroid.size / 2)
        }), settings.asteroid.color);
        this.canvas = canvas;
    }

    animate(): void {
        this.draw()
    }


    private draw() {

    }
}