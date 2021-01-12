//création d'un tablea 1D
let monTableau = ['Un','Deux ','Trois'];
monTableau.push('quatre'); //ajoute un élément au début du tableau
monTableau.unshift('zero'); //ajoute une élément à la fin du tableau
//console.log(monTableau);

//création d'un tablea 2D
let monTableau2D = [
    ['Mark','Djef','Bill'],
    ['Zuckerberg','Bezos','Gates']
];
monTableau2D.shift();
//console.log(monTableau2D);

//tableau associatif
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'pdg de Facebook'
};
monTableauAssociatif['nationalite'] = "américaine"; //ajoute un élément dans un tableau associatif
delete(monTableauAssociatif.poste)
console.log(monTableauAssociatif)

