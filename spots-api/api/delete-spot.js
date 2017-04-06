//delete-spot.js

<<<<<<< HEAD


module.exports = function (db) {
  return function (req, res) {
    var spots = db.collection('spots');
  spots.remove(  spots.find ({_id: req.params.id}), {$set: req.body}, false, function(err, result) {

      if(err) throw err;

  res.json('Spot deleted');
=======
module.exports = function () {
  return function (req, res) {
    res.send('spot deleted');
>>>>>>> 998dc4cd00c296f707e9d615857d9ece4318cb06
  }
}
