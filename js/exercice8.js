// Créer un objet user (prénom, nom, age, enfants)
// méthode listenfant qui liste les enfants
// Method nbEnfants qui renvoie le nb d'enfants

let utilisateur = {"nom" : "Peralta", "prenom" : "Vincent", "age" : 38 , "enfants" : [{"nom" : "Peralta", "prenom" : "Olivia", "age" : 6} , {"nom" : "Peralta", "prenom" : "Olivier", "age" : 4}]};

function listenfant(){
    for( let i=0; i<this.enfants.length; i++){
        console.log(this.enfants[i].nom + " " + this.enfants[i].prenom);    
    }
}

function nbEnfants(){
    console.log(this.enfants.length);
}


utilisateur.listenfant = listenfant;
utilisateur.nbEnfants = nbEnfants;


utilisateur.listenfant();
utilisateur.nbEnfants();