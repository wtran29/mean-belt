var mongoose = require("mongoose");
fs = require('fs');
path = require('path');

mongoose.connect('mongodb://localhost/beltexam',{ useMongoClient: true});

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach((file)=>{
	if(file.indexOf('.js')>=0){
		require(models_path + '/' +file);
	}

})