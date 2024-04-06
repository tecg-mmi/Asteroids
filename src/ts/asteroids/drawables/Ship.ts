import {Triangle} from "../../framework/shapes/Triangle";
import {Rgb} from "../../framework/colors/Rgb";
import {settings} from "../settings";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {KeyController} from "../KeyController";
import {Vector} from "../../framework/Vector";
import {Bullet} from "./Bullet";
import {Animate} from "../../framework/Animate";

export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: Vector;
    public keyControl: KeyController;
    private bulletTimer: number;
    shouldBeRemove: boolean = false;
    private animation: Animate;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyControl: KeyController, animation: Animate) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.width, settings.ship.height, Rgb.white, 0, false);
        this.animation = animation;
        this.canvas = canvas;
        this.speed = new Vector({x: 0, y: 0});
        this.keyControl = keyControl;
        this.bulletTimer = 0;
    }

    update() {
        this.handleKey();
        this.speed.multiply(settings.ship.friction);
        (this.position as Vector).add(this.speed);
        this.checkEdges();

    }

    private handleKey() {
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
    }

    clear() {
        super.clear();
    }

    private fireBullet() {
        const position = new Vector(this.position);
        position.add(Vector.fromAngle(this.degree, settings.ship.height / 2));
        this.animation.registerForAnimation(new Bullet(
            this.ctx, this.canvas, position, this.degree, this.speed));
    }

    center() {
        this.position.x = this.canvas.width / 2;
        this.position.y = this.canvas.height / 2;
    }
}