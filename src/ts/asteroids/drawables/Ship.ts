import {Triangle} from "../../framework/shapes/Triangle";
import {Rgb} from "../../framework/colors/Rgb";
import {settings} from "../settings";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {KeyController} from "../KeyController";
import {Vector} from "../../framework/Vector";
import {Bullet} from "./Bullet";

export class Ship extends Triangle implements IAnimatable {
    private canvas: HTMLCanvasElement;
    private speed: Vector;
    private acceleration: Vector;
    public keyControl: KeyController;
    private bulletTimer: number;
    private bullets: Bullet[];

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyControl: KeyController) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.width, settings.ship.height, Rgb.white, 0, false);
        this.canvas = canvas;
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = new Vector({x: 0.05, y: 0.05});
        this.keyControl = keyControl;
        this.bulletTimer = 0;
        this.bullets = [];
    }

    update() {
        this.keyControl.activeKeys.forEach((value) => {
            switch (value) {
                case 'ArrowUp':
                    this.speed.add(Vector.fromAngle(this.degree, settings.ship.speed));
                    break;
                case 'ArrowDown':
                    this.speed.multiply(0.99);
                    break;
                case 'ArrowLeft':
                    this.degree += settings.ship.left;
                    break;
                case 'ArrowRight':
                    this.degree += settings.ship.right;
                    break;
                case ' ':
                    this.bulletTimer++;
                    if (this.bulletTimer > 10) {
                        this.bulletTimer = 0;
                        this.fireBullet();
                    }
                    break;
            }
        });
        this.speed.multiply(0.99);
        (this.position as Vector).add(this.speed);
        this.checkEdges();
        this.bullets.forEach((bullet) => {
            bullet.update();
        });

    }

    checkEdges() {
        if (this.position.y > this.canvas.height + settings.ship.height) {
            this.position.y = -settings.ship.height;
        }
        if (this.position.y < -settings.ship.height) {
            this.position.y = this.canvas.height + settings.ship.height;
        }
        if (this.position.x > this.canvas.width + settings.ship.width) {
            this.position.x = -settings.ship.width;
        }
        if (this.position.x < -settings.ship.width) {
            this.position.x = this.canvas.width + settings.ship.width;
        }
    }


    draw() {
        super.draw();
        this.bullets.forEach((bullet) => {
            bullet.draw();
        });
    }

    clear() {
        super.clear();
        this.bullets.forEach((bullet) => {
            bullet.clear();
        });
    }

    private fireBullet() {
        this.bullets.push(new Bullet(this.ctx,new Vector(this.position), settings.bullet.radius, this.degree, this.speed));
    }

    center() {
        this.position.x = this.canvas.width / 2;
        this.position.y = this.canvas.height / 2;
    }
}