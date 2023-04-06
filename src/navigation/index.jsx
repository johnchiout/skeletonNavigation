import { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../context/AuthContext";

import { ProfileScreen, HomeScreen, LoginScreen } from "../screens";



const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={LoginScreen}
      options={{ title: "Sign In" }}
    />
    
  </AuthStack.Navigator>
);



const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }}/>
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }}/>
  </Drawer.Navigator>
);



const RootStack = createStackNavigator();


const RootStackScreen = () => {
    const {isLogged} = useContext(AuthContext);
    console.log(isLogged)
    return (
      <RootStack.Navigator 
        screenOptions={{headerShown: false}}
      >
      {isLogged ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )
}

export default RootStackScreen;

 

