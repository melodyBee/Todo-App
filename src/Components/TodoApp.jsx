import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import swal from "sweetalert";
import TodoList from "./TodoList";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputText,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
      swal("Added!", "Task added successfully", "success");
    } else {
      swal("Oops!", "Please enter a task", "error");
    }
  };

  const handleUpdateTodo = (todoToUpdate) => {
    swal("Update", "Update functionality coming soon!", "info");
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    swal("Deleted!", "Task deleted successfully", "success");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: "45rem" }}>
          <div className="todo-app container addtask">
            <h1 className="title brand-font typewriter">Todo App</h1>
            <Form className="row g-3 ">
              <Form.Group className="col-auto">
                <Form.Control
                  type="text"
                  placeholder="Enter a task"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </Form.Group>
              <Button
                className="col-auto"
                variant="dark"
                onClick={handleAddTodo}
              >
                Add Task
              </Button>
            </Form>
            <TodoList
              todos={todos}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TodoApp;
