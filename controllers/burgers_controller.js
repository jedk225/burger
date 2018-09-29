// Require express
var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create the router for the app
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            // select all burgers and display
            res.redirect('/');
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (result) {
        res.redirect('/');

    });
});

//------------------------------------------------------------------------------------------------------
// Export routes for server.js to use.
module.exports = router;