import bcrypt from 'bcryptjs';
import { ServiceResponse } from 'src/types/ServiceResponse';
import jwtUtils from '../utils/jwtUtils';
import UserModel from '../database/models/user.model';

type LoginServiceResponse = ServiceResponse<{ token: string }>;

async function login(username: string, password: string): Promise<LoginServiceResponse> {
  const getUser = await UserModel.findOne({
    where: {
      username,
    },
  });

  if (!getUser || !bcrypt.compareSync(password, getUser.dataValues.password)) {
    return {
      type: 'UNAUTHORIZED',
      data: {
        message: 'Username or password invalid',
      },
    };
  }

  const token = jwtUtils.sign({ username: getUser.dataValues.username, id: getUser.dataValues.id });

  return {
    type: 'OK',
    data: { token },
  };
}

export default {
  login,
};