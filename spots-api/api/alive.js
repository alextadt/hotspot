// api/alive.js
<<<<<<< HEAD
module.exports = function() {

=======

module.exports = function(db) {
>>>>>>> 998dc4cd00c296f707e9d615857d9ece4318cb06
  // Returns an express req/res callback function
  return function(req, res) {
    db.listCollections().toArray((err, collections) => {
      if (err) {
        res.status(500).json({
          code: 'DbError',
          err: err
        });
      } else {
        res.json({
          message: 'Johnny Five is alive!',
          collections: collections
        });
      }
    });
  }
}
