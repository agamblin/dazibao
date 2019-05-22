"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlHost = process.env.SQL_HOST;
exports.sqlUser = process.env.SQL_USER;
exports.sqlPassword = process.env.SQL_PASSWORD;
exports.sqlDb = process.env.SQL_DB;
exports.sqlPort = parseInt(process.env.SQL_PORT);
exports.jwtSecret = process.env.JWT_SECRET;
let s3id;
let s3secret;
if (process.env.S3_AWS_KEY_ID) {
    s3id = process.env.S3_AWS_KEY_ID;
    s3secret = process.env.S3_AWS_KEY_SECRET;
}
else {
    // tslint:disable-next-line: no-require-imports
    const keys = require('./keysAws');
    s3id = keys.S3_ID;
    s3secret = keys.S3_SECRET;
}
exports.s3accessKeyId = s3id;
exports.s3secretKey = s3secret;
//# sourceMappingURL=keys.js.map