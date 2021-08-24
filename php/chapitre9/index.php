

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        h1 {
            text-align:center;
        }

        .align_item {
            display: flex;
            justify-content:center;
            
        }

        .redBackground {
            background-color:red;
        }
    </style>
</head>
<body>
    <h1 class="redBackground">Hébergeur d'images</h1>
    <br>
    <div class='align_item full-width'>
        <form action='index.php' method='POST' enctype='multipart/form-data'>
            <label for='image'>Entrez votre image:</label>
            <input type='file' name='image'>
            <button type='submit'>Envoyer</button>
        </form>
    </div>


    <div>
        <?php 
            if(isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
                if($_FILES['image']['size'] < 3000000){
                    $infoImg = pathinfo($_FILES['image']['name']);
                    $extensionImage = $infoImg['extension'];
                    $extensionArray = array('jpg','png','jpeg','gif');
                    if(in_array($extensionImage, $extensionArray)) {
                        $addresse = 'uploads/'.time().rand().rand().'.'.$extensionImage;
                        $widthImg="300px";
                        move_uploaded_file($_FILES['image']['tmp_name'], $addresse);
                        echo '<div class="align_item"><p>lien de l\'image : <input type=\'text\' value=\'http://localhost:8000/' .$addresse. '\'></p></div>';
                        echo '<br><div class="align_item"><img width="' . $widthImg . '" src="' .$addresse. '" ></div>';
                    }
                }
            }
        ?>
    </div>
</body>
</html>
