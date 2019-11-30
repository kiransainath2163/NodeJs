const fs = require('fs')
let fsize =fs.readFileSync('input.txt').length
console.log('File Size is : '+fsize)
const rstream=fs.createReadStream('input.txt',{highWaterMark:500});

rstream.on('data',(chunk)=>{
    console.log(chunk.toString());
    console.log('--------------------------------------')
})

rstream.on('end',(chunk)=>{
    console.log('---------------END-------------')
})