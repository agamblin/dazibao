"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const userFactory_1 = require("@factories/userFactory");
const generate_user_1 = require("@tests/utils/generate-user");
describe('when a user register', () => {
    const newUser = generate_user_1.generateNormalUser();
    void it('should create a new account', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = yield userFactory_1.default.create(newUser);
        expect(user).toBeDefined();
    }));
    void it('should not be able to create another account with the same email', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield expect(userFactory_1.default.create(newUser)).rejects.toEqual({
            statusCode: 410,
            message: 'User already exist',
        });
    }));
    void it('should not be able to create an account with an incorrect email', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const incorrectEmail = generate_user_1.generateBadEmail();
        yield expect(userFactory_1.default.create(incorrectEmail)).rejects.toEqual({
            statusCode: 422,
            message: "Validation doesn't pass",
        });
    }));
    void it('should not be able to create an account with an incorrect password', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const incorrectPwd = generate_user_1.generateBadPwd();
        yield expect(userFactory_1.default.create(incorrectPwd)).rejects.toEqual({
            statusCode: 422,
            message: "Validation doesn't pass",
        });
    }));
});
//# sourceMappingURL=auth.test.js.map