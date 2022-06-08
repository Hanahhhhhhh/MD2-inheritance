"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
let circle = new circle_1.Circle(3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());
