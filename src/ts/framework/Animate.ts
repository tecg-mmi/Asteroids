import {IAnimatable} from "./types/IAnimatable";

export class Animate {
    public readonly iAnimates: IAnimatable[];
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly idxToClear: number[] = [];
    private registerForAnimationId: number;

    constructor(canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        this.iAnimates = [] = [];
        this.canvas = canvas;
        this.ctx = ctx;
    }


    public start() {
        this.animate()
    }

    public stop() {
        cancelAnimationFrame(this.registerForAnimationId);
    }


    public registerForAnimation(animated: IAnimatable) {
        this.iAnimates.push(animated);
    }


    private animate() {
        this.registerForAnimationId = requestAnimationFrame(this.animate.bind(this));
        if (!(this.ctx === undefined || this.canvas === undefined)) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.iAnimates.forEach((animate) => {
            if (animate.shouldBeRemove) {
                this.idxToClear.push(this.iAnimates.indexOf(animate));
            } else {
                if (this.ctx === undefined || this.canvas === undefined) {
                    animate.clear();
                }
                animate.update();
                animate.draw();
            }
        });
        this.idxToClear.forEach((idx) => {
            this.iAnimates.splice(idx, 1);
        });
        this.idxToClear.length = 0;
        console.log(this.iAnimates.length);
    }
}