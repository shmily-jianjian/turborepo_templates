import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg'
import * as dotenv from 'dotenv';
import * as schema from './db/schema';

dotenv.config({ path: '../../.env' });

export function createDrizzleClient(databaseUrl: string) {
    const pool = new Pool({ connectionString: databaseUrl });
    return drizzle(pool, { schema });
}

// 导出类型，方便在 NestJS 里做类型标注
export type DrizzleClient = ReturnType<typeof createDrizzleClient>;