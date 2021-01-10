/*challenge 
crée une fonction age qui prends aucun paramètre et qui va 
se contenter grace à une fenetre de renseignement de demander à 
l'utilisateur son age et de le lui afficher via un alert vous avez x ans 
*/
function prevoirAge() {
    let age = prompt("Votre age ?");
    alert("Bientôt vous aurez " + (Number(age)+1) + " ans !");
    //convertir les strings en nombre
    /*
    parseInt()
    Number()
    parseFloat()
    */

    //convertir les nombre en strings
    /*
    age.toString()
    */
}

prevoirAge();