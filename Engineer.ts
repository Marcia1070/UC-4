import { Residents } from "./Residents";

export class Engineer extends Residents {

    public constructor(name: string, age: number, specialization: string) {
        super(name, age, specialization)
    }

    public Work(): void {
        console.log(`The Engineer ${this.getName()} is working mach`) //O engenheiro está trabalhando a todo vapor.
    }

}