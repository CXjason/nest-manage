/*
 * @Author: jason
 * @Date: 2024-11-13 19:01:22
 * @LastEditTime: 2024-11-13 19:32:22
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\shared\shared.modules.ts
 *
 */
import type { Provider } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { ApiConfigService } from './services/api-config.service';

const providers: Provider[] = [ApiConfigService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
