const userInputName = prompt("name")
const userInputRole = prompt("role")
const userInputSkills = prompt("skills 1")
const userInputSkills2 = prompt("skills 2")
const userInputSkills3 = prompt("skills 3")
const userInputSkills4 = prompt("skills 4")
const userInputSkills5 = prompt("skills 5")
const userInputWeapon = prompt("weapon")
const userInputArmor = prompt("armor")
const userInputItem1 = prompt("item 1")
const userInputItem2 = prompt("item 2")


let character = {
name: userInputName,
role: userInputRole,
level: 1,
skills: [userInputSkills, userInputSkills2, userInputSkills3, userInputSkills4, userInputSkills5],
equipment: {
weapon: userInputWeapon,
armor: userInputArmor,
items: [userInputItem1, userInputItem2]
}
}


console.log(character)


function createCharacter(name, role) {
return {
name: name,
role: role,
level: 1,
skills: [],
equipment: {
weapon: null,
armor: null,
items: []
}
};
}


function addItem(character, item) {
character.equipment.items.push(item);
}


function learnSkill(character, newSkill) {
character.skills.push(newSkill);
}


function levelUp(character) {
character.level += 1;
}


function characterDescription(character) {
return `\nPostać: ${character.name}\nRola: ${character.role}\nPoziom: ${character.level}\nUmiejętności: ${character.skills.join(", ") || "brak"}\nBroń: ${character.equipment.weapon || "brak"}\nZbroja: ${character.equipment.armor || "brak"}\nPrzedmioty: ${character.equipment.items.join(", ") || "brak"}`.trim();
}


let hero = createCharacter("Arthas", "Wojownik");
learnSkill(hero, "Mocne uderzenie");
addItem(hero, "Eliksir życia");
levelUp(hero);
console.log(characterDescription(hero));