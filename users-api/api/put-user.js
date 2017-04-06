
module.exports = function() {
  return function(req, res) {
    res.json(req.body);
     //db.update({_id: req.params.id}, req.body, (err, updateUser) => {
     //res.json(updateUser);
  }
}
