import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  const { type, data } = await loginService.login(username, password);
  if (type === 'UNAUTHORIZED') return res.status(401).json(data);

  return res.status(200).json(data);
}

export default {
  login,
};