import { ILoginStore } from './ILoginStore';
import { IUserStore } from './IUserStore';

export default interface IStoreEasyPeasy {
  login: ILoginStore;
  users: IUserStore;
}
