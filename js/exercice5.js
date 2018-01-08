
let user = {"nom" : "Sportelli", "prenom" : "Felix"} ;

let femme = {"nom" : "Sportelli", "prenom" : "Aurelie"};

let enfants = [{"nom" : "Sportelli", "prenom" : "Leo"}, {"nom" : "Sportelli", "prenom" : "Lea"}];

user.femme = femme;
user.enfants = enfants;

enfants[0].pere = user;
enfants[0].mere = femme;

enfants[1].pere = user;
enfants[1].mere = femme;

user.Nbenfants = enfants.length;

console.log(user);


let user2 = {"nom" : "Sportelli", "prenom" : "Felix", "femme" : {"nom" : "Sportelli", "prenom" : "Aurelie"}, "enfants" :  [{"nom" : "Sportelli", "prenom" : "Leo"}, {"nom" : "Sportelli", "prenom" : "Lea"}]};
console.log(user2);