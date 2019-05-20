"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const request = require("supertest");
const _app_1 = require("@app");
describe('application should', () => {
    void it('be live', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield request(_app_1.default).get('/');
        return expect(res.status).toBe(200);
    }));
});
//# sourceMappingURL=healthcheck.spec.js.map