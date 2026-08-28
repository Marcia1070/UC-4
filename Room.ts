import { Residents } from "./Residents"

//Sala

export class Room {
  private residents: Residents[] = []
  private name: string
  private capacity: number



  public constructor(name: string, capacity: number) {
    this.name = name
    this.capacity = capacity
    this.residents = []
  }


  public getName(): string {
    return this.name
  }

  public getCapacity(): number {
    return this.capacity
  }

  public getResidents(): Residents[] {
    return this.residents
  }

  public setName(name: string): void {
    this.name = name
  }

  public setCapacity(capacity: number): void {
    this.capacity = capacity
  }

  public setResidents(residents: Residents[]): void {
    this.residents = residents

  }
  // Ver Se há vagas 

  public thereIsVacancy(): boolean {
    return this.residents.length < this.capacity;
  }

  //adicionar Morador

  public addResidents(residents: Residents): boolean {
    if (this.thereIsVacancy()) {
      this.residents.push(residents);
      return true;
    }
    return false;
  }

  //iniciar turno()

  public startShift(): void {
    console.log(`--- Turno iniciado na sala:/ Turn started in the room ${this.name} ---`);

    // O forEach passa por cada "resident" da lista e chama o Trabalho() dele

    this.residents.forEach(resident => {
      resident.Work();
    });
  }
}

