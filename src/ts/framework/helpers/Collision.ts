import {IObject} from "../types/IObject";

export class Collision {
    static checkCollision(aTopX: number, aTopY: number, aBottomX: number, aBottomY: number,
                          bTopX: number, bTopY: number, bBottomX: number, bBottomY: number,): boolean {
        return !(
            aBottomX < bTopX ||
            aBottomY < bTopY ||
            aTopX > bBottomX ||
            aTopY > bBottomY);
    }

    static checkCollisionInterface(a: IObject, b: IObject): boolean {
        return !(
            a.position.x + a.width < b.position.x ||
            a.position.y + a.height < b.position.y ||
            a.position.x > b.position.x + b.width ||
            a.position.y > b.position.y + b.height);
    }
}