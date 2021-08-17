<?php 
    //VARIABLE

    //entier
    $age_du_lyceen = 25;
    $texte = 'C\'est bien !';

    echo "VARIABLE". "<br>" ."l'age du lycéen est :" .  $age_du_lyceen . "<br>";

    //float
    $age_du_lyceen = 42.5;

    echo "l'age du lycéen est :" .  $age_du_lyceen . "<br>";

    //string
    $age_du_lyceen = "40";

    echo  $texte . "<br><br>";
?>

<?php 
    /*OPERATEURS

    multiplication => * 
    additionner => +
    soustraire => -
    diviser => /
    */

    $premierNombre = 5;
    $deuxiemeNombre = 25;
    $resultat = $premierNombre * $deuxiemeNombre;

    echo "Premier nombre " . $premierNombre . "! "; 
    echo "Deuxième nombre " . $deuxiemeNombre . "<br><br>";
    echo "OPERATEURS". "<br>" . $resultat;

    $resultat += 5;

    echo "<br>" . "Ajoutons 5 : " . $resultat;

    $resultat -= 30;

    echo "<br>" . "Retirons 30 : " . $resultat;

    $resultat /= 5;

    echo "<br>" . "Divisons par 5 : " . $resultat;

    echo  "<br><br>";

?>

<?php 
    /* LES TABLEAUX */

    echo 'Les TABLEAUX <br>';

    // $personneA = array( 
    //     'nom'       => 'MADRID',
    //     'prenom'    => 'Steve',
    //     'age'       => 4,
    //     'id'        => 1
    // );

    $personneA = array('Madrid','Terry',15,1);

    echo "Bonjour " . $personneA[0] . ' ' . $personneA[1] . ' !';

    echo  "<br><br>";

?>

<?php 
    /* EXERCICE */
    //créer un tableau comportant l'id, le nom, le prenom et l'age d'un individu.
    //Afficher l'age de la personne dans 50 ans.
    //Sous la forme, Bonjour PRENOM NOM ! Dans 50 ans, vous aurez X ans.

    echo 'EXERCICE <br>';

    $personneA = array(
        'id'        => 1,
        'prenom'    => 'Terry',
        'nom'       => 'VILVER',
        'age'       => 23
    );

    $ageDans50Ans = $personneA['age'] + 50;

    echo 'Bonjour ' . $personneA['prenom'] . ' ' . $personneA['nom'] . ' ! Dans 50 ans, vous aurez ' . $ageDans50Ans . ' ans.';

?>

