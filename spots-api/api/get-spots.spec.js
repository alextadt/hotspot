//get-spots.spec.js
var app = require('../app.js');

var supertest = require('supertest');
var should = require('should');

describe('/spots', () => {
  it('should return a list of spot objects on get/', (done) => {
    supertest(app)
    .get('/spots')
    .expect(200)
    .end((err, res) => {
      res.body[0].id.should.equal(
        '12345'
      );
      res.body[0].location[0][0].should.equal(
        12.34
      );
      res.body[0].name.should.equal(
        'Starbucks'
      );
      res.body[0].checkIns[0].should.equal(
        'user1'
      );
      done();
    });
  });
});
