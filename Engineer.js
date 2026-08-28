"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const Residents_1 = require("./Residents");
class Engineer extends Residents_1.Residents {
    constructor(name, age, specialization) {
        super(name, age, specialization);
    }
    Work() {
        console.log(`The Engineer ${this.getName()} is working mach`); //O engenheiro está trabalhando a todo vapor.
    }
}
exports.Engineer = Engineer;
