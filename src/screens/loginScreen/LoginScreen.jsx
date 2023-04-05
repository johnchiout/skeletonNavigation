import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

export const LoginScreen = ({navigation}) => {

  const {isLogged} = useContext(AuthContext)

  const handleLogin = () => {
    console.log('Login Action')
   
  }
  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity >
    </View>
  )
}
