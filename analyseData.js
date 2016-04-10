// var json = JSON.parse(require('fs').readFileSync('output.csv', 'utf8'));
// console.log(json.ppn);
// var getPPN = function (json) {
//      for (var i = 0; i<json.length; i++){
//          console.log("Zeile: "+ i + " & ");
//      }
// }
//
// getPPN(json);

var fs = require("fs");
var inhalt = fs.readFileSync("output.csv");
var jsonInhalt = JSON.parse(inhalt);
console.log("PPN:", jsonInhalt.ppn);
console.log("Exemplar:", jsonInhalt.exemplar);
console.log("Signatur:", jsonInhalt.signatur);