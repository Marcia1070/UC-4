"use strict";
//Morador: Representa um habitante do Vault com dados básicos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residents = void 0;
class Residents {
    name;
    age;
    specialization;
    constructor(name, age, specialization) {
        this.name = name;
        this.age = age;
        this.specialization = specialization;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSpecialization() {
        return this.specialization;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
    Work() {
        console.log(`${this.name} está realizando tarefas. /is performing tasks.`);
    }
}
exports.Residents = Residents;
