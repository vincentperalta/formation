// Document
// Avant HTML5 (<2010)

let p1 = document.getElementById("p1");
console.log(p1);
console.log(p1.innerText);
p1.innerText = "top";
let souslignes = document.getElementsByClassName("sousligne")
console.log(souslignes);
let touslesp = document.getElementsByTagName("p");
console.log(touslesp);

// HTML5
let p1bis = document.querySelector("#p1");
console.log(p1bis);
p1bis.innerText = "test";
let souslignesbis = document.querySelectorAll(".sousligne");
console.log(souslignesbis);
let touslespbis  = document.querySelectorAll("p");
console.log(touslespbis);
console.log(touslespbis[0]);
let p3bis = document.querySelector("#p3");
console.log(p3bis);
console.log(p3bis.className);
//p3bis.className = "";


let tbody = document.querySelector("tbody");
tbody.innerHTML += "<tr><td>a</td><td>a</td><td>38</td></tr>";


let utilisateurs = [];

function dessinTableau(utilisateurs){

}

function purge(){
    tbody.innerHTML = "";
}

let purgeButton = document.querySelector("#purge2");
purgeButton.onclick = function(){
    purge();
}

let miseFormeButton = document.querySelector("#miseForme");
miseFormeButton.onclick = function(){

    let p3bis = document.querySelector("#p3");    

    if (p3bis.className == ""){
        p3bis.className = "sousligne";
        miseFormeButton.innerHTML = "Déssouligner";
    } else {
        p3bis.className = "";
        miseFormeButton.innerHTML = "Souligner";
    }
}


let addButton = document.querySelector("#addButton");
addButton.onclick = function() {

    const nom = document.querySelector("#name").value;
    const firstname = document.querySelector("#firstname").value;
    const age = document.querySelector("#age").value;

    let tbody = document.querySelector("tbody");
    tbody.innerHTML += "<tr><td>"+nom+"</td><td>"+firstname+"</td><td>"+age+"</td></tr>";

    //console.log("bouton cliquer");
}
