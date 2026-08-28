"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dormitory = void 0;
const Room_1 = require("./Room");
//Dormitorio
class Dormitory extends Room_1.Room {
    constructor(name, capacity) {
        super(name, capacity);
    }
}
exports.Dormitory = Dormitory;
