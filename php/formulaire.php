<?php
    $retour = mail('gab.marcq3@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], "");
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>