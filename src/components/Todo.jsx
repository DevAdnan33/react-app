import React, { useState } from "react";

export default function Todo() {
  let initialTodos = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTodoName, setNewTodoName] = useState("");

  function handleTodo() {
    const newTodo = {
      id: todos.length,
      name: newTodoName,
    };

    setTodos([...todos, newTodo]);
    setNewTodoName(""); 
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleTodo}>Add Todo</button>
    </>
  );
}
