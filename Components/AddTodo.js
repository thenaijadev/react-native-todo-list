import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import TodoContext from "../store/TodoContext";
const style = StyleSheet.create({
  input: {
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (value) => {
    setNewTodo(value);
  };

  const ctx = useContext(TodoContext);

  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
      />
      <Button
        title={ctx.isLoading ? "Adding to database..." : "Add Todo"}
        onPress={async () => {
          if (newTodo.length > 3) {
            await ctx.createTodo(newTodo);
          } else {
            Alert.alert(
              "Opps",
              "The text is too short",
              [{ text: "Understood" }],
              {
                cancelable: true,
              }
            );
          }
        }}
        color="coral"
      />
    </View>
  );
}

export default AddTodo;
