import {PolarPoint} from "@/model/PolarPoint";

export class Cannon {
    id: number;

    name?: string;

    spotterPolar: PolarPoint;

    targetPolar: PolarPoint;

    lockConfiguration?: boolean;

    constructor(id: number) {
        this.id = id;
        this.spotterPolar = new PolarPoint(0, 0);
        this.targetPolar = new PolarPoint(0, 0);
    }
}