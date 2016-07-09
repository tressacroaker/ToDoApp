var express   = require('express'),
bodyParser  = require('body-parser'),
cors        = require('cors'),
mongoose    = require('mongoose');

var todoCtrl = require('./todoCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/todo', todoCtrl.create);
app.get('/todo', todoCtrl.read);
app.put('/todo/:id', todoCtrl.update);
app.delete('/todo/:id', todoCtrl.delete);

var mongoUri = "mongodb://localhost:27017/toDoApp";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});
