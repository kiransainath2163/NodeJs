const express= require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Server is up : 3000')
})

app.use((req,res,next)=>{
    console.log('I am middleware one')
    next();
})

app.use(express.static(__dirname+"/public"))

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to Express</h2>')
})

app.get('/psl',(req,res)=>{
    res.send('<h2><br /><br /><br /><br />Welcome to PSL</h2>')
})

app.post('/kiran',(req,res)=>{
    res.send('<h2 >Welcome kiran!!</h2>')
})

app.get('/psl1',(req,res)=>{
    res.send('<h1>Hello : '+req.query.name+'</h2>')
})

app.get('/one/:name/:city',(req,res)=>{
    res.send('<h2> Hello : '+req.params.name+' '+req.params.city+'</h2>')
})

app.post('/login',(req,res)=>{
    let user = req.body.user
    let pass = req.body.pass
    if(user=='kiran' && pass =='123'){
        res.send('Welcom kiran')
    }
    else{
        res.redirect('login.html')
    }
    res.send("Welcome")
    //res.send('<h2> Hello : '+req.params.name+' '+req.params.city+'</h2>')
})

app.use((req,res,next)=>{//To use when there is  incorrect url which leads to error message
    res.send('hello middle2')
    console.log('Incorrect URl')
    next();
})
