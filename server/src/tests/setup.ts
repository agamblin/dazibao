import sequelize, { db } from '@db';

jest.setTimeout(30000);

beforeAll(async () => {
    await sequelize(true);
});

afterAll(async () => {
    await db.close();
});
