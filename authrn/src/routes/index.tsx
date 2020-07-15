import React, {useContext} from 'react';

import {useAuth} from '../contexts/auth';
import ListRoutes from './list.routes';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {signed} = useAuth();

  return <ListRoutes />;
};

export default Routes;
