// mongodb client driver
const { MongoClient } = require('mongodb');

// DB Connection URL
var url = "mongodb://localhost:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "swapi";
const db = client.db(dbName);

module.exports.findAllCharacters = async function (callback){
    var collection = db.collection('characters');
    collection.find().toArray(async(err,characters) => {
        if(!err){
            callback(null,characters);
        }else{
            callback("failed to load characters", undefined);
        }
    })
};

module.exports.call = async function call(operation, parameters, callback) {
    // connect to the db server
    await client.connect();

    // set the database to use
    const db = client.db(dbName);

    var collection;
    switch (operation.toLowerCase()) {
        case 'characters':
            // set the collection to use
            collection = db.collection('characters');

        case 'films':
            // set the collection to use
            collection = db.collection('films');

        case 'films_planets':
            // set the collection to use
            collection = db.collection('films_planets');

        case 'planets':
            // set the collection to use
            collection = db.collection('planets');

        case 'films_characters':
            // set the collection to use
            collection = db.collection('films_characters');

        default:
            break;
    }
    var result = await collection.find({}).toArray();
    callback({ result: result });

    console.log( 'call complete: ' + operation );
    client.close();
    return 'call complete';
}

