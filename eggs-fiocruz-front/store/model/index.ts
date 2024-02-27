/* eslint-disable import/no-named-as-default */
import { persist } from 'easy-peasy';
import loginModel from './login-model';
import userModel from './user-model';

const storeModel = {
  login: persist(loginModel),
  users: userModel,
};

export default storeModel;
