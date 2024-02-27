import Cookies from 'js-cookie';

export const removeCookieStorage = (itemName: string) => {
    Cookies.remove(itemName);
};
