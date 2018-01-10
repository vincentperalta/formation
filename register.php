<?php

$user = json_decode($_POST['user']);

//print_r($user); //["name"];

// Créer un objet dossier par bateau qui contien tous les élements de l'utilisateur
// + Statut du dossier "En cours" 
// + Date de reception du dossier


$dossiers = array();



for($i=0; $i < $user->nbbateau; $i++ ){

    $dossier['NumDossier'] = rand(0,100000);
    $dossier['date'] = getdate();
    $dossier['EtatDossier'] = "En cours";    
    $dossier['sexe'] = $user->sexe;
    $dossier['name'] = $user->name;
    $dossier['name_jf'] = $user->name_jf;
    $dossier['firstname'] = $user->firstname;
    $dossier['age'] = $user->age;
    $dossier['codepostal'] = $user->codepostal;
    $dossier['ville'] = $user->ville;
    
    $dossier['TailleBateau'] = $user->TailleBateau[$i];
    $dossier['assurance'] = "No";
    $dossier['complement'] = "No";

    for($j=0; $j < count($user->interets); $j++)
    {
        if($user->interets[$j] == "assurance")
            $dossier['assurance'] = "Yes";

        if($user->interets[$j] == "complement")
            $dossier['complement'] = "Yes";
    }
    
    
    array_push($dossiers, $dossier);

}


header("content-type: application/json");
echo json_encode($dossiers);