const http = require('http')
const url  = require('url')

const server =http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'})
    let rurl = url.parse(req.url,true)
    let name = rurl.query.name
    console.log(rurl)
    res.write('<h1>Hello : '+name+'</h1>')
    res.end();
})

server.listen(3000,()=>{
    console.log('Server is Up and running .....')
})