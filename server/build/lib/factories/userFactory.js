"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = require("@models/User");
const validators_1 = require("@utils/validators");
class UserFactory {
    create(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (!validators_1.checkIfEmail(data.email) ||
                    !validators_1.checkIfMinAndMax(data.password, { min: 5, max: 20 })) {
                    return Promise.reject({
                        statusCode: 422,
                        message: "Validation doesn't pass",
                    });
                }
                const user = yield User_1.default.findOne({
                    where: { email: data.email },
                });
                if (user) {
                    return Promise.reject({
                        statusCode: 410,
                        message: 'User already exist',
                    });
                }
                const newUser = yield User_1.default.create({
                    email: data.email,
                    username: data.username,
                    avatarUrl: data.avatarUrl,
                    password: data.password,
                });
                return newUser;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.default = new UserFactory();
//# sourceMappingURL=userFactory.js.map