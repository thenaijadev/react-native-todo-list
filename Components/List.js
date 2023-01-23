import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import TodoContext from "../store/TodoContext";
import TodoItem from "./TodoItem";
function List() {
  const ctx = useContext(TodoContext);

  return (
    <View>
      <FlatList
        data={ctx.todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={ctx.deleteTodo} />
        )}
      />
    </View>
  );
}

export default List;
