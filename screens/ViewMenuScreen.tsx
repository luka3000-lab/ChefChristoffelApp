// screens/ViewMenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DishCard from '../components/DishCard';

export default function ViewMenuScreen({ route }: any) {
  const [filter, setFilter] = useState('All');
  const [menu, setMenu] = useState(route.params.menuItems || []);

  const filtered = filter === 'All' ? menu : menu.filter((m: any) => m.course === filter);

  const handleDelete = (index: number) => {
    const updated = [...menu];
    updated.splice(index, 1);
    setMenu(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Menu</Text>

      <Picker selectedValue={filter} onValueChange={setFilter}>
        <Picker.Item label="All Courses" value="All" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View>
            <DishCard item={item} />
            <Button title="Delete" color="red" onPress={() => handleDelete(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
