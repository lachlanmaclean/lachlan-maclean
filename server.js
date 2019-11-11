const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
var storage = multer.memoryStorage();
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');
var calculate = require('./calculate');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//Upload Data Sheet Route
app.post('/stats', upload.array('datasheet', 2), function (req, res, next) {

    //Use Calculate() to get correlation and regresssion values
    let data1 = fs.readFileSync(req.files[0].path.toString(), 'utf8').split('\r\n');
    let data2 = fs.readFileSync(req.files[1].path.toString(), 'utf8').split('\r\n');

    //get the return values from function call.
    let calculationResult = calculate(data1, data2);

    //render the stats page with the values
    res.render('stats', {result: calculationResult});
});

//Send user Json Data from RESTful Api
app.post('/', function (req, res) {
    res.redirect('/' + req.body.id);
});

//api page for instructions
app.get('/api', function (req, res) {
    res.render('api');
});

//stats when no data is being sent
app.get('/stats', function (req, res) {
    let calculationResult = '';
    res.render('stats', {result: calculationResult});
});

//Restful API GET Route
app.get('/:appId', (req, res, next) => {
    let id = req.params.appId ;
    res.status(200).json({
        date: Date(),
        ID: id,
        messsage: 'This is my RESTful API server.'

    });
});
app.post('/', function (req, res) {
    res.render('index');
});

app.get('/', function (req, res) {
    res.render('index');
});

//Starts the server on PORT 3000
app.listen(process.env.PORT || 3000, function () {
    console.log('Lachlan\'s assignment 2 BCPR280 starting.....\nListening on Port 3000');
});