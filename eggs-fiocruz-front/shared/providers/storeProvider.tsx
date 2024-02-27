'use client';

import { StoreProvider } from 'easy-peasy';
import store from '@/store';

export function StoreProviders({ children }:any) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
