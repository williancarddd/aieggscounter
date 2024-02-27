import { CONFIG_APP } from '@/config/config';
import { getCookieStorage } from '@/utils/get-cookie-storage';

export const checkAuthenticated = () => {
  const token = getCookieStorage(CONFIG_APP.userTokenName);
  return !!token;
};
