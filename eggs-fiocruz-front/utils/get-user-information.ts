import { getCookieStorage } from './get-cookie-storage';

export function getAccessToken(): string {
  const userLocalStorage = getCookieStorage('userData');
  if (!userLocalStorage) return '';
  const parseInfo = JSON.parse(userLocalStorage);
  return `Bearer ${parseInfo.access_token}`;
}
