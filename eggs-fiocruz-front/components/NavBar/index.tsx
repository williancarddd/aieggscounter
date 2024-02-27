'use client';

import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem, AppShell, Flex, Text } from '@mantine/core';
import { IconHome2, IconLogout } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import classes from './navbar.module.css';
import { MENU_ROUTES } from '@/shared/constants/menu-routes';
import { IMenuRoutes } from '@/shared/interfaces/IMenuRoutes';

import { handleLogout } from '@/hooks/auth';
import { useStoreState } from '@/hooks/storeHooks';
import { AvatarUser } from '../Avatar';

interface NavbarProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function Navbar({ icon: Icon, label, active, onClick }: NavbarProps) {
  return (
    <Flex align="baseline" gap={4}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton
          onClick={onClick}
          className={classes.link}
          data-active={active || undefined}
        >
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
      <Text>{label}</Text>
    </Flex>
  );
}

export function NavbarWithTooltips() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [activePath, setActive] = useState(pathname);
  const { user } = useStoreState((state) => state.login);
  function handlePushActiveRoute(menu: IMenuRoutes) {
    push(menu.path);
    setActive(menu.path);
  }

  function logout() {
    handleLogout();
    window.location.href = '/login';
  }

  const links = MENU_ROUTES.map((link) => (
    <Navbar
      {...link}
      key={link.label}
      active={link.path === activePath}
      onClick={() => handlePushActiveRoute(link)}
    />
  ));

  return (
    <AppShell.Navbar p={24}>
      <div>
        <Tooltip label="avatar" position="right">
          <AvatarUser info={{
            email: user.email,
            name: `${user.f_name} ${user.l_name}`,
          }}
          />
        </Tooltip>
      </div>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
        <Stack justify="center" gap={0}>
          <Navbar onClick={logout} icon={() => <IconLogout color="red" />} label="Logout" />
        </Stack>
      </div>
    </AppShell.Navbar>

  );
}
