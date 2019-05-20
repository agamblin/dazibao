"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfEmail = (input) => {
    if (input.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return true;
    }
    return false;
};
exports.checkIfMinAndMax = (input, params) => {
    if (input.length < params.min || input.length > params.max) {
        return false;
    }
    return true;
};
//# sourceMappingURL=validators.js.map