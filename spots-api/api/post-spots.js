//post-spots.js

module.exports = function() {
  // Returns an express req/res callback function
  return function(req, res) {
       res.json(req.body);
  }
}
