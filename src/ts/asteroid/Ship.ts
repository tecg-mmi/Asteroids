import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {GameController} from "./GameController";
import {Vector} from "../framework25/Vector";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private gameController: GameController;
    private speed: Vector;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, gameController: GameController) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.speed = new Vector({x: 0, y: 0});
        this.gameController = gameController;
    }

    animate(): void {
        this.handleKey();

        this.speed.multiply(settings.ship.friction);
        this.position.add(this.speed);




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
                    this.speed.add(Vector.fromAngle(this.rotation, settings.ship.speed));
                    break;
                case 'ArrowDown':
                    this.speed.multiply(settings.ship.friction);
                    break;
            }
        })
    }
}