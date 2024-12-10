import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApiConfigService } from 'src/shared/services/api-config.service';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { TokenType } from 'src/constrants/tyken-type';
import { RoleType } from 'src/constrants';
import { RolesEntity } from '../roles/roles.entity';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ApiConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.publicKey,
    });
  }

  async validate(args: {
    userId: Uuid;
    roles: RolesEntity;
    type: TokenType;
  }): Promise<UserEntity> {
    if (args.type !== TokenType.ACCESS_TOKEN) {
      throw new UnauthorizedException();
    }

    const user = await this.userService.findOne({
      id: args.userId as never,
      roles: args.roles,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
