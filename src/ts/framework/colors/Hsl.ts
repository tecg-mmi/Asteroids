import {IColor} from "../types/IColor";

export class Hsl implements IColor {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;


    constructor(hue: number, saturation: number, lightness: number) {
        this._hue = hue;
        this._saturation = saturation;
        this._lightness = lightness;
    }


    set hue(value: number) {
        this._hue = Math.max(0, Math.min(value, 360));
    }

    set saturation(value: number) {
        this._saturation = Math.max(0, Math.min(value, 100));
    }

    set lightness(value: number) {
        this._lightness = Math.max(0, Math.min(value, 100));
    }

    get hue(): number {
        return this._hue;
    }

    get saturation(): number {
        return this._saturation;
    }

    get lightness(): number {
        return this._lightness;
    }

    toString(): string {
        return `Hsl(${this.hue},${this.saturation},${this.lightness})`
    }
}