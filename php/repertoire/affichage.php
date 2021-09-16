<?php 
    //fonctions permettant de checker les prenoms et les noms entrés
    require_once 'check.php';

    if(!empty($_POST['email']) && empty($_POST['tel'])) {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        } else {
            if(!empty($_POST['prenom']) && !empty($_POST['nom'])) {
                checkPrenom();
                checkNom();
                $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel) VALUES (?,?,?)");
                $que -> execute([$prenom,$nom,$tel]);
            } else {
                header('location: ./?error=true&message=Vous n\'avez pas rempli tout les champs obligatoire');
                exit();
            }
        }
    }

    if(!empty($_POST['tel']) && empty($_POST['email'])) {
        $tel = $_POST['tel'];
        if(!preg_match ("/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/", $tel) ) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();       
        } else{
            if(!empty($_POST['prenom']) && !empty($_POST['nom'])) {
                checkPrenom();
                checkNom();
                $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel) VALUES (?,?,?)");
                $que -> execute([$prenom,$nom,$tel]);
            } else {
                header('location: ./?error=true&message=Vous n\'avez pas rempli tout les champs obligatoire');
                exit();
            }
        }
    }

    if(!empty($_POST['tel']) && !empty($_POST['email'])) {
        $tel = $_POST['tel'];
        $email = $_POST['email'];
        if(!preg_match ("/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/", $tel) ) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();       
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        }

        if(!empty($_POST['prenom']) && !empty($_POST['nom'])) {
            checkPrenom();
            checkNom();
            $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel,email) VALUES (?,?,?)");
            $que -> execute([$prenom,$nom,$tel,$email]);
        } else {
            header('location: ./?error=true&message=Vous n\'avez pas rempli tout les champs obligatoire');
            exit();
        }
            
        $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel,email) VALUES (?,?,?,?)");
        $que -> execute([$prenom,$nom,$tel,$email]);
    }
?>