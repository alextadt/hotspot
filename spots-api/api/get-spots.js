//get-spots.js

module.exports = function() {

  // Returns an express req/res callback function
  return function(req, res) {
    res.json([{
      id: '12345',
      location: [[12.34,34.56]],
      name: 'Starbucks',
      checkIns: ['user1', 'user2', 'user3']
    }]);
  }
}
