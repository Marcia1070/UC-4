"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    name;
    level;
    health;
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getHealth() {
        return this.health;
    }
    setName(name) {
        this.name = name;
    }
    setLevel(level) {
        this.level = level;
    }
    setHealth() {
        this.health -= 0 ? 0 : this.health;
    }
    showInfo() {
        console.log(`========================
    Character
    ========================
    Name: ${this.name}
    Level: ${this.level}
    Health: ${this.health}`);
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
exports.Character = Character;
