//app.spec.js

//GRAB OUR API
var app = require('../app.js');
var supertest = require('supertest');
const should = require('should');


//TEST CODE BELOW
describe('API Tests', () => {
  it('should send the spots object out', (done) => {
    supertest(app)
      .post('/spots')
      .send({
        'id':1234,
        'location': 123,
        'name': 'Starbucks',
        'checkIns': 'Yes'
      })
      .expect(200)
      .end((err, res) => {
        //console.log(err, res);
        res.body.id.should.equal(1234);
        res.body.location.should.equal(123);
        res.body.name.should.equal('Starbucks');
        res.body.checkIns.should.equal('Yes');
        done();
      });
  });

});
