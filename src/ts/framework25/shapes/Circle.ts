import {Shape} from "./Shape";
import {iPosition} from "../types/iPosition";
import {iColor} from "../types/iColor";
import {iDrawable} from "../types/iDrawable";

export class Circle extends Shape implements iDrawable {
    radius: number;

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: iColor, radius: number) {
        super(ctx, position, color);
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }
}