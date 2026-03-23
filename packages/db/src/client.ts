import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as schema from './schemas/user.schema';

dotenv.config({ path: '../../.env' });

export function createDrizzleClient(databaseUrl: string) {
  const pool = new Pool({ connectionString: databaseUrl });
  return drizzle(pool, { schema });
}

export type DrizzleClient = ReturnType<typeof createDrizzleClient>;
