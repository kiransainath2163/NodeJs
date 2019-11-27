const request = require('request')
//const url = 'https://api.darksky.net/forecast/4d874c11e30f4814f9ef4067201dea01/37.8267,-122.4233?units=si&lang=te&exclude=[flags,alerts,currently,daily]'

// request({ url: url, json: true }, (error, response, body) => {
//     // console.log('Response:' + response)
//     //console.log('Status: ' + response.statusCode)
//     // let data = JSON.parse(body)
//     // console.log(data.minutely.data)
//     //console.log('It is currently '+body.currently.temperature+' degrees out. There is '+body.currently.precipProbability+' chance of rain.')
//     console.log(body)
// })
let Mapboxurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hyderabad.json?access_token=pk.eyJ1Ijoia2lyYW4xMjEiLCJhIjoiY2szaGh6ejBrMGJzbzNjcXBvNTVyNWZncCJ9.WFDTL7Psgr_2J1IL4A9bgw&limit=1'
request({url:Mapboxurl,json:true},(error,response,body)=>{
    if(error){
        console.log('API Error')
    }else if(body.message){
        console.log('Not Authorized- No token')
    }
    else{
    let latitude = body.features[0].geometry.coordinates[0]
    let longitude = body.features[0].geometry.coordinates[1]
    console.log('Coordinates are '+latitude+','+longitude)
    let darkslyurl = 'https://api.darksky.net/forecast/4d874c11e30f4814f9ef4067201dea01/'+latitude+','+longitude+'?units=si&lang=te&exclude=[flags,alerts,currently,daily]'
    request({url:darkslyurl,json:true},(error,response,body)=>{
        console.log(body.hourly.data[0])
    })
}
})
