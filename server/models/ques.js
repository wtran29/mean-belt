let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuesSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	question: {type:String, required:true, minlength:10},
	description: {type:String, required:false}
}, {timestamps:true}
	


);



mongoose.model('Ques', QuesSchema);