const express = require('express');
const router = express.Router();

// connecting to user, session, cookie controller
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

// Sign Up - user can post username and password on the login page and hit create and send a post request to our server. 
router.post('/signup', userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession, (req, res) => {
    // WHAT DO WE WANT TO DO HERE?
  }
);

// Login
router.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => { {verifed: true}
  // WHAT DO WE WANT TO DO HERE?
  }
);

module.exports = router