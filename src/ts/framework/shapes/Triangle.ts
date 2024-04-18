import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";
import {IRectangle} from "../types/IRectangle";

export class Triangle extends Shape implements IRectangle{
    public readonly width: number;
    public readonly height: number;
    public points: IPosition[];

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, width: number, height: number, color: IColor, orientation: number = 0, isFilled: boolean = true) {
        super(ctx, color, position, orientation, isFilled);
        this.width = width;
        this.height = height;
        this.points = [
            {x: 0, y: -this.height / 2},
            {x: -this.width / 2, y: this.height / 2},
            {x: this.width / 2, y: this.height / 2}
        ];
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.beginPath();
        this.ctx.moveTo(this.points[0].x, this.points[0].y);
        this.ctx.lineTo(this.points[1].x, this.points[1].y);
        this.ctx.lineTo(this.points[2].x, this.points[2].y);
        this.ctx.closePath();
        this.fillOrStroke();
        this.ctx.restore();
    }

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        if (this.isFilled) {
            this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
        } else {
            this.ctx.clearRect(-this.width / 2 - 2, -this.height / 2 - 2, this.width + 4, this.height + 4);
        }
        this.ctx.restore();
    }


}