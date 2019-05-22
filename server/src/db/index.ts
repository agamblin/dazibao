import { sqlDb, sqlHost, sqlPassword, sqlPort, sqlUser } from '@config/keys';
import { Sequelize } from 'sequelize';
import User from '@models/User';

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
        // seeder
        const user = await User.findOne({ where: { username: 'hgamblin' } });
        if (!user) {
            await User.create({
                username: 'hgamblin',
                password: process.env.ADMIN_PASSWORD,
            });
        }
    } catch (error) {
        throw new Error('Unable to connect to database...');
    }
};
