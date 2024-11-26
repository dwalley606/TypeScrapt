import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Define the configuration interface for type safety
interface Config {
  port: number;
  nodeEnv: string;
  mongoUri: string;
  // Add other configuration properties here
}

// Validate and transform environment variables
export const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/typescript-demo',
} as const;

// Validate required environment variables
const requiredEnvVars: (keyof Config)[] = ['mongoUri'];
for (const envVar of requiredEnvVars) {
  if (!config[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
} 