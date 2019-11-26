const fs = require('fs') 

const buffer = fs.readFileSync('1-json.json')
console.log(buffer.toString())
const str = buffer.toString()
let data = JSON.parse(str)
data.name = 'Kiran'
data.planet = 'vormir'
data.age = 27
console.log(data)
fs.writeFileSync('1-json.json',JSON.stringify(data))
