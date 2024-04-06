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
        friction: 0.99

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
    },
    asteroid: {
        initialCount: 4,
        maxSize: 150,
        shapes: [
            "M64.68,41.58L79.14.5l20.5,38.85,38.87-1.91-1.12,46.55,13.11,8.21-53.21-10.46-6.39,68.76-33.75-22.93-9.04-31.85L.5,110.16l23.79-41.04-5.83-25.14,46.22-2.39Z",
            "M150.5,103.76l-11.06,43.18-53.26-49.82-28.32,15.52-20.06,37.86-26.91-51.7,26.91-17.7L.5,37.52l63.61,6.76L81.94.5l11.15,42.01-9.25,14.29,66.66,46.97Z",
            "M65.51,51.38L86.3.5l13,48.82,51.2-9.23-14.7,50.47,12.67,7.58-70.1-4.79-2.87,47.09-32.48-15.44-19.94,25.49L.5,103.78l34.33-9.62-9.19-47.01,39.87,4.23Z",
        ],
        smallShapes: [
            "M32.59,22.11l7.23-19.39L58.26.5l11.25,19.65-21.63,9.51,27.63,16.34-47.96,3.99-.23,21.8-10.62-11.77L.5,75.5v-21.03l22.66-18.66-13.68-12.59L14.61,4.21l17.98,17.9Z",
            "M74.17,50.73l-5.93,21-35.07,3.77-8.65-20.45-10.75,18.42L.5,62.69l13.27-22.99,22.87.97L15.85,20.91,37.43.5l5.98,20.44-4.96,6.95,37.05-1.81-1.33,24.65Z",
            "M15.27,18.33L40.11.5l14.11,34.02,21.28-16-8.1,22.97,6.98,3.45,1.12,30.57h-23.06l-10.44-17.86-20.37,13.03L.5,60.79l22.4-11.56L5.34,32.62l23.17.42-13.24-14.71Z",
        ],
        color: Rgb.white,
        radius: -1,
        scale: {
            min: 0.80,
            max: 1.20

        },
        speed: {
            min: 2,
            max: 5

        },
        newAsteroidsCount: 2,
        rotationSpeed: {
            min: Math.PI / -300,
            max: Math.PI / 300
        }

    }

}