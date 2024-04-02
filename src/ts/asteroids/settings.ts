import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        id: 'game',
    },
    ship: {
        color: Rgb.white,
        width: 20,
        height: 40,
        speed: 0.2,
        maxSpeed: 5,
        velocity: {x: 1, y: 2.5}
    },
    keys: {
        'ArrowUp': -1,
        'ArrowRight': Math.PI / 15,
        'ArrowLeft': -Math.PI / 15,
        'ArrowDown': 1
    }
}