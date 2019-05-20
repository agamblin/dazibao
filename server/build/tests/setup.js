"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _db_1 = require("@db");
jest.setTimeout(30000);
beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield _db_1.default(true);
}));
afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield _db_1.db.close();
}));
//# sourceMappingURL=setup.js.map