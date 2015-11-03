var express = require('express');
var posts   = require('./mock/posts.json');
var app     = express();

app.get('/', function(req,res){
  res.send('Loaded Root Page');
});


app.get('/blog/:title', function(req,res){
  var title = req.params.title;
  var post  = posts[title]
  res.send(post)
})

app.listen(3000, function(){
  console.log('Listening on Port 3000!');
});
