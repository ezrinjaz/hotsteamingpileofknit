var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var index = require ('./routes/index');
var tasks = require ('./routes/tasks');

var port = 8000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder (for Angular Stuff)
app.use(express.static(path.join(__dirname, 'client'))); //all Angular stuff will go in client Folder

//Body Parser MiddleWare
app.use(bodyParser.json());

//Create route
app.use('/', index) // '/' is homepage aka index and associated with '.routes/index' on line 5
app.use('/api', tasks); //associated with '.routes/tasks'

//Now we want to listen
app.listen(port, function(){
    console.log('Server started on port'+port);
});