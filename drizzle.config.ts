import { defineConfig } from "drizzle-kit";
import 'dotenv/config';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default defineConfig({
  out: './src/db',
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
});
