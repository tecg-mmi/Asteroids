import {IAnimatable} from "./types/IAnimatable";

/**
 * Manages the animation loop for animatable objects.
 *
 * @param animated - The array of animatable objects.
 * @interface Animatable
 *
 * @param gameStatus - The game status object that controls the animation loop.
 * @interface GameStatus
 */
export class Animate {
    private iAnimates: IAnimatable[];
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;


    constructor(canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        this.iAnimates = [];
        this.canvas = canvas;
        this.ctx = ctx;
    }


    public start() {
        this.animate()
    }


    public registerForAnimation(animated: IAnimatable) {
        this.iAnimates.push(animated);
    }


    private animate() {
        this.iAnimates.forEach((animate) => {
            if (this.ctx === undefined || this.canvas === undefined) {
                animate.clear();
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            animate.update();
            animate.draw();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}