"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
class Triangle extends Shape_1.Shape {
    constructor(color, name, side1, side2, side3) {
        super(color, name);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    get side1() {
        return this._side1;
    }
    set side1(value) {
        this._side1 = value;
    }
    get side2() {
        return this._side2;
    }
    set side2(value) {
        this._side2 = value;
    }
    get side3() {
        return this._side3;
    }
    set side3(value) {
        this._side3 = value;
    }
    checkingTriangle() {
        return this.side1 + this._side2 > this._side3 &&
            this.side1 + this._side3 > this._side2 &&
            this.side3 + this._side2 > this._side1;
    }
    getArea() {
        if (this.checkingTriangle) {
            return this._side1 + this._side2 + this._side3;
        }
        else {
            return console.log("this is not the Triangle");
        }
    }
    getPerimeter() {
        if (this.checkingTriangle) {
            let S = this.getArea() / 2;
            return Math.sqrt(S * (S - this.side1) * (S - this.side2) * (S - this.side3));
        }
        else {
            return console.log("this is not the Triangle");
        }
    }
}
exports.Triangle = Triangle;
let testing = new Triangle("red", "triangle", 3, 4, 5);
console.log(testing.getPerimeter());
console.log(testing.getArea());
