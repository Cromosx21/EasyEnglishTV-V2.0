import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';
import 'dotenv/config';

// Asegúrate de que DATABASE_URL esté configurado en tu archivo .env
if (!process.env.DATABASE_URL) {
  throw new Error('Falta DATABASE_URL');
}

// Deshabilita prefetch ya que no es compatible con el modo "Transaction" pool
const client = postgres(process.env.DATABASE_URL, { prepare: false });
export const db = drizzle(client, { schema });
