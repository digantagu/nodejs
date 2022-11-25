var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Lachit Barphukan was a commander and Borphukan, in the Ahom kingdom, located in present-day Assam, India, known for his leadership in the 1671 Battle of Saraighat that thwarted a drawn-out attempt by Mughal forces under the command of Ramsingh I to take over Ahom kingdom. He died about a year later due to illness.')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
