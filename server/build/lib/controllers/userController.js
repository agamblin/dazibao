"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt_simple_1 = require("jwt-simple");
const bcryptjs_1 = require("bcryptjs");
const keys_1 = require("@config/keys");
const userFactory_1 = require("@factories/userFactory");
const User_1 = require("@models/User");
const tokenForUser = (user) => {
    const timestamp = new Date().getTime();
    return jwt_simple_1.encode({ sub: user.id, iat: timestamp }, keys_1.jwtSecret);
};
exports.register = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield userFactory_1.default.create(req.body);
        return res.status(201).json({ token: tokenForUser(user) });
    }
    catch (err) {
        return next(err);
    }
});
exports.getUserInfo = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    return res.status(200).json({ name: req.user.username });
});
exports.getToken = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ where: { email } });
    if (!user) {
        const error = new Error('Email not found');
        error.statusCode = 404;
        error.message = 'Email not found';
        return next(error);
    }
    const equal = yield bcryptjs_1.compare(password, user.password);
    if (!equal) {
        const error = new Error('Bad credentials');
        error.statusCode = 401;
        error.message = 'Bad credentials';
        return next(error);
    }
    return res.status(200).json({ token: tokenForUser(user) });
});
//# sourceMappingURL=userController.js.map