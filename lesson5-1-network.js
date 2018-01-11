var express = require("express");
var app = express();


app.get('/profile/:name', function(req, res){
    var str = "<H1>Hello World!! - " + req.params.name + "</H1>";
    
    res.send(str);
});


app.get('/', function(req, res){
    //console.log("base url (nothing here!!):"+req.baseUrl)
    res.send("<H1>Hello World!!</H1>");
});



app.listen(9000, function(){
    console.log('Server started on port 9000');
});
