<?php 
    //CONDITION IF 
    echo 'CONDITION IF <br>';

    $age = 15;
    echo 'Votre age : ' . $age . '<br>';
    if($age > 17) {
        echo 'Vous êtes majeur !';
    } else {
        echo 'Vous êtes mineur !';
    }

    echo '<br><br>';
?>

<?php 
    //Condition MULTIPLE
    echo 'Condition MULTIPLE <br>';

    $pseudo = 'Tintin';
    $mdp = 'Lune';


    if($pseudo == 'Tintin' && $mdp == 'Lune') {
        echo 'Mot de passe valide ! <br>';
    } else {
        echo 'Mot de passe invalide ! <br>';
    }

    echo '<br><br>';
?>


<?php 
    //Condition TERNAIRE
    echo 'Condition TERNAIRE <br>';

    $nombre = 100;

    echo ($nombre % 10 == 0) ? 'Succès ! <br>' : 'Echec ! <br>';

?>