"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = void 0;
// ENCAPSULAMENTO: Atributos privados que guardam as listas de moradores e salas do sistema
class Vault {
    residents = [];
    room = [];
    constructor() {
        this.residents = [];
        this.room = [];
    }
    getResidents() {
        return this.residents;
    }
    getRoom() {
        return this.room;
    }
    setResidents(residents) {
        this.residents = residents;
    }
    setRooms(room) {
        this.room = room;
    }
    //Cadastrar Morador: Adiciona um objeto de morador para dentro da lista privada 'residents'
    registerResident(resident) {
        this.residents.push(resident);
        console.log(`[OK] Residents ${resident.getName()} registered in the system /registrado no sistema.`);
    }
    //Cadastrar Sala: Adiciona um objeto de sala para dentro da lista privada 'room'
    registerRoom(room) {
        this.room.push(room);
        console.log(`[OK] Room ${room.getName()} added to the Vault./adicionada ao Vault.`);
    }
    //Alocar Morador: Método responsável por juntar um morador e uma sala usando apenas os nomes
    //Encontrado/found    LÓGICA DO FIND(): Vira um "detetive" que passa item por item da lista.
    allocateResidents(foundResident, foundRoom) {
        const foundResidents = this.residents.find(resident => resident.getName() === foundResident);
        const foundRooms = this.room.find(room => room.getName() === foundRoom);
        if (!foundResidents || !foundRooms) {
            console.log("[ERROR] Resident or room not found");
            return;
        }
        if (foundRooms.addResidents(foundResidents)) {
            console.log(`[OK] ${foundResidents.getName()} assigned to the room /alocado na sala ${foundRooms.getName()}.`);
        }
        else {
            console.log(`[ERROR] Room ${foundRooms.getName()} It's packed. /está lotada.`);
        }
    }
    //// NOVOS MÉTODOS: LISTAR E GERENCIAR
    listResidents() {
        this.residents.forEach(resident => {
            console.log(`${resident.getName()}, ${resident.getSpecialization()}, ${resident.getAge()} years old.`);
        });
    }
    // Mostra os dados da sala atual da repetição
    // Pega os moradores especificamente DESTA sala (room)
    listRooms() {
        this.room.forEach(room => {
            console.log(`Room: ${room.getName()}, [Capacity: ${room.getResidents().length}, ${room.getCapacity()}]`);
            room.getResidents().forEach(residents => {
                console.log(`Occupant / Ocupante: ${residents.getName()},(${residents.getSpecialization()})`);
            });
        });
    }
    //GERENCIAR: Altera a profissão do morador utilizando o nome escolhido
    // Procura o morador pelo nome na lista do Vault 
    changeResidents(residentName, specialization) {
        const resident = this.residents.find(resident => resident.getName() === residentName);
        if (resident) {
            resident.setSpecialization(specialization);
            console.log(`[MANAGED] ${resident.getName()} changed to / alterado para: ${specialization}`);
        }
        else {
            console.log("[ERROR] Resident not found / Morador não encontrado");
        }
    }
    // REMOVER: Remove um morador de uma sala específica
    removeResidentFromRoom(residentName, roomName) {
        const room = this.room.find(room => room.getName() === roomName);
        if (room) {
            const occupants = room.getResidents();
            const updated = occupants.filter(resident => resident.getName() !== residentName);
            // Se o tamanho da lista não mudou, significa que o morador não estava lá dentro
            if (occupants.length === updated.length) {
                console.log(`[ERROR] ${residentName} is not in this room / Não está nesta sala.`);
                return;
            }
            room.setResidents(updated);
            console.log(`[OK] ${residentName} removed from the room / Removido da sala ${room.getName()} com sucesso.`);
        }
        else {
            console.log("[ERROR] Room not found / Sala não encontrada.");
        }
    }
}
exports.Vault = Vault;
