import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-github';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor() {
        super({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: `${process.env.BACKEND_URL}/auth/github/callback`,
            scope: ['profile', 'email'],
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, name, emails, photos } = profile;

        const user = {
            provider: 'github',
            providerId: id,
            email: emails[0].value,
            name: `${name.givenName} ${name.familyName}`,
            picture: photos[0].value,
        };

        done(null, user);
    }
}