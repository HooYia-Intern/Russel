import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';


 export default function TodoList(){
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
      if (task.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask('');
      }
    };

    const toggleTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTodo}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
              <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                <Text
                  style={[
                    styles.todoText,
                    item.completed && styles.completedText,
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.deleteButton}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
    },
    addButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginLeft: 10,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 12,
      marginVertical: 6,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    completedTodo: {
      opacity: 0.5,
    },
    todoText: {
      flex: 1,
      fontSize: 16,
    },
    completedText: {
      textDecorationLine: 'line-through',
    },
    deleteButton: {
      color: '#f44336',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });




 