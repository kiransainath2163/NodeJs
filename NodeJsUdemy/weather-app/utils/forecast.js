let request = require('request')
let forecast = (latitude, longitude, cb) => {
    let url = 'https://api.darksky.net/forecast/4d874c11e30f4814f9ef4067201dea01/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            cb('Unable to connect to internet', undefined)
        } else if (body.error) {
            cb('Unable to find location', undefined)
        } else {

            cb(undefined, body)
        }
    })
}

module.exports = forecast