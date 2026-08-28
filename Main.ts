import { Weapon } from "./Weapon";
import { Spell } from "./Spell";
import { Party } from "./Party";
import { Warrior } from "./Warrior"
import { Mage } from "./Mage";

//Armas:
// 1. CADASTRAR AS ARMAS DOS PERSONAGENS (Mínimo 2)
const weapon1: Weapon = new Weapon("Adaga/Dagger", 26)
const weapon2: Weapon = new Weapon("Espada/Sword", 25)

// 2. CADASTRAR AS MAGIAS DOS MAGOS(Mínimo 2)
// Dano: / Custo: 
const spell1: Spell = new Spell("Estilo Sombrio/Dark Style", 50, 25)
const spell2: Spell = new Spell("Estilo Mistico/Mystical Style", 60, 18)

// 3. CADASTRAR OS PERSONAGENS (2 Warriors e 2 Mages)
const warrior1: Warrior = new Warrior("Aragorn", 10, 150, 18, weapon1)
const warrior2: Warrior = new Warrior("Gimli", 9, 165, 22, weapon2)

const mage1: Mage = new Mage("Gandalf", 12, 100, 150, spell1)
const mage2: Mage = new Mage("Merlin", 11, 90, 80, spell2)

// 4. CRIAR UMA PARTY
const party: Party = new Party(" THE DRAGON SLAYERS ");

// 5. ADICIONAR OS PERSONAGENS À PARTY

party.addMember(warrior1)
party.addMember(warrior2)
party.addMember(mage1)
party.addMember(mage2)

// 6. EXIBIR OS MEMBROS DA PARTY

party.showMembers();

// 7. EXIBIR AS INFORMAÇÕES DETALHADAS DOS PERSONAGENS
warrior1.showInfo();
warrior2.showInfo();
mage1.showInfo();
mage2.showInfo();

// 8. FAZER OS WARRIORS ATACAREM
warrior1.attack();
warrior2.attack();

// 9 e 10. FAZER OS MAGES LANÇAREM MAGIAS E DEMONSTRAR O CONSUMO DE MANA

mage1.castSpell();
mage2.castSpell();

console.log(`${mage1.getMana()}`)
console.log(`${mage2.getMana()}`)


// 11. CAUSAR DANO A PELO MENOS UM PERSONAGEM
console.log(`Vida inicial do Aragorn: ${warrior1.getHealth()}`);
warrior1.takeDamage(45);
console.log(`Vida do Aragorn após receber 45 de dano: ${warrior1.getHealth()}`);

// 12. ALTERAR ALGUM ATRIBUTO UTILIZANDO UM SETTER
// Usando o método setter de level

console.log(`Level antigo do Gimli: ${warrior2.getLevel()}`);
warrior2.setLevel(10);
console.log(`Novo Level do Gimli (via Setter): ${warrior2.getLevel()}`);

// 13. REMOVER UM PERSONAGEM DA PARTY

party.removeMember(mage2);

// 14. EXIBIR NOVAMENTE A PARTY APÓS A REMOÇÃO

party.showMembers()