import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <FlatList
        data={text.split(' ').map(word => word && '🍕')}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: Platform.OS === 'ios' ? 50 : 300,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {height: 40},
  text: {padding: 10, fontSize: 42},
});
export default PizzaTranslator;
