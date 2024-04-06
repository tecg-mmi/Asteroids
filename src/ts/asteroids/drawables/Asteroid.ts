import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";
import {Circle} from "../../framework/shapes/Circle";
import {Vector} from "../../framework/Vector";
import {Random} from "../../framework/helpers/Random";
import {Rgb} from "../../framework/colors/Rgb";
import {Animate} from "../../framework/Animate";
import {Bullet} from "./Bullet";
import {Ship} from "./Ship";
import {IGameStatus} from "../../framework/types/IGameStatus";

export class Asteroid extends Circle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: Vector;
    private readonly animation: Animate;
    private readonly scale: number;
    private readonly parent: Asteroid;
    private readonly acceleration: Vector;
    private readonly gameStatus: IGameStatus;
    private readonly ship: Ship;
    private path: Path2D;
    public shouldBeRemove: boolean;
    private rotationSpeed: number;
    private maxSize: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, ship: Ship, gameStatus: IGameStatus, animation: Animate, parent: Asteroid = null) {
        super(ctx, parent ? Rgb.blue : settings.asteroid.color, new Vector({
            x: parent ? parent.position.x : Random.int(0, canvas.width),
            y: parent ? parent.position.y : Random.int(0, canvas.height)
        }), Random.float(0, Math.PI * 2), settings.asteroid.radius, false);

        this.gameStatus = gameStatus;
        this.parent = parent;
        this.ship = ship;
        this.canvas = canvas;
        this.shouldBeRemove = false;
        this.animation = animation;
        if (parent) {
            this.rotationSpeed = this.parent.rotationSpeed * 2;
            this.scale = parent.scale / 2;
            this.maxSize = parent.maxSize / 2;
        } else {
            this.rotationSpeed = Random.float(settings.asteroid.rotationSpeed.min, settings.asteroid.rotationSpeed.max);
            this.scale = Random.float(settings.asteroid.scale.min, settings.asteroid.scale.max);
            this.maxSize = settings.asteroid.maxSize;
        }
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.degree, Random.int(settings.asteroid.speed.min, settings.asteroid.speed.max));
        this.speed.add(this.acceleration);
        this.generatePath();
    }


    draw(): void {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.translate(-settings.asteroid.maxSize / 2, -settings.asteroid.maxSize / 2);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }

    checkEdges() {
        if (this.position.y > this.canvas.height + settings.asteroid.maxSize) {
            this.position.y = -settings.asteroid.maxSize;
        }
        if (this.position.y < -settings.asteroid.maxSize) {
            this.position.y = this.canvas.height + settings.asteroid.maxSize;
        }
        if (this.position.x > this.canvas.width + settings.asteroid.maxSize) {
            this.position.x = -settings.asteroid.maxSize;
        }
        if (this.position.x < -settings.asteroid.maxSize) {
            this.position.x = this.canvas.width + settings.asteroid.maxSize;
        }
    }

    update(): void {
        (this.position as Vector).add(this.speed);
        this.degree += this.rotationSpeed;
        this.checkEdges();
        this.checkCollisionWithBullets();
        this.checkCollisionWithShip();
    }

    private generatePath() {
        if (this.parent) {
            this.path = new Path2D(settings.asteroid.smallShapes[Random.int(0, settings.asteroid.shapes.length)]);
        } else {
            this.path = new Path2D(settings.asteroid.shapes[Random.int(0, settings.asteroid.shapes.length)]);
        }
        this.path.closePath();
    }

    private checkCollisionWithBullets() {
        this.animation.iAnimates.forEach((bullet: IAnimatable) => {
            if (bullet instanceof Bullet) {
                if (this.ctx.isPointInPath(this.path, bullet.position.x - this.position.x, bullet.position.y - this.position.y)) {
                    this.color = Rgb.red;
                    if (this.scale > settings.asteroid.scale.min / 2) {
                        for (let i = 0; i < settings.asteroid.newAsteroidsCount; i++) {
                            this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas, this.ship, this.gameStatus, this.animation, this));
                        }
                    }
                    this.shouldBeRemove = true;
                }
            }
        });
    }

    private checkCollisionWithShip() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.translate(-settings.asteroid.maxSize / 2, -settings.asteroid.maxSize / 2);
        this.ship.points.forEach((point) => {
            if (this.ctx.isPointInPath(this.path, this.ship.position.x - point.x, this.ship.position.y - point.y)) {
                console.log('collision with ship');
                this.animation.stop();
                this.gameStatus.lives--;
            }
        });
        this.ctx.restore();
    }
}