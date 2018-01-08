
let user1 = {"prenom" : "felix", "lunette" : true};
let user2 = {"prenom" : "aurélie", "lunette" : false};

let user = user2;

if(user.lunette == true){
    console.log("Attention lunettes");
}else if(user.lunette == false) {
    console.log("Pas de lunettes");
}else
{
    console.log("Inconnu ..");
}

switch(user.prenom)
{
    case "felix":
        console.log("Bonjour Felix");
        break;

    case "aurélie":
        console.log("Bonjour aurélie");
        break;

    default:
        console.log("Bonjour");
        break;    
}

const tabUsers = [user1, user2];
let i=0;

while( i < 2){
    console.log(tabUsers[i++]);    
}

for( let i=0; i<tabUsers.length; i++){
    console.log(tabUsers[i]);    
}