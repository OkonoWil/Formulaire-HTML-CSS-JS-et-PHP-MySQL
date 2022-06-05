<?php

    require 'db-config.php';

    try{
        $pdo = new PDO($db_dsn, $db_user, $db_pass);
        echo 'Connexion';
    }catch(PDOException $pe){
        echo 'ERREUR : '.$pe->getMessage(); 
    }

    $rea = $pdo->prepare('INSERT INTO personne (Nom, email, theme, autreOption, message) VALUES (:nom, :email, :theme, :autreOption, :message)');
    $rea->execute(array(
        'nom' => $_POST['name'],
        'email' => $_POST['email'],
        'theme' => $_POST['theme'],
        'autreOption' => $_POST['autreoption'],
        'message' => $_POST['message'],
    ));

    echo '<br>Data save in the data base';

?>