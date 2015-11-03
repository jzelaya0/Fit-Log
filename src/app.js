var express = require('express');
var posts   = require('./mock/posts.json');
var app     = express();

//Set view engine to Jade
app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

//Home Route
app.get('/', function(req,res){
  res.render('index');
});

//Blog Route
app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
  if (title === undefined) {
    res.status(503)
    res.send('This page is under construction');
  }else {
    var post  = posts[title];
    res.send(post);
  }
});


//Port
app.listen(3000, function(){
  console.log('Listening on Port 3000!');
});
