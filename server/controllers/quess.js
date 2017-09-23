let mongoose = require('mongoose');
let Ques = mongoose.model('Ques');
const User = mongoose.model('User');
module.exports={
	index: (req,res)=>{
		console.log("hit ques.index");
		Ques.find().exec((err, foundUser)=>{
			
			if(err){
				console.log("findAll error handling");
				res.json(err);
			}else{
				console.log("get all ques")
				res.json(foundUser);
			}
		})
	},
	create: (req,res)=>{
		console.log("hit ques.create");
		let ques = new Ques(req.body)

		ques._user = req.session.UserId;
		ques.save((err)=>{
			console.log(ques)
			if(err) {
				console.log('error in create');
				res.json(err);
			}else{
				console.log('added ques')
				res.json(true);
			}
		})

	},
	
	update: (req, res)=>{
		console.log("hit bikes.update");
		Ques.update(req.body._id, req.body, (err)=>{
			if(err) {
				console.log('error in update');
				res.json(err);
			}else{
				console.log('updated ques')
				res.json(true);
				
			}
		})

	},
}