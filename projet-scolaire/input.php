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
    $conn = new PDO('pgsql:host=localhost; dbname=postgres', 'postgres', 'Vjjvjj412*');
    
    // display a message if connected to the PostgreSQL successfully
    if($conn){
        echo "Connected successfully!";
        }
   }
   catch (PDOException $e){
    // report error message
    echo $e->getMessage();
   }
   try {
        $genre = $conn->query ("SELECT * from genre");
        $pays = $conn->query ("SELECT * from pays");
        $fruit = $conn->query ("SELECT * from fruit");
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

    echo $genre;
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

        <label for="radio">Sexe :
            <span>Homme</span><input type="radio" id="equipe" name="equipe">
            <span>Femme</span><input type="radio" id="equipe" name="equipe">
        </label><br>

        <label for="equipe"> fruit préféré:
            <span>France</span><input type="checkbox" id="equipe" name="equipe">
            <span>Russie</span><input type="checkbox" id="equipe" name="equipe">
            <span>Russie</span><input type="checkbox" id="equipe" name="equipe">
            <span>Japon</span><input type="checkbox" id="equipe" name="equipe">
        </label><br>

        <label for="pays">Pays de naissance</label>

        <select name="pays" id="cars" size="datalist">
            <option value="volvo">France</option>
            <option value="saab">Russiee</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>

        <label for="reinitialiser">
            <input type="reset" id="reinitialiser" name="reinitialiser">
        </label><br>

        <label for="submit">
            <input type="submit">
        </label><br>
    </form>
</body>
</html>