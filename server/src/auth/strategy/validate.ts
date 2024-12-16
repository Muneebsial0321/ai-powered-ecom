import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuth {
  async validate(profile: any): Promise<any> {
    const { id, displayName, provider  } = profile;
    const user = {
      provider: provider,
      providerId: id,
      email: provider.email?provider.email:"",
      name:displayName
    };
    return user;
  }
}
