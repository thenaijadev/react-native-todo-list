import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import List from "./Components/List";
import Header from "./Components/Header";
import { TodoProvider } from "./store/TodoContext";

import AddTodo from "./Components/AddTodo";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 40,

    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

function App() {
  return (
    <TodoProvider>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo />
            <View style={styles.list}>
              <List />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TodoProvider>
  );
}

export default App;
