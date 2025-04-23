import {iAnimatable} from "../framework25/types/iAnimatable";
import {Vector} from "../framework25/Vector";
import {randomFloat, randomInt} from "../framework25/helpers/random";
import {settings} from "./settings";
import {Collision} from "../framework25/helpers/Collision";
import {Rectangle} from "../framework25/shapes/Rectangle";

export class Asteroid extends Rectangle implements iAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly path: Path2D;
    private readonly direction: number;
    private readonly speedRotation: number;
    private readonly speed: Vector;
    private readonly acceleration: Vector;
    public shouldBeRemoved: boolean = false;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, new Vector({
            x: randomInt(settings.asteroid.size / 2, canvas.width - settings.asteroid.size / 2),
            y: randomInt(settings.asteroid.size / 2, canvas.height - settings.asteroid.size / 2),
        }), settings.asteroid.color, settings.asteroid.size, settings.asteroid.size);
        this.canvas = canvas;
        this.path = new Path2D(settings.asteroid.shapes[randomInt(0, settings.asteroid.shapes.length - 1)]);
        this.path.closePath();
        this.direction = randomFloat(0, Math.PI * 2);
        this.speedRotation = randomFloat(settings.asteroid.rotationSpeed.min, settings.asteroid.rotationSpeed.max);
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.direction, randomInt(settings.asteroid.acceleration.min, settings.asteroid.acceleration.max));
        this.speed.add(this.acceleration);
    }

    animate(): void {
        this.position.add(this.speed);
        this.rotation += this.speedRotation;
        Collision.replaceOutOfBounds(this, this.canvas);
        this.draw();
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.rotation);
        this.ctx.translate(-settings.asteroid.size / 2, -settings.asteroid.size / 2);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }
}