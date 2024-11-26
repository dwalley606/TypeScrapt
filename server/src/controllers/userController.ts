import { Request, Response } from 'express';
import { User, IUser } from '../models/User';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: IUser = req.body;
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message });
  }
};

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message });
  }
}; 