"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-import-side-effect
require("module-alias/register");
const _app_1 = require("@app");
const _db_1 = require("@db");
_db_1.default(false)
    .then(() => {
    _app_1.default.listen(process.env.PORT_API, () => {
        // tslint:disable-next-line: no-console
        console.log(`Executing server in ${process.env.NODE_ENV} mode`);
        // tslint:disable-next-line: no-console
        console.log(`Server listening on ${process.env.PORT_API}`);
    });
})
    .catch((err) => {
    // tslint:disable-next-line: no-console
    console.log(err);
});
//# sourceMappingURL=server.js.map