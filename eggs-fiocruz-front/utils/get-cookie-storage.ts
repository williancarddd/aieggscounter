import Cookies from 'js-cookie';

export const getCookieStorage = (itemName: string) => Cookies.get(itemName);
