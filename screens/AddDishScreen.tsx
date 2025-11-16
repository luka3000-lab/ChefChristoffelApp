// screens/AddDishScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import DishCard from '../components/DishCard';

export default function AddDishScreen() {
  const { addItem, menu, removeItem } = useMenu();
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'Starter'|'Main'|'Dessert'>('Starter');
  const [price, setPrice] = useState('');

  const save = () => {
    if (!dishName || !price) return; // optional: show validation
    addItem({ dishName, description, course, price });
    setDishName(''); setDescription(''); setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add / Remove Menu Items</Text>

      <Text>Dish Name</Text>
      <TextInput style={styles.input} value={dishName} onChangeText={setDishName} />
      <Text>Description</Text>
      <TextInput style={[styles.input, {height: 60}]} multiline value={description} onChangeText={setDescription} />
      <Text>Course</Text>
      <Picker selectedValue={course} onValueChange={(v) => setCourse(v as any)}>
        <Picker.Item label="Starter" value="Starter"/>
        <Picker.Item label="Main" value="Main"/>
        <Picker.Item label="Dessert" value="Dessert"/>
      </Picker>
      <Text>Price (R)</Text>
      <TextInput keyboardType="numeric" style={styles.input} value={price} onChangeText={setPrice} />

      <Button title="Save Dish" onPress={save} color="#C68E17" />

      <Text style={{marginTop:12, fontWeight:'bold'}}>Existing Items</Text>
      <FlatList
        data={menu}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <>
            <DishCard item={item} />
            <Button title="Remove" color="red" onPress={() => removeItem(item.id)} />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginBottom: 8 }
});
