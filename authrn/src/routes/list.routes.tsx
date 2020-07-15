import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const ListStack = createStackNavigator();
import List from '../pages/List';

const ListRoutes: React.FC = () => (
  <ListStack.Navigator>
    <ListStack.Screen name="List" component={List} />
  </ListStack.Navigator>
);

export default ListRoutes;
