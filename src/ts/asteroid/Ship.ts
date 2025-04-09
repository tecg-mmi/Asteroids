import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }, settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
    }

    animate(): void {
        this.position.x++;
        this.draw();
    }


}