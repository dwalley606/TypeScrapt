import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../types';

export const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    code: err.code || 'INTERNAL_SERVER_ERROR',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}; 