import {Triangle} from "../../framework/shapes/Triangle";
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
    private bulletCounter: number;
    shouldBeRemove: boolean = false;
    private animation: Animate;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyControl: KeyController, animation: Animate) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.width, settings.ship.height, settings.ship.color, 0, false);
        this.animation = animation;
        this.canvas = canvas;
        this.speed = new Vector({x: 0, y: 0});
        this.keyControl = keyControl;
        this.bulletCounter = 0;
    }

    update() {
        this.handleKey();
        this.speed.multiply(settings.ship.friction);
        (this.position as Vector).add(this.speed);
        this.checkEdges();

    }

    private handleKey() {
        this.keyControl.activeKeys.forEach((key) => {
            switch (key) {
                case 'ArrowUp':
                    this.speed.add(Vector.fromAngle(this.orientation, settings.ship.speed));
                    break;
                case 'ArrowDown':
                    this.speed.multiply(settings.ship.friction);
                    break;
                case 'ArrowLeft':
                    this.orientation += settings.ship.left;
                    break;
                case 'ArrowRight':
                    this.orientation += settings.ship.right;
                    break;
                case ' ':
                    this.bulletCounter++;
                    if (this.bulletCounter > settings.ship.bulletInterval) {
                        this.bulletCounter = 0;
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
        position.add(Vector.fromAngle(this.orientation, settings.ship.height / 2));
        this.animation.registerForAnimation(new Bullet(
            this.ctx, this.canvas, position, this.orientation, this.speed));
    }

    center() {
        this.position.x = this.canvas.width / 2;
        this.position.y = this.canvas.height / 2;
    }
}