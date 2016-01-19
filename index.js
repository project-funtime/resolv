// NPM entry point 
var express     = require('express'),
    app         = express(),
    path        = require("path"),
    views       = path.join(process.cwd(), "views");

var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
  var index_path = path.join(views, "index.html");
  res.sendFile( index_path );
});



app.listen(3000, function(){
  console.log("Go to localhost:3000/");
});