"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
const Residents_1 = require("./Residents");
class Soldier extends Residents_1.Residents {
    constructor(name, age, specialization) {
        super(name, age, specialization);
    }
    Work() {
        console.log(`The Soldier ${this.getName()} is going to war....`); //O soldado esta indo para guerra
    }
}
exports.Soldier = Soldier;
