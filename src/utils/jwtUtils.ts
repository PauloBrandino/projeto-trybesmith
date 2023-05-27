import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'Só pra testar';

type TokenPayload = {
  username: string;
  id: number
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret);

export default {
  sign,
};