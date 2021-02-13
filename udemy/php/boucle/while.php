<?php 
    //challenge afficher voici le numéro de la ligne en commençant par 1
    $ligne = 0;

    while($ligne < 10) {
        echo 'Voici le numéro de la ligne ' . ($ligne+1) . '<br>';
        $ligne++;
    }
?>