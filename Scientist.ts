import { Residents } from "./Residents";

export class Scientist extends Residents {

    public constructor(name: string, age: number, specialization: string) {
        super(name, age, specialization)
    }

    public Work(): void {
        console.log(`The Scientist ${this.getName()} is researching genetic improvements.`)
        // O Cientista está pesquisando melhorias genéticas
    }

}