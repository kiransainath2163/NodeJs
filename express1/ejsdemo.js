const express = require('express')
const app = express();
const db = require('./mysqldb')

app.set('view engine', 'ejs');
app.set('views', 'views')

app.listen(3000, () => {
    console.log('server is up @ 3000');
})

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('one.ejs')
})

app.get('/cars', (req, res) => {
    let sql = 'select * from cartable'
    db.execute(sql).then(([rows, fields]) => {
        res.render('showcars', {
            cars: rows
        })
    })
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.post('/search', (req, res) => {
    let carid = req.body.carid
    let sql = 'select * from cartable where id = ?';
    db.execute(sql, [carid]).then(([rows, fields]) => {
        res.render('showonecar', {
            cars: rows
        })
    })
})