/* eslint-disable no-undef */
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../index';

// chai.use(chaiHttp);
// chai.should();
// describe('GET /', () => {
//   it('should return all meals', (done) => {
//     chai.request(app)
//       .get('/api/v1/meals')
//       .end((err, res) => {
//         res.should.have.status(200);
//         // eslint-disable-next-line no-unused-expressions
//         res.should.be.json;
//         res.body.should.be.a('object');
//         res.body.data.should.be.a('array');
//         done();
//       });
//   });
// });


/* eslint-disable no-undef */
import request from 'supertest';

import { expect } from 'chai';

import app from '../index';

import meal from '../utils/dummyData';


describe('Meal API\'s test', () => {
  /*
        test to get all meals
        response must be an object
        created meals must also be of type 'object'
    */
  describe('Fetch all meals', () => {
    it('should return all meals', (done) => {
      request(app)
        .get('/api/v1/meals')
        .expect(200)
        .expect((res) => {
          expect(typeof res.body)
            .toBe('object');
          expect(typeof res.body.data[0])
            .toBe('object');
        })
        .end(done);
    });
  });

  describe('#POST, add meal API test', () => {
    it('should create a meal', (done) => {
      request(app)
        .post('/api/v1/meals')
        .send(meal)
        .expect(201)
        .expect((res) => {
          expect(typeof res.body)
            .toBe('object');
          expect(typeof res.body.data[0])
            .toBe('object');
        })
        .end(done);
    });
  });

  describe('#GET, fetch a single meal by id', () => {
    /*
            this test should return a single meal by id
            the next test should return an HTTP code of 204 if meal id doesn't exist
        */
    it('should return a single meal', (done) => {
      request(app)
        .get('/api/v1/meals/1')
        .expect(200)
        .expect((res) => {
          expect(typeof res.body)
            .toBe('object');
          expect(typeof res.body.data)
            .toBe('object');
        })
        .end(done);
    });

    it('should return a code of 404 for an id whose meal doesn\'t exist', (done) => {
      request(app)
        .get('/api/v1/meals/30')
        .expect(404)
        .end(done);
    });
  });

  describe('#PUT, edit an existing meal', () => {
    /*
            this test should return a 202 after an update
        */
    it('should edit a meal by id successfully', (done) => {
      request(app)
        .put('/api/v1/meals/4')
        .send(meal)
        .expect(202)
        .end(done);
    });

    /*
        this test should return a 404 if meal with given id is not found
       */
    it('should return a 404 status if id of meal does not exist', (done) => {
      request(app)
        .put('/api/v1/meals')
        .send(meal)
        .expect(404)
        .end(done);
    });
  });

  describe('#DELETE, delete a meal with a given id', () => {
    /*
            this test should return a 202 when deletion is complete
        */

    it('should return a 202 when deletion of a meal with given id is complete', (done) => {
      request(app)
        .delete('/api/v1/meals/3')
        .expect(202)
        .end(done);
    });

    /*
            this test should return a 404 if meal with given id is not found
        */

    it('should return a 404 if meal id does not exist', (done) => {
      request(app)
        .delete('/api/v1/meals/100')
        .expect(404)
        .end(done);
    });
  });
});
