import { ROUTES } from '@/shared/constants/routes';

export const checkPublicPath = (path: string) => {
    const publicRoutes = ROUTES.public;
    const pathIsPublic = publicRoutes.filter((route) => route.pathName === path);
    return pathIsPublic.length > 0;
};
