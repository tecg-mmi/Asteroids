import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export abstract class Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected color: IColor;
    public readonly position: IPosition;
    protected readonly isFilled: boolean;
    public degree: number;


    protected constructor(ctx: CanvasRenderingContext2D, color: IColor, position: IPosition, degree: number, isFilled: boolean = true) {
        this.ctx = ctx;
        this.color = color;
        this.position = position;
        this.position = position;
        this.isFilled = isFilled;
        this.degree = degree;
    }


    protected fillOrStroke() {
        this.ctx.fillStyle = this.color.toString();
        this.ctx.strokeStyle = this.color.toString();
        if (this.isFilled) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
    }
}