import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

// Define types for navigation and route
type AddDishScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddDish'>;
type AddDishScreenRouteProp = RouteProp<RootStackParamList, 'AddDish'>;

export default function AddDishScreen() {
  const navigation = useNavigation<AddDishScreenNavigationProp>();
  const route = useRoute<AddDishScreenRouteProp>();
  const onSave = route.params?.onSave;

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (dishName && price) {
      const newDish = { dishName, description, course, price };
      onSave(newDish); // ✅ Works now
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <Text>Dish Name</Text>
      <TextInput style={styles.input} value={dishName} onChangeText={setDishName} />

      <Text>Description</Text>
      <TextInput
        style={[styles.input, { height: 60 }]}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Text>Course</Text>
      <Picker selectedValue={course} onValueChange={setCourse}>
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text>Price (R)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button title="Save Dish" color="#C68E17" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
});
