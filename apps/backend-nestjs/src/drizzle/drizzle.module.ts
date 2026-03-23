import { Global, Module } from '@nestjs/common';
import { createDrizzleClient } from 'db';

export const DRIZZLE_CLIENT = Symbol('DRIZZLE_CLIENT');

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE_CLIENT,
      useFactory: () => {
        return createDrizzleClient(process.env.DATABASE_URL!);
      },
    },
  ],
  exports: [DRIZZLE_CLIENT],
})
export class DrizzleModule {}
