const express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = 3000

app.get('/', function(req, res){
    res.render('main', { title: 'TESTSERVER', users : [{ "name" : "harinath"}, { "name" : "Naveen"}] }); 
})



app.listen(port);