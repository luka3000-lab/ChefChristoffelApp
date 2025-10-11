// components/DishCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DishCard({ item }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.dishName}</Text>
      {item.description ? <Text>{item.description}</Text> : null}
      <Text>Course: {item.course}</Text>
      <Text>Price: R{item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF5E1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
});
