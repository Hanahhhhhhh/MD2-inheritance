"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
class Point2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get xy() {
        return { x: this.x, y: this.y };
    }
    setXY(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
exports.Point2D = Point2D;
