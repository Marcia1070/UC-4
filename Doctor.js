"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Residents_1 = require("./Residents");
class Doctor extends Residents_1.Residents {
    constructor(name, age, specialization) {
        super(name, age, specialization);
    }
    Work() {
        console.log(`The Doctor ${this.getName()} is working at the hospital...`);
    }
}
exports.Doctor = Doctor;
