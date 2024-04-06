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
            "M33.35,11.93l2.77-11.43,12.29,10.46,12-3.49,10.01,16.99-10.01,18.2-14.98-9.11-10.02,21.98-20.51,1.08,11.74-19.82L.5,32.5l21.54-5.31-4.4-20.48,15.71,5.21Z",
            "M79.22,46.76l-18.64,19.37-14.57-17.1-12.59-.91-10.31,25.18-19.72-7.89,13.95-17.29L.5,35.69l21.87-4.38L27.5.5l25.33,17.29-16.23,14.41,42.62,14.56Z",
            "M31.9,24.16L35.54.5l18.73,17.25,17.82-8,20.32,15.02-16.95,14.03-20.96-2.05-10.49,20.27-8.78-9.05-17.75,23.36L.5,52.37l15.81-9.3-5.34-20.88,20.93,1.97Z",
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
        newAsteroidsCount: 2

    }

}
