"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
class Cylinder extends Circle_1.Circle {
    constructor(color, filled, radius, height) {
        super(color, filled, radius);
        this.height = height;
    }
    getCylindricalVolume() {
        return super.getArea() * this.height;
    }
}
