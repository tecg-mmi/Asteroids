import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export class Triangle extends Shape {
    protected readonly width: number;
    protected readonly height: number;
    protected degree: number;

    constructor(ctx: CanvasRenderingContext2D, position:IPosition, width: number, height: number, color: IColor, degree: number = 0, isFilled: boolean = true) {
        super(ctx, color, position, isFilled);
        this.width = Math.trunc(width)
        this.height = Math.trunc(height);
        this.degree = degree;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
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

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        if (this.isFilled) {
            this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
        } else {
            this.ctx.clearRect(-this.width / 2 - 2, -this.height / 2 - 2, this.width + 4, this.height + 4);
        }
        this.ctx.restore();
    }


}