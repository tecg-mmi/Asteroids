import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export abstract class Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected color: IColor;
    public position: IPosition;
    protected readonly isFilled: boolean;


    protected constructor(ctx: CanvasRenderingContext2D, color: IColor, position: IPosition, isFilled: boolean = true) {
        this.ctx = ctx;
        this.color = color;
        this.position = position;
        this.position = position;
        this.isFilled = isFilled;
    }


    protected fillOrStroke() {
        if (this.isFilled) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
    }
}