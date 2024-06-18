import React from "react";
import SplashScreen from "./src/screens/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="Home" component={SplashScreen} options={{ title: "Splash Screen" }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}