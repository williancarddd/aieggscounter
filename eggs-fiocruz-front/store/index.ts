import { createStore } from 'easy-peasy';
import storeModel from './model';
import IStoreEasyPeasy from '@/shared/interfaces/IStoreEasyPeasy';

const store = createStore<IStoreEasyPeasy>(storeModel);

export default store;
