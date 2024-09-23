import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AntDesign from '@expo/vector-icons/AntDesign';  // Usamos AntDesign para los iconos

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack de navegación para las pantallas Home y Detalles
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,  // Esto oculta el encabezado superior
      }}
    >
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetailScreen} />
    </Stack.Navigator>
  );
};

// Configuración de la navegación por pestañas
const Navegacion = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';  // Usar el icono 'home' de AntDesign
            } else if (route.name === 'Favoritos') {
              iconName = 'star';  // Usar el icono 'star' de AntDesign
            }

            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',  // Color del icono cuando está seleccionado
          tabBarInactiveTintColor: 'gray',  // Color del icono cuando no está seleccionado
        })}
      >
        <Tabs.Screen name="Inicio" component={HomeStack} />
        <Tabs.Screen name="Favoritos" component={DetailScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;
