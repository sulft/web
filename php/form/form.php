<!DOCTYPE html>

<html>
    <body>
        <?php 
            $id =$_POST["username"];
            $mdp =$_POST["password"];

            if($mdp != "azerty") {
                echo "<script>alert('mot de passe incorrecte');</script>";
                echo "<script>window.history.back();</script>";
            } else {
                echo "Accès autorisé !";
            }
        ?>
    </body>
</html>