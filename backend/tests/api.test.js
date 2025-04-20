const request = require('supertest');
const app = require('../server');

describe('API Endpoints', () => {
  it('GET /api/users should return a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/crypto should return crypto prices', async () => {
    const res = await request(app).get('/api/crypto');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('bitcoin');
    expect(res.body).toHaveProperty('ethereum');
  });
});
