import { Residents } from "./Residents";

export class Doctor extends Residents {

    public constructor(name: string, age: number, specialization: string) {
        super(name, age, specialization)
    }

    public Work(): void {
        console.log(`The Doctor ${this.getName()} is working at the hospital...`)
    }

}