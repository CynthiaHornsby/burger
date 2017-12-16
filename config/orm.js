var connection = require("../config/connection.js");


var orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    create: function(burger_name, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
        var query = connection.query(queryString, [burger_name], function(err, result) {

            if (err) {
                throw err;
            }

            callback(result);

        });

        console.log(query.sql);
    },

    update: function(condition, cb) {

        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        var query = connection.query(queryString, [condition], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

        console.log(query.sql);
    }
};

module.exports = orm;
