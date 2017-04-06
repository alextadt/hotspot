// put-spot.spec.js

const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/spots/:id', () => {
  it('should return a response object', done => {
    supertest(app)
      .put('/spots/10')
      .send ({
        id: 10,
        location: "42.4509922,-79.3383331",
        name: "Fenton Hall",
        checkIns: "5"
      })
      .end((err, res) => {
        res.body.name.should.equal('Fenton Hall');
       done();
     });
  });
});
