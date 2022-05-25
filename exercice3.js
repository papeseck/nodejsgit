let fs = require('fs');
let file = fs.readFileSync(process.argv[2]);
let str = file.toString();
let ligne = str.split("\n");
let numberLigne = ligne.length -1;
console.log(numberLigne);