import { ROUTES } from '@/shared/constants/routes';

export const checkNotFoundPage = (path: string) => {
    const routeOfApp = [...ROUTES.public, ...ROUTES.private];
    const pathNotFound = routeOfApp.filter((route) => route.pathName === path);
    return pathNotFound.length === 0;
};
