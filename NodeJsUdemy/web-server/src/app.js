const path = require('path')
const express = require('express')
const hbs = require('hbs')

let app = express()

//Define path for express configs
let publicDirectoryPath = path.join(__dirname, '../public')
let viewPath = path.join(__dirname, '../templates/views')
let partialspath = path.join(__dirname, '../templates/partials')

//Setup Handlebar Engine and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialspath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Hello'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sainath',
        name: 'NodeJS'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        help: 'Please Help her out!!',
        title: 'Santosh',
        name: 'BMW'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        age: 25,
        height: 273
    })
})

app.get('/help/*',(req,res)=>{
    res.render('helpnotfound')
})
app.get('*',(req,res)=>{
    res.render('notfound')
})



app.listen(3000, () => {
    console.log('Server is up and running at port:3000!!')
})


