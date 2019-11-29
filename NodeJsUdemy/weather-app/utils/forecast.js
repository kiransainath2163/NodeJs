let request = require('request')
let forecast = (latitude,longitude,cb) => {
    let url1 = 'https://api.darksky.net/forecast/4d874c11e30f4814f9ef4067201dea01/'+latitude+','+longitude+'?units=si'
    request({url: url1, json: true}, (error, response) => {
        if (error) {
            cb('Unable to connect to internet',undefined)
        } else if (response.body.error) {
            cb('Unable to find location',undefined)
        } else {
            cb(undefined,response.body)
        }
    })
}

module.exports=forecast