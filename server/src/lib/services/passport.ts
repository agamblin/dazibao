import { use } from 'passport';
import {
    StrategyOptions,
    ExtractJwt,
    Strategy,
    VerifiedCallback,
} from 'passport-jwt';
import User from '@models/User';
import * as keys from '@config/keys';

const jwtOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwtSecret,
};

const jwtLogin = new Strategy(
    jwtOptions,
    // tslint:disable-next-line: no-any
    async (payload: any, done: VerifiedCallback) => {
        const user = await User.findByPk(payload.sub);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }
);

/*
Equivalent to passport.use
**/
use(jwtLogin);
