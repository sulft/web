<?php 
    function checkPrenom() {
        if(!empty($_POST['prenom']) ) {
            $prenom = $_POST['prenom'];
            if(!preg_match("/^[0-9a-zA-Z ]*$/",$prenom)) {
                header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
                exit(); 
            } else {
                return $prenom;
            }

        }
    }

    function checkNom() {
        if(!empty($_POST['nom']) ) {
            $nom = $_POST['nom'];
            if(!preg_match("/^[0-9a-zA-Z ]*$/",$nom)) {
                header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
                exit();
            } else {
                return $nom;
            }
        }
    } 

    function checkTel($tel) {
        if(!preg_match ("/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/", $tel) ) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();       
        }
    }

    function checkEmail($email) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        }
    }
?>