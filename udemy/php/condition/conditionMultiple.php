<?php 
    $identifiant = "Terry";
    $mdp = 'test';

    //condition multiple
    if($identifiant == "Terry" && $mdp == 'test') {
        echo 'Bienvenu sur votre compte ' . $identifiant . ' !';
    } else {
        echo 'Identifiant ou mot de passe incorrect !';
    }
?>