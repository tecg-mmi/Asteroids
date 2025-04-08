import {iAnimatable} from "./types/iAnimatable";

export class Animation {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private iAnimatables: iAnimatable[];
    private requestAnimationFrameID: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, animatables: iAnimatable[] = []) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.iAnimatables = animatables;
    }

    start() {
        this.animate();
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameID);
    }


    registeriAnimatable(animatable: iAnimatable) {
        this.iAnimatables.push(animatable);
    }

    private animate() {
        this.requestAnimationFrameID = requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const animatable of this.iAnimatables) {
            animatable.animate()
        }

    }

}