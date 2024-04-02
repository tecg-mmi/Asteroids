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


    constructor() {
        this.iAnimates = [];
    }


    public start() {
        this.animate()
    }


    public registerForAnimation(animated: IAnimatable) {
        this.iAnimates.push(animated);
    }


    private animate() {
        this.iAnimates.forEach((animate) => {
            animate.clear();
            animate.update();
            animate.draw();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}