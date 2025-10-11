// screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import type { StackNavigationProp } from '@react-navigation/stack';
import DishCard from '../components/DishCard';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const handleAddDish = (dish: any) => setMenuItems([...menuItems, dish]);

  const total = menuItems.length;

  const average = (course: string) => {
    const items = menuItems.filter(i => i.course === course);
    if (items.length === 0) return 0;
    const sum = items.reduce((acc, i) => acc + parseFloat(i.price), 0);
    return (sum / items.length).toFixed(2);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chef Christoffel Menu</Text>

      <Text style={styles.subText}>Total Dishes: {total}</Text>

      <View style={styles.statsBox}>
        <Text style={styles.statsTitle}>Average Price per Course</Text>
        <Text>Starters: R{average('Starter')}</Text>
        <Text>Mains: R{average('Main')}</Text>
        <Text>Desserts: R{average('Dessert')}</Text>
      </View>

      {menuItems.map((item, idx) => (
        <DishCard key={idx} item={item} />
      ))}

      <View style={styles.btnContainer}>
      <Button title="Add New Dish" color="#C68E17" onPress={() => navigation.navigate('AddDish', { onSave: handleAddDish })} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="View Menu" color="#C68E17" onPress={() => navigation.navigate('ViewMenu', { menuItems })} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Summary" color="#C68E17" onPress={() => navigation.navigate('Summary', { menuItems })} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subText: { fontSize: 16, marginBottom: 10 },
  statsBox: { backgroundColor: '#FFF5E1', padding: 10, borderRadius: 8, marginBottom: 20 },
  statsTitle: { fontWeight: 'bold', marginBottom: 5 },
  btnContainer: { marginVertical: 5 },
});
