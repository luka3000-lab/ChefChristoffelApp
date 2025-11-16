import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';

export default function SummaryScreen() {
  const { menu, totalPrice, averageByCourse } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <Text>Total Dishes: {menu.length}</Text>
      <Text>Total Price: R{totalPrice().toFixed(2)}</Text>

      <Text>Average Starter Price: R{averageByCourse('Starter')}</Text>
      <Text>Average Main Price: R{averageByCourse('Main')}</Text>
      <Text>Average Dessert Price: R{averageByCourse('Dessert')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontWeight: 'bold', marginBottom: 5 },
  box: { backgroundColor: '#FFF5E1', padding: 10, borderRadius: 8, marginTop: 10 },
});
