const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
MongoClient.connect("mongodb+srv://david:TIooRkXpjj5Rd734@cluster0.0nxrq7r.mongodb.net/?appName=Cluster0"
).then(client => {
    console.log("connected"); 
    _db = client.db();
    callback(client);
})
.catch(err => {
    console.log(err);
    throw err;
});
}

const getDb = () => {
    if(_db) {
    return _db;
    }
    throw "no db found.";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


