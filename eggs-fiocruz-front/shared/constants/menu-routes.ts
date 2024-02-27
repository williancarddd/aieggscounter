import { IconHome2, IconSettings } from '@tabler/icons-react';
import { IMenuRoutes } from '@/shared/interfaces/IMenuRoutes';

export const MENU_ROUTES: IMenuRoutes[] = [
  { icon: IconHome2, path: '/home', label: 'Home' },
  { icon: IconSettings, path: '/settings', label: 'Configurações' },
];
