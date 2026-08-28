"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
//Sala
class Room {
    residents = [];
    name;
    capacity;
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }
    getName() {
        return this.name;
    }
    getCapacity() {
        return this.capacity;
    }
    getResidents() {
        return this.residents;
    }
    setName(name) {
        this.name = name;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
    setResidents(residents) {
        this.residents = residents;
    }
    // Ver Se há vagas 
    thereIsVacancy() {
        return this.residents.length < this.capacity;
    }
    //adicionar Morador
    addResidents(residents) {
        if (this.thereIsVacancy()) {
            this.residents.push(residents);
            return true;
        }
        return false;
    }
    //iniciar turno()
    startShift() {
        console.log(`--- Turno iniciado na sala:/ Turn started in the room ${this.name} ---`);
        // O forEach passa por cada "resident" da lista e chama o Trabalho() dele
        this.residents.forEach(resident => {
            resident.Work();
        });
    }
}
exports.Room = Room;
