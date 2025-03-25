"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import Button from "@/app/shared/Button/Button";

const TodoItem = ({ todo, onDelete }) => {
  const motionClassName = clsx(
    "flex w-full items-center justify-between",
    "gap-3 p-4 border rounded-lg shadow",
    "bg-gray-50 hover:bg-gray-100 transition-colors"
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      className={motionClassName}
    >
      <span className="flex-1 text-left text-gray-800">{todo.title}</span>
      <div className="flex items-center gap-2">
        <Button variant="danger" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </motion.li>
  );
};

export default TodoItem;
