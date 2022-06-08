"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
const Point2D_1 = require("./Point2D");
class Point3D extends Point2D_1.Point2D {
    constructor(x, y, z) {
        super(x, y);
        this._z = z;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
    get xyz() {
        return { x: this.x, y: this.y, z: this.z };
    }
    setXYZ(newX, newY, newZ) {
        this.x = newX;
        this.y = newY;
        this.z = newZ;
    }
}
exports.Point3D = Point3D;
let threeDPoint = new Point3D(1, 2, 3);
console.log(threeDPoint.xyz);
threeDPoint.setXYZ(4, 5, 6);
console.log(threeDPoint.xyz);
