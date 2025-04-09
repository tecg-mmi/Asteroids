import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {GameController} from "./GameController";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private gameController: GameController;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, gameController: GameController) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2
        }, settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.gameController = gameController;
    }

    animate(): void {
        this.handleKey();

        if (this.position.x + this.points[0].x > this.canvas.width) {
            this.position.x = this.width / 2;
        }


        this.draw();
    }


    private handleKey() {
        this.gameController.currentKeys.forEach((key) => {
            switch (key) {
                case 'ArrowRight':
                    this.rotation += settings.ship.right;
                    break;
                case 'ArrowLeft':
                    this.rotation += settings.ship.left;
                    break;
                case 'ArrowUp':
                    this.position.y--;
                    break;
                case 'ArrowDown':
                    this.position.y++;
                    break;
            }
        })
    }
}