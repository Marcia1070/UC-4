//Morador: Representa um habitante do Vault com dados básicos.

export class Residents {

    private name: string
    private age: number
    private specialization: string

    public constructor(name: string, age: number, specialization: string) {
        this.name = name
        this.age = age
        this.specialization = specialization
    }


    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getSpecialization(): string {
        return this.specialization
    }

    public setName(name: string): void {
        this.name = name
    }

    public setAge(age: number): void {
        this.age = age
    }

    public setSpecialization(specialization: string): void {
        this.specialization = specialization
    }

    public Work(): void {
        console.log(`${this.name} está realizando tarefas. /is performing tasks.`);
    }
}
