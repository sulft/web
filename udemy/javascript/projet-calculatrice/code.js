//projet calculatrice

/* Mes variables*/
let choix;
let nombre1;
let nombre2;

/* choix du type de calcul */
do {
     choix = prompt("Que souhaitez-vous faire ?\n\n"
    + "1 - Addition \n"
    + "2 - Multiplication\n"
    + "3 - Soustraction\n"
    + "4 - Division\n"
    );
}while((choix<1 || choix>4) || isNaN(choix));

do {
    nombre1= Number ( prompt("Entrez le premier nombre ? ") );
    nombre2= Number ( prompt("Entrez est le second nombre ? ") );
}while(isNaN(nombre1) || isNaN(nombre2))

//Les fonctions de calculs
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}


function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}


function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Division par 0, impossible !");
    }

    return nombreA / nombreB;
}

try {
    switch(Number(choix)) {
        case 1:
            resultat = addition(nombre1,nombre2);
            break;
        case 2:
            resultat = multiplication(nombre1,nombre2);
            break;
        case 3:
            resultat = soustraction(nombre1,nombre2);
            break;
        case 4:
            resultat = division(nombre1,nombre2);
            break;
        default:
            throw new Error("Une erreur est survenue !");
    } 
    alert("Voici le résultat : " + resultat);
} catch(e) { alert(e) }




