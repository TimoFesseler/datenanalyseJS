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
//         return allEntries;
//     });
// };
//
// var myUsers = loadCsv();

