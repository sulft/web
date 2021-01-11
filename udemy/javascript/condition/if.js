//les condition if ... else

/*
let nombre = 12 ;

if ( nombre < 11) {
    console.log("Dans le if !"); 
} else { console.log("Dans le else ! ")}
*/

//challenge vérifier l'age d'un utilisateur.
/*
-18 ans afficher => vous n'êtes pas majeur.
entre 18 et 20 ans => vous êtes majeur en france.
21+ => vous êtes majeur partout, à vous les casinos !
*/

let age = 22

if ( age<18 ) { 
    console.log("Vous n'êtes pas majeur !") 
} else if ( age >=18 && age <=20) { 
    console.log("Vous êtes majeur en france !") 
} else {
    console.log("Vous êtes majeur partout, à vous les casinos !") 
}