import { Room } from "./Room";

//Oficina

export class Workshop extends Room {

    public constructor(name: string, capacity: number) {
        super(name, capacity)
    }

}