import {IColor} from "../types/IColor";

export class Rgb implements IColor {
    private _red: number;
    private _green: number;
    private _blue: number;
    static white = new Rgb(255, 255, 255);
    static black: Rgb = new Rgb(0, 0, 0);
    static red: Rgb = new Rgb(255, 0, 0);
    static blue: Rgb = new Rgb(0, 0, 255);

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }


    set red(value: number) {
        this._red = Math.max(0, Math.min(value, 255));
    }

    set green(value: number) {
        this._green = Math.max(0, Math.min(value, 255));
    }

    set blue(value: number) {
        this._blue = Math.max(0, Math.min(value, 255));
    }


    get red(): number {
        return this._red;
    }

    get green(): number {
        return this._green;
    }

    get blue(): number {
        return this._blue;
    }

    toString(): string {
        return `Rgb(${this._red},${this._green},${this._blue})`;
    }
}