// app.js
// Bootstrapping the express application
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

// Load environment secret variables
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

// Connection URL
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds119210.mlab.com:19210/hotspotdb`;

// Allow Cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

<<<<<<< HEAD
// Load in routes:
app.get('/alive', require('./api/alive.js')());
app.delete('/spots/:id', require('./api/delete-spot.js')());
=======
// Use connect method to connect to the server
MongoClient.connect(mongoURL, function(err, db) {
  if (err) {
    throw err;
  }
  console.log("Connected successfully to mongo");

  // Load in routes:
  app.get('/alive', require('./api/alive.js')(db));
  app.get('/spots', require('./api/get-spots.js')(db));
  app.get('/spots/:id', require('./api/db-get-spot.js')(db));
  app.post('/spots', require('./api/post-spots.js')(db));
  app.put('/spots/:id', require('./api/put-spot.js')(db));
});
>>>>>>> 998dc4cd00c296f707e9d615857d9ece4318cb06

// only bootstrapped, not run (for testing)
module.exports = app;
