"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
class Cylinder extends circle_1.Circle {
    constructor(color, filled, radius, height) {
        super(color, filled, radius);
        this.height = height;
    }
    getCylindricalVolume() {
        return super.getArea() * this.height;
    }
}
