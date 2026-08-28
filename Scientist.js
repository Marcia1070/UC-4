"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scientist = void 0;
const Residents_1 = require("./Residents");
class Scientist extends Residents_1.Residents {
    constructor(name, age, specialization) {
        super(name, age, specialization);
    }
    Work() {
        console.log(`The Scientist ${this.getName()} is researching genetic improvements.`);
        // O Cientista está pesquisando melhorias genéticas
    }
}
exports.Scientist = Scientist;
