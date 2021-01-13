//boucle for .. in /* cela permet de traverser les tableaux*/
let panier = ['Poire', 'Fraise', 'Banane'];

for(const fruit in panier) { //cela renvoi l'index des éléments du tableau !
    panier[fruit] = "Kiwi";
}

console.log(panier);

//boucle for ..