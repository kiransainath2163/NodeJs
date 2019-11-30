const fs = require('fs')
const zlib = require('zlib')
const rstream = fs.createReadStream('input.txt',{highWaterMark:100})
const wstream = fs.createWriteStream('output.zip',{highWaterMark:100})

rstream.pipe(zlib.createGzip()).pipe(wstream)

console.log('streaming input.txt to output.txt')