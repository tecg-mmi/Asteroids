import {Circle} from "../../framework/shapes/Circle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IPosition} from "../../framework/types/iPosition";
import {Vector} from "../../framework/Vector";
import {settings} from "../settings";

export class Bullet extends Circle implements IAnimatable {
    private readonly speed: Vector;
    private readonly acceleration: Vector;
    private canvas: HTMLCanvasElement;
    shouldBeRemove: boolean = false;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, position: IPosition, degree: number, speed: Vector) {
        super(ctx, settings.bullet.color, position, degree, settings.bullet.radius, true);
        this.canvas = canvas;
        this.speed = new Vector(speed);
        this.acceleration = Vector.fromAngle(this.orientation, settings.bullet.speed);
        this.speed.add(this.acceleration);
    }

    update(): void {
        (this.position as Vector).add(this.speed);
        this.isOutOfBounds();
    }

    isOutOfBounds() {
        this.shouldBeRemove = this.position.y > this.canvas.height + this.radius ||
            this.position.y < -this.radius ||
            this.position.x > this.canvas.width + this.radius ||
            this.position.x < -this.radius;
    }
}