"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reactor = void 0;
const Room_1 = require("./Room");
//Reator
class Reactor extends Room_1.Room {
    constructor(name, capacity) {
        super(name, capacity);
    }
}
exports.Reactor = Reactor;
