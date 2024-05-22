import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Pantalla1 from './src/Screens/MainScreens/Pantalla1';
import Pantalla2 from './src/Screens/MainScreens/Pantalla2';
import Detalles from './src/Screens/SecondScreens/Detalles';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Pantalla 1' component={StackNavigator}/>
      <Tab.Screen name='Pantalla 2' component={StackNavigator2}/>
    </Tab.Navigator>
  )
};

function StackNavigator() {
  return(
    <Stack.Navigator>
      <Tab.Screen name='Primera Pantalla'component={Pantalla1}/>
      <Tab.Screen name='Detalles'component={Detalles}/>
    </Stack.Navigator>
  )
}

function StackNavigator2() {
  return(
    <Stack.Navigator>
      <Tab.Screen name='Segunda Pantalla' component={Pantalla2}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}
