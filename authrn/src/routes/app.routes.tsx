//rotas quando o usuario estiver logado na aplicaçao
//rotas quando o usuario não estiver logado na aplicaçao
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const AppStack = createStackNavigator();
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
