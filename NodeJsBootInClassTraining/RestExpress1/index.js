const express = require('express')
const cars = require('./store')
const app = express()
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is Running")
})

app.get('/',(req,res)=>{
    res.send('<h3>Rest API demo</h3>')
})

app.get('/cars',(req,res)=>{
    res.json(cars)
})

app.delete('/cars/:id',(req,res)=>{
    let id = req.params.id
    // let cardet = cars.filter(c=>c.id == id)
    // cars.delete(cardet)
    // res.status(200).json(cardet)
    cars.forEach((c,index)=>{
        if(c.id == id){
            cars.splice(index,1);
            res.status(200).json(c)
        }
    })
})

app.put('/cars/:id',(req,res)=>{
    let id = req.params.id
    cars.forEach((c,index)=>{
        if(c.id == id){
            cars.splice(index,1);
            let newcar = req.body
            newcar.id = id
            cars.push(newcar)
            res.status(200).json(c)
        }
    })
})

app.get('/cars/:id',(req,res)=>{
    let id = req.params.id
    res.json(cars.filter(c=> c.id == id))
})

app.post('/cars',(req,res)=>{
    let car = req.body;
    cars.push(car)
    res.status(200).json(car)
})

