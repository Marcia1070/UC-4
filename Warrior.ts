import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {
    private strength: number
    private weapon: Weapon


    public constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health)
        this.strength = strength
        this.weapon = weapon
    }

    public getStrength(): number {
        return this.strength
    }

    public getWeapon(): Weapon {
        return this.weapon
    }

    public setStrength(strength: number): void {
        this.strength = strength
    }

    public setWeapon(Weapon: Weapon): void {
        this.weapon = Weapon
    }


    public attack(): void {
        console.log(`
      ${this.getName()} attacks with Longsword!
      Damage: ${this.strength}`)
    }

}