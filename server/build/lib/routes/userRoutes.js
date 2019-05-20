"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const userController = require("@controllers/userController");
const validateRequest_1 = require("@middlewares/validateRequest");
const requireAuth_1 = require("@middlewares/requireAuth");
const userRoutes = express_1.Router();
userRoutes.post('/', [
    check_1.body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
    check_1.body('password')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage('Please enter a password between 5 and 20 characters'),
], validateRequest_1.default, userController.register);
userRoutes.post('/token', [
    check_1.body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
], validateRequest_1.default, userController.getToken);
userRoutes.get('/', requireAuth_1.default, userController.getUserInfo);
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map