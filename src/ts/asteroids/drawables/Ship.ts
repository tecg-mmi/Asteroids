import {Triangle} from "../../framework/shapes/Triangle";
import {Rgb} from "../../framework/colors/Rgb";
import {settings} from "../settings";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {KeyController} from "../KeyController";
import {Vector} from "../../framework/Vector";

export class Ship extends Triangle implements IAnimatable {
    private canvas: HTMLCanvasElement;
    private speed: Vector;
    private acceleration: Vector;
    public keyControl: KeyController;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyControl: KeyController) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.width, settings.ship.height, Rgb.white, 0, false);
        this.canvas = canvas;
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = new Vector({x: 0.05, y: 0.05});
        this.keyControl = keyControl;
    }

    update() {
        console.log(this.keyControl.activeKeys)
        this.keyControl.activeKeys.forEach((value) => {
            if (value === 'ArrowUp') {
                this.speed.add(Vector.fromAngle(this.degree, settings.ship.speed));
            } else if (value === 'ArrowDown') {
                this.speed.multiply(0.99);
            } else if (value === 'ArrowLeft') {
                this.degree += settings.ship.leftRotation;
            } else if (value === 'ArrowRight') {
                this.degree += settings.ship.leftRotation;
            }
        });
        this.speed.multiply(0.99);
        (this.position as Vector).add(this.speed);
        this.checkEdges();
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
}