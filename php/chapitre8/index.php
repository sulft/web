<?php 
    //Création de formulaire
    if(isset($_POST['prenom']) && isset($_POST['nom'])) {
        echo 'Bonjour ' . $_POST['prenom'] . ' ' . $_POST['nom'] . '!';
    }

    echo '<form method="post" action="index.php">
        <table>
            <tr>
                <td><label for="prenom">Prénom</label></td>
                <td><input type="text" id="prenom" name="prenom"></td>
            </tr>
            <tr>
                <td><label for="nom">Nom</label></td>
                <td><input type="text" id="nom" name="nom"></td>
            </tr>
        </table>
        <button type ="submit">Valider</button>
    </form>';

?>