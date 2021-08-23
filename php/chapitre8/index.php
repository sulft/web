

<?php 
    /*$nom = $_FILES['image']['nom']; //nom de l'image
    $type = $_FILES['image']['type']; //type d'iamge (png ..)
    $size = $_FILES['image']['size']; //taille de l'image
    $tmp_name = $_FILES['image']['tmp_name']; //nom temporaire de l'image
    $nom = $_FILES['image']['error']; //va contenir une erreur et montré si l'image a bien été reçu par le serveur.*/
    //d'abord on vérifie si le fichier existe
    if(isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        if($_FILES['image']['size'] <= 3000000) {
            $infoImg = pathinfo($_FILES['image']['name']);
            $extensionImage = $infoImg['extension'];
            $extensionArray = array('png','gif','jpg','jpeg');
            if(in_array($extensionImage, $extensionArray)) {
                move_uploaded_file($_FILES['image']['tmp_name'], 'upload/'.time().rand().rand().'.'.$extensionImage);
                echo 'Top ça fonctionne !';
            }
        }
    }


    // Envoi de fichier PHP
    echo '<h1>Formulaire envoi de fichier</h1>';
    echo '<form method="post" action="index.php" enctype="multipart/form-data">
            <label for="image">Envoi fichier php</label>
            <input type="file" id="image" name="image">
        <button type ="submit">Valider</button>
    </form>';

?>