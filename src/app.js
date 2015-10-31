var express = require('express');
var posts   = require('./mock/posts.json');
var app     = express();

app.get('/', function(req,res){
  res.send('Loaded Root Page');
});


app.get('/blog', function(req,res){
  res.send(posts)
})

app.listen(3000, function(){
  console.log('Listening on Port 3000!');
});
