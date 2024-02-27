import { IRoutes } from '@/shared/interfaces/IRoutes';

export const ROUTES: IRoutes = {
  public: [
    {
      pathName: '/login',
      isPublic: true,
    },
    {
      pathName: '/forget-password',
      isPublic: true,
    },
    {
      pathName: '/home',
      isPublic: true, // modificar depois
    },

  ],
  private: [
    {
      pathName: '/home',
      isPublic: true,
    },
    {
      pathName: '/settings',
      isPublic: false,
    },
  ],
};
