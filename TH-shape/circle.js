"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(radius, color, filled) {
        super(color, filled);
        this._radius = 1.0;
        this._radius = radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(value) {
        this._radius = value;
    }
    getArea() {
        return this._radius * this._radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this._radius * Math.PI;
    }
    toString() {
        return "A Circle with radius ="
            + this.getRadius()
            + ",which is a subclass of"
            + super.toString();
    }
}
exports.Circle = Circle;
