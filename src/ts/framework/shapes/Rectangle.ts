import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";
import {IRectangle} from "../types/IRectangle";

export class Rectangle extends Shape implements IRectangle{
    public readonly width: number;
    public readonly height: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, width: number, height: number, orientation: number, color: IColor, isFilled: boolean = true) {
        super(ctx, color, position, orientation, isFilled);
        this.width = Math.trunc(width);
        this.height = Math.trunc(height);
        this.orientation = orientation;
    }


    public draw() {

        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
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
            this.ctx.clearRect(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2);
        }
        this.ctx.restore();
    }


}