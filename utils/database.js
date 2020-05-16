const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const user = "raviteja";
const pwd = "12345";
const url = `mongodb+srv://${user}:${pwd}@cluster0-4tlr7.mongodb.net/test?retryWrites=true&w=majority`;

const mongoConnect = (cb)=>{
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).then(client=> {
        console.log('Mongo DB Connected!');
        cb(client)
    }).catch(err=> console.log(err))
};

module.exports = mongoConnect;


