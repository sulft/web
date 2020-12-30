/* Utilisation de paramètre par défaut  */
function cuisiner(nombreDeGateau , tempsDePreparation = 10 , tempsCuisson = 15) {

    let resultat = (tempsDePreparation + tempsCuisson)*nombreDeGateau;
    return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1,20);

console.log(tempsDePreparationChocolat + ' min temps de préparation gateau au choco');
console.log(tempsDePreparationFraisier + ' min temps de préparation gateau à la fraise');