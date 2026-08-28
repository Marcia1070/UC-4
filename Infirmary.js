"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infirmary = void 0;
const Room_1 = require("./Room");
//Enfermaria
class Infirmary extends Room_1.Room {
    constructor(name, capacity) {
        super(name, capacity);
    }
}
exports.Infirmary = Infirmary;
