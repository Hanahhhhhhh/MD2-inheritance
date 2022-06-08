"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, name) {
        this._color = "green";
        this._name = "";
        this._color = color;
        this._name = name;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Shape = Shape;
