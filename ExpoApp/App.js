//Splash Screen en React Native con Expo

import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Pantalla1 from './src/Screens/MainScreens/Pantalla1';
import Pantalla2 from './src/Screens/MainScreens/Pantalla2';
import Detalles from './src/Screens/SecondScreens/Detalles';

// Previene que el splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

// Componente del Splash Screen
const SplashScreenComponent = ({ onFinish }) => {
  const images = [
    require('./assets/images/gato1.jpg'),
    require('./assets/images/gato2.jpg'),
    require('./assets/images/gato3.jpg'),
    require('./assets/images/gato4.jpg'),
    require('./assets/images/gato5.jpg')
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let currentImageIndex = 0;
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImage(currentImageIndex);
    }, 20000); // Cambia cada 5 segundos

    setTimeout(async () => {
      clearInterval(interval);
      await SplashScreen.hideAsync();
      onFinish(); // Llama a la función para cambiar al contenido principal
    }, 15000); // Duración total de 25 segundos antes de ocultar completamente

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images[currentImage]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

// Navegación
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Pantalla 1' component={StackNavigator} />
      <Tab.Screen name='Pantalla 2' component={StackNavigator2} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Primera Pantalla' component={Pantalla1} />
      <Stack.Screen name='Detalles' component={Detalles} />
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Segunda Pantalla' component={Pantalla2} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  return (
    <NavigationContainer>
      {isSplashScreenVisible ? (
        <SplashScreenComponent onFinish={() => setIsSplashScreenVisible(false)} />
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
}
