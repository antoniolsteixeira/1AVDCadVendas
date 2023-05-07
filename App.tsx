import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegistrationScreens } from './scr/screens/RegistrationScreens';
import { SalesListing } from './scr/screens/SalesListing';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Registration"
          component={RegistrationScreens}
          options={{ title: 'Registration',headerShown: false }}
        />
        <Tab.Screen
          name="Sales"
          component={SalesListing}
          options={{ title: 'Sales',headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
