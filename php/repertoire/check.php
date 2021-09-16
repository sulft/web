<?php 
    function checkPrenom() {
        if(!empty($_POST['prenom']) ) {
            $prenom = $_POST['prenom'];
            if(!preg_match("/^[0-9a-zA-Z ]*$/",$prenom)) {
                header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
                exit();
            }
        }
    }

    function checkNom() {
        if(!empty($_POST['nom']) ) {
            $nom = $_POST['nom'];
            if(!preg_match("/^[0-9a-zA-Z ]*$/",$nom)) {
                header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
                exit();
            }
        }
    }
?>