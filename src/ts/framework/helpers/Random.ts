export class Random {

    static int(min: number, max: number): number {
        return Math.floor(Random.float(min, max));
    }

    static float(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}