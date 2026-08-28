"use strict";
//.Importando moradores especializados
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = require("./Doctor");
const Engineer_1 = require("./Engineer");
const Soldier_1 = require("./Soldier");
const Scientist_1 = require("./Scientist");
const Vault_1 = require("./Vault");
const Room_1 = require("./Room");
const ask = __importStar(require("readline-sync"));
// . BOOT DO SISTEMA: Simulando a inicialização oficial do Vault_OS
console.log(`> boot supervisor.exe`);
console.log(`
[OK] Loading residents... /Carregando moradores...
[OK] Loading rooms... /Carregando salas...
[OK] Ready-to-use management system /Sistema de gerenciamento pronto.
`);
ask.question(`> Awaiting supervisor/aguardando supervisor_: Press Enter`);
const myVault = new Vault_1.Vault();
//Cadastrando as Salas do Vault
const reactor = new Room_1.Room("Reactor", 2);
const purifier = new Room_1.Room("Purifier", 3);
const plantation = new Room_1.Room("Plantation", 1);
// Cadastrando os Moradores (Objetos a partir das classes especializadas)
const residents1 = new Engineer_1.Engineer("Preston Garvey", 23, "Electrical Maintenance /Manutenção Elétrica");
const residents2 = new Doctor_1.Doctor("Moira Brown", 35, "General Medicine /Medicina Geral");
const residents3 = new Soldier_1.Soldier("Paulo Danse", 19, "Perimeter Defense /Defesa de Perímetro");
const residents4 = new Scientist_1.Scientist("Madison Li", 28, "Nuclear physics /Física Nuclear");
// Cadastrando as salas no seu sistema central Vault
myVault.registerRoom(reactor);
myVault.registerRoom(purifier);
myVault.registerRoom(plantation);
// Cadastrando os moradores no seu sistema central Vault
myVault.registerResident(residents1);
myVault.registerResident(residents2);
myVault.registerResident(residents3);
myVault.registerResident(residents4);
// LOOP DO MENU INTERATIVO (VAULT-OS)
let user = true;
while (user) {
    console.clear();
    console.log(`
==============================
       VAULT 101
==============================
[1] Register resident
[2] List residents
[3] Register room
[4] List rooms
[5] Assign resident
[6] Remove resident from room
[7] View residents of a room
[0] Exit

`);
    let choice = ask.question("Escolha: ");
    switch (choice) {
        case "1": {
            const name = ask.question("Nome: ");
            const age = parseInt(ask.question("Idade: "));
            console.log("\n[1] Engineer | [2] Doctor | [3] Soldier | [4] Scientist");
            const type = ask.question("Type: ");
            const Specialization = ask.question("Specialization: ");
            // Criamos um mapa ligando o número digitado à classe correspondente
            const clases = { "1": Engineer_1.Engineer, "2": Doctor_1.Doctor, "3": Soldier_1.Soldier, "4": Scientist_1.Scientist };
            const SelectedClass = clases[type];
            // Se o número existir no mapa, criamos o morador em uma única linha!
            if (SelectedClass) {
                myVault.registerResident(new SelectedClass(name, age, Specialization));
            }
            else {
                console.log(" Invalid type.");
            }
            break;
        }
        case "2": {
            myVault.listResidents();
            break;
        }
        case "3": {
            const roomName = ask.question("Room Name: ");
            const capacity = parseInt(ask.question("Max Capacity: "));
            myVault.registerRoom(new Room_1.Room(roomName, capacity));
            break;
        }
        case "4": {
            myVault.listRooms();
            break;
        }
        case "5": {
            const residentsName = ask.question("Resident Name: ");
            const roomName = ask.question("Room Name: ");
            let isAlreadyAllocated = false; //Já está alocado
            myVault.getRoom().forEach(room => {
                room.getResidents().forEach(resident => {
                    if (resident.getName().toLowerCase() === residentsName.toLowerCase()) {
                        isAlreadyAllocated = true;
                    }
                });
            });
            if (isAlreadyAllocated) {
                console.log(`${residentsName} is already assigned to another room! /já está atribuído a outra sala!`);
            }
            else {
                myVault.allocateResidents(residentsName, roomName);
            }
            break;
        }
        case "6": {
            const residentesName = ask.question("Resident Name: ");
            const roomName = ask.question("Room Name: ");
            myVault.removeResidentFromRoom(residentesName, roomName);
            break;
        }
        case "7": {
            const roomName = ask.question("Room Name: ");
            const roomFound = myVault.getRoom().find(room => room.getName().toLowerCase() === roomName.toLowerCase());
            if (roomFound) {
                roomFound.startShift(); // Dispara o comportamento polimórfico original (Work())
            }
            else {
                console.log("Room not found.");
            }
            break;
        }
        case "0": {
            user = false; // Desliga o loop while e fecha o programa
            break;
        }
        default: {
            console.log("Invalid choice.");
            break;
        }
    }
    // Importante: Pausa o console para você conseguir ler o que aconteceu antes do console.clear() limpar a tela
    if (user) {
        ask.question("Press Enter...");
    }
}
