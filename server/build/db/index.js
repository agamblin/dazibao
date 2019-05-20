"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const keys_1 = require("@config/keys");
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize(keys_1.sqlDb, keys_1.sqlUser, keys_1.sqlPassword, {
    dialect: 'mysql',
    host: keys_1.sqlHost,
    port: keys_1.sqlPort,
});
exports.default = (force = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    try {
        yield exports.db.authenticate();
        // tslint:disable-next-line: no-console
        console.log('Connected to database successfully...');
        yield exports.db.sync({ force });
    }
    catch (error) {
        throw new Error('Unable to connect to database...');
    }
});
//# sourceMappingURL=index.js.map