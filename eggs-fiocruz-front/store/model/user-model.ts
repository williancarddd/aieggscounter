/* eslint-disable no-param-reassign */
import { action, thunk } from 'easy-peasy';
import bffFetcher from '@/api/bffFetcher';
import { IUserData, IUserStore } from '@/shared/interfaces/IUserStore';
import { UsersForm } from '@/shared/types/forms/users';

const initialState: IUserData = {
  users: [],
  filteredUsers: [],
  loading: false,
};
export const userModel: IUserStore = {
  ...initialState,
  setUsersList: action((state, payload) => {
    state.users = payload;
    state.loading = true;
  }),
  addUserToList: action((state, payload) => {
    state.users.push(payload);
    state.filteredUsers.push(payload);
  }),
  setFilteredList: action((state, payload) => {
    state.filteredUsers = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  handleGetUsersList: thunk(async (actions) => {
    actions.setLoading(false);
    const userList = await bffFetcher().get('crm-api/user?page=1&limit=1000');
    actions.setUsersList(userList.data);
    actions.setFilteredList(userList.data);
  }),
  handleSearchUserList: action((state, search_param) => {
    if (!search_param) {
      state.filteredUsers = state.users;
    }
    state.filteredUsers = state.users.filter(
      (user) =>
        user.user_name.toLowerCase().includes(search_param.toLowerCase()) ||
        user.user_email.toLowerCase().includes(search_param.toLowerCase())
    );
  }),
  handleCreateUser: thunk(async (actions, payload) => {
    const userCreated = await bffFetcher().post<UsersForm>('crm-api/user', { ...payload });
    actions.addUserToList(userCreated.data);
  }),
  handleDeleteUser: thunk(async (actions, user_id) => {
    await bffFetcher().delete(`crm-api/user/${user_id}`);
    actions.deleteUserOfList(user_id);
  }),
  deleteUserOfList: action((state, user_id) => {
    state.users = state.users.filter((user) => user.user_id !== user_id);
    state.filteredUsers = state.users;
  }),
  handleGetUserById: thunk(async (actions, user_id) => {
    const userSelected = await bffFetcher().get<UsersForm>(`crm-api/user/${user_id}`);
    return userSelected.data;
  }),
  handleUpdateUser: thunk(async (actions, payload) => {
    const userPayload = { ...payload };
    userPayload.user_id = Number(userPayload.user_id);
    await bffFetcher().put<UsersForm>('crm-api/user', { ...userPayload });
    actions.updateUsersList(payload);
  }),
  updateUsersList: action((state, payload) => {
    state.users = state.users.map((user) => user.user_id === payload.user_id ? payload : user);
    state.filteredUsers = state.users;
  }),
};

export default userModel;
