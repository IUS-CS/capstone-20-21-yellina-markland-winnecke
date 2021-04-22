var express = require('express');
var bodyParser = require('body-parser');

var properties = require('./src/server/properties');
var db = require('./src/server/database');

//Calendar Routes
var calendarRoutes = require('./src/api/calendar.routes');
var app = express();

//Configure bodyParser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//Initialize Express Router
var router = express.Router();

//Call the database connectivity function
db();

//configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//Error Handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

//Use Express Router
app.use('/api', router);

//Call Calendar Routing
calendarRoutes(router);

//Initialize Server
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on port ${properties.PORT}.`)
})