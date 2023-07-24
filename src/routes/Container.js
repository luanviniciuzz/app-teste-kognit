import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../assets/styles/colors';

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import Notificacoes from '../pages/Notificacoes';

const Stack = createNativeStackNavigator();


export default function Container(){

    return(
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Login">
                                                                                            
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerTransparent:false,
                        headerShadowVisible: false,
                        headerStyle:{backgroundColor: colors['tema_padrao'].back_ground['branco']},
                        title:"",
                        
                    }}
                />
                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{
                        headerTransparent:false,
                        headerShadowVisible: false,
                        headerStyle:{backgroundColor: colors['tema_padrao'].back_ground['branco']},
                        title:"",
                    }}
                />
                <Stack.Screen
                    name="Notificacoes"
                    component={Notificacoes}
                    options={{
                        headerTransparent:false,
                        headerShadowVisible: false,
                        headerStyle:{backgroundColor: colors['tema_padrao'].back_ground['branco']},
                        title:"",
                        
                    }}
                />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}