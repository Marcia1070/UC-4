"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Weapon_1 = require("./Weapon");
const Spell_1 = require("./Spell");
const Party_1 = require("./Party");
const Warrior_1 = require("./Warrior");
const Mage_1 = require("./Mage");
//Armas:
// 1. CADASTRAR AS ARMAS DOS PERSONAGENS (Mínimo 2)
const weapon1 = new Weapon_1.Weapon("Adaga/Dagger", 26);
const weapon2 = new Weapon_1.Weapon("Espada/Sword", 25);
// 2. CADASTRAR AS MAGIAS DOS MAGOS(Mínimo 2)
// Dano: / Custo: 
const spell1 = new Spell_1.Spell("Estilo Sombrio/Dark Style", 50, 25);
const spell2 = new Spell_1.Spell("Estilo Mistico/Mystical Style", 60, 18);
// 3. CADASTRAR OS PERSONAGENS (2 Warriors e 2 Mages)
const warrior1 = new Warrior_1.Warrior("Aragorn", 10, 150, 18, weapon1);
const warrior2 = new Warrior_1.Warrior("Gimli", 9, 165, 22, weapon2);
const mage1 = new Mage_1.Mage("Gandalf", 12, 100, 150, spell1);
const mage2 = new Mage_1.Mage("Merlin", 11, 90, 80, spell2);
// 4. CRIAR UMA PARTY
const party = new Party_1.Party(" THE DRAGON SLAYERS ");
// 5. ADICIONAR OS PERSONAGENS À PARTY
party.addMember(warrior1);
party.addMember(warrior2);
party.addMember(mage1);
party.addMember(mage2);
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
console.log(`${mage1.getMana()}`);
console.log(`${mage2.getMana()}`);
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
party.showMembers();
