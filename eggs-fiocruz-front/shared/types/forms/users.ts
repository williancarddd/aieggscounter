export type UsersForm = {
  user_id?: number;
  user_email: string;
  user_password?: string;
  user_name: string;
  user_phone: string;
  user_type: string;
};
export type UsersErrorsForm = {
    user_email: string;
    user_password: string;
    user_name: string;
    user_phone: string;
    user_type: string;
};
