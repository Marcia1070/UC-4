"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workshop = void 0;
const Room_1 = require("./Room");
//Oficina
class Workshop extends Room_1.Room {
    constructor(name, capacity) {
        super(name, capacity);
    }
}
exports.Workshop = Workshop;
