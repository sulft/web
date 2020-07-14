<?php 
    session_start();
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Login form</title>
    </head>

    <body>
        <nav>

        </nav>

        <?php 
            if(isset($_SESSION["connecté"])) {
                echo "vous êtes déjà connecté";
            }
            else {
                $form =<<<FORM
                <h1> Bienvenu sur mon site </h1>
                <p>Entrez votre pseudo et mdp !</p>
                <form name="identifiant" method="post" action="login_response.php">
                    Identifiant<input type="text" name="identifiant">
                    <br>
                    Mot de passe<input type="password" name="mdp">
                    <br>
                    <input type="submit">
                </form>
                FORM;

                echo $form;
            }
        ?>
    </body>

</html>