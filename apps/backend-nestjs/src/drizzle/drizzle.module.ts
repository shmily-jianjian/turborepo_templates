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
<<<<<<< HEAD
export class DrizzleModule {}
=======
export class DrizzleModule {}
>>>>>>> 403f9c4 (feat: orpc)
