"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = require("passport");
const passport_jwt_1 = require("passport-jwt");
const User_1 = require("@models/User");
const keys = require("@config/keys");
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwtSecret,
};
const jwtLogin = new passport_jwt_1.Strategy(jwtOptions, 
// tslint:disable-next-line: no-any
(payload, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(payload.sub);
    if (!user) {
        return done(null, false);
    }
    return done(null, user);
}));
/*
Equivalent to passport.use
**/
passport_1.use(jwtLogin);
//# sourceMappingURL=passport.js.map