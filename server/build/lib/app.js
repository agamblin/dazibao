"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors = require("cors");
const express = require("express");
// Routes
const userRoutes_1 = require("@routes/userRoutes");
// Express app creation
const app = express();
// CORS configuring + parser for requests
app.use(cors());
app.use(body_parser_1.json());
// Redirect every url beginning by auth to authRoutes
app.use('/users', userRoutes_1.default);
// Healthcheck route
app.get('/', (req, res) => {
    // tslint:disable-next-line: no-unused-expression
    req;
    return res
        .status(200)
        .json({ success: 'Esport-Hatcher {API v1.0} is live' });
});
// Error handler
app.use((error, req, res, next) => {
    req;
    next;
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message, data });
});
exports.default = app;
//# sourceMappingURL=app.js.map