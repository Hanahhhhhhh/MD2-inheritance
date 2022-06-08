"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this._color = "blue";
        this._filled = true;
        this._color = color;
        this._filled = filled;
    }
    getColor() {
        return this._color;
    }
    setColor(value) {
        this._color = value;
    }
    isFilled() {
        return this._filled;
    }
    setFilled(value) {
        this._filled = value;
    }
    toString() {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    }
}
exports.Shape = Shape;
