// tslint:disable-next-line: no-import-side-effect
import 'module-alias/register';
import app from '@app';
import sequelize from '@db';

sequelize(false)
    .then(() => {
        app.listen(process.env.PORT_API, () => {
            // tslint:disable-next-line: no-console
            console.log(`Executing server in ${process.env.NODE_ENV} mode`);
            // tslint:disable-next-line: no-console
            console.log(`Server listening on ${process.env.PORT_API}`);
        });
    })
    .catch((err: Error) => {
        // tslint:disable-next-line: no-console
        console.log(err);
    });
