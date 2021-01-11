//projet calculatrice

/* choix du type de calcul */
function choixCalcul() {
    let choix;
    do {
        choix = prompt("Que souhaitez-vous faire ?\n\n"
        + "1 - Addition \n"
        + "2 - Multiplication\n"
        + "3 - Soustraction\n"
        + "4 - division\n"
        );
    }
    while(choix<1 || choix>4);
    return choix;
}


//Selection du type de calcul
function selectionCalcul() {
    nombre = choixCalcul();
    switch(nombre) {
        case 1:
            alert('test123');
            break;
        case 2:
            alert('test');
            break;
        case 3:
            alert('test');
            break;
        case 4:
            alert('test');
            break;
    }
}

selectionCalcul();

//Demande des nombre à l'utilisateur
/*let nombre1 = prompt("Entrer le premier nombre :");
let nombre2 = prompt("Entrer le second nombre :");*/

