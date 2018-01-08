let toto = 2;

// JSON

let a = {"nb" : 2};
console.log(a.nb);

a = {"nb" : 2, "name" : "felix"}
console.log(a.nb + " " + a.name);

let b = {"user" : a};
console.log("name = " + b.user.name);

let c = {"user" : {"nb" : 3, "name" : "Aurélie"}};
console.log(c);

let tab1 = [1, 2 ,3];

console.log("0 = " + tab1[0]);
console.log("1 = " + tab1[1]);
console.log("2 = " + tab1[2]);
console.log("Taille = " + tab1.length);

let tabUser = [b, c];
console.log("user0 = " + tabUser[0]);


console.log(b);
b.valid = true;
console.log(b);

b.parent = [ c ];
console.log(b);


