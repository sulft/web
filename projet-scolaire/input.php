<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        try{
            // create a PostgreSQL database connection
            $conn = new PDO('pgsql:host=localhost; dbname=test', 'postgres', '');
            
            // display a message if connected to the PostgreSQL successfully
            if($conn){
                echo "Connected successfully!";

                $reponse = $conn->query("SELECT * from person");
            }
        }
        catch (PDOException $e){
            // report error message
            echo $e->getMessage();
        }
    ?>

    <form action="test.php" target="_blank" autocomplete="on" method="post">
        <label for="identifiant">Identifiant:
            <input type="text" id="identifiant" name="identifiant" required>
        </label><br>
        
        <label for="mdp">Mot de passe:
            <input type="password" id="mdp" name="mdp">
        </label><br>

        <label for="date">Date:
            <input type="date" id="date" name="date">
        </label><br>

        <label for="email">Email:
            <input type="email" id="email" name="email">
        </label><br>

        <label for="url">Url:
            <input type="url" id="url" name="url">
        </label><br>

        <label for="sexe">Sexe :
            <input type="radio" id="Homme" name="sexe" value="homme" required><label for="Homme">Homme</label>
            <input type="radio" id="Femme" name="sexe" value='femme' required><label for="Femme">Femme</label>
        </label><br>

        <p> Personne :
            <select name="person" id="person" size="datalist">
                <?php while($row1 = $reponse->fetch()):?>
                <option name='' value = '<?php echo $row1[0]. " " . $row1[1]?>'><?php echo $row1[0];?> <?php echo $row1[1];?><?php ;?></option>
                <?php endwhile;?>
            </select>
        </p>

        <label for="reinitialiser">
            <input type="reset" id="reinitialiser" name="reinitialiser">
        </label><br>

        <label for="submit">
            <input type="submit">
        </label><br>
    </form>
</body>
</html>