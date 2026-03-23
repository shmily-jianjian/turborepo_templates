import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { onError, ORPCModule } from '@orpc/nest';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { experimental_RethrowHandlerPlugin as RethrowHandlerPlugin } from '@orpc/server/plugins';

@Module({
  imports: [
    ORPCModule.forRootAsync({
      useFactory: (request: Request) => ({
        context: { request },
        interceptors: [
          onError((error) => {
            console.log(error);
          }),
        ],
        plugins: [
          new RethrowHandlerPlugin({
            // 错误统一由nestjs处理
            filter: () => true,
          }),
        ],
      }),
      inject: [REQUEST],
    }),
    DrizzleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
