"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    name;
    members;
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    // Getters
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members;
    }
    // Setters
    setName(name) {
        this.name = name;
    }
    setMembers(members) {
        this.members = members;
    }
    // Adiciona um personagem
    addMember(character) {
        this.members.push(character);
    }
    // Remove um personagem
    removeMember(character) {
        this.members = this.members.filter(member => member !== character);
    }
    // Exibe os membros da Party
    showMembers() {
        console.log("========================");
        console.log(this.name.toUpperCase());
        console.log("========================");
        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            console.log(`${i + 1}. ${member.getName()} - Level ${member.getLevel()}`);
        }
    }
}
exports.Party = Party;
