// delete-spot.spec.js
// supertest
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');


<<<<<<< HEAD
describe('DELETE /spots/:id', (db) function(err, result) {
=======
describe('DELETE /spots/:id', () => {
>>>>>>> 998dc4cd00c296f707e9d615857d9ece4318cb06

  it('should delete a spot', done => {
    supertest(app)
    .delete('/spots/123')
    .end((err, res) => {
      res.text.should.equal('spot deleted');
      done();
    });
  });
});
