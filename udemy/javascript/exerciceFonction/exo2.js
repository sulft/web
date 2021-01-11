/* Exercice avancé :
Dans cet exercice, je vous propose de réutiliser tout ce que nous avons vu jusqu'à maintenant. 
Si vous le réussissez, 
vous pourrez définitivement valider toutes les notions que nous avons déjà vu ensemble !

Voici ce que nous allons faire : un calculateur d'IMC !

Nous allons récupérer deux valeurs grâce à notre utilisateur : 
poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. 
Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. 
Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.

Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. 
J'insiste sur ce point.

Enfin, l'objectif pour notre fonction sera de nous retourner ce résultat afin que nous puissions 
l'afficher à notre utilisateur, 
directement via une boîte de dialogue en dehors de notre fonction.
*/

function calculerIMC(taille, poids) {
    taille /= 100;
    return poids/Math.pow(taille,2);
}

taille = prompt("Combien de centimètre faites-vous ?");
poids = prompt("Combien de kilos faites-vous ?");

alert("Votre IMC est de " + calculerIMC(taille,poids) + ". Bravo ! ");