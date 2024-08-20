import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../ChalengeRM/src/Redux/store/store';
import HomeScreen from '../ChalengeRM/src/screens/HomeScreen/Home'
// import ItemScreen from '../ChalengeRM/src/screens/ItemScreen/itemScreen'

// export type RootStackParamList = {
//   Home: undefined;
//   Item: { productId: string };
// };

// const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Item" component={ItemScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
  )
}

export default App
