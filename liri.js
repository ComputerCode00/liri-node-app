// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var tweets = require("./keys.js");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require(fs);


function Tweets() {
	var client = new Twitter({
  consumer_key: process.env."TMpTETUSZbrkAk26BeMO6b4il",
  consumer_secret: process.env."Ur6qzGXsmXNrosANzeF9Yj7KjeQUXnnSyRwHn9AQaoae6gjSQW",
  access_token_key: process.env."935522663359045633-TLS8sx26pZabFUcuXTtrne4ZnPrMQxn",
  access_token_secret: process.env."MOm8OjaZBJSE8HZWSCmvJ1QvTPtzUWyaeq5hwDRYU9c6F"
	});


client.get(path, params, callback);
client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);   
  console.log(response);   
});

var params = {screen_name: 'Jose R.', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("tweets error");
    console.log();
    for (var i = 0; i < tweets.length; i++) {
    	console.log(tweet[i].created_at);
    	console.log(tweets[i].text);
    }
  }
});

function spotify() {
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
var spotify = new Spotify({
  id: 'a6e41570ff5c4ea3923919dcb15f11c4',
  secret: 'dfbd84d358bf4f7ea4f6cc1dccdc481a'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}   