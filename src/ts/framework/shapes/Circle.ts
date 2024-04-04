import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";

export class Circle extends Shape {
    private readonly radius: number;


    constructor(ctx: CanvasRenderingContext2D, color: IColor, position: IPosition, degree: number, radius: number, isFilled: boolean = true) {
        super(ctx, color, position, degree, isFilled);
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
        this.ctx.rotate(this.degree);
        if (this.isFilled) {
            this.ctx.clearRect(this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
        } else {
            // use stroke width to clear the circle
            this.ctx.clearRect(this.position.x - this.radius - 1, this.position.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);

        }
        this.ctx.restore();
    }
}