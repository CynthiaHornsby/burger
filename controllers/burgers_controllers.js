var express = require("express");
var router = express.Router();

var burger = require("../modals/burger.js")

router.get("/", function(req, res) {

    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body.burger_name);
    burger.create([
            req.body.burger_name
        ],
        function(result) {
            res.status(200).end();
        });
});

router.put("/", function(req, res) {
    console.log(req.body.id);
    burger.update([
            req.body.id
        ],
        function(result) {
            res.status(200).end();
        });


});

module.exports = router;
