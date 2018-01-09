

function appelServeur(){
    return '{"nom" : "Peralta", "Prenom" : "Vincent"}';
}

let message = appelServeur();

console.log(message);

// Permet d'analyser un Json vers un objet Js

let user = JSON.parse(message);
console.log(user);

// Passer d'un objet Js vers une chaine de caractère 
let messageEnvoie = JSON.stringify(user);
console.log(messageEnvoie);
