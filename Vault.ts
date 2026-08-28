import { Residents } from "./Residents";
import { Room } from "./Room";

// ENCAPSULAMENTO: Atributos privados que guardam as listas de moradores e salas do sistema

export class Vault {
  private residents: Residents[] = [];
  private room: Room[] = [];

  public constructor() {
    this.residents = []
    this.room = []
  }


  public getResidents(): Residents[] {
    return this.residents
  }
  public getRoom(): Room[] {
    return this.room
  }

  public setResidents(residents: Residents[]): void {
    this.residents = residents
  }

  public setRooms(room: Room[]): void {
    this.room = room
  }

  //Cadastrar Morador: Adiciona um objeto de morador para dentro da lista privada 'residents'

  public registerResident(resident: Residents): void {
    this.residents.push(resident);
    console.log(`[OK] Residents ${resident.getName()} registered in the system /registrado no sistema.`);
  }

  //Cadastrar Sala: Adiciona um objeto de sala para dentro da lista privada 'room'

  public registerRoom(room: Room): void {
    this.room.push(room);
    console.log(`[OK] Room ${room.getName()} added to the Vault./adicionada ao Vault.`);
  }

  //Alocar Morador: Método responsável por juntar um morador e uma sala usando apenas os nomes
  //Encontrado/found    LÓGICA DO FIND(): Vira um "detetive" que passa item por item da lista.

  public allocateResidents(foundResident: string, foundRoom: string): void {
    const foundResidents = this.residents.find(resident => resident.getName() === foundResident);
    const foundRooms = this.room.find(room => room.getName() === foundRoom);

    if (!foundResidents || !foundRooms) {
      console.log("[ERROR] Resident or room not found");
      return;
    }

    if (foundRooms.addResidents(foundResidents)) {
      console.log(`[OK] ${foundResidents.getName()} assigned to the room /alocado na sala ${foundRooms.getName()}.`);
    } else {
      console.log(`[ERROR] Room ${foundRooms.getName()} It's packed. /está lotada.`);
    }
  }


  //// NOVOS MÉTODOS: LISTAR E GERENCIAR

  public listResidents(): void {
    this.residents.forEach(resident => {
      console.log(`${resident.getName()}, ${resident.getSpecialization()}, ${resident.getAge()} years old.`);
    });
  }

  // Mostra os dados da sala atual da repetição
  // Pega os moradores especificamente DESTA sala (room)

  public listRooms(): void {
    this.room.forEach(room => {
      console.log(`Room: ${room.getName()}, [Capacity: ${room.getResidents().length}, ${room.getCapacity()}]`);
      room.getResidents().forEach(residents => {
        console.log(`Occupant / Ocupante: ${residents.getName()},(${residents.getSpecialization()})`);
      });
    })
  }

  //GERENCIAR: Altera a profissão do morador utilizando o nome escolhido
  // Procura o morador pelo nome na lista do Vault 

  public changeResidents(residentName: string, specialization: string): void {
    const resident = this.residents.find(resident => resident.getName() === residentName);
    if (resident) {
      resident.setSpecialization(specialization);
      console.log(`[MANAGED] ${resident.getName()} changed to / alterado para: ${specialization}`);
    } else {
      console.log("[ERROR] Resident not found / Morador não encontrado");
    }
  }

  // REMOVER: Remove um morador de uma sala específica
  public removeResidentFromRoom(residentName: string, roomName: string): void {
    const room = this.room.find(room => room.getName() === roomName);

    if (room) {
      const occupants = room.getResidents();
      const updated = occupants.filter(resident => resident.getName() !== residentName);

      // Se o tamanho da lista não mudou, significa que o morador não estava lá dentro
      if (occupants.length === updated.length) {
        console.log(`[ERROR] ${residentName} is not in this room / Não está nesta sala.`);
        return;
      }
      room.setResidents(updated);
      console.log(`[OK] ${residentName} removed from the room / Removido da sala ${room.getName()} com sucesso.`);
    } else {
      console.log("[ERROR] Room not found / Sala não encontrada.");
    }
  }

}