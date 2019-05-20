"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("passport");
// tslint:disable-next-line: no-floating-promises
Promise.resolve().then(() => require('@services/passport'));
// Middleware to check if the user is logged in or not
exports.default = passport_1.authenticate('jwt', { session: false });
//# sourceMappingURL=requireAuth.js.map