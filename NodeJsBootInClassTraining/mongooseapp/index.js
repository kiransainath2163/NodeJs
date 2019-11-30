const express= require('express')
const app = express()
const Mongoose = require('mongoose')
const product = require('./models/product')
app.use(express.json())
let url = 'mongodb://127.0.0.1:27017/PSLdb'

Mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Connected...to db....')
    app.listen(3000,()=>{
        console.log('Server is up and running at port:3000')
    })
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send('<h1>Mongoose Demo....<h1>')
})

app.get('/products',(req,res)=>{
    product.find().then((prs)=>{
        res.json(prs)
    })
})

app.get('/products/:code',(req,res)=>{
    let code =req.params.code
    product.find({code:code}).then((prs)=>{
        res.json(prs)
    })
})

app.post('/products/:code',(req,res)=>{
    let code =req.params.code
    product.deleteOne({code:code}).then((prs)=>{
        res.json(prs)
    })
})

app.post('/products',(req,res)=>{
    let code = req.body.code;
    let name = req.body.name;
    let price = req.body.price
    let prod = new product({code:code, name:name, price:price})
    prod.save().then((data)=>{
        res.json(data)
    })
})

app.put('/products/:code',(req,res)=>{
    let code = req.params.code
    let name = req.body.name
    let price = req.body.price
    product.updateOne({code:code},{name:name,price:price}).then((data)=>{
        res.json(data)
    })
})