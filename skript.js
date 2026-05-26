const userInputName = prompt("Podaj imię postaci (minimum 3 znaki)");

while (!userInputName || userInputName.length < 3) {
    alert("Imię musi mieć minimum 3 znaki!");
    userInputName = prompt("Podaj imię postaci (minimum 3 znaki)");
}

const userInputRole = prompt("Podaj rolę (wojownik/mag/łucznik)").toLowerCase();


while (userInputRole !== "wojownik" && userInputRole !== "mag" && userInputRole !== "łucznik") {
    alert("Dostępne role: wojownik, mag, łucznik");
    userInputRole = prompt("Podaj rolę (wojownik/mag/łucznik)").toLowerCase();
}

let userInputSkills = [];
let skillCount = 0;


console.log("Podaj umiejętności (maksymalnie 5, wpisz 'koniec' aby zakończyć):");

while (skillCount < 5) {
    let skill = prompt(`Umiejętność ${skillCount + 1} (lub wpisz 'koniec'):`);
    
    if (skill && skill.toLowerCase() === 'koniec') {
        break;
    }
    
    if (skill && skill.trim() !== "") {
        userInputSkills.push(skill);
        skillCount++;
    } else if (skill === "") {
        alert("Umiejętność nie może być pusta!");
    }
}

const userInputWeapon = prompt("Broń:");
const userInputArmor = prompt("Zbroja:");
const userInputItem1 = prompt("Przedmiot 1:");
const userInputItem2 = prompt("Przedmiot 2:");

let character = {
    name: userInputName,
    role: userInputRole,
    level: 1,
    skills: userInputSkills,
    equipment: {
        weapon: userInputWeapon,
        armor: userInputArmor,
        items: [userInputItem1, userInputItem2]
    }
}

console.log("=== Stworzona postać ===");
console.log(character);

function createCharacter(name, role) {
    let startWeapon = null;
    let startArmor = null;
    let startItems = [];
    
  
    if (role === "wojownik") {
        startWeapon = "sword";
        startArmor = "shield";
        startItems = ["Eliksir zdrowia", "Mapa"];
    } else if (role === "mag") {
        startWeapon = "staff";
        startArmor = "robe";
        startItems = ["Mana eliksir", "Księga zaklęć"];
    } else if (role === "łucznik") {
        startWeapon = "bow";
        startArmor = "leather armor";
        startItems = ["Strzały", "Zioła lecznicze"];
    }
    
    return {
        name: name,
        role: role,
        level: 1,
        skills: [],
        equipment: {
            weapon: startWeapon,
            armor: startArmor,
            items: startItems
        }
    };
}

function addItem(character, item) {
    character.equipment.items.push(item);
}

function learnSkill(character, newSkill) {
    
    if (character.skills.length >= 5) {
        console.log(`Nie można dodać umiejętności "${newSkill}". Maksymalna liczba umiejętności to 5!`);
        return false;
    }
    character.skills.push(newSkill);
    console.log(`Dodano umiejętność: ${newSkill}`);
    return true;
}

function levelUp(character) {
    character.level += 1;
    console.log(`${character.name} awansował na poziom ${character.level}!`);
}

function characterDescription(character) {
    
    let itemsList = "";
    if (character.equipment.items.length > 0) {
        for (let i = 0; i < character.equipment.items.length; i++) {
            itemsList += `${i + 1}. ${character.equipment.items[i]}\n   `;
        }
    } else {
        itemsList = "brak";
    }
    
    
    let skillsList = "";
    if (character.skills.length > 0) {
        for (let i = 0; i < character.skills.length; i++) {
            skillsList += `${i + 1}. ${character.skills[i]}\n   `;
        }
    } else {
        skillsList = "brak";
    }
    
    return `\n=== OPIS POSTACI ===
Imię: ${character.name}
Rola: ${character.role}
Poziom: ${character.level}
Umiejętności:
   ${skillsList}
Broń: ${character.equipment.weapon || "brak"}
Zbroja: ${character.equipment.armor || "brak"}
Przedmioty:
   ${itemsList}
=====================`;
}


console.log("\n=== TWORZENIE NOWEJ POSTACI ===");
let hero = createCharacter("Arthas", "wojownik");
console.log(characterDescription(hero));

console.log("\n=== DODAWANIE UMIEJĘTNOŚCI ===");
learnSkill(hero, "Mocne uderzenie");
learnSkill(hero, "Tarcza defensywna");
learnSkill(hero, "Okrzyk bojowy");
learnSkill(hero, "Szybkie cięcie");
learnSkill(hero, "Wirujący atak");
learnSkill(hero, "Niemożliwa umiejętność"); 

console.log("\n=== DODAWANIE PRZEDMIOTÓW ===");
addItem(hero, "Eliksir życia");
addItem(hero, "Kamień ochronny");

console.log("\n=== AWANS ===");
levelUp(hero);

console.log("\n=== OSTATECZNY OPIS POSTACI ===");
console.log(characterDescription(hero));


console.log("\n\n=== TEST DLA MAGA ===");
let mage = createCharacter("Merlin", "mag");
console.log(characterDescription(mage));

console.log("\n=== TEST DLA ŁUCZNIKA ===");
let archer = createCharacter("Legolas", "łucznik");
console.log(characterDescription(archer));