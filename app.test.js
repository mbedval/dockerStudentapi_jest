const request = require('supertest');

describe('GET /api/students', () => {
    const baseUrl = 'http://localhost:3000'; // URL of the running Docker container

    it('should return a list of 10 students', async () => {
        const response = await request(baseUrl).get('/api/students');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(10);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: expect.any(String) })
        ]));
    });
});
