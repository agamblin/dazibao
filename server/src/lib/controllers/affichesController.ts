import IRequest from '@typings/general/IRequest';
import { Response, Request, NextFunction } from 'express';
import { S3 } from 'aws-sdk';
import { s3accessKeyId, s3secretKey } from '@config/keys';
import Affiche from '@models/Affiches';

const s3 = new S3({
    accessKeyId: s3accessKeyId,
    secretAccessKey: s3secretKey,
    signatureVersion: 'v4',
    region: 'eu-west-3',
});

export const list = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    req;
    try {
        const affiches = Affiche.findAll();
        return res.status(200).json(affiches);
    } catch (err) {
        return next(err);
    }
};

export const create = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    const { description, fileType } = req.body;
    try {
        const affiche = await Affiche.create({ description });
        const { key, url } = await getS3Link(affiche.id, fileType);
        affiche.imageUrl = `https://s3.eu-west-3.amazonaws.com/tribe-storage/${key}`;
        await affiche.save();
        return res.status(201).json({ key, url });
    } catch (err) {
        return next(err);
    }
};

export const fetch = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { afficheId } = req.params;

    try {
        const affiche = await Affiche.findByPk(afficheId);
        return res.status(200).json(affiche);
    } catch (err) {
        return next(err);
    }
};

export const edit = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    const { afficheId } = req.params;
    const { description, fileType } = req.body;

    try {
        const affiche = await Affiche.findByPk(afficheId);
        if (description) {
            affiche.description = description;
        }
        if (fileType) {
            const { key, url } = await getS3Link(affiche.id, fileType);
            affiche.imageUrl = `https://s3.eu-west-3.amazonaws.com/tribe-storage/${key}`;
            return res.status(200).json({ affiche, upload: { key, url } });
        }
        return res.status(200).json({ success: true });
    } catch (err) {
        return next(err);
    }
};

export const remove = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    const { afficheId } = req.params;

    try {
        const affiche = await Affiche.findByPk(afficheId);
        await affiche.destroy();
        return res.status(200).json({ success: true });
    } catch (err) {
        return next(err);
    }
};

const getS3Link = async (
    id: number,
    contentType: string
): Promise<{ key: string; url: string }> => {
    const key = `affiches/${id}`;

    return new Promise((resolve, reject) => {
        s3.getSignedUrl(
            'putObject',
            {
                Bucket: 'tribe-storage',
                ContentType: contentType,
                Key: key,
            },
            (err, url) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ key, url });
                }
            }
        );
    });
};
