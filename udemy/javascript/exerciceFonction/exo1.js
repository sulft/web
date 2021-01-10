/*Exercice debutant:
Ce que vous devez réaliser :

Créer une fonction abracadabra qui ne contiendra aucun paramètre.

Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.

Stocker ces trois informations grâce à trois variables : prenom, nom et age 
(ne compliquons pas les choses !)

Afficher, toujours grâce à une boîte de dialogue, la phrase 
"Sapristi ! 
On ne m'avait pas prévenu que c'était vous, [prenom] ! Euh... Je veux dire... 
Monsieur le grand magicien [nom] ! Cela fait déjà [age] ans que vous faites 
rayonner notre contrée !".
*/

function abracadabra () {
    let prenom = prompt("Ton prénom ?");
    let nom = prompt("Ton nom ?");
    let age = prompt("Ton âge ?");
    alert("\"Sapristi ! On ne m\'avait pas prévenu que c\'était vous, " 
    + prenom 
    + " ! Euh... Je veux dire... \nMonsieur le grand magicien " 
    + nom 
    + " ! Cela fait déjà " 
    + age 
    + " ans que vous faites rayonner notre contrée !\".");
}

abracadabra()