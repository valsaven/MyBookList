/**
 * Created by val on 11/1/16.
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Statuses', () => {
  describe('/GET statuses', () => {
    it('it should GET all the statuses on /api/statuses', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/statuses')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(5);
          done();
        });
    });
  });

  describe('/GET statuses/:firstId', () => {
    it('it should GET the "Currently Reading" status on /api/statuses/1', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/statuses/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.eql(1);
          res.body.name.should.be.eql('Currently Reading');
          done();
        });
    });
  });

  describe('/GET statuses/:lastId', () => {
    it('it should GET the "Plan to Read" status on /api/statuses/5', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/statuses/5')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.eql(5);
          res.body.name.should.be.eql('Plan to Read');
          done();
        });
    });
  });
});


