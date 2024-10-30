import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './src/Redux/store/store'
import HomeScreen from './src/screens/HomeScreen/Home'
import ItemScreen from './src/screens/ItemScreen/itemScreen'
import PersonScreen from './src/screens/PersonScreen/Person'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import './src/GoogleSignInConfig'  
export type RootStackParamList = {
  Home: undefined
  Item: { productId: string; isEditable?: boolean }
  EditProduct: { productId: string };
  Person: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();
const App: React.FC = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Person" component={PersonScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}

export default App
