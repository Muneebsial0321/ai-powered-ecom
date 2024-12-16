import { VerifyCallback } from 'passport-facebook';
import { OAuth } from './validate';
declare const FacebookStrategy_base: new (...args: any[]) => any;
export declare class FacebookStrategy extends FacebookStrategy_base {
    private readonly OAuth_;
    constructor(OAuth_: OAuth);
    validate(_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
