import {Shape} from "./Shape";
import {IColor} from "../types/IColor";

export class Triangle extends Shape {
    protected width: number;
    protected height: number;
    protected degree: number;

    constructor(ctx: CanvasRenderingContext2D, color: IColor, x: number, y: number, width: number, height: number, degree: number = 0, isFilled: boolean = true) {
        super(ctx, color, x, y, isFilled);
        this.width = width;
        this.height = height;
        this.degree = degree;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.degree * Math.PI / 180);
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.height / 2);
        this.ctx.lineTo(-this.width / 2, this.height / 2);
        this.ctx.lineTo(this.width / 2, this.height / 2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.strokeStyle = this.color.toString();
        this.fillOrStroke();
        this.ctx.restore();
    }

}