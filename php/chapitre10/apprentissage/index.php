

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

    //Ajouter des informations
    
    $requete = $bdd -> exec('   INSERT INTO users ( prenom, nom, seriePreferee )
                                VALUES ( "Aurelie", "France", "Koh Lanta" )
                            ');

    

    //supprimer des informations
    /* 
    $requete = $bdd -> exec('  INSERT INTO users ( prenom, nom, seriePreferee )
                                VALUES ( "Marc", "Pomme", "Koh Lanta" )
                            ');

    $requete -> closeCursor();
    */
    //Lire les informations
    $requete = $bdd -> query('  SELECT * 
                                FROM users
                            ');
    
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
        ';
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
    
</body>
</html>