import {Circle} from "../framework25/shapes/Circle";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {Vector} from "../framework25/Vector";
import {settings} from "./settings";


export class Bullet extends Circle implements iAnimatable {
    private readonly speed: Vector;
    private readonly acceleration: Vector;
    private readonly direction: number;

    constructor(ctx: CanvasRenderingContext2D, position: Vector, speed: Vector, direction: number) {
        super(ctx, new Vector(position), settings.bullet.color, settings.bullet.radius);

        this.direction = direction;
        this.speed = new Vector(speed);
        this.acceleration = Vector.fromAngle(this.direction, settings.bullet.speed);
        this.speed.add(this.acceleration);

    }

    update() {
        this.position.add(this.speed);
    }

    animate(): void {
        this.update();
        this.draw();
    }


}