// screens/SummaryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SummaryScreen({ route }: any) {
  const menu = route.params.menuItems || [];

  const totalDishes = menu.length;
  const totalPrice = menu.reduce((sum: number, item: any) => sum + parseFloat(item.price), 0);

  const avgByCourse = (course: string) => {
    const items = menu.filter((i: any) => i.course === course);
    if (items.length === 0) return 0;
    const sum = items.reduce((acc: number, i: any) => acc + parseFloat(i.price), 0);
    return (sum / items.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <Text>Total Dishes: {totalDishes}</Text>
      <Text>Total Price: R{totalPrice.toFixed(2)}</Text>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Average Price per Course</Text>
        <Text>Starters: R{avgByCourse('Starter')}</Text>
        <Text>Mains: R{avgByCourse('Main')}</Text>
        <Text>Desserts: R{avgByCourse('Dessert')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontWeight: 'bold', marginBottom: 5 },
  box: { backgroundColor: '#FFF5E1', padding: 10, borderRadius: 8, marginTop: 10 },
});
