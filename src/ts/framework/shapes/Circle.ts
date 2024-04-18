import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export class Circle extends Shape {
    protected readonly radius: number;


    constructor(ctx: CanvasRenderingContext2D, color: IColor, position: IPosition, orientation: number, radius: number, isFilled: boolean = true) {
        super(ctx, color, position, orientation, isFilled);
        this.radius = radius;
    }


    public draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.fillOrStroke();
    }

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        if (this.isFilled) {
            this.ctx.clearRect(-this.radius-1, -this.radius-1, this.radius * 2 +2, this.radius * 2 +2);
        } else {
            // use stroke width to clear the circle
            this.ctx.clearRect(-this.radius - 1, -this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);

        }
        this.ctx.restore();
    }
}