"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
const _db_1 = require("@db");
const bcryptjs_1 = require("bcryptjs");
// import {
// 	HasManyGetAssociationsMixin,
// 	HasManyAddAssociationMixin,
// 	HasManyHasAssociationMixin,
// 	Association,
// 	HasManyCountAssociationsMixin,
// 	HasManyCreateAssociationMixin
// } from 'sequelize/lib/associations';
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    avatarUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://google.com',
    },
    superAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'Users',
    sequelize: _db_1.db,
});
User.beforeCreate((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const hashed = yield bcryptjs_1.hash(user.password, 10);
    user.password = hashed;
    return Promise.resolve();
}));
//# sourceMappingURL=User.js.map