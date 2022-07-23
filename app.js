const express = require('express')
var app = express();

app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendStatus(200)
    res.render('index')
});

app.listen(3000)
