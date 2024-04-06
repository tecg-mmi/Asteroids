import {IPosition} from "./types/iPosition";

export class Vector implements IPosition {
    public x: number;
    public y: number;

    constructor(position: IPosition) {
        this.x = position.x;
        this.y = position.y;
    }

    add(v: IPosition): Vector {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    subtract(v: Vector): Vector {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    multiply(scalar: number): Vector {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static fromAngle(angle: number, length: number) {
        if (length === undefined) {
            length = 1;
        }
        return new Vector({
            x: Math.cos(angle - Math.PI / 2) * length,
            y: Math.sin(angle - Math.PI / 2) * length
        });
    }
}