const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv.length>=3){
    geocode(process.argv[2], (error, data) => {
        if (error) {
            console.log('Error: ' + error)
        } else {
            console.log('Data: ' + data.latitude,data.longitude,data.place)
            forecast(data.latitude, data.longitude, (error, data) => {
                if (error)
                    console.log('Error: ', error)
                else
                    console.log('Data: ', data)
            })
        }
    })

}else{
    console.log('Please enter the name of place in Command line Argument')
}
