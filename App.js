import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation';
import { AuthLayout } from './src/context/AuthContext';

const App = () => {

  return (
    <AuthLayout >
      <NavigationContainer>
        <RootStackScreen  />
      </NavigationContainer>
    </AuthLayout>
   
  )
}

export default App;