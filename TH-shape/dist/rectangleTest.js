"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let rectangle = new rectangle_1.Rectangle(2.5, 3.8, "white", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());
