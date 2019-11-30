const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url, {useNewUrlParser: true,useUnifiedTopology:true},(err,client)=>{
    if(err) return console.log('Error connecting db')
    var db = client.db('PSLdb')
    console.log('connected to ..'+db.databaseName)
    db.collection('products').find().toArray().then((products)=>{
        console.log(products)
    })
    client.close()
})