let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let bcrypt = require('bcrypt');
let session = require('express-session');

let sessConfig = {
	secret: "keepitsecret",
	saveUninitialized: true
}

// config express app
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json({extended:true}));
app.use(session(sessConfig));
app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose');

let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(1518, ()=>{
	console.log("listening on port 1518");
})