import React, { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  fetchTodos,
  toggleCompletion,
} from "../api/apiHandler";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = () => {
    fetchTodos()
      .then((res) => setTodos(res?.data))
      .catch((e) => console.log(e));
  };

  const addTodo = () => {
    const request = {
      data: newTodo,
      isCompleted: false,
    };
    createTodo(request)
      .then((res) => {
        if (res.data.id) {
          setNewTodo("");
          getTodoList();
        }
      })
      .catch((e) => console.log(e));
  };

  const handleTodoInputChange = (e) => {
    const data = e.target.value;
    setNewTodo(data);
  };

  const toggleCompletionMarkup = (todoData) => {
    const request = {
      data: todoData.data,
      isCompleted: !todoData?.isCompleted,
    };
    const id = todoData?._id;
    toggleCompletion({ id, request })
      .then((res) => {
        getTodoList();
      })
      .catch((e) => console.log(e));
  };

  const updateTodoData = (todoData) => {
    const request = {
      data: todoData.data,
      isCompleted: todoData.isCompleted,
    };
    const id = todoData?.id;
    toggleCompletion({ id, request })
      .then((res) => {
        getTodoList();
      })
      .catch((e) => console.log(e));
  };

  const deleteSelection = (id) => {
    deleteTodo({ id })
      .then((res) => {
        getTodoList();
      })
      .catch((e) => console.log(e));
  };

  return [
    todos,
    newTodo,
    addTodo,
    handleTodoInputChange,
    toggleCompletionMarkup,
    deleteSelection,
    updateTodoData,
  ];
};

export default useTodos;
