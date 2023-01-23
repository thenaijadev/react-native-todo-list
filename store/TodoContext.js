import React, { useEffect, useState } from "react";
import { db } from "../Firebase/FirebaseConfig";
import {
  collection,
  addDoc,
  doc,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Alert } from "react-native";

const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  createTodo: () => {},
  updateTodo: () => {},
  load: () => {},
  endLoad: () => {},

  isLoading: false,
});

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    try {
      const q = await query(collection(db, "todos"));
      const unsub = await onSnapshot(q, (querySnapshot) => {
        let todos = [];
        querySnapshot.forEach((doc) => {
          todos.push({ ...doc.data(), key: doc.id });
        });
        setTodos(todos);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (key) => {
    try {
      await deleteDoc(doc(db, "todos", key));
      await getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const createhandler = async (text) => {
    try {
      setIsLoading(true);
      await addDoc(collection(db, "todos"), {
        text: text,
        key: Math.random(),
      });
      setIsLoading(false);
    } catch (e) {
      Alert.alert("There has been an error", `${e.message}`);
    } finally {
      console.log("Done");
    }
  };

  const updateHandler = async (todo) => {
    // const newList = todos.map((item) => {
    //   if (todo.key === item.key) {
    //     const updatedItem = todo;
    //     return updatedItem;
    //   }
    //   return item;
    // });
    // setTodos(newList);
    try {
      const document = doc(db, "todos", todo.key);
      await updateDoc(document, todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        isLoading: isLoading,
        load: () => {
          setIsLoading(true);
        },
        endLoad: () => {
          setIsLoading(false);
        },

        deleteTodo: deleteHandler,
        createTodo: createhandler,
        updateTodo: updateHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
