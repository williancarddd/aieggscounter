'use client';

import { AppShell, Box } from '@mantine/core';
import { ReactNode } from 'react';
import { NavbarWithTooltips } from '../NavBar';
import { Footer } from '../Footer';
import classes from './style.module.css';

interface Props {
  main: ReactNode;
}
export default function AppShellM({ main }: Props) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header />

      <NavbarWithTooltips />

      <AppShell.Main
        styles={{
          main: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          },
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {main}
        </Box>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
