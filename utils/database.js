// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const mongoos = require('mongoose');

const user = "raviteja";
const pwd = "12345";
const url = `mongodb+srv://${user}:${pwd}@cluster0-4tlr7.mongodb.net/NodeJSCompleteGuid?retryWrites=true&w=majority`;
let _db = null;
const mongoConnect = (cb)=>{
    mongoos.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).then(client=> {
        console.log('Mongo DB Connected!');
       // _db = client.db();
        cb(_db);
    }).catch(err=> console.log(err))
};

const getDb = ()=>{
    if(_db) {
        return _db;
    }
    throw 'No Dtabase Found!';
};
exports.connect  = mongoConnect;
exports.getDb  = getDb;


