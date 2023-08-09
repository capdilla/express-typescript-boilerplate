import { expect } from 'chai';
import request from 'supertest';
import server from '../../server';

describe('Test Auth controller', function () {
  it('should log in with correct response', function (done) {
    request(server)
      .post(`/auth/login`)
      .set('Accept', 'application/json')
      .send({ username: 'admin', password: 'admin' })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.body.message).eq('correct');
        expect(res.body.success).eq(true);

        done();
      });
  });

  it('substract', function () {
    const a = 2;
    expect(a).equal(2);
  });
});
