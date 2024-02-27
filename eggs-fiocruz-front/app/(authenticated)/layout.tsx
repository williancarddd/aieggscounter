import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { RouterTransition } from '@/components/RouterTransition';
import AppShellM from '@/components/AppShell';

export const metadata: Metadata = {
  title: 'AIEggCounter - Fiocruz',
  description: 'Plataforma para contagem de ovo de paleta de aucatex pela Fiocruz Rondônia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider forceColorScheme="light" theme={theme}>
      <RouterTransition />
      <html lang="pt-br">
        <body>
          <AppShellM main={children} />
        </body>
      </html>
    </MantineProvider>
  );
}
