'use strict';

var exp = require("express");
var app = exp();

var path = require('path');
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(exp.static(__dirname));


//Specify the folder to find templates
//Params: views, path of html template files (view), default path is "views" (in case of don't have this line)
app.set('views','views'); 

// Set the template engine
app.set("view engine", 'ejs');

var index_load = function(req, res) {
    var employee = {
        id:'001',
        name:'Mr.X',
        Position:'GB'
    }
    res.render('view1', {version: "Demo", model:employee});
}

var view2_load = function(req, res) {
    res.render('view2');
}


app.get('/', index_load);
app.get('/view1', index_load);
app.get('/view2', view2_load);

// Middleware for reading request body
var mdw = function(req, res, next){
    console.log("TODO: Logging here!!!")
    next();
}
app.set(mdw);


app.listen(9001, () => {
    console.log(`Server started on port 9001`);
});