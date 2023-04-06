import { useState, useContext } from "react";
import {Text, View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItem, DrawerItemList, } from "@react-navigation/drawer";
import { AuthContext } from "../context/AuthContext";

import { ProfileScreen, HomeScreen, LoginScreen } from "../screens";



const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();


//Login Screen - Stack:
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={LoginScreen}
      options={{ title: "Sign In" }}
    />
    
  </AuthStack.Navigator>
);


//Other Main Screens - Drawer:
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile" drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }}/>
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }}/>
  </Drawer.Navigator>
);

const CustomDrawerContent = (props) => {
  const {authContext} = useContext(AuthContext)
  
  return (
    <View>
       <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={authContext.signOut}
      />
    </View>
  )
}


const RootStack = createStackNavigator();


//Combine Drawer and Stack:
const RootStackScreen = () => {

    const {isLogged} = useContext(AuthContext);
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

 

