import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {KeyController} from "../framework25/KeyController";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private speed: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }, settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.keyController = keyController;
        this.speed = 0;
    }

    animate(): void {
        this.handleKeys();


        this.position.x += Math.cos(this.rotation - Math.PI / 2) * this.speed;
        this.position.y += Math.sin(this.rotation - Math.PI / 2) * this.speed;

        this.draw();
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
                    this.speed += settings.ship.speed;
                    break;
                case 'ArrowDown':
                    // TODO : Subtract some nice Speed
                    break;
            }
        })
    }
}