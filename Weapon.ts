export class Weapon {
    private name: string;
    private damage: number;

    public constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public getName(): string {
        return this.name;
    }

    public getdamage(): number {
        return this.damage;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDamage(damage: number): void {
        this.damage = damage;
    }

    public showInfo(): void {
        console.log(`========================
    Weapon
    ========================
    Name: ${this.name}
    Damage: ${this.damage}`)
    }
}

