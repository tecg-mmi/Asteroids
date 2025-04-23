import {Shape} from "../framework25/shapes/Shape";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {Vector} from "../framework25/Vector";
import {randomFloat, randomInt} from "../framework25/helpers/random";
import {settings} from "./settings";

export class Asteroid extends Shape implements iAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly path: Path2D;
    private readonly direction: number;
    private readonly speedRotation: number;
    private rotation: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, new Vector({
            x: randomInt(settings.asteroid.size / 2, canvas.width - settings.asteroid.size / 2),
            y: randomInt(settings.asteroid.size / 2, canvas.height - settings.asteroid.size / 2),
        }), settings.asteroid.color);
        this.canvas = canvas;
        this.path = new Path2D(settings.asteroid.shapes[randomInt(0, settings.asteroid.shapes.length - 1)]);
        this.path.closePath();
        this.rotation = 0;
        this.direction = randomFloat(0, Math.PI * 2);
        this.speedRotation = randomFloat(settings.asteroid.rotationSpeed.min, settings.asteroid.rotationSpeed.max);
    }

    animate(): void {
        this.rotation += this.speedRotation;
        this.draw();
    }

    private draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.rotation);
        this.ctx.translate(-settings.asteroid.size / 2, -settings.asteroid.size / 2);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }
}