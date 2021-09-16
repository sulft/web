<?php 
    //fonctions permettant de checker les prenoms et les noms entrés
    require_once 'check.php';

    if(!empty($_POST['email']) && empty($_POST['tel'])) {
        $email = $_POST['email'];
        checkEmail($email);
        if(!empty($_POST['prenom']) && !empty($_POST['nom'])) {
            $prenom = checkPrenom();
            $nom = checkNom();
            $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,email) VALUES (?,?,?)");
            $que -> execute([$prenom,$nom,$email]);
        } else {
            header('location: ./?error=true&message=Vous n\'avez pas rempli tout les champs obligatoire');
            exit();
        }
    }

    if(!empty($_POST['tel']) && empty($_POST['email'])) {
        $tel = $_POST['tel'];
        checkTel($tel);
        if(!empty($_POST['prenom']) && !empty($_POST['nom'])) {
            $prenom = checkPrenom();
            $nom = checkNom();
            $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel) VALUES (?,?,?)");
            $que -> execute([$prenom,$nom,$tel]);
        } else {
            header('location: ./?error=true&message=Vous n\'avez pas rempli tout les champs obligatoire');
            exit();
        }
        
    }

    if(!empty($_POST['tel']) && !empty($_POST['email'])) {
        $tel = $_POST['tel'];
        $email = $_POST['email'];
        checkTel($tel);
        checkEmail($email);
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