import React, { useState } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [updatedText, setUpdatedText] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdateClick = () => {
    setIsEditMode(true);
    setUpdatedText(todo.text);
  };

  const handleUpdateConfirm = () => {
    if (updatedText.trim() !== "") {
      setIsEditMode(false);
      onUpdate(todo, updatedText);
      swal("Updated!", "Task updated successfully", "success");
    } else {
      swal("Oops!", "Please enter a task", "error");
    }
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleDeleteClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, this task will be gone forever!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        onDelete(todo.id);
      }
    });
  };

  return (
    <div className="todo-item">
      {isEditMode ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <Button variant="success" onClick={handleUpdateConfirm}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancelClick}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <Button variant="info" onClick={handleUpdateClick}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
