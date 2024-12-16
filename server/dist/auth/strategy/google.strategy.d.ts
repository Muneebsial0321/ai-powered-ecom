import { VerifyCallback } from 'passport-google-oauth2';
import { OAuth } from './validate';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly OAuth_;
    constructor(OAuth_: OAuth);
    validate(_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
