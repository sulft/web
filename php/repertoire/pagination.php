<?php 
        // On détermine sur quelle page on se trouve
        if(isset($_GET['page']) && !empty($_GET['page'])){
            $pageActuel = (int) strip_tags($_GET['page']);
        }else{
            $pageActuel = 1;
        }
    
        // On détermine le nombre total d'contacts
        $sql = 'SELECT COUNT(*) AS nb_contacts FROM contact;';
    
        // On prépare la requête
        $query = $bdd->prepare($sql);
    
        // On exécute
        $query->execute();
    
        // On récupère le nombre d'contacts
        $result = $query->fetch();
    
        $nbcontacts = (int) $result['nb_contacts'];
    
        // On détermine le nombre d'contacts par page
        $parPage = 5;
    
        // On calcule le nombre de pages total
        $pages = ceil($nbcontacts / $parPage);
    
        // Calcul du 1er article de la page
        $premier = ($pageActuel * $parPage) - $parPage;
    
        $sql = 'SELECT * FROM contact ORDER BY id DESC LIMIT :premier, :parpage;';
    
        // On prépare la requête
        $query = $bdd->prepare($sql);
    
        $query->bindValue(':premier', $premier, PDO::PARAM_INT);
        $query->bindValue(':parpage', $parPage, PDO::PARAM_INT);
    
        // On exécute
        $query->execute();
    
        // On récupère les valeurs dans un tableau associatif
        $contacts = $query->fetchAll(PDO::FETCH_ASSOC);
?>