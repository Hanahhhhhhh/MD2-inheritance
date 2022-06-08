"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(color, filled, radius) {
        this.color = "green";
        this.filled = true;
        this.radius = 1.0;
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}
exports.Circle = Circle;
