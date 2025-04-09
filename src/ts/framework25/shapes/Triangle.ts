import {Rectangle} from "./Rectangle";
import {iPosition} from "../types/iPosition";
import {iColor} from "../types/iColor";
import {iDrawable} from "../types/iDrawable";

export class Triangle extends Rectangle implements iDrawable {
    private points: iPosition[] = [];

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: iColor, width: number, height: number, rotation: number) {
        super(ctx, position, color, width, height, rotation);
        this.points.push({x: 0, y: -this.height / 2});
        this.points.push({x: this.width / 2, y: this.height / 2});
        this.points.push({x: -this.width / 2, y: this.height / 2});
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(this.points[0].x, this.points[0].y);
        this.ctx.lineTo(this.points[1].x, this.points[1].y);
        this.ctx.lineTo(this.points[2].x, this.points[2].y);
        this.ctx.closePath();
        this.ctx.restore();
    }

}