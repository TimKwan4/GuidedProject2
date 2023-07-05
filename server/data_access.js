// mongodb client driver
const { MongoClient } = require('mongodb');

// DB Connection URL
var url = "mongodb://localhost:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "swapi"; 

module.exports.call = async function call(operation, parameters, callback) {
    // connect to the db server
    await client.connect();

    // set the database to use
    const db = client.db(dbName);
    // set the collection to use
    var collection = db.collection("planets");

    switch (operation.toLowerCase()) {

        case 'findallplanets':
            collection = db.collection("planets");
            const out = await collection.find({}).toArray();
            callback(out);
            break;
        case 'findallcharacters':
            collection = db.collection("characters");
            const chars = await collection.find({}).toArray();
            callback(chars);
            break;
        case 'findallfilms':
            collection = db.collection("films");
            const films = await collection.find({}).toArray();
            callback(films);
            break;
        case 'findplanet':
            collection = db.collection("planets");
            const planet = await collection.findOne({ id: Number(parameters.id)});
            callback(planet);
            break;
        case 'findfilm':
            collection = db.collection("films");
            const film = await collection.findOne({ id: Number(parameters.id)});
            callback(film);
            break;

        case 'findcharacter':
            collection = db.collection("characters");
            const char = await collection.findOne({ id: Number(parameters.id)});
            callback(char);
            break;

        case 'findfilmcharacters':
            collection = db.collection("films_characters");
            const film_chars = await collection.find({film_id: Number(parameters.id)}).toArray();
            callback(film_chars);
            break;

        case 'findfilmplanets':
            collection = db.collection("films_planets");
            const film_planets = await collection.find({film_id: Number(parameters.id)}).toArray();
            callback(film_planets);
            break;

        case 'findcharacterfilms':
            collection = db.collection("films_characters");
            const character_films = await collection.find({character_id: Number(parameters.id)}).toArray();
            callback(character_films);
            break;
        
        case 'findplanetfilms':
            collection = db.collection("films_planets");
            const planet_films = await collection.find({planet_id: Number(parameters.id)}).toArray();
            callback(planet_films);
            break;

        case 'findplanetcharacters':
            collection = db.collection("characters");
            const planet_characters = await collection.find({homeworld: Number(parameters.id)}).toArray();
            callback(planet_characters);
            break;

        default:
            break;
    }
    console.log( 'call complete: ' + operation );
    return 'call complete';
}