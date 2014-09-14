var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var message = 'Hodor';

    var points = ['!', '.', '?', ' '];
    var point = points[Math.floor(Math.random() * points.length)];
    message = message + point;

    res.format({
        'text/plain': function(){
            res.send(message);
        },

        'text/html': function(){
            res.render('hodor',{ 'message': message });
        },

        'application/json': function(){
            res.send({ 'message': message});
        },

        'default': function() {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    });
});

router.get('/number/:number', function(req, res) {
    var message = '';
    for (i = 0; i < req.params.number; i++ ) {
        message += 'Hodor, ';
    }
    message = message.slice(0, -2);

    var points = ['!', '.', '?', ' '];
    var point = points[Math.floor(Math.random() * points.length)];
    message = message + point;

    res.format({
        'text/plain': function(){
            res.send(message);
        },

        'text/html': function(){
            res.render('hodor',{ 'message': message });
        },

        'application/json': function(){
            res.send({ 'message': message});
        },

        'default': function() {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    });
});

router.get('/question/:question', function(req, res) {
    var message = '';

    var number = Math.floor((Math.random() * 5) + 1);

    for (i = 0; i < number; i++ ) {
        message += 'Hodor, ';
    }
    message = message.slice(0, -2);

    var points = ['!', '.', '?', ' '];
    var point = points[Math.floor(Math.random() * points.length)];

    message = message + point;

    res.format({
        'text/plain': function(){
            res.send(message);
        },

        'text/html': function(){
            res.render('Hodor',{ 'message': message });
        },

        'application/json': function(){
            res.send({ 'message': message});
        },

        'default': function() {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    });
});

module.exports = router;
