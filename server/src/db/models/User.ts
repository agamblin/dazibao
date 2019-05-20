import { Model, DataTypes } from 'sequelize';
import { db } from '@db';
import { hash } from 'bcryptjs';
// import {
// 	HasManyGetAssociationsMixin,
// 	HasManyAddAssociationMixin,
// 	HasManyHasAssociationMixin,
// 	Association,
// 	HasManyCountAssociationsMixin,
// 	HasManyCreateAssociationMixin
// } from 'sequelize/lib/associations';

export default class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public username!: string;
    public email!: string; // for nullable fields
    public avatarUrl: string;
    public password: string;
    public superAdmin: boolean;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Since TS cannot determine model association at compile time
    // we have to declare them here purely virtually
    // these will not exist until `Model.init` was called.

    // public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
    // public addProject!: HasManyAddAssociationMixin<Project, number>;
    // public hasProject!: HasManyHasAssociationMixin<Project, number>;
    // public countProjects!: HasManyCountAssociationsMixin;
    // public createProject!: HasManyCreateAssociationMixin<Project>;

    // // You can also pre-declare possible inclusions, these will only be populated if you
    // // actively include a relation.
    // public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

    // public static associations: {
    // 	projects: Association<User, Project>;
    // };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatarUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://google.com',
        },
        superAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        tableName: 'Users',
        sequelize: db,
    }
);

User.beforeCreate(async user => {
    const hashed = await hash(user.password, 10);
    user.password = hashed;
    return Promise.resolve();
});
