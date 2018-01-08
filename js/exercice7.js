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

console.log(CreerUtilisateur("Peralta", "Vincent", 38));