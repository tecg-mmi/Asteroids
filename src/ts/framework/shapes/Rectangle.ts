import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export class Rectangle extends Shape {
    private readonly width: number;
    private readonly height: number;
    private readonly degree: number;

    constructor(ctx: CanvasRenderingContext2D, position:IPosition, w: number, h: number, degree: number, color: IColor, isFilled: boolean = true) {
        super(ctx, color, position, isFilled);
        this.width = Math.trunc(w);
        this.height = Math.trunc(h);
        this.degree = degree;
    }


    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
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
            this.ctx.clearRect(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2);
        }
        this.ctx.restore();
    }


}