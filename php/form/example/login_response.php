<?php 
    session_start();

    $identifiant = $_POST['identifiant'];

    if(trim($identifiant) == "terry") {
        echo "tout va bien";
    } else {
        echo "erreur";
    }
?>