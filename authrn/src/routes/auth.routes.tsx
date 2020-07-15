//rotas quando o usuario não estiver logado na aplicaçao
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
    </AuthStack.Navigator>
)

export default AuthRoutes;