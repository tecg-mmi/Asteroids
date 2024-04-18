import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";
import {Vector} from "../../framework/Vector";
import {Random} from "../../framework/helpers/Random";
import {Animate} from "../../framework/Animate";
import {Bullet} from "./Bullet";
import {Ship} from "./Ship";
import {IGameStatus} from "../../framework/types/IGameStatus";
import {Rectangle} from "../../framework/shapes/Rectangle";
import {Collision} from "../../framework/helpers/Collision";

export class Asteroid extends Rectangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: Vector;
    private readonly animation: Animate;
    private readonly parent: Asteroid;
    private readonly acceleration: Vector;
    private readonly gameStatus: IGameStatus;
    private readonly ship: Ship;
    private readonly rotationSpeed: number;
    private readonly path: Path2D;
    public shouldBeRemove: boolean;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, ship: Ship, gameStatus: IGameStatus, animation: Animate, parent: Asteroid = null) {
        if (parent) {
            super(ctx, new Vector({
                x: parent.position.x,
                y: parent.position.y
            }), settings.asteroid.maxSize / 2, settings.asteroid.maxSize / 2, Random.float(0, Math.PI * 2), settings.asteroid.color, false);
            this.rotationSpeed = parent.rotationSpeed * 2;
            this.path = new Path2D(settings.asteroid.smallShapes[Random.int(0, settings.asteroid.shapes.length)]);
        } else {
            super(ctx, new Vector({
                x: Random.int(0, canvas.width),
                y: Random.int(0, canvas.height)
            }), settings.asteroid.maxSize, settings.asteroid.maxSize, Random.float(0, Math.PI * 2), settings.asteroid.color, false);
            this.rotationSpeed = Random.float(settings.asteroid.rotationSpeed.min, settings.asteroid.rotationSpeed.max);
            this.path = new Path2D(settings.asteroid.shapes[Random.int(0, settings.asteroid.shapes.length)]);
        }
        this.path.closePath();
        this.parent = parent;
        this.gameStatus = gameStatus;
        this.ship = ship;
        this.canvas = canvas;
        this.shouldBeRemove = false;
        this.animation = animation;
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.orientation, Random.int(settings.asteroid.acceleration.min, settings.asteroid.acceleration.max));
        this.speed.add(this.acceleration);
    }


    draw(): void {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }

    update(): void {
        (this.position as Vector).add(this.speed);
        this.orientation += this.rotationSpeed;
        Collision.replaceOutOfBounds(this, this.canvas);
        this.checkCollisionWithBullets();
        this.checkCollisionWithShip();
    }

    private checkCollisionWithBullets() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.animation.iAnimates.forEach((bullet: IAnimatable) => {
            if (bullet instanceof Bullet) {
                if (this.ctx.isPointInPath(this.path, bullet.position.x, bullet.position.y)) {
                    if (!this.parent) {
                        for (let i = 0; i < settings.asteroid.newAsteroidsCount; i++) {
                            this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas, this.ship, this.gameStatus, this.animation, this));
                        }
                    }
                    this.shouldBeRemove = true;
                }
            }
        });
        this.ctx.restore();
    }

    private checkCollisionWithShip() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.ship.points.forEach((point) => {
            const transformed = Collision.transformPoint(point, this.ship.position, this.ship.orientation);
            if (this.ctx.isPointInPath(this.path, transformed.x, transformed.y)) {
                this.animation.stop();
                this.gameStatus.lives--;
            }
        });
        this.ctx.restore();
    }
}