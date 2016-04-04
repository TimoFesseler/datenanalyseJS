/**
 * Created by Affagichtli xD on 21.03.2016.
 */
console.log("Hello Node!");

fs = require('fs')
fs.readFile('../Liste_PPN-ExNr_HSHN-libre.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var lines = data.split("\n");
    for (var i = 0; i<100; i++){
        console.log("Zeile " + i + ": " + lines[i]);
    }
console.log("Anzahl Zeilen: " + lines.length);
});


// const readline = require('readline');
// const fs = require('fs');
//
// const rl = readline.createInterface({
//     input: fs.createReadStream('../Liste_PPN-ExNr_HSHN-libre.csv')
// });
//
// rl.on('line', (line) => {
//     console.log('Line from file:', line);
// });