"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    mana;
    spell;
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    getSpell() {
        return this.spell;
    }
    setMana(mana) {
        this.mana = mana;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    castSpell() {
        if (this.mana >= this.spell.getManacost()) {
            this.mana -= this.spell.getManacost();
            console.log(`
    ${this.getName()} casts ${this.spell.getName()}
    Damage: ${this.spell.getDamage()}
    Mana remaining: ${this.mana}
    `);
        }
        else {
            console.log(`${this.getName()} não tem mana suficiente para lançar ${this.spell.getName()}!`);
        }
    }
}
exports.Mage = Mage;
