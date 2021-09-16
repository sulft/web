<?php 
    if(!empty($_POST['prenom']) ) {
        $prenom = $_POST['prenom'];
        if(!preg_match("/^[0-9a-zA-Z ]*$/",$prenom)) {
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        }
    }

    if(!empty($_POST['nom']) ) {
        $nom = $_POST['nom'];
        if(!preg_match("/^[0-9a-zA-Z ]*$/",$nom)) {
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        }
    }

    if(!empty($_POST['email']) && empty($_POST['tel'])) {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();
        } else {
            $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,email) VALUES (?,?,?)");
            $que -> execute([$prenom,$nom,$email]);
        }
    }

    if(!empty($_POST['tel']) && empty($_POST['email'])) {
        $tel = $_POST['tel'];
        if(!preg_match ("/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/", $tel) ) {  
            header('location: ./?error=true&message=Vous n\'avez pas rempli correctement ce champ');
            exit();       
        } else{
            $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel) VALUES (?,?,?)");
            $que -> execute([$prenom,$nom,$tel]);
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
            
        $que = $bdd -> prepare("INSERT INTO contact (prenom,nom,tel,email) VALUES (?,?,?,?)");
        $que -> execute([$prenom,$nom,$tel,$email]);
    }
?>