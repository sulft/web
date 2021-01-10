 <?php 
        echo "Bonjour ! " . $_POST['person'] . " !<br><br>";
        echo "Votre identifiant est : ". $_POST['identifiant'] . "<br><br>";
        echo "Vous êtes un(e) " . $_POST['sexe'] . " ! <br><br>";
        echo "Votre mot de passe est : " . $_POST['mdp'] . " <br>OOPS! J'ai dévoilé votre mot de passe !"."<br><br>";
        echo "La date entrée est " . $_POST['date'] . "<br><br>";
        echo "Votre email est : " . $_POST['email'] . "<br><br>";
        echo "Votre url est : " . $_POST['url'] . "<br><br>";
?>
