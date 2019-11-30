const fs = require('fs')

const rstream = fs.createReadStream('input.txt',{highWaterMark:100})
const wstream = fs.createWriteStream('output.txt',{highWaterMark:100})

rstream.pipe(wstream)

console.log('streaming input.txt to output.txt')