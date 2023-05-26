import express from 'express';
import loginController from '../controller/login.controller';
import validateLogin from '../middlewares/validadeLoginBody';

const routeLogin = express.Router();

routeLogin.post('/', validateLogin, loginController.login);

export default routeLogin;