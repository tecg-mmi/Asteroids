import {iPosition} from "./types/iPosition";

export class Vector implements iPosition {
    public x: number;
    public y: number;


    constructor(position: iPosition) {
        this.x = position.x;
        this.y = position.y;
    }

    add(position: iPosition): this {
        this.x += position.x;
        this.y += position.y;
        return this;
    }

    multiply(scalar: number): this {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static fromAngle(angle: number, length: number = 1): Vector {
        return new Vector({
            x: Math.cos(angle - Math.PI / 2) * length,
            y: Math.sin(angle - Math.PI / 2) * length
        })
    }
}