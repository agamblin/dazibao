"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const generate_user_1 = require("@tests/utils/generate-user");
const request = require("supertest");
const _app_1 = require("@app");
const lodash_1 = require("lodash");
describe('when a user register', () => {
    const newUser = generate_user_1.generateNormalUser();
    /**
     * REGISTER
     */
    void it('should return 201 with the right informations', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default)
            .post('/users')
            .send(newUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(201);
    }));
    void it('should return 410 when creating a user that already exist', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default)
            .post('/users')
            .send(newUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(410);
    }));
    void it('should return 422 with bad email', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const badEmailUser = generate_user_1.generateBadEmail();
        const res = yield request(_app_1.default)
            .post('/users')
            .send(badEmailUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(422);
    }));
    void it('should return 422 with bad password', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const badPwdUser = generate_user_1.generateBadPwd();
        const res = yield request(_app_1.default)
            .post('/users')
            .send(badPwdUser)
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(422);
    }));
    /**
     * LOGIN
     */
    void it('should return 200 with right credentials', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default)
            .post('/users/token')
            .send(lodash_1.pick(newUser, 'email', 'password'))
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(200);
    }));
    void it('should return 401 with bad credentials', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default)
            .post('/users/token')
            .send(Object.assign({}, lodash_1.pick(newUser, 'email'), { password: 'test123' }))
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(401);
    }));
    void it('should return 404 with unknown email', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default)
            .post('/users/token')
            .send(Object.assign({}, lodash_1.pick(newUser, 'password'), { email: 'test@test.com' }))
            .set('Content-Type', 'application/json');
        expect(res.status).toBe(404);
    }));
});
//# sourceMappingURL=auth.spec.js.map