//création d'un tablea 1D
let monTableau = ['Un','Deux','Trois'];
console.log(monTableau.join(' / '));

//création d'un tablea 2D
let monTableau2D = [
    ['Mark','Djef','Bill'],
    ['Zuckerberg','Bezos','Gates']
];
console.log(monTableau2D[0].join('\n')+ monTableau2D[1].join(', '));

//tableau associatif
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'pdg de Facebook'
};
console.log(monTableauAssociatif)

