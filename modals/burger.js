var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(burger_name, cb) {
        orm.create(burger_name, function(res) {
            cb(res);
        });
    },
    update: function(condition, cb) {
        orm.update(condition, function(res) {
            console.log("What is " + condition);
            cb(res);
        });
    }
};

module.exports = burger;
