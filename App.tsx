import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from '../ChalengeRM/src/Redux/store/store'
import HomeScreen from '../ChalengeRM/src/screens/HomeScreen/Home'
import ItemScreen from '../ChalengeRM/src/screens/ItemScreen/itemScreen'
import { useAuth0, Auth0Provider } from 'react-native-auth0'
import PersonScreen from './src/screens/PersonScreen/Person'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
  Home: undefined
  Item: { productId: string }
  Person: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();
const App: React.FC = () => {
  return (
    <Auth0Provider domain={'dev-6e3abqr4giz5d0ed.us.auth0.com'} clientId={'EUGRaLAm9elOPiPwxgo1eB8OVMuUeiOZ'}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Person" component={PersonScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
     </Auth0Provider>
  )
}

export default App
