import { sqlDb, sqlHost, sqlPassword, sqlPort, sqlUser } from '@config/keys';
import { Sequelize } from 'sequelize';

export const db = new Sequelize(sqlDb, sqlUser, sqlPassword, {
    dialect: 'mysql',
    host: sqlHost,
    port: sqlPort,
});

export default async (force: boolean = false) => {
    try {
        await db.authenticate();
        // tslint:disable-next-line: no-console
        console.log('Connected to database successfully...');
        await db.sync({ force });
    } catch (error) {
        throw new Error('Unable to connect to database...');
    }
};
