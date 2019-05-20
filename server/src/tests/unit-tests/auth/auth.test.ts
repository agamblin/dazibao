import userFactory from '@factories/userFactory';
import {
    generateNormalUser,
    generateBadEmail,
    generateBadPwd,
} from '@tests/utils/generate-user';

describe('when a user register', () => {
    const newUser = generateNormalUser();

    void it('should create a new account', async () => {
        const user = await userFactory.create(newUser);
        expect(user).toBeDefined();
    });

    void it('should not be able to create another account with the same email', async () => {
        await expect(userFactory.create(newUser)).rejects.toEqual({
            statusCode: 410,
            message: 'User already exist',
        });
    });

    void it('should not be able to create an account with an incorrect email', async () => {
        const incorrectEmail = generateBadEmail();
        await expect(userFactory.create(incorrectEmail)).rejects.toEqual({
            statusCode: 422,
            message: "Validation doesn't pass",
        });
    });

    void it('should not be able to create an account with an incorrect password', async () => {
        const incorrectPwd = generateBadPwd();
        await expect(userFactory.create(incorrectPwd)).rejects.toEqual({
            statusCode: 422,
            message: "Validation doesn't pass",
        });
    });
});
