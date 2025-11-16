// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useMenu } from '../context/MenuContext';
import DishCard from '../components/DishCard';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type HomeNavProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const { menu, averageByCourse } = useMenu();
  const navigation = useNavigation<HomeNavProp>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chef Christoffel - Menu</Text>
      <Text style={styles.count}>Total Dishes: {menu.length}</Text>

      <View style={styles.statsBox}>
        <Text style={styles.statsTitle}>Average Price per Course</Text>
        <Text>Starters: R{averageByCourse('Starter')}</Text>
        <Text>Mains: R{averageByCourse('Main')}</Text>
        <Text>Desserts: R{averageByCourse('Dessert')}</Text>
      </View>

      {menu.map(item => <DishCard key={item.id} item={item} />)}

      <View style={styles.buttonGroup}>
        <Button title="Add Menu Item (Chef)" onPress={() => navigation.navigate('AddDish')} color="#C68E17" />
        <Button title="Guest Filter" onPress={() => navigation.navigate('GuestFilter')} color="#C68E17" />
        <Button title="Summary" onPress={() => navigation.navigate('Summary')} color="#C68E17" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  count: { fontSize: 16, marginBottom: 8 },
  statsBox: { backgroundColor: '#FFF5E1', padding: 12, borderRadius: 8, marginBottom: 16 },
  statsTitle: { fontWeight: 'bold', marginBottom: 6 },
  buttonGroup: { marginTop: 10, gap: 8 },
});
