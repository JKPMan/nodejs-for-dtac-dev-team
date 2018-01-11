'use strict'
var pg = require("pg");



let pool = new pg.Pool({
    host: 'localhost',
    port: 10000,
    database: 'postgres',
    user: 'postgres',
    password: '123'
});

var callbackQuery = function(err, result){
    if(err){
        throw err;
    }

    
    /*
    Calling pool.end will drain the pool of all active clients, disconnect them, and shut down any internal timers in the pool. It is common to call this at the end of a script using the pool or when your process is attempting to shut down cleanly.
    */
    pool.end(() => {
        console.log('pool has ended.')
    })

}

var do_connect = function(err, client, done) {
    try{
        if (err) {
            //likely a connection error that will print to console.
            throw err;
        }
        

        const strSQL = "delete from public.item where id =$1";
        const delete_id = 8
        var query = client.query(strSQL,[delete_id], callbackQuery);


    }catch(err){
        console.log(err);
    }

    done();
}



try{
    pool.connect(do_connect);

}catch(err){
    console.log(err)
}

