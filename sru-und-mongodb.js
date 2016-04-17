//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/SWB';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);

        // Get the documents collection
        var collection = db.collection('titles');

        var bibSrc = 'http://swb.bsz-bw.de/sru/DB=2.1/username=/password=/?query=pica.ppn+%3D+%22381024407%22&version=1.1&operation=searchRetrieve&stylesheet=http%3A%2F%2Fswb.bsz-bw.de%2Fsru%2F%3Fxsl%3DsearchRetrieveResponse&recordSchema=dc&maximumRecords=10&startRecord=1&recordPacking=xml&sortKeys=none&x-info-5-mg-requestGroupings=none';

        var req = http.get(bibSrc, function(res) {
            // save the data
            var xml = '';
            res.on('data', function(chunk) {
                xml += chunk;
            });

            res.on('end', function() {
                // parse xml
            });

            // or you can pipe the data to a parser
            res.pipe(dest);
        });

        req.on('error', function(err) {
            // debug error
        });
        //Create some titles
        var title1 = {ppn: '378087797', xml: '<xml></xml>'};

        // Insert some users
        collection.insert(title1, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted %d documents into the "titles" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
            db.close();
        });
    }
});