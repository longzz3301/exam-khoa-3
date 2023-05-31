import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader.js";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [todolist, setTodolist] = useState([]);

  

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setTodolist(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  const saveData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList task={todolist} />
        <Form setTodolist={setTodolist} saveData={saveData}  />
      </div>
      <Footer />
    </div>
  );
};
