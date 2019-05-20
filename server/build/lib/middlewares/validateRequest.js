"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
// Use express validator to check if all rules are passing, redirecting to error handler otherwise
exports.default = (req, res, next) => {
    const errors = check_1.validationResult(req);
    res;
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        return next(error);
    }
    next();
};
//# sourceMappingURL=validateRequest.js.map