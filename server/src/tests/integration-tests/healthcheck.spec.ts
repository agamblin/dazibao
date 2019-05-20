import * as request from 'supertest';
import app from '@app';

describe('application should', () => {
    void it('be live', async () => {
        const res = await request(app).get('/');
        return expect(res.status).toBe(200);
    });
});
