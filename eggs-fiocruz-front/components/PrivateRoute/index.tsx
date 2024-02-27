import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { checkAuthenticated } from '@/functions/check-authenticated';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = checkAuthenticated();

  if (!isAuth) {
    redirect('/login');
  }

  return <>{isAuth && children}</>;
};

export default PrivateRoute;
