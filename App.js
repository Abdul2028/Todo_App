import React, { useState } from 'react'
import { StyleSheet, FlatList, Alert, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import Todo from './screens/Todo'
import AddTodo from './screens/AddTodo'
import Header from './screens/Header'

function App() {

  const [todo, setTodo] = useState([
    { name: 'Learn FlatList.', id: 1 },
    { name: 'learn render item.', id: 2 },
    { name: 'create a todo app.', id: 3 }
  ]);

  const pressHandler = (id) => {
    // console.log(id)
    setTodo((abc) => {
      return abc.filter(todos => todos.id != id)
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((abc) => {
        return [
          { name: text, id: Math.random().toString() },
          ...abc
        ];
      });
    }
    else {
      Alert.alert('OOPS!', 'Enter more then 3 characters, please!',
        [{ text: 'Understood', onPress: () => console.log('alert closed') }]
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.main}>
        <Header />

        <View style={styles.addtodo}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.todolist}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={todo}
              renderItem={({ item }) => (
                <Todo item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  addtodo: {
    flex: 1,
  },
  todolist: {
    flex: 1
  }
});


export default App;