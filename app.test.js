const request = require('supertest');
const app = require('./app');

describe("GET /:operation", () => {
    it("should calc mean", async () => {
        const res = await request(app).get('/mean?nums=1,2,3,4,5');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ operation: 'mean', value: 3});
    });

    it("should calc median", async () => {
        const res = await request(app).get('/median?nums=1,2,3,4,5');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ operation: 'median', value: 3});
    });

    it("should calc mode", async () => {
        const res = await request(app).get('/mode?nums=1,2,2,3,4,4,4');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ operation: 'mode', value: 4});
    });

    it("should return 400 for invalid nums", async () => {
        const res = await request(app).get('/mean?nums=foo,2,3');
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error');
    });
    
});