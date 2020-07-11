<!DOCTYPE html>

<html>
    <body>
        <?php 
            $id =$_POST["username"];
            $mdp =$_POST["password"];

            if($mdp != "azerty") {
                echo "mdp ou id incorrecte !";
            } else {
                echo "Accès autorisé !";
            }
        ?>
    </body>
</html>