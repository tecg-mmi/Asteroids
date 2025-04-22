import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {KeyController} from "../framework25/KeyController";
import {Vector} from "../framework25/Vector";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private speed: Vector;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2,
        }), settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.keyController = keyController;
        this.speed = new Vector({x: 0, y: 0});
    }

    animate(): void {
        this.handleKeys();
        this.speed.multiply(settings.ship.friction);
        this.position.add(this.speed);
        this.checkEdges();
        this.draw();
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

    private handleKeys() {
        this.keyController.currentKeys.forEach((key) => {
            switch (key) {
                case 'ArrowRight':
                    this.rotation += settings.ship.right;
                    break;
                case 'ArrowLeft':
                    this.rotation += settings.ship.left;
                    break;
                case 'ArrowUp':
                    this.speed.add(Vector.fromAngle(this.rotation, settings.ship.speed));
                    break;
                case 'ArrowDown':
                    this.speed.multiply(settings.ship.friction);
                    break;
            }
        })
    }
}