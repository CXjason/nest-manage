/*
 * @Author: jason
 * @Date: 2024-11-13 14:58:13
 * @LastEditTime: 2024-11-28 17:30:55
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\main.ts
 *
 */
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import helmet from 'helmet';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { SharedModule } from './shared/shared.modules';
import { ApiConfigService } from './shared/services/api-config.service';
import { setupSwagger } from './setup-swagger';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { HttpExceptionFilter } from './filters/bad-request.filter';
import { QueryFailedFilter } from './filters/query-failed.filter';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ResponseTransformInterceptor } from './interceptors/response-transform-interception';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: true,
    },
  );

  app.enable('trust proxy');
  app.use(helmet());
  app.use(compression());
  app.use(morgan('combined'));
  app.enableVersioning();
  //app.useGlobalGuards();

  const reflector = app.get(Reflector);

  app.useGlobalFilters(
    new HttpExceptionFilter(reflector),
    new QueryFailedFilter(reflector),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector),
    new ResponseTransformInterceptor(reflector),
  );

  const configService = app.select(SharedModule).get(ApiConfigService);

  if (configService.documentationEnabled) {
    setupSwagger(app);
  }

  const port = configService.appConfig.port;
  await app.listen(port);
}
bootstrap();
