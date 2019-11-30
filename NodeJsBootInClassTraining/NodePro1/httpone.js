const http = require('http')

const server =http.createServer((req,res)=>{
    console.log(req.url,req.method)
    res.writeHead(200,{'Content-Type': 'text/html'})
    if(req.url=="/hello")
        res.write('<h1>Hello World</h1>')
    else
        res.write('<h1>Hello there</h1>')
    //res.write('<h1>Hello World</h1>')
    //res.write('Kiran sainath')
    res.end();
})

server.listen(3000,function(){
    console.log('Server is Up and running .....')
})