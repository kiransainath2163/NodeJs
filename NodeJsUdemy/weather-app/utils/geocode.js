const request = require('request')
let geocode = (address, cb) => {
    let mapboxurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2lyYW4xMjEiLCJhIjoiY2szaGh6ejBrMGJzbzNjcXBvNTVyNWZncCJ9.WFDTL7Psgr_2J1IL4A9bgw&limit=1'
    request({ url: mapboxurl, json: true }, (error, response, body) => {
        if (error) {
            cb('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            cb('Unable to find location. Try another search.',undefined)
        } else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const place = response.body.features[0].place_name
            cb(undefined,{latitude,longitude,place})
        }
    })

}

module.exports = geocode