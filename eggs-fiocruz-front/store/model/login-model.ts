/* eslint-disable no-param-reassign */
import { action, thunk } from 'easy-peasy';
import { CONFIG_APP } from '@/config/config';
import { handleAuthentication } from '@/hooks/auth';
import { ILogin, ILoginStore } from '@/shared/interfaces/ILoginStore';
import { setCookieStorage } from '@/utils/set-cookie-storage';

const initialState: ILogin = {
  user: {
    email: '',
    user_id: '',
    f_name: '',
    l_name: '',
    access_token: '',
  },
};
export const loginModel: ILoginStore = {
  ...initialState,
  addLoginStateDate: action((state, payload) => {
    state.user.f_name = payload.f_name;
    state.user.l_name = payload.l_name;
    state.user.email = payload.email;
    state.user.access_token = payload.access_token;
    state.user.user_id = payload.user_id;
    setCookieStorage('userData', JSON.stringify({ ...payload }));
    setCookieStorage(CONFIG_APP.userTokenName, payload.access_token);
  }),
  handleUserLogin: thunk(async (actions, payload) => {
    const auth = await handleAuthentication(payload);
    actions.addLoginStateDate(auth);
  }),
};

export default loginModel;
