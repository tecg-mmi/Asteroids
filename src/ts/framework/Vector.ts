import {IPosition} from "./types/iPosition";

export class Vector implements IPosition {
    public x: number;
    public y: number;

    constructor(position: IPosition) {
        this.x = position.x;
        this.y = position.y;
    }

    add(v: IPosition) {
        this.x += v.x;
        this.y += v.y;
    }

    subtract(v: Vector) {
        this.x -= v.x;
        this.y -= v.y;
    }

    multiply(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
    }

    static fromAngle(angle: number, length: number) {
        if (length === undefined) {
            length = 1;
        }
        return new Vector({
            x: Math.cos(angle- Math.PI / 2) * length,
            y: Math.sin(angle- Math.PI / 2) * length
        });
    }
}