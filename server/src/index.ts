import express, { Express, Request, Response } from 'express';
import { config } from './config/config';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';
import userRoutes from './routes/userRoutes';

const app: Express = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Test route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Express + TypeScript Server' });
});

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`);
  console.log(`🌍 Environment: ${config.nodeEnv}`);
}); 