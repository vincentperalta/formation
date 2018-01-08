function disBonjour(){
    console.log("Bonjour");
}

disBonjour();

function disBonjourPrenom(prenom){

    const p = (prenom == "") ? "monsieur" : prenom;
    console.log("Bonjour : " + p);
}

disBonjourPrenom("Felix");
disBonjourPrenom("");

function somme (a, b){
    return a + b;
}

console.log(somme(1,2));
console.log(somme("1","2"));

function CreerUtilisateur (nom, prenom, age){
    let user = { "nom" : nom, "prenom" : prenom, "age" : age};
    return user;
}

let user = CreerUtilisateur("Peralta", "Vincent", 38);

console.log(user);

let maFonction = function(){
    console.log("Dis Bonjour");
}

maFonction();

let maFonction2 = function(a,b)
{
    return a + b;    
}

console.log(maFonction2(1+2));

let maFonction3 = function (){
    console.log("Bonjour je m'appelle " + this.prenom );
}

if (user.prenom == "")
    user.soispoli = maFonction;
else
    user.soispoli = maFonction3;

user.soispoli();


function GetNom(nom, prenom, DisplayUpperCase){

    if (DisplayUpperCase == true) {
        console.log(nom.toUpperCase() + " "  + prenom.toUpperCase())
    } else {
        console.log(nom + " " + prenom)
    }
}

GetNom("Peralta", "Vincent", true);
GetNom("Peralta", "Vincent", false);




console.log("----------------------------------");



let getdescription = function(){
    return this.marque + " " + this.model + " " + this.motorisation  + " " + this.etat;
}

let avancer = function(){
    this.etat = "Avance";
    return "La voiture avance";
}

let arreter = function(){
    this.etat = "Arret";
    return "La voiture arrete";
}

let reculer = function(){
    this.etat = "Recul";
    return "La voiture recule";
}


let voitureFelix = {"marque" : "Citroen", "model" : "C4", "motorisation" : "essence", "etat" : "arret", "getdescription" : getdescription, "avancer" : avancer, "arreter" : arreter, "reculer" : reculer};

console.log(voitureFelix.getdescription());
console.log(voitureFelix.reculer());
console.log(voitureFelix.getdescription());
console.log(voitureFelix.avancer());
console.log(voitureFelix.getdescription());
console.log(voitureFelix.arreter());
console.log(voitureFelix.getdescription());