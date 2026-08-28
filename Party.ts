import { Character } from "./Character";

export class Party {
    private name: string;
    private members: Character[];

    public constructor(name: string) {
        this.name = name;
        this.members = []
    }

    // Getters
    public getName(): string {
        return this.name;
    }

    public getMembers(): Character[] {
        return this.members;
    }

    // Setters
    public setName(name: string): void {
        this.name = name;
    }

    public setMembers(members: Character[]): void {
        this.members = members;
    }

    // Adiciona um personagem
    public addMember(character: Character): void {
        this.members.push(character);
    }

    // Remove um personagem
    public removeMember(character: Character): void {
        this.members = this.members.filter(member => member !== character)
    }

    // Exibe os membros da Party
    public showMembers(): void {
        console.log("========================");
        console.log(this.name.toUpperCase());
        console.log("========================");

        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];

            console.log(`${i + 1}. ${member.getName()} - Level ${member.getLevel()}`);

        }

    }
}