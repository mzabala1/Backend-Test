let request = require('request');

let apiKey = 'd031e14a62685f6cf1a02810e44479c7';
let city = 'vienna';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
