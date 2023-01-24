import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, GestureResponderEvent, ActivityIndicator} from 'react-native';

const PizzaTranslator = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (event: GestureResponderEvent) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  };

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

      <View style={styles.buttonView}>
        {isLoading
          ?
          <ActivityIndicator size={35} color="#0000ff" />
          :
          <Button
            title="Submit"
            disabled={!username || !password}
            color="#0000ff"
            onPress={submitForm}
          />}
      </View>
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
  buttonView: {
    height: 70
  }
});
export default PizzaTranslator;
