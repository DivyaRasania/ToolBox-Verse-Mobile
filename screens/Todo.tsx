import { View, Text, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";

export default function Todo() {
  const currentDate = new Date().toString().split(" ");
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const loadTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      alert("Error loading todos.");
      console.log("Error loading todos:", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (todo: string) => {
    if (!(input.trim() === "")) {
      try {
        const updatedTodos = [...todos, todo];
        await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
        setInput("");
      } catch (error) {
        alert("Error adding todo.");
        console.log("Error adding todo:", error);
      }
    } else {
      alert("Please enter some text before adding the todo.");
    }
  };

  const saveTodo = async (index: number) => {
    try {
      const newTodos = todos;
      newTodos[index] = editText;
      await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
      setTodos(newTodos);
      setEditIndex(-1);
    } catch (error) {
      alert("Error removing todo.");
      console.log("Error removing todo:", error);
    }
  };

  const removeTodo = async (index: number) => {
    try {
      const updatedTodos = todos.filter((_, i) => i !== index);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } catch (error) {
      alert("Error removing todo.");
      console.log("Error removing todo:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
      }}
    >
      <Text style={GlobalStyles.commonStyles.heading}>Todo</Text>
      <Text
        style={[
          GlobalStyles.commonStyles.description,
          { fontWeight: "bold", fontSize: 20 },
        ]}
      >
        {currentDate[1] + " " + currentDate[2] + " " + currentDate[3]}
      </Text>

      <View style={GlobalStyles.todo.container}>
        <TextInput
          value={input}
          style={[GlobalStyles.commonStyles.textField, { width: "80%" }]}
          placeholder="I need to do..."
          onChangeText={(text) => {
            setInput(text);
          }}
        />

        <CustomButton
          icon={<Icon name="add" color="#fff" />}
          title="Add"
          onPress={() => addTodo(input)}
        />
      </View>

      <ScrollView style={{ width: "100%" }}>
        {todos.map((todo, index) => (
          <View key={index} style={GlobalStyles.todo.container}>
            <TextInput
              style={GlobalStyles.todo.text}
              editable={editIndex === index}
              onChangeText={(text) => {
                setEditText(text);
              }}
            >
              {todo}
            </TextInput>

            {editIndex === index ? (
              <Icon
                reverse
                name="save"
                color="#333333"
                onPress={() => {
                  saveTodo(index);
                }}
              />
            ) : (
              <Icon
                reverse
                name="edit"
                color="#333333"
                onPress={() => {
                  setEditIndex(index);
                }}
              />
            )}
            <Icon
              reverse
              name="delete"
              color="#333333"
              onPress={() => {
                removeTodo(index);
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
