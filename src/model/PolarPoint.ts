import {CartesianPoint} from "@/model/CartesianPoint";

export class PolarPoint {

    private _r: number;

    private _theta: number;

    constructor(r: number, theta: number) {
        this._r = r;
        this._theta = theta;
    }

    get r() {
        return this._r;
    }

    get theta() {
        return this._theta;
    }

    public toCartesian(): CartesianPoint {
        return new CartesianPoint(
            this._r * Math.cos((this._theta * Math.PI) / 180),
            this._r * Math.sin((this._theta * Math.PI) / 180));
    }

    public add(other: PolarPoint): PolarPoint {
        const cartesianThis = this.toCartesian();
        const cartesianOther = other.toCartesian();

        const xTotal = cartesianThis.x + cartesianOther.x;
        const yTotal = cartesianThis.y + cartesianOther.y;

        const rResult = Math.sqrt(xTotal * xTotal + yTotal * yTotal);
        const thetaResult = (Math.atan2(yTotal, xTotal) * 180) / Math.PI;

        return new PolarPoint(rResult, thetaResult);
    }
}