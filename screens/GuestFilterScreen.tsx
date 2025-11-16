// screens/GuestFilterScreen.tsx
import React, { useState } from 'react';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import DishCard from '../components/DishCard';

export default function GuestFilterScreen() {
  const { menu } = useMenu();
  const [filter, setFilter] = useState<'All'|'Starter'|'Main'|'Dessert'>('All');

  const filtered = filter === 'All' ? menu : menu.filter(m => m.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu - Filter by Course</Text>
      <Picker selectedValue={filter} onValueChange={(v) => setFilter(v as any)}>
        <Picker.Item label="All Courses" value="All" />
        <Picker.Item label="Starters" value="Starter" />
        <Picker.Item label="Mains" value="Main" />
        <Picker.Item label="Desserts" value="Dessert" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <DishCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#fff' },
  title: { fontSize:20, fontWeight:'bold', marginBottom:10 }
});
