import { Residents } from "./Residents";

export class Soldier extends Residents {

    public constructor(name: string, age: number, specialization: string) {
        super(name, age, specialization)
    }

    public Work(): void {
        console.log(`The Soldier ${this.getName()} is going to war....`) //O soldado esta indo para guerra
    }

}