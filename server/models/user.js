let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new mongoose.Schema({
	
	name: {type:String, required:true, maxlength:24},
	ques: [{type: Schema.Types.ObjectId, ref: 'Ques'}]
}, {timestamps:true}
	


);



mongoose.model('User', UserSchema);