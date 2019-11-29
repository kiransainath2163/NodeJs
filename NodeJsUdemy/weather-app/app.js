const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length >= 3) {
    geocode(process.argv[2], (error, {latitude,longitude,place}) => {
        if (error) {
            console.log('Error: ' + error)
        } else {
            console.log('Data: ' + latitude, longitude, place)
            forecast(latitude, longitude, (error, {hourly}) => {
                if (error)
                    console.log('Error: ', error)
                else
                    console.log('Data: ', hourly)
            })
        }
    })

} else {
    console.log('Please enter the name of place in Command line Argument')
}
