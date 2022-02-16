import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native'
import Todo from './Todo';
import AddTodo from './AddTodo';
import Header from './Header'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    setTodo((abc) => {
      return [
        { name: text, id: Math.random().toString() },
        ...abc
      ];
    })
  }

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <AddTodo submitHandler={submitHandler} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={todo}
        renderItem={({ item }) => (
          <Todo item={item} pressHandler={pressHandler} />
        )}
      // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1

  }
});


export default App;