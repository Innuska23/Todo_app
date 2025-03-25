"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import useTodos from "../../hooks/useTodos";

import Spinner from "@/app/shared/Spinner/Spinner";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const { todos, isLoading, deleteTodo, addTodo } = useTodos();
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    if (!newTodoTitle.trim()) {
      return;
    }

    addTodo({
      title: newTodoTitle,
      completed: false,
    });

    setNewTodoTitle("");
  };

  if (isLoading) return <Spinner />;

  return (
    <ul className="space-y-4">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onAdd={handleAddTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}
