"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const aws_sdk_1 = require("aws-sdk");
const keys_1 = require("@config/keys");
const Affiches_1 = require("@models/Affiches");
const s3 = new aws_sdk_1.S3({
    accessKeyId: keys_1.s3accessKeyId,
    secretAccessKey: keys_1.s3secretKey,
    signatureVersion: 'v4',
    region: 'eu-west-3',
});
exports.list = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    req;
    try {
        const affiches = yield Affiches_1.default.findAll();
        return res.status(200).json(affiches);
    }
    catch (err) {
        return next(err);
    }
});
exports.create = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { description, fileType } = req.body;
    try {
        const affiche = yield Affiches_1.default.create({ description });
        const { key, url } = yield getS3Link(affiche.id, fileType);
        affiche.imageUrl = `https://s3.eu-west-3.amazonaws.com/tribe-storage/${key}`;
        const savedAffiche = yield affiche.save();
        return res.status(201).json({ affiche: savedAffiche, url });
    }
    catch (err) {
        return next(err);
    }
});
exports.fetch = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { afficheId } = req.params;
    try {
        const affiche = yield Affiches_1.default.findByPk(afficheId);
        return res.status(200).json(affiche);
    }
    catch (err) {
        return next(err);
    }
});
exports.edit = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { afficheId } = req.params;
    const { description, fileType } = req.body;
    try {
        const affiche = yield Affiches_1.default.findByPk(afficheId);
        if (description) {
            affiche.description = description;
        }
        if (fileType) {
            const { key, url } = yield getS3Link(affiche.id, fileType);
            affiche.imageUrl = `https://s3.eu-west-3.amazonaws.com/tribe-storage/${key}`;
            return res.status(200).json({ affiche, upload: { key, url } });
        }
        return res.status(200).json({ success: true });
    }
    catch (err) {
        return next(err);
    }
});
exports.remove = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { afficheId } = req.params;
    try {
        const affiche = yield Affiches_1.default.findByPk(afficheId);
        yield affiche.destroy();
        return res.status(200).json({ success: true });
    }
    catch (err) {
        return next(err);
    }
});
const getS3Link = (id, contentType) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const key = `affiches/${id}`;
    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', {
            Bucket: 'tribe-storage',
            ContentType: contentType,
            Key: key,
        }, (err, url) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ key, url });
            }
        });
    });
});
//# sourceMappingURL=affichesController.js.map