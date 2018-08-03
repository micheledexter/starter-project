/* DEPENDENCIES */
const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

/* SERVER SESSION SECRET */
const serverSessionSecret = () => {
  /*
    Check to make sure we have a SERVER_SESSION_SECRET in our
    .env file, that it's at least 8 characters, and that it's
    not the default secret of 'superDuperSecret'.

    If there it's bad, display a console log letting them know.
  */
  if (!process.env.SERVER_SESSION_SECRET ||
  process.env.SERVER_SESSION_SECRET.length < 8 ||
  process.env.SERVER_SESSION_SECRET === warnings.exampleBadSecret) {
    console.log(warnings.badSecret);
  }

  /*
    Regardless of whether or not it's a bad secret, use it as
    the cookie's secret.
  */
  return process.env.SERVER_SESSION_SECRET;
};

/*
  Create a new cookie session
*/
module.exports = cookieSession({
  secret: serverSessionSecret() || 'superDuperSecret', // default to 'superDuperSecret'
  key: 'user', // name of the cookie
  resave: 'false', // don't force sessions to be saved back to the session store
  saveUninitialized: false, // don't force uninitiated sessions
  cookie: { maxage: 60000, secure: false }, // set the cookie's max age to 60000 and to be insecure
});