//.Importando moradores especializados

import { Doctor } from "./Doctor";
import { Engineer } from "./Engineer";
import { Soldier } from "./Soldier";
import { Scientist } from "./Scientist";
import { Reactor } from "./Reactor";
import { Purifier } from "./Purifier";
import { Plantation } from "./Plantation";
import { Infirmary } from "./Infirmary";
import { Workshop } from "./Workshop";
import { Vault } from "./Vault";
import { Room } from "./Room";
import { Residents } from "./Residents";
import { Dormitory } from "./Dormitory ";


const ask = require(`readline-sync`)


// . BOOT DO SISTEMA: Simulando a inicialização oficial do Vault_OS

console.log(`> boot supervisor.exe`)
console.log(`

[OK] Loading residents...
[OK] Loading rooms... 
[OK] Ready-to-use management system 

`)
ask.question(`> Awaiting supervisor/aguardando supervisor_: Press Enter`)


const myVault: Vault = new Vault()

//Cadastrando as Salas 

const reactor: Room = new Room("Reactor", 2,);
const purifier: Room = new Room("Purifier", 3);
const plantation: Room = new Room("Plantation", 5);
const infirmary: Room = new Room("Infirmary", 3);
const workshop: Room = new Room("Workshop", 4);
const dormitory: Room = new Room("Dormitory", 6);


// Cadastrando os Moradores (Objetos a partir das classes especializadas)
const residents1: Residents = new Engineer("Preston Garvey", 23, "Electrical Maintenance /Manutenção Elétrica");
const residents2: Residents = new Doctor("Moira Brown", 35, "General Medicine /Medicina Geral");
const residents3: Residents = new Soldier("Paulo Danse", 19, "Perimeter Defense /Defesa de Perímetro");
const residents4: Residents = new Scientist("Madison Li", 28, "Nuclear physics /Física Nuclear");

// Cadastrando as salas no seu sistema central Vault

myVault.registerRoom(reactor)
myVault.registerRoom(purifier)
myVault.registerRoom(plantation)
myVault.registerRoom(infirmary)
myVault.registerRoom(workshop)
myVault.registerRoom(dormitory)


// Cadastrando os moradores no seu sistema central Vault

myVault.registerResident(residents1)
myVault.registerResident(residents2)
myVault.registerResident(residents3)
myVault.registerResident(residents4)

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

`)

    let choice = ask.question("Escolha: ");

//1.Registo de Morador
    switch (choice) {
        case "1": {
            const name = ask.question("Name: ");
            const age = ask.question("Age: ");

            console.log(`\n
[1] Engineer  
[2] Doctor  
[3] Soldier
[4] Scientist
`);
            const type = ask.question("Type:  ");
            myVault.registerRoom(infirmary)
            console.log(`\n
[1]Reactor 
[2]Purifier 
[3]Plantation 
[4]Infirmary  
[5]WorkShop 
[6]Dormitory
`)
            const Specialization = ask.question("Specialization:");

            // Criamos um mapa ligando o número digitado à classe correspondente

            const clases: any = { "1": Engineer, "2": Doctor, "3": Soldier, "4": Scientist };
            const SelectedClass = clases[type];

            // Se o número existir no mapa, criamos o morador em uma única linha!

            if (SelectedClass) {
                myVault.registerResident(new SelectedClass(name, age, Specialization));
            } else {
                console.log(" Invalid type.");
            }
            break;
        }

//2.Lista de Morador

        case "2": {
            myVault.listResidents();
            break;
        }
//3.Registrar Sala
        case "3": {
            const roomName = ask.question(`
            [1]Reactor 
            [2]Purifier 
            [3]Plantation 
            [4]Infirmary  
            [5]WorkShop 
            [6]Dormitory

            Room Name:
            `);

            const capacity = ask.question("Max Capacity: ");
            myVault.registerRoom(new Room(roomName, capacity));
            break;
        }
//4.Lista das Salas
        case "4": {
            myVault.listRooms();
            break;
        }

//5.Atribuir Morador
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
            }
            );

            if (isAlreadyAllocated) {
                console.log(`${residentsName} is already assigned to another room! /já está atribuído a outra sala!`);
            } else {
                myVault.allocateResidents(residentsName, roomName);
            }
            break;

        }

//Remover o residente da Sala
        case "6": {

            const residentesName = ask.question("Resident Name: ");
            const roomName = ask.question("Room Name: ");
            myVault.removeResidentFromRoom(residentesName, roomName);
            break;
        }

//Visualizar os Moradores de uma Sala
        case "7": {
            const roomName = ask.question("Room Name: ");
            const roomFound = myVault.getRoom().find(room => room.getName().toLowerCase() === roomName.toLowerCase());

            if (roomFound) {
                roomFound.startShift(); // Dispara o comportamento polimórfico original (Work())
            } else {
                console.log("Room not found.");
            }
            break;
        }
//Saida
        case "0": {
            user = false; // Desliga o loop while e fecha o programa
            break;
        }
        
//Se nenhuma for Válida cai no default
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