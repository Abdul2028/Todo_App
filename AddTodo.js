import { TextInput, View, StyleSheet, Button, Text } from 'react-native'
import React, { useState } from 'react'

function AddTodo({ submitHandler }) {

  const [text, setText] = useState('')

  function changeHandler(val) {
    setText(val);
  };

  return (
    <View >
      <Text style={styles.main}> Enter new ToDo:</Text>
      <TextInput placeholder='e.g i have to take a bath ' onChangeText={changeHandler}
        style={styles.texat}
      />
      <View style={styles.button}>
        <Button title='Add new' color='coral' onPress={() => submitHandler(text)} />
      </View>

    </View>
  )
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
    fontSize: 15,
    fontWeight:'bold',
   
    
  },
  texat: {
    borderBottomWidth: 2,
    width: 300,
    borderColor: 'lightgrey',
    margin: 5,
    padding: 5,
    marginBottom: 10,
    alignContent: 'center',
    justifyContent: 'center',

  },
  button: {
    flexDirection:'column',
    width: 100,
    marginBottom: 30,

  }
});

export default AddTodo;