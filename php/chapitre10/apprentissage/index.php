

<?php 
    /* Connexion au serveur / Opération (LIRE / ECRIRE / MODIFIER)
    Pour se connecter à une base de donnée, on a besoin d'un 
    hôte = localhost
    nom de base de donnée = apprentissage
    login = root 
    mdp = 
    */

    //Connexion
    try {
        $bdd=new PDO('mysql:host=localhost; dbname=apprentissage; charset=utf8', 'root', '');
        echo 'Le serveur a été correctement initialisé!<br><br>';
    }  catch(Exception $e) {
        die('Erreur : '. $e ->getMessage());
    } 

    //Ajoute un nouvel utilisateur
    if(!empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['serie'])) {
        $p = $_POST['prenom'];
        $n = $_POST['nom'];
        $s = $_POST['serie'];

        $requete = $bdd -> prepare('    INSERT INTO users (prenom, nom, seriePreferee)
                                        VALUES (?,?,?)
        ');

        $requete -> execute([$p,$n,$s]);
    }

    //Affiche les informations
    $requete = $bdd -> query("SELECT nom, prenom, seriePreferee
                                FROM users
    ");

    echo '<table border=5 cellpadding="3">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Série préféré</th>

        </tr>
    </thead>';


    echo '<tbody>';

    while($donnees = $requete -> fetch()) {
        echo '<tr align="center">
            <td>' . $donnees['nom'] .'</td>
            <td>' . $donnees['prenom'] . '</td>
            <td>' . $donnees['seriePreferee'] . '</td>
        </tr>
        '; //méthode de cryptage sha1 avec grain de sable
    }

    $requete -> closeCursor();
    echo '</tbody>';

    echo '</table>';
    

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ajouter un utilisateur</h1>
    <form action="index.php" method="POST">
        <table>
            <tr>
                <td><label for="prenom">Prénom</label></td>
                <td><input type="text" name='prenom' id="prenom"></td>
            </tr>
            <tr>
                <td><label for="nom">Nom</label></td>
                <td><input type="text" name='nom' id="nom"></td>
            </tr>
            <tr>
                <td><label for="serie">Série préférée</label></td>
                <td><input type="text" name='serie' id="serie"></td>
            </tr>
        </table>
        <button type="submit">Ajouter</button>
    </form>
</body>
</html>