import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

const PizzaTranslator = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={newText => setUsername(newText)}
        defaultValue={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
      <Button
        title="Submit"
        disabled={!username || !password}
        color="#f194ff"
        onPress={() => Alert.alert('welcome ' + username)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '70%',
  },
});
export default PizzaTranslator;
