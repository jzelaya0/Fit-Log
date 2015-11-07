var express = require('express');
var posts   = require('./mock/posts.json');
var app     = express();

var postLists = Object.keys(posts).map(function(value){
                  return posts[value]
                })

//Serve public assests
app.use('/static', express.static(__dirname + '/public'));

//Set view engine to Jade
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

//Home Route
app.get('/', function(req,res){
  res.render('index');
});

//Blog Route
app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.render('blog', {posts: postLists});
  }else {
    var post  = posts[title] || {};
    res.render('post', {post: post});
  }
});


//Port
app.listen(3000, function(){
  console.log('Listening on Port 3000!');
});
