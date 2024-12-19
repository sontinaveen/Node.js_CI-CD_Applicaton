const request = require('supertest');
const app = require('../server');

describe('Server API Tests', () => {
  it('should return time API successfully', async () => {
    const response = await request(app)
      .get('/api/time')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toHaveProperty('currentTime');
    expect(response.body).toHaveProperty('message');
  });

  it('should serve index.html', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});
