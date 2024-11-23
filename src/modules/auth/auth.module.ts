/*
 * @Author: jason
 * @Date: 2024-11-18 17:48:28
 * @LastEditTime: 2024-11-22 15:10:38
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\auth\auth.module.ts
 *
 */
import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ApiConfigService } from '../../shared/services/api-config.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (configService: ApiConfigService) => ({
        privateKey: configService.authConfig.privateKey,
        publicKey: configService.authConfig.privateKey,
        signOptions: {
          algorithm: 'RS256',
        },
        verifyOptions: {
          algorithms: ['RS256'],
        },
      }),
      inject: [ApiConfigService],
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
