let ques = require('./../controllers/quess');
let users = require('./../controllers/users');
let path = require('path');

module.exports=(app)=>{
	
	app.post('/api/login', users.login);
	app.get('/api/logout', users.logout);
	app.get('/api/users/current', users.getCurrent);
	app.post('/api/create', ques.create);
	app.post('/api/update', ques.update);
	// app.get('/api/getques', ques.getques);
	
	app.all('*', (req,res)=>{
		res.sendFile(path.resolve("./public/dist/index.html"))
	})
}