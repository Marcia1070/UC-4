export class Spell {
    private name: string
    private damage: number
    private manaCost: number

    public constructor(name: string, damage: number, manaCost: number) {
        this.name = name
        this.damage = damage
        this.manaCost = manaCost
    }

    public getName(): string {
        return this.name
    }

    public getDamage(): number {
        return this.damage
    }

    public getManacost(): number {
        return this.manaCost
    }

    public setName(name: string): void {
        this.name = name
    }

    public setDamage(damage: number): void {
        this.damage = damage
    }

    public setManacost(manaCost: number): void {
        this.manaCost = manaCost
    }

    public showInfo(): void {
        console.log(`========================
Spell
========================
Name: ${this.name}
Damage: ${this.damage}
Mana Cost: ${this.manaCost} `)
    }
}