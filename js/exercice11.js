let tbody = document.querySelector("tbody");

let utilisateurs = [];

let Vincent = {"nom" : "Peralta", "prenom" : "Vincent", "age" : 38};
let Olivia = {"nom" : "Peralta", "prenom" : "Olivia", "age" : 6};

utilisateurs.push(Vincent);
utilisateurs.push(Olivia);

function dessinTableau(utilisateurs){
    let tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    for( let i=0; i<utilisateurs.length; i++){
    tbody.innerHTML += "<tr><td>"+utilisateurs[i].nom+"</td><td>"+utilisateurs[i].prenom+"</td><td>"+utilisateurs[i].age+"</td></tr>";    
    }
}

dessinTableau(utilisateurs);

function purge(){
    tbody.innerHTML = "";
}

let purgeButton = document.querySelector("#purge2");
purgeButton.onclick = function(){
    purge();
    utilisateurs = [];


}

let addButton = document.querySelector("#addButton");

addButton.onclick = function() {

    const nom = document.querySelector("#name").value;
    const firstname = document.querySelector("#firstname").value;
    const age = document.querySelector("#age").value;

    let userInsert = {"nom" : nom, "prenom" : firstname, "age" :age};
    utilisateurs.push(userInsert);

    //let tbody = document.querySelector("tbody");
    //tbody.innerHTML += "<tr><td>"+nom+"</td><td>"+firstname+"</td><td>"+age+"</td></tr>";

    dessinTableau(utilisateurs);

    //console.log("bouton cliquer");
}