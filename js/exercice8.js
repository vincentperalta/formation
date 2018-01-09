// Créer un objet user (prénom, nom, age, enfants)
// méthode listenfant qui liste les enfants
// Method nbEnfants qui renvoie le nb d'enfants
// Method ajoutenfant (enfants) qui ajoute un enfants

let utilisateur = {"nom" : "Peralta", "prenom" : "Vincent", "age" : 38 , "enfants" : ["Olivia"]};

function listenfant(){
    for( let i=0; i<this.enfants.length; i++){
        console.log(this.enfants[i]);    
    }
}

function nbEnfants(){
    console.log(this.enfants.length);
}

function ajoutEnfants(enfant){
    this.enfants.push(enfant);
}

utilisateur.listenfant = listenfant;
utilisateur.nbEnfants = nbEnfants;
utilisateur.ajoutEnfants = ajoutEnfants;

utilisateur.listenfant();
utilisateur.nbEnfants();

utilisateur.ajoutEnfants("Leo");

utilisateur.listenfant();
utilisateur.nbEnfants();

utilisateur.ajoutEnfants("Lea");

utilisateur.listenfant();
utilisateur.nbEnfants();