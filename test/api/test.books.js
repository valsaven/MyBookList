/**
 * Created by val on 11/1/16.
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
describe('Books', () => {
  describe('/GET books', () => {
    it('it should GET all the books on /api/books', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/books')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(10);
          done();
        });
    });
  });

  describe('/GET books/:firstId', () => {
    it('it should GET the "1984" book on /api/books/1', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/books/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.eql(1);
          res.body.title.should.be.eql('1984');
          res.body.totalPages.should.be.eql(304);
          done();
        })
    })
  });

  describe('/GET books/:lastId', () => {
    it('it should GET the "The Chronicles of Narnia: ' +
      'The Lion, the Witch and the Wardrobe" book on /api/books/10', (done) => {
      chai.request('http://localhost:3000')
        .get('/api/books/10')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.eql(10);
          res.body.title.should.be.eql('The Chronicles of Narnia: ' +
            'The Lion, the Witch and the Wardrobe');
          res.body.totalPages.should.be.eql(430);
          done();
        })
    })
  });
});
