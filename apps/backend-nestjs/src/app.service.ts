import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_CLIENT } from './drizzle/drizzle.module';
import { type DrizzleClient, schema } from 'db';

@Injectable()
export class AppService {
  constructor(
    @Inject(DRIZZLE_CLIENT) private readonly db: DrizzleClient,
  ) {}

  async getHello() {
    return this.db.select().from(schema.usersTable);
  }
}