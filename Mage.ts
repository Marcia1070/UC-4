import { Character } from "./Character"
import { Spell } from "./Spell"

export class Mage extends Character {
    private mana: number
    private spell: Spell


    public constructor(name: string, level: number, health: number, mana: number, spell: Spell) {
        super(name, level, health)
        this.mana = mana
        this.spell = spell
    }

    public getMana(): number {
        return this.mana
    }

    public getSpell(): Spell {
        return this.spell
    }

    public setMana(mana: number): void {
        this.mana = mana
    }

    public setSpell(spell: Spell): void {
        this.spell = spell
    }


    public castSpell(): void {
        if (this.mana >= this.spell.getManacost()) {
            this.mana -= this.spell.getManacost()

            console.log(`
    ${this.getName()} casts ${this.spell.getName()}
    Damage: ${this.spell.getDamage()}
    Mana remaining: ${this.mana}
    `)
        } else {
            console.log(`${this.getName()} não tem mana suficiente para lançar ${this.spell.getName()}!`)

        }
    }
}