// var csv = require('ya-csv');
//
// //load csv file
// var loadCsv = function() {
//     var reader = csv.createCsvFileReader('Liste', {
//         'separator': ',',
//         'quote': '"',
//         'escape': '"',
//         'comment': '',
//     });
//
//     var allEntries = new Array();
//
//     reader.setColumnNames([ 'PPN', 'Exemplar-Datensatznr', 'Signatur', 'Barcode', 'Sigel' ]);
//
//     reader.addListener('data', function(data) {
//         //this gets called on every row load
//         allEntries.push(data);
//     });
//
//     reader.addListener('end', function(data) {
//         //this gets called when it's finished loading the entire file
//         return allEntries;9
//     });
// };
//
// var myUsers = loadCsv();

fs = require('fs');

function writeToFile(filename, data) {
    var err = fs.appendFileSync(filename, data);
    if (err) {
        console.log("Error write to file " + filename + "!");
        throw err;
    }
}

function resetFiles() {
    fs.writeFileSync("output.csv", "");
    fs.writeFileSync("error.log", "");
}

function output(data) {
    writeToFile("output.csv", data);
}

function error(data) {
    writeToFile("error.log", data);
}

resetFiles();

fs.readFile('Liste_PPN-ExNr_HSHN-libre.csv', 'utf8', function (err, inhalt) {
    if (err) {
        return console.log(err);
    }

    var lines = inhalt.split(/\r?\n/);
    var result = new Array(); 
    // for (var i = 0; i < lines.length; i++) {
        for (var i = 0; i < 30; i++) {
        if (i == 0) continue;
        var line = lines[i];
        var tokens = line.split(",");
        if (tokens.length != 5) {
            error("Komische Zeile (" + (i + 1) + "): " + line);
        }
        else {
            var ppn = tokens[0];
            while (ppn.length < 9) {
                ppn = "0" + ppn;
            }
            // "0".repeat(9-ppn.length) + ppn;

            var exemplar = {
                ppn: ppn,
                exemplar: tokens[1],
                signatur: tokens[2],
                barcode: tokens[3],
                sigel: tokens[4]
            };
        }
        result.push(exemplar);
    }
    output(JSON.stringify(result, null, 2));
});