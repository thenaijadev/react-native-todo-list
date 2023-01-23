import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Dialog from "react-native-dialog";
import { MaterialIcons } from "@expo/vector-icons";

import TodoContext from "../store/TodoContext";
const style = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 20,
  },
});
function TodoItem(props) {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updateDialogText, setUpdateDialogText] = useState("");
  const ctx = useContext(TodoContext);
  return (
    <View>
      <Dialog.Container visible={showUpdateDialog}>
        <Dialog.Title>Update Todo</Dialog.Title>
        <Dialog.Description>
          Enter a new value to update todo.
        </Dialog.Description>
        <Dialog.Input
          label="Cancel"
          onChangeText={(text) => {
            setUpdateDialogText(text);
          }}
        />
        <Dialog.Button
          label="Update"
          onPress={() => {
            ctx.updateTodo({ text: updateDialogText, key: props.item.key });
            setShowUpdateDialog(false);
          }}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setShowUpdateDialog(false);
          }}
        />
      </Dialog.Container>

      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Update or Delete",
            "Do you want to delete or update this todo?",
            [
              {
                text: "Update",
                onPress: () => {
                  setShowUpdateDialog(true);
                },
              },
              {
                text: "Delete",
                onPress: () => {
                  ctx.deleteTodo(props.item.key);
                },
              },
            ],
            { cancelable: true }
          );
        }}
      >
        <View style={style.item}>
          <MaterialIcons name="delete" size={18} color="#333" />
          <Text style={style.itemText}>{props.item.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TodoItem;
