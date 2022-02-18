import { TextInput, View, StyleSheet, Button, Text } from 'react-native'
import React, { useState } from 'react'

function AddTodo({ submitHandler }) {

  const [text, setText] = useState('')

  function changeHandler(val) {
    setText(val);
  };

  return (
    <View>

      <Text style={styles.addtitle}>Enter Todo below:</Text>

      <View style={styles.input}>
        <TextInput placeholder='e.g i have to take a nap ' onChangeText={changeHandler} />
      </View>
      <View style={styles.buttview}>
        <Button title='Add new' color='coral' onPress={() => submitHandler(text)} />


      </View>
    </View>
  )
};
const styles = StyleSheet.create({

  addtitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    borderBottomColor: 'coral',
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 15

  },
  todofull: {
    backgroundColor: 'red'

  },
  buttview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
});

export default AddTodo;