import {Triangle} from "../../framework/shapes/Triangle";
import {Rgb} from "../../framework/colors/Rgb";
import {settings} from "../settings";

export class Ship extends Triangle {
    private canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, Rgb.white, canvas.width / 2, canvas.height / 2, settings.ship.width, settings.ship.height, 0, false);
        this.canvas = canvas;
    }

}