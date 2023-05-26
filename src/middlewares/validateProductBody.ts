import { NextFunction, Request, Response } from 'express';

function validateProductBody(req: Request, res: Response, next: NextFunction) {
  const { name, price, orderId } = req.body;

  if (!name || !price || !orderId) return res.status(400).json({ message: 'Dados inválidos' });

  return next();
}

export default validateProductBody;