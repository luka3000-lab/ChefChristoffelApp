// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddDishScreen from './screens/AddDishScreen';
import ViewMenuScreen from './screens/ViewMenuScreen';
import SummaryScreen from './screens/SummaryScreen';

export type RootStackParamList = {
  Home: undefined;
  AddDish: { onSave: (dish: any) => void };
  ViewMenu: { menuItems: any[] };
  Summary: { menuItems: any[] };
};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#C68E17' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Chef Christoffel' }} />
        <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: 'Add Menu Item' }} />
        <Stack.Screen name="ViewMenu" component={ViewMenuScreen} options={{ title: 'View Menu' }} />
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'Summary' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


