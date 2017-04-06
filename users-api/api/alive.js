// alive.js

module.exports = function(db) {
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
