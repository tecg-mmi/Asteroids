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
        velocity: {x: 1, y: 2.5},
        left: -Math.PI / 15,
        right: Math.PI / 15,
    },
    keys: ['ArrowUp',
        'ArrowRight',
        'ArrowLeft',
        'ArrowDown',
        ' '
    ],
    bullet: {
        color: Rgb.white,
        radius: 2, length: 10

    },
    h1: {
        selector: '.header',
        hideClass: 'hidden',
    }

}