import { Action, Thunk } from 'easy-peasy';
import { UsersForm } from '../types/forms/users';

export interface IUserStore extends IUserData {
  handleGetUsersList: Thunk<IUserStore>;
  handleSearchUserList: Action<IUserStore, string>;
  handleCreateUser: Thunk<IUserStore, IUser>;
  setUsersList: Action<IUserStore, IUser[]>;
  setLoading: Action<IUserStore, boolean>;
  addUserToList: Action<IUserStore, IUser>;
  deleteUserOfList: Action<IUserStore, string | number>;
  setFilteredList: Action<IUserStore, IUser[]>;
  handleDeleteUser: Thunk<IUserStore, string | number>;
  handleGetUserById: Thunk<IUserStore, string | number>;
  handleUpdateUser: Thunk<IUserStore, UsersForm>;
  updateUsersList: Action<IUserStore, UsersForm>;
}

export interface IUser {
  user_id?: number,
  user_name: string,
  user_email: string,
  user_phone: string,
  user_type: string
}
export interface IUserData {
    users: IUser[]
    filteredUsers: IUser[]
    loading: boolean
}
