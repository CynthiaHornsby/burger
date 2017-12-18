var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection({
        host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "ahz023kucay7wfbf",
        password: "dex95mcvi3o5px02",
        database: "h5an3c9cs2qu1uaf"
    });

}
else {

    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });

}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
