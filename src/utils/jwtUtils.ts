import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('missing JWT in .env');
}

type TokenPayload = {
  username: string;
  id: number
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret);

export default {
  sign,
};