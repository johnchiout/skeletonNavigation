import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

import { CenterBox, Button } from '../../components'


export const LoginScreen = ({navigation}) => {

  const {isLogged,  signIn, authContext} = useContext(AuthContext)
  console.log(authContext.signIn)

  const handleLogin = () => {
    console.log('Login Action')
    authContext.signIn()
  }
  return (
    <CenterBox>
      <Text>Login Screen</Text>
      <Button onPress={handleLogin} title={"Login"}/>
    </CenterBox>
  )
}

