import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {KeyController} from "../framework25/KeyController";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private keyController: KeyController;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }, settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.keyController = keyController;
    }

    animate(): void {
        this.handleKeys();

        this.position.x++;
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
                    // TODO : Add some nice Speed
                    break;
                case 'ArrowDown':
                    // TODO : Subtract some nice Speed
                    break;
            }
        })
    }
}