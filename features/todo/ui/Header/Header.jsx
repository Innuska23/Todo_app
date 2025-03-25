"use client";

import { useState } from "react";
import useTodos from "@/features/todo/hooks/useTodos";
import Button from "@/app/shared/Button/Button";

import clsx from "clsx";

const Header = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Please enter a todo");
      return;
    }

    addTodo({ title, completed: false });
    setTitle("");
    setError('');
  };

  const inputClassName = clsx(
    "px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2",
    "w-full sm:w-64",
    "border-gray-300 focus:ring-blue-400"
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-3">
      <h1 className="text-3xl font-bold uppercase text-blue-600 drop-shadow-sm">
        Todo App
      </h1>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter todo..."
          className={inputClassName}
        />
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button> 
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    </div>
  );
};

export default Header;
