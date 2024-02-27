import { createTypedHooks } from 'easy-peasy';
import IStoreEasyPeasy from '@/shared/interfaces/IStoreEasyPeasy';

const typedHooks = createTypedHooks<IStoreEasyPeasy>();

export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
