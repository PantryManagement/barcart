// const User = require()
const bcrypt = require('bcryptjs/dist/bcrypt');
const res = require('express/lib/response');
 // import pg db??
// const User = require('../models/userModel');
const userController = {};

// createUser (creating account)
userController.createUser = (req, res, next) => {
  //write code here
	userController.createUser({
		username: req.body.username,
		password: data
	}, function(error, user) {
		if(error) {
			//we still need to enter the path in as the first arg to render below.
		//	res.render( {error: 'hello!'})
		}
	})

};

//  verifyUser (login attempt)
userController.verifyUser = (req, res, next) => {
  //write code here

};



module.exports = userController;
