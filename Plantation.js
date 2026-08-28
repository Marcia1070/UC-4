"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plantation = void 0;
const Room_1 = require("./Room");
//Plantacao
class Plantation extends Room_1.Room {
    constructor(name, capacity) {
        super(name, capacity);
    }
}
exports.Plantation = Plantation;
