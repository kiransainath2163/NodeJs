const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '../node_modules/bootstrap/dist/css'));
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})


app.post('/weather', (req, res) => {
    const address = req.body.place
    if (address===null||address===undefined||!address) {
        return res.render('404', {
            errorMessage: 'Please enter a location name',
            title: 'Weather',
            name: 'Andrew Mead'
        })
    }
    geocode(address, (error, {latitude,longitude,place}={}) => {
        if (error) {
            res.render('404', {
                errorMessage: 'There is an error in Geocode API. Please Enter correct Location',
                title: 'Weather',
                name: 'Andrew Mead'
            })
        } else {
            forecast(latitude, longitude, (error, response) => {
                if (error) {
                    res.render('404', {
                        errorMessage: 'There is an error in Forecast API',
                        title: 'Weather',
                        name: 'Andrew Mead'
                    })
                } else {
                    res.render('weather', {
                        title: 'Weather',
                        name: 'Andrew Mead',
                        place: place,
                        temperature: response.currently.temperature,
                        precipProbability: response.currently.precipProbability,
                        humidity: response.currently.humidity
                    })
                }
            })
        }
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})