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


fi (
    userInputName == => 3
) {

}


  let character = {
        name:  userInputName , 
        role:  userInputRole ,
        level: 1,
        skills: [ userInputSkills , userInputSkills2 , userInputSkills3 , userInputSkills4 , userInputSkills5 ] ,
        equipment: {
            weapon:  userInputWeapon ,
            armor:  userInputArmor ,
           items: [userInputItem1 , userInputItem2 ]
        }
   }

    console.log( character )

