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

?>