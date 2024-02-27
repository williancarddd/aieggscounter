import Cookies from 'js-cookie';

export const setCookieStorage = (itemName: string, value: any) => {
    Cookies.set(itemName, value);
};
