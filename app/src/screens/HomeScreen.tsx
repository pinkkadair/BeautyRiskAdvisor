import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation();

  const handleSearch = () => {
    // Handle search functionality here (e.g., search in Firebase)
    alert(`Searching for ${searchQuery}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Beauty Risk Advisor</Text>
      <TextInput
        placeholder="Search treatments or providers"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={handleSearch} />

      {/* Navigation Buttons */}
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
