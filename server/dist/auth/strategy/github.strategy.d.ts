import { VerifyCallback } from 'passport-github';
import { OAuth } from './validate';
declare const GithubStrategy_base: new (...args: any[]) => any;
export declare class GithubStrategy extends GithubStrategy_base {
    private readonly OAuth_;
    constructor(OAuth_: OAuth);
    validate(_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
