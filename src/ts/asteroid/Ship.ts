import {Triangle} from "../framework25/shapes/Triangle";
import {settings} from "./settings";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {GameController} from "./GameController";
import {Vector} from "../framework25/Vector";

export class Ship extends Triangle implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private gameController: GameController;
    private speed: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, gameController: GameController) {
        super(ctx, new Vector({
            x: canvas.width / 2,
            y: canvas.height / 2
        }), settings.ship.color, settings.ship.width, settings.ship.height, 0);
        this.canvas = canvas;
        this.speed = 0;
        this.gameController = gameController;
    }

    animate(): void {
        this.handleKey();


        this.position.x += Math.cos(this.rotation - Math.PI / 2) * this.speed;
        this.position.y += Math.sin(this.rotation - Math.PI / 2) * this.speed;

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
                    if (this.speed < settings.ship.maxSpeed) {
                        this.speed += settings.ship.speed;
                    }
                    break;
                case 'ArrowDown':
                    if (this.speed > 0) {
                        this.speed -= settings.ship.speed;
                    }
                    break;
            }
        })
    }
}