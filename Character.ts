export class Character {
    private name: string;
    private level: number;
    private health: number;

    public constructor(name: string, level: number, health: number) {
        this.name = name;
        this.level = level;
        this.health = health;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }

    public getHealth(): number {
        return this.health;
    }

    public setName(name: string): void {
        this.name = name
    }

    public setLevel(level: number): void {
        this.level = level
    }

    public setHealth(): void {
        this.health -= 0 ? 0 : this.health
    }

    public showInfo(): void {
        console.log(`========================
    Character
    ========================
    Name: ${this.name}
    Level: ${this.level}
    Health: ${this.health}`)
    }

    public takeDamage(amount: number): void {
        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}
