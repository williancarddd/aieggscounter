import bffFetcher from '@/api/bffFetcher';
import { CONFIG_APP } from '@/config/config';
import { AuthProps, LoginResponseProps } from '@/shared/types/forms/login';
import { removeCookieStorage } from '@/utils/remove-cookie-storage';

async function fetchLogin(authData: AuthProps) {
  const response = await bffFetcher().post<LoginResponseProps>('fiocruz/login', { ...authData });
  return response.data.user;
}

export async function handleAuthentication(authData: AuthProps) {
  try {
    const response = await fetchLogin(authData);
    return response;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
}

export async function handleLogout() {
  removeCookieStorage('userData');
  removeCookieStorage(CONFIG_APP.userTokenName);
}
