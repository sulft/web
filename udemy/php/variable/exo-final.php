<?php 
//Petite exercice ! 
/* Crée un tableau sous la forme TABLEAU (id, prenom, nom, age)
Afficher l'age de la personne dans 50 ans
afficher sous la forme "Bonjour PRENOM NOM, dans 50 ans vous aurez age ans
*/
    $person = array(
        'id'        => 15,
        'prenom'    => 'Terry',
        'nom'       => 'Vilver',
        'age'       => 22,
    );

    $age50 = $person['age'] + 50;
    echo $age50  . '<br><br>';

    echo 'Bonjour ' . $person['prenom'] . ' ' . $person['nom'] . ' ! Dans 50 ans vous aurez ' . $age50  . ' ans.';

?>
