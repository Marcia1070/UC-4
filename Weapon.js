"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    getName() {
        return this.name;
    }
    getdamage() {
        return this.damage;
    }
    setName(name) {
        this.name = name;
    }
    setDamage(damage) {
        this.damage = damage;
    }
    showInfo() {
        console.log(`========================
    Weapon
    ========================
    Name: ${this.name}
    Damage: ${this.damage}`);
    }
}
exports.Weapon = Weapon;
