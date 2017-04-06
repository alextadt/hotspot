
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/users/:id', () => {
  it('should update a users information', (done) => {
    supertest(app)
    .put('/users/123')
    .send({
      id: 123
    })
    .end((err, res) => {
      res.body.id.should.equal(123);
      done();
    });
  });
});
