import {Circle} from "../../framework/shapes/Circle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IColor} from "../../framework/types/IColor";
import {IPosition} from "../../framework/types/iPosition";
import {Vector} from "../../framework/Vector";

export class Bullet extends Circle implements IAnimatable {
    private readonly degree: number;
    private readonly speed: Vector;
    private readonly acceleration: Vector;

    constructor(ctx: CanvasRenderingContext2D, color: IColor, position: IPosition, radius: number, degree: number, speed: Vector) {
        super(ctx, color, position, radius);
        this.degree = degree;
        this.speed = speed;
        this.acceleration = Vector.fromAngle(this.degree, 10);
        this.speed.add(this.acceleration);
    }

    update(): void {
        (this.position as Vector).add(this.speed);
    }

}