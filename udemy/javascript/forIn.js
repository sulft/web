//boucle for .. in /* cela permet de traverser les tableaux*/
let panier = ['Poire', 'Fraise', 'Banane'];

for(const fruit in panier) { //cela renvoi l'index des éléments du tableau !
    //console.log(fruit);
}

//console.log(panier);

//boucle for .. of 
panier = ['Pantalon', 'Pull', 'Manteau'];
for (const vetement of panier) {
    //console.log(vetement);
}

//CHALLENGE afficher la liste des pays dans la console.
let listePays = ['France', 'Belgique', 'Japon', 'Maroc'];
for (const pays of listePays) {
    //console.log(pays);
}

//for .. Each
listePays.forEach( pays => console.log(pays));

