import { drizzle } from 'drizzle-orm/node-postgres';
<<<<<<< HEAD
import { Pool } from 'pg'
import * as dotenv from 'dotenv';
import * as schema from './db/schema';
=======
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as schema from './schemas/user.schema';
>>>>>>> 403f9c4 (feat: orpc)

dotenv.config({ path: '../../.env' });

export function createDrizzleClient(databaseUrl: string) {
<<<<<<< HEAD
    const pool = new Pool({ connectionString: databaseUrl });
    return drizzle(pool, { schema });
}

// 导出类型，方便在 NestJS 里做类型标注
export type DrizzleClient = ReturnType<typeof createDrizzleClient>;
=======
  const pool = new Pool({ connectionString: databaseUrl });
  return drizzle(pool, { schema });
}

export type DrizzleClient = ReturnType<typeof createDrizzleClient>;
>>>>>>> 403f9c4 (feat: orpc)
