const request = require('request')
const url = 'https://api.darksky.net/forecast/4d874c11e30f4814f9ef4067201dea01/37.8267,-122.4233?units=si&lang=te&exclude=[flags,alerts,currently,daily]'

request({ url: url, json: true }, (error, response, body) => {
    // console.log('Response:' + response)
    //console.log('Status: ' + response.statusCode)
    // let data = JSON.parse(body)
    // console.log(data.minutely.data)
    //console.log('It is currently '+body.currently.temperature+' degrees out. There is '+body.currently.precipProbability+' chance of rain.')
    console.log(body)
})