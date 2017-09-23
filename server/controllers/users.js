let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');


module.exports={
	login: (req,res)=>{
		console.log("hit users.login");
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if(err){
				console.log("formality error handling");
			}else{
				if(foundUser){
					if(bcrypt.compareSync(req.body.password, foundUser.password)==true){
						console.log("passwords match, logging in");
						req.session.userId = foundUser._id;
						res.json(true);
					}else{
						console.log("passwords failed to match");
						res.json({
							errors:
							{
								login: {message:"incorrect email and password combination"}
							}
						});
					}
				}
			}
		})
	},
	getCurrent: (req,res)=>{
		console.log("hit users.getCurrent");
		if(req.session.userId == undefined){
			res.json({
				errors:
				{
					getCurrent: {message:'you are not logged in'}
				}
			});
		}else{
			User.findOne({_id: req.session.userId}).exec((err,foundUser)=>{
				if(err){
					console.log('major fail');
					res.json(false);
				}else{
					console.log('found user in session');
					res.json(foundUser);
				}
			})
			
		}
	},
	logout: (req,res)=>{
		console.log("hit users.logout");
		req.session.destroy();
		res.json(true);
	}

	
};