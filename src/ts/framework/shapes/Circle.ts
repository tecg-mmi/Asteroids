import {Shape} from "./Shape";
import {IColor} from "../types/IColor";

export class Circle extends Shape {
    private readonly radius: number;


    constructor(ctx: CanvasRenderingContext2D, color: IColor, x: number, y: number, radius: number, isFilled: boolean = true) {
        super(ctx, color, x, y, isFilled);
        this.radius = radius;
    }


    public draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color.toString();
        this.ctx.strokeStyle = this.color.toString();
        this.fillOrStroke();
    }
}