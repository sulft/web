//création d'un tablea 1D
let monTableau = ['Un','Deux','Trois'];
//monTableau.splice(3,0,'random','pie')
//console.log(monTableau)

//création d'un tablea 2D
/* Challenge ajouter un 3e tableau */
let monTableau2D = [
    ['Mark','Djef','Bill'],
    ['Zuckerberg','Bezos','Gates']
];
monTableau2D.splice(0,0,[22,35,42]);
//console.log(monTableau2D)

//tableau associatif
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'pdg de Facebook'
};

//faisons la même chose à l'aide d'une fonction
let concatenation = function(tableau) {
    //concatener un tableau associatif
    let chaine ='';
    for( const valeur of Object.keys(tableau)) {
        chaine += ( valeur + ' : ' + tableau[valeur] + "\n")
    }
    console.log(chaine)
};

concatenation(monTableauAssociatif)



