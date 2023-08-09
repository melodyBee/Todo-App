import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <div className="todo-app">
      <h1 className="title brand-font typewriter">Todo App</h1>
      <Container>
        <Row>
          <Form>
            <Col xs={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter a task"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleAddTodo}>
                Add Task
              </Button>
            </Col>
          </Form>
        </Row>
        <TodoList
          todos={todos}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
        />
      </Container>
    </div>
  );
};

export default TodoApp;
