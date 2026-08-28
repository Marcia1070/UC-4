"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    name;
    damage;
    manaCost;
    constructor(name, damage, manaCost) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getManacost() {
        return this.manaCost;
    }
    setName(name) {
        this.name = name;
    }
    setDamage(damage) {
        this.damage = damage;
    }
    setManacost(manaCost) {
        this.manaCost = manaCost;
    }
    showInfo() {
        console.log(`========================
Spell
========================
Name: ${this.name}
Damage: ${this.damage}
Mana Cost: ${this.manaCost} `);
    }
}
exports.Spell = Spell;
