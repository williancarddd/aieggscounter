import React from 'react';

export const metadata = {
  title: 'Entrar em AIEggCounter ',
  description: 'Plataforma para contagem de ovo de paleta de aucatex pela Fiocruz Rondônia.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
