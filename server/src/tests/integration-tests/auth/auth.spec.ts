import {
    generateNormalUser,
    generateBadEmail,
    generateBadPwd,
} from '@tests/utils/generate-user';
import * as request from 'supertest';
import app from '@app';
import { pick } from 'lodash';

describe('when a user register', () => {
    const newUser = generateNormalUser();

    /**
     * REGISTER
     */
    void it('should return 201 with the right informations', async () => {
        const res = await request(app)
            .post('/users')
            .send(newUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(201);
    });

    void it('should return 410 when creating a user that already exist', async () => {
        const res = await request(app)
            .post('/users')
            .send(newUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(410);
    });

    void it('should return 422 with bad email', async () => {
        const badEmailUser = generateBadEmail();
        const res = await request(app)
            .post('/users')
            .send(badEmailUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(422);
    });

    void it('should return 422 with bad password', async () => {
        const badPwdUser = generateBadPwd();
        const res = await request(app)
            .post('/users')
            .send(badPwdUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(422);
    });

    /**
     * LOGIN
     */
    void it('should return 200 with right credentials', async () => {
        const res = await request(app)
            .post('/users/token')
            .send(pick(newUser, 'email', 'password'))
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(200);
    });

    void it('should return 401 with bad credentials', async () => {
        const res = await request(app)
            .post('/users/token')
            .send({ ...pick(newUser, 'email'), password: 'test123' })
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(401);
    });

    void it('should return 404 with unknown email', async () => {
        const res = await request(app)
            .post('/users/token')
            .send({ ...pick(newUser, 'password'), email: 'test@test.com' })
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(404);
    });
});
