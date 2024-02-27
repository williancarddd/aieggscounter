'use client';

import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { useStoreRehydrated } from 'easy-peasy';
import { ReactNode } from 'react';
import { StoreProviders } from '@/shared/providers/storeProvider';
import '@mantine/nprogress/styles.css';
import { checkPublicPath } from '@/functions/check-public-path';
import PrivateRoute from '@/components/PrivateRoute';
import { theme } from '@/theme';
import '@mantine/dropzone/styles.css';

function WaitForStateRehydration({ children }: { children: ReactNode }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isPublic = checkPublicPath(pathName);

  return (
    <html lang="pt-br">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="https://www.rondonia.fiocruz.br/wp-content/uploads/2019/02/cropped-logo-01-32x32.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <StoreProviders>
          <WaitForStateRehydration>
            <MantineProvider theme={theme}>
              {isPublic && children}
              {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
            </MantineProvider>
          </WaitForStateRehydration>
        </StoreProviders>
      </body>
    </html>
  );
}
