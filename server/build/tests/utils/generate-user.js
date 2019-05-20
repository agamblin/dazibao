"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
exports.generateNormalUser = () => {
    const user = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        avatarUrl: faker.image.avatar(),
        superAdmin: false,
    };
    return user;
};
exports.generateBadEmail = () => {
    const badEmailUser = {
        email: 'test',
        username: faker.internet.userName(),
        password: faker.internet.password(),
        avatarUrl: faker.image.avatar(),
        superAdmin: false,
    };
    return badEmailUser;
};
exports.generateBadPwd = () => {
    const badPwdUser = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: 'test',
        avatarUrl: faker.image.avatar(),
        superAdmin: false,
    };
    return badPwdUser;
};
//# sourceMappingURL=generate-user.js.map