var express = require("express");
var app = express();

/*
process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) console.log('clean - server stop');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

*/


/*
app.get('/profile/:name', function(req, res){
    var str = "<H1>Hello World!! - " + req.params.name + "</H1>";
    
    res.send(str);
});
*/

/*
If true, the client’s IP address is understood as the left-most entry in the X-Forwarded-* header.

If false, the app is understood as directly facing the Internet and the client’s IP address is derived from req.connection.remoteAddress. This is the default setting.
*/
app.set('trust proxy', true);

/*
    Writing Middleware Reference:
        https://expressjs.com/en/guide/writing-middleware.html
*/

var isThisLocalhost = function (req){
    
    var ip = req.connection.remoteAddress;
    var host = req.get('host');
    
    return ip === "127.0.0.1" || ip === "::ffff:127.0.0.1" || ip === "::1" || host.indexOf("localhost") !== -1;
}

var mdw = function(req, res, next){

    
    var fw_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    /*
        In nginx.conf file: 
        proxy_set_header  X-Real-IP  $remote_addr;

        In node.js server file: 
        var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    */
    var real_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var ip =req.ip;

    if(isThisLocalhost(req)=== true){
        ip = "127.0.0.1";
        fw_ip=ip;
        real_ip = ip;
    }
    console.log("Request date:"+new Date(), "base url:",req.baseUrl,"ip:",ip, "FW-IP:",fw_ip,"real-ip",real_ip,"Method:" , req.method)
    next();

};

app.use(mdw);
//app.use('/profile/:name', mdwFnc);

app.get('/', function(req, res){
    //console.log("base url (nothing here!!):"+req.baseUrl)
    res.send("<H1>Hello World!!</H1>");
});


app.listen(9000, () => {
    console.log(`Server started on port 9000`);
});


