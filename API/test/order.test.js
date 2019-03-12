/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();
describe('GET /', () => {
  it('should return all order', (done) => {
    chai.request(app)
      .get('/api/v1/order')
      .end((err, res) => {
        res.should.have.status(200);
        // eslint-disable-next-line no-unused-expressions
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
});
